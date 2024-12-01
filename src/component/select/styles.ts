import { cva, sva } from "@/styled-system/css";

export const selectStyles = sva({
  slots: ["root", "selectValue", "popover", "listBox", "listBoxItem"],
  base: {},
});

export const triggerStyles = cva({
  base: {},
});
