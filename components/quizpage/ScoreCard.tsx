import { useStore } from "@/store/useStore";
import { Badge } from "../ui/badge";

const ScoreCard = () => {
  const score = useStore((store) => store.score);
  return (
    <Badge className="mr-auto" variant={"outline"}>
      <span className="font-bold text-xl">SCORE: {score}/15</span>
    </Badge>
  );
};

export default ScoreCard;
