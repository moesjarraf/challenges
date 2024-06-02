import { Character } from "@/components/Character";

/**
 *  TODO: Implement the characterlist component that fetches the characters from the API
 *  and renders them using the Character component
 */

export function CharactersList() {
  const characters: { id: string; name: string; image: string }[] = [];

  return (
    <section>
      <ol>
        {characters.map((character) => (
          <li className="flex flex-col gap-1">
            <Character
              id={character.id}
              name={character.name}
              imageSrc={character.image}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
