import { getSdk } from "./generated";
import { print } from "graphql";

const API_URL = "https://rickandmortyapi.com/graphql";

export const client = getSdk(async (query, variables) => {
  const definition = query.definitions.filter(
    (x) => x.kind === "OperationDefinition"
  )[0];
  const operationName =
    definition.kind == "OperationDefinition" && definition.name?.value;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(query),
      variables,
      operationName: operationName,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const responseData = (await response.json()) as {
    data: any;
  };

  return responseData.data;
});
