/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useStore } from "@nanostores/solid";
import { batch, createEffect, createSignal, untrack } from "solid-js";

import { player, playerReady, videoId } from "~/atoms/youtube";

export function Player() {
  const $player = useStore(player);
  const $videoId = useStore(videoId);
  const $playerReady = useStore(playerReady);
  const [prevVideoId, setPrevVideoId] = createSignal("");

  createEffect(() => {
    if ($videoId() === "" || $videoId() === prevVideoId()) {
      return;
    }

    if (untrack($playerReady)) {
      $player().loadVideoById($videoId(), 0, "large");
      setPrevVideoId($videoId());

      return;
    }

    batch(() => {
      playerReady.set(false);

      player.set(
        //@ts-expect-error Youtube iframe api
        new YT.Player("player", {
          events: {
            onReady: (event: { target: { playVideo: () => void } }) => {
              batch(() => {
                setPrevVideoId($videoId());
                playerReady.set(true);
              });

              event.target.playVideo();
            },
          },
          videoId: $videoId(),
        }),
      );
    });
  });

  return (
    <div
      class="aspect-video max-w-4xl flex-1 bg-muted data-[loaded=false]:animate-pulse"
      data-loaded={$playerReady()}
    >
      <div class="h-full w-full" id="player" />
    </div>
  );
}
