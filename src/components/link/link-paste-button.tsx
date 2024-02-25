import { toast } from "solid-sonner";

import { link } from "~/atoms/link";
import {PasteButton} from "~/components/buttons/paste-button";

export function LinkPasteButton() {
  return (
    <PasteButton
      // eslint-disable-next-line solid/reactivity
      paste={async (value) => {
        try {
          const data = await value.getType("text/plain");
          const text = await data?.text();
          link.set(text);
        } catch {
          toast("클립보드에 텍스트가 없습니다.");
        }
      }}
    />
  );
}
