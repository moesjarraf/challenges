import Image from "next/image";

export function Character({
  id,
  name,
  imageSrc,
}: {
  id: string;
  name: string;
  imageSrc?: string;
}) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-4">{id}</div>
      <div className="w-[100px] aspect-square">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`Image of ${name}`}
            width={100}
            height={100}
          />
        )}
      </div>
      {name}
    </div>
  );
}
