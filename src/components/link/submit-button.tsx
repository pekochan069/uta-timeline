import { useStore } from "@nanostores/solid";
import { TbArrowRight } from "solid-icons/tb";

import { link } from "~/atoms/link";
import { videoId } from "~/atoms/videoId";
import { Button } from "~/components/ui/button";
import { getVideoId } from "~/lib/youtube";

export function SubmitButton() {
  const $link = useStore(link);

  return (
    <Button
      Icon={() => <TbArrowRight />}
      iconLocation="right"
      onClick={() => {
        videoId.set(getVideoId($link()));
      }}
      variant="expandIcon"
    >
      입력
    </Button>
  );
}
