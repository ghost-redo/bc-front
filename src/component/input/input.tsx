"use client";
import {
  composeRenderProps,
  Input as InputBase,
  InputProps as InputBaseProps,
} from "react-aria-components";

import { cx } from "@/styled-system/css";
import { inputStyles } from "./styles";

export const Input = ({ className, ...props }: InputBaseProps) => {
  return (
    <InputBase
      className={composeRenderProps(className, (className, renderProps) =>
        cx(inputStyles(renderProps), className)
      )}
      {...props}
    />
  );
};

export type { InputBaseProps as InputProps };
