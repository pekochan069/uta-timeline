import type { Component, ComponentProps, JSX } from "solid-js";

import { TextField } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { cn } from "~/lib/utils";

type InputProps = Omit<ComponentProps<"input">, "onChange" | "onchange"> & {
  children?: JSX.Element;
  defaultValue?: string;
  disabled?: boolean;
  labelClass?: string;
  name?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  required?: boolean;
  rootClass?: string;
  validationState?: "invalid" | "valid";
  value?: string;
};

const Input: Component<InputProps> = (props) => {
  const [, rest] = splitProps(props, [
    "rootClass",
    "value",
    "defaultValue",
    "onChange",
    "name",
    "validationState",
    "required",
    "disabled",
    "readOnly",
    "type",
    "class",
    "children",
    "labelClass",
  ]);

  return (
    <TextField.Root
      class={props.rootClass}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      name={props.name}
      onChange={props.onChange}
      readOnly={props.readOnly}
      required={props.required}
      validationState={props.validationState}
      value={props.value}
    >
      <Show when={props.children}>
        <TextField.Label
          class={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            props.labelClass,
          )}
        >
          {props.children}
        </TextField.Label>
      </Show>
      <TextField.Input
        class={cn(
          "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          props.class,
        )}
        type={props.type}
        {...rest}
      />
    </TextField.Root>
  );
};

export { Input };
