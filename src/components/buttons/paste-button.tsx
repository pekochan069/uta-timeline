import { FaSolidPaste } from "solid-icons/fa";
import { type JSX } from "solid-js";

import { Button } from "~/components/ui/button";

type PasteButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  paste: (item: ClipboardItem) => Promise<void>;
};

export function PasteButton(props: PasteButtonProps) {
  const paste = async () => {
    let item;
    try {
      item = await navigator.clipboard.read();
    } catch {
      return;
    }

    await props.paste(item[0]);
  };

  return (
    <Button
      onClick={() => {
        void paste();
      }}
      size="icon"
      variant="ghost"
      {...props}
    >
      <FaSolidPaste class="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};
