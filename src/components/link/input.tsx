import { useStore } from "@nanostores/solid";

import { link } from "~/atoms/link";

import { Input } from "../ui/input";

export function LinkInput() {
  const $link = useStore(link);
  return (
    <Input
      onChange={(value) => link.set(value)}
      placeholder="https://youtu.be/pgXpM4l_MwI"
      value={$link()}
    />
  );
}
