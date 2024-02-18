"use client";
import { useStore } from "@/store/useStore";
import axios from "axios";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import QnaCardSkeleton from "./QnaCardSkeleton";
import { cn } from "@/lib/utils";

const QnaCard = () => {
  const answers = useStore((store) => store.answers);
  const setAnswers = useStore((store) => store.setAnswers);
  const active = useStore((store) => store.active);
  const loading = useStore((store) => store.loading);
  const setLoading = useStore((store) => store.setLoading);
  const score = useStore((store) => store.score);
  const setScore = useStore((store) => store.setScore);
  const submitted = useStore((store) => store.submitted);

  const [data, setData] = useState<
    Array<{ [k: string]: any; answers: { [x: string]: any } }>
  >([]);
  const [options, setOptions] = useState<string[][]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[][]>([]);
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (correctAnswers[active].includes(value)) {
      setScore(score + 1);
    } else {
      if (correctAnswers[active].includes(answers[active])) {
        setScore(score - 1);
      }
    }
    setAnswers(active, value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://quizapi.io/api/v1/questions", {
          params: {
            apiKey: process.env.NEXT_PUBLIC_API_KEY,
            limit: 15,
          },
        });
        // console.log(res.data);
        const opts = res.data.map((el: { [k: string]: any }) => {
          let opt = [];
          for (const key in el.answers) {
            if (el.answers[key]) opt.push(el.answers[key]);
          }

          return opt;
        });

        setOptions(opts);

        const correctAns = res.data.map(
          (el: { [k: string]: any }, ind: number) => {
            let ans = [];
            for (const key in el.correct_answers) {
              if (el.correct_answers[key] === "true")
                ans.push(
                  el.answers[key.split("_correct")[0]] + "$" + ind.toString()
                );
            }

            return ans;
          }
        );

        setCorrectAnswers(correctAns);

        // console.log(correctAns);

        setData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);

  useEffect(() => {
    setSelectedValue(answers[active]);
  }, [active, answers]);

  if (loading) return <QnaCardSkeleton />;

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="md:text-2xl text-xl">
          {decode(data?.[active]?.question)}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {data.length > 0 && (
          <RadioGroup
            disabled={submitted}
            value={selectedValue}
            onValueChange={handleValueChange}
          >
            {options?.[active]?.map((ans: string) => (
              <div
                key={ans + "$" + active.toString()}
                className="flex space-x-2"
              >
                <RadioGroupItem
                  className={cn(
                    correctAnswers[active][0] ===
                      ans + "$" + active.toString() &&
                      submitted &&
                      "bg-green-400 rounded-full",
                    answers[active] === ans + "$" + active.toString() &&
                      submitted &&
                      !correctAnswers[active].includes(answers[active]) &&
                      "bg-red-400 rounded-full"
                  )}
                  value={ans + "$" + active.toString()}
                />
                <Label
                  className={
                    "md:text-lg text-base text-muted-foreground -translate-y-[0.3rem]"
                  }
                  htmlFor="option-one"
                >
                  {decode(ans)}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </CardContent>
    </Card>
  );
};

export default QnaCard;
