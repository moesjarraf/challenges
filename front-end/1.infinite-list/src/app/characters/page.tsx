import { CharactersList } from "./CharactersList";

export default function CharactersListPage() {
  return (
    <main className="container mx-auto py-8 flex flex-col gap-8">
      <h1 className="text-2xl">Characters</h1>
      <CharactersList />
    </main>
  );
}
