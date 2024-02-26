import { useStore } from "@nanostores/solid";

import { link } from "~/atoms/link";
import { videoId } from "~/atoms/videoId";

export function Player() {
  const $link = useStore(link);
  const $videoId = useStore(videoId);

  return (
    <div>
      {$link()}
      {$videoId()}
    </div>
  );
}
