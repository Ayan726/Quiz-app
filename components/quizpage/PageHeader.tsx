"use client";

import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import Timer from "./Timer";
import { useStore } from "@/store/useStore";
import TimeUpAlert from "./TimeUpAlert";
import ScoreCard from "./ScoreCard";

const PageHeader = () => {
  const [open, setOpen] = useState(false);
  const timeLeft = useStore((store) => store.timeLeft);
  const submitted = useStore((store) => store.submitted);
  const setSubmitted = useStore((store) => store.setSubmitted);

  useEffect(() => {
    if (timeLeft === 0) {
      setOpen(true);
      setSubmitted(true);
    }
  }, [timeLeft, setSubmitted]);

  return (
    <header className="flex justify-center gap-5 mb-10 md:flex-row flex-col ">
      {!submitted ? <Timer /> : <ScoreCard />}

      <div className="flex gap-3 sm:flex-row flex-col w-fit">
        <Badge variant={"outline"} className="px-3 py-2">
          Attempted question
          <div className="h-5 w-5 ml-2 rounded bg-green-200" />
        </Badge>
        <Badge variant={"outline"} className="px-3 py-2">
          Unattempted question
          <div className="h-5 w-5 ml-2 rounded bg-red-200" />
        </Badge>
        <Badge variant={"outline"} className="px-3 py-2">
          Current question
          <div className="h-5 w-5 ml-2 rounded bg-blue-200" />
        </Badge>
      </div>

      <TimeUpAlert open={open} setOpen={setOpen} />
    </header>
  );
};

export default PageHeader;
