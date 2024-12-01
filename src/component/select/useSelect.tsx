"use client";
import { ListBoxItem } from "react-aria-components";
import { selectStyles } from "./styles";

interface DefaultItem<U> {
  label: string;
  value: U;
  id: string | number;
  disabled?: boolean;
}

export function useSelect<T>(items: DefaultItem<T>[]) {
  const selectClass = selectStyles();
  const SelectList = (item: DefaultItem<T>) => (
    <ListBoxItem
      className={selectClass["listBoxItem"]}
      isDisabled={item.disabled}
      key={item.id}
    >
      {item.label}
    </ListBoxItem>
  );

  return { items, SelectList };
}
