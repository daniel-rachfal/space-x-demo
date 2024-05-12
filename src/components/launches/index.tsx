import { getRecentLaunches } from "@/services/spacexapi";
import LaunchCard from "./card";

export default async function LaunchesContent() {
  const launches = await getRecentLaunches();

  return (
    <>
      {launches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </>
  );
}
