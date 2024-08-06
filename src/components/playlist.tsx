export interface PlaylistProps {
  name: string;
}

export function Playlist(props: PlaylistProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
      {props.name}
    </a>
  );
}
