import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const arr = new Array(15).fill(0);

const NavigationCard = () => {
  const active = useStore((store) => store.active);
  const setActive = useStore((store) => store.setActive);
  const answers = useStore((store) => store.answers);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Questions</CardTitle>
        <CardDescription>
          Each question has 1 marks. Don&apos;t forget to check the timer, kids!
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-5 gap-3 md:grid-cols-3">
        {arr.map((_, ind) => (
          <Button
            onClick={() => {
              setActive(ind);
            }}
            className={cn(
              answers[ind] === undefined ? "bg-red-200" : "bg-green-200",
              ind === active && "bg-blue-200",
              "hover:bg-blue-100"
            )}
            variant={"secondary"}
            key={ind}
          >
            {ind + 1}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default NavigationCard;
