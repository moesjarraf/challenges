"use client";

import { Character } from "@/components/Character";
import { FunctionComponent } from "react";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/graphql/client";
/**
 *  TODO:
 *  Add a simple pager to the CharactersList component with a "Load More" button.
 *  Should fetch the next page of characters when clicked and display all characters fetched so far.
 *  If we have time we should replace the "Load more button" with an infinite scroll behavior instead.
 */

export const CharactersList: FunctionComponent = () => {
  const page = 1;

  const { data, isFetching } = useQuery({
    queryKey: ["characters", page],
    queryFn: async () => await client.CharacterList({ page }),
  });

  const characters = data?.characters?.results;

  return (
    <section>
      <ol className="flex flex-col gap-2">
        {/* TODO: Oh-oh need to fix this typing issue */}
        {characters.map((character) => (
          <>
            {character && (
              <li>
                <Character
                  id={character.id ?? ""}
                  name={character.name ?? ""}
                  imageSrc={character.image ?? ""}
                />
              </li>
            )}
          </>
        ))}
      </ol>

      {isFetching && <div>More Rick and Morty to come...</div>}
    </section>
  );
};
