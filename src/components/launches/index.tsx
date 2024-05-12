import { getAllLaunches } from "@/services/spacexapi";
import Text from "../text";

export default async function LaunchesContent() {
  const launches = await getAllLaunches();

  return (
    <>
      {launches.map((launch) => (
        <div key={launch.id} className="rounded-lg hover:bg-gray-800 py-2 px-4">
          <Text.H2>{launch.name}</Text.H2>
          <div className="flex flex-row w-full justify-between mb-4">
            <p>
              {launch.date_utc &&
                new Date(launch.date_utc).toLocaleDateString()}
            </p>
            <p>{launch.rocket.name}</p>
            <p>
              {launch.rocket.cost_per_launch &&
                `$${launch.rocket.cost_per_launch.toLocaleString()}`}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
