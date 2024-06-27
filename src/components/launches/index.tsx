"use client";

import { getLaunchesPaginated } from "@/services/spacexapi";
import LaunchCard from "./card";
import useLaunches from "./hooks/useLaunches";

export default function LaunchesContent() {
  const { launches, scrollTrigger, hasMoreData } = useLaunches();

  return (
    <>
      {launches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
      <div className="text-center mt-5">
        {hasMoreData && <div ref={scrollTrigger}>Loading...</div>}
      </div>
    </>
  );
}
