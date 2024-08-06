import { Play } from "lucide-react";
import Image from "next/image";

export interface RecentMusicProps {
  img: string;
  name: string;
}

export function RecentMusic(props: RecentMusicProps) {
  return (
    <div>
      <a
        href="#"
        className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
      >
        <Image src={props.img} width={104} height={104} alt="capa do album" />
        <strong>{props.name}</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black" />
        </button>
      </a>
    </div>
  );
}
