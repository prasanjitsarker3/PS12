import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonDetail = () => {
  return (
    <div className="md:px-24 px-8 space-y-5 py-12">
      <div className="grid md:grid-cols-3 w-full gap-5 pt-8">
        <Skeleton className="rounded-lg">
          <div className=" h-60 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className=" h-60 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className=" h-60 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
      <Skeleton className="h-3 w-3/5 rounded-lg" />
      <div className=" w-3/5">
        <Skeleton className="h-3  rounded-lg" />
      </div>
      <Skeleton className="h-3 w-full rounded-lg" />
      <Skeleton className="h-3 w-full rounded-lg" />
    </div>
  );
};

export default SkeletonDetail;
