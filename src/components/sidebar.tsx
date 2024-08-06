import {
  ArrowRight,
  HomeIcon,
  LibraryBigIcon,
  Plus,
  Search,
} from "lucide-react";
import { Playlist } from "./playlist";

export function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-white/50 hover:text-white"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-white/50 hover:text-white"
        >
          <Search />
          Search
        </a>
        <div className="flex flex-row gap-2">
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold text-white/50 hover:text-white"
          >
            <LibraryBigIcon />
            Your Library
          </a>
          <div className="ml-auto mr-2 flex flex-row gap-2">
            <a
              href=""
              className="flex items-center p-1 hover:bg-white/40 rounded-full text-white/50 group"
            >
              <Plus size={20} />
            </a>
            <a
              href=""
              className="flex items-center p-1 hover:bg-white/40 rounded-full text-white/50 group"
            >
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </nav>

      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <Playlist name="Playlist do Versinho" />
        <Playlist name="Sertanejo 2K24" />
        <Playlist name="Funk Hits" />
        <Playlist name="Churrasquin dos Cria" />
        <Playlist name="MTG Atualizado 2024" />
        <Playlist name="Modao Raiz" />
      </nav>
    </aside>
  );
}
