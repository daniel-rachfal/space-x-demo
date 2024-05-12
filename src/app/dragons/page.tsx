import { getAllDragons } from "../services/spacexapi";

export default async function DragonsPage() {
  const data = await getAllDragons();

  return (
    <main>
      <h1>Dragons</h1>
      <article>
        {data.map((dragon) => (
          <div key={dragon.id}>
            <h2>{dragon.name}</h2>
            <p>{dragon.description}</p>
          </div>
        ))}
      </article>
    </main>
  );
}