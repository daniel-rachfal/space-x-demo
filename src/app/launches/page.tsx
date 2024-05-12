import Text from "@/components/text";
import { getAllLaunches } from "../../services/spacexapi";

export default async function DragonsPage() {
  const launches = await getAllLaunches();

  return (
    <>
      <Text.H1>Launches</Text.H1>
      <article>
        {launches.map((launch) => (
          <div key={launch.id}>
            <h2>{launch.name}</h2>
            <p>{launch.details}</p>
          </div>
        ))}
      </article>
    </>
  );
}
