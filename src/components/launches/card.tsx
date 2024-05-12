import { Launch } from "@/services/spacexapi";
import Text from "../text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faClock,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function LaunchCard({ launch }: { launch: Launch }) {
  return (
    <div className="rounded-lg hover:bg-gray-800 py-2 px-4">
      <Text.H2>{launch.name}</Text.H2>
      <div className="flex flex-row w-full justify-between mb-4 items-center">
        <span className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
          {launch.date_utc && new Date(launch.date_utc).toLocaleDateString()}
        </span>
        <span className="flex flex-col gap-2 items-center">
          <FontAwesomeIcon icon={faRocket} className="w-16 h-16" />
          {launch.rocket.name}
        </span>
        <span className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faDollarSign} className="w-4 h-4" />
          {launch.rocket.cost_per_launch &&
            `${launch.rocket.cost_per_launch.toLocaleString()}`}
        </span>
      </div>
    </div>
  );
}
