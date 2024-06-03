import { Character } from "@/components/Character";
import { client } from "@/graphql/client";
import { notFound } from "next/navigation";

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await client.GetCharacter({ id: params.id });
  if (!data.character) {
    return notFound();
  }

  return (
    <Character
      id={data.character.id ?? ""}
      name={data.character.name ?? "Name"}
      imageSrc={data.character.image ?? undefined}
    />
  );
}
