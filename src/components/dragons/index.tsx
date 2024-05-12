import { getAllDragons } from "../../services/spacexapi";
import TimelineIcon from "./TimelineIcon";

export default async function DragonsTimeline() {
  const dragons = await getAllDragons();

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-4">
      {dragons.map((dragon, index) => (
        <li key={dragon.id}>
          <div className="timeline-middle">
            <TimelineIcon />
          </div>
          <div
            // Add classes based on index to alternate the timeline
            className={`timeline-${index % 2 === 0 ? "start" : "end"} lg:text-${
              index % 2 === 0 ? "right" : "left"
            } mb-10 mx-2`}
          >
            <time className="font-mono italic">
              First Flight: {dragon.first_flight}
            </time>
            <div className="text-lg font-black">{dragon.name}</div>
            <span>{dragon.description}</span>
          </div>
          <hr className="bg-violet-700" />
        </li>
      ))}
    </ul>
  );
}
