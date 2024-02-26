import { VsClearAll } from "solid-icons/vs";
import { type JSX } from "solid-js";

import { link } from "~/atoms/link";
import { Button } from "~/components/ui/button";

interface ClearButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ClearButton(props: ClearButtonProps) {
  return (
    <Button size="icon" variant="ghost" {...props} onClick={() => link.set("")}>
      <VsClearAll class="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
