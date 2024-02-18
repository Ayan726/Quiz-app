import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const QnaCardSkeleton = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <Skeleton className="p-3">
          <CardTitle className="md:text-2xl text-xl invisible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit.
          </CardTitle>
        </Skeleton>
      </CardHeader>

      <CardContent>
        {[4, 2, 3, 1].map((el) => (
          <Skeleton
            style={{
              width: `${el * 2 + 12}rem`,
            }}
            key={el}
            className={`md:text-lg text-base text-muted-foreground mb-3 p-1 w-[23rem] h-8`}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default QnaCardSkeleton;
