import { useStore } from "@nanostores/solid";

import { link } from "~/atoms/link";
import { videoId, youtubeUrl } from "~/atoms/youtube";

export function Player() {
  const $videoId = useStore(videoId);
  const $youtubeUrl = useStore(youtubeUrl);

  return <div>{$youtubeUrl()}</div>;
}
