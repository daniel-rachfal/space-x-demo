import { getAllLaunches } from "@/services/spacexapi";
import Text from "../text";

export default async function LaunchesContent() {
  const launches = await getAllLaunches();

  return (
    <>
      {launches.map((launch) => (
        <div key={launch.id}>
          <Text.H2>{launch.name}</Text.H2>
          <p className="mb-4">{launch.details}</p>
        </div>
      ))}
    </>
  );
}
