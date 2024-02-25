import { useStore } from "@nanostores/solid";
import { TbArrowRight } from "solid-icons/tb";

import { link } from "~/atoms/link";
import { Button } from "~/components/ui/button";
import { getVideoId } from "~/lib/youtube";

export function HomeSubmitButton() {
  const $link = useStore(link);

  return (
    <Button
      Icon={() => <TbArrowRight />}
      iconLocation="right"
      onClick={() => {
        const videoIdInput = document.getElementById(
          "video-id",
        ) as HTMLInputElement;
        videoIdInput.value = getVideoId($link());
      }}
      variant="expandIcon"
    >
      입력
    </Button>
  );
}
