import { getAllDragons } from "../../services/spacexapi";
import Text from "../text";

export default async function DragonsContent() {
  const dragons = await getAllDragons();

  return (
    <>
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <Text.H2>{dragon.name}</Text.H2>
          <p className="mb-4">{dragon.description}</p>
        </div>
      ))}
    </>
  );
}
