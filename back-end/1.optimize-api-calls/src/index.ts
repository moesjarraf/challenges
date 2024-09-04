import { client } from "./graphql/client";

type Character = { id?: string; name?: string; gender?: string };

const getCharactersForGender = async (gender: string): Promise<Character[]> => {
  const results: Character[] = [];

  const list = await client.CharacterList({ page: 0 });

  for (const item of list.characters?.results ?? []) {
    const character = await client.Character({ id: item?.id ?? "" });

    if (character.character?.gender === gender) {
      results.push({
        id: character.character?.id ?? undefined,
        name: character.character?.name ?? undefined,
        gender: character.character?.gender ?? undefined,
      });
    }
  }

  return results;
};

const main = async () => {
  const maleCharacters = await getCharactersForGender("Male");
  const femaleCharacters = await getCharactersForGender("Female");
  const charactersWithUnknownGender = await getCharactersForGender("unknown");

  showCharacters("Male", maleCharacters);
  showCharacters("Female", femaleCharacters);
  showCharacters("Unknown", charactersWithUnknownGender);
};

const showCharacters = (name: string, characters: Character[]) => {
  console.log(`${name}:`);
  console.table(characters, ["id", "name"]);
};

const handleError = (error: unknown) => {
  console.error(error);
};

main().then(undefined, handleError).catch(handleError);
