# Collabhouse Coding Interview

This is a [Next.js](https://nextjs.org/) app with app router using [Typescript](https://www.typescriptlang.org/) and [Tailwind](tailwindcss.com).

## Assignment

Your assignment is to implement `src/app/characters/CharactersList.tsx`, a component that should list Rick and Morty characters using data fetched via GraphQL.

### Requirements

- The list should fetch data on the client
- The list should infinitely load (i.e. load more items on scroll)

## Setup

- `bun/yarn/npm/pnpm install`
- `bun/yarn/npm/pnpm graphql:schema` to download the latest schema to `schema.graphql`
  - already in the repo
- `bun/yarn/npm/pnpm graphql:generate` to generate graphql queries
- `bun/yarn/npm/pnpm dev` to run in dev mode
