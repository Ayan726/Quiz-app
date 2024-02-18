"use client";

import { useTimer } from "@/hooks/useTimer";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import TimeUpAlert from "./TimeUpAlert";
import { useStore } from "@/store/useStore";

const Timer = () => {
  const timeLeft = useStore((store) => store.timeLeft);
  const reduceTime = useStore((store) => store.reduceTime);
  const { minute, second } = useTimer(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) reduceTime();
    }, 1000);

    if (timeLeft === 0) clearInterval(timer);
    return () => {
      clearInterval(timer);
    };
  }, [reduceTime, timeLeft]);

  

  return (
    <Badge className="px-2 py-1 mr-auto gap-x-2 w-[5.3rem]" variant={"outline"}>
      <Badge className="p-1" variant={"secondary"}>
        {minute}
      </Badge>
      <span>:</span>
      <Badge className="p-1" variant={"secondary"}>
        {second}
      </Badge>

      
    </Badge>
  );
};

export default Timer;
