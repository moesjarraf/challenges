import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Implement a list of characters from Rick and Morty at{" "}
        <Link className="underline text-blue-400" href="/characters">
          /characters
        </Link>
      </h1>
    </main>
  );
}
