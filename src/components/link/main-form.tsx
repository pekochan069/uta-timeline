import { useStore } from "@nanostores/solid";
import { TbArrowRight } from "solid-icons/tb";
import { type JSX, createEffect, createSignal, onMount } from "solid-js";

import { link } from "~/atoms/link";
import { Button } from "~/components/ui/button";
import { getVideoId } from "~/lib/youtube";

export function MainForm(props: { children: JSX.Element }) {
  const $link = useStore(link);
  const [query, setQuery] = createSignal("");

  onMount(() => {
    const url = new URL(window.location.href);
    setQuery(url.searchParams.get("video-id") || "");

    window.addEventListener("popstate", () => {
      const url = new URL(window.location.href);
      setQuery(url.searchParams.get("video-id") || "");
    });
  });

  createEffect(() => {
    console.log("query", query());
  });

  return (
    <form class="flex w-full items-center gap-4">
      {props.children}
      <div class="flex justify-center">
        <Button
          Icon={() => <TbArrowRight />}
          iconLocation="right"
          onClick={(e) => {
            e.preventDefault();
            const url = new URL(window.location.href);
            url.searchParams.set("link", getVideoId($link()));
            history.pushState({}, "", url);
          }}
          variant="expandIcon"
        >
          입력
        </Button>
      </div>
    </form>
  );
}
