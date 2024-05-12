import Text from "@/components/text";
import LaunchesContent from "@/components/launches";

export default async function DragonsPage() {
  return (
    <>
      <Text.H1>Most Recent Launches</Text.H1>
      <LaunchesContent />
    </>
  );
}
