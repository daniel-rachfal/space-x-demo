import DragonsContent from "@/components/dragons";
import Text from "@/components/text";

export default async function DragonsPage() {
  return (
    <>
      <Text.H1>Here be Dragons</Text.H1>
      <article>
        <DragonsContent />
      </article>
    </>
  );
}
