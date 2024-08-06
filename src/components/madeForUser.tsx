import Image from "next/image";

export interface MadeForUserProps {
  img: string;
  name: string;
  description: string;
}

export function MadeForUser(props: MadeForUserProps) {
  return (
    <a
      href=""
      className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/20"
    >
      <Image
        src={props.img}
        className="w-full rounded-md"
        width={120}
        height={120}
        alt="capa do album"
      />
      <strong className="font-semibold">{props.name}</strong>
      <span className="text-xs text-zinc-500">{props.description}</span>
    </a>
  );
}
