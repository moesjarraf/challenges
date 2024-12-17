import { client } from "./graphql/client";

type Character = { id?: string; name?: string; gender?: string };
type ListInfo = { count?: number; pages?: number; next?: number; prev?: number };
type CharacterListResult = { info?: ListInfo, results?: Character[] };

const getCharactersForGender = async (page: number, gender: string): Promise<CharacterListResult> => {
  const list = await client.CharacterList({ page, gender });
  return list.characters;
};

const main = async () => {
  const page = 1;
  const maleCharacters = await getCharactersForGender(page, "Male");
  const femaleCharacters = await getCharactersForGender(page, "Female");
  const charactersWithUnknownGender = await getCharactersForGender(page, "unknown");

  showCharacters(page, maleCharacters);
  showCharacters(page, femaleCharacters);
  showCharacters(page, charactersWithUnknownGender);
};

const showCharacters = (page: number, characters: CharacterListResult) => {
  const gender = characters.results?.[0]?.gender || "unknown";
  console.log(`${gender}: (Page ${page} / ${characters.info.pages || page})`);
  console.table(characters.results, ["id", "name"]);
};

const handleError = (error: unknown) => {
  console.error(error);
};

main().then(undefined, handleError).catch(handleError);
