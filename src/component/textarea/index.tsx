"use client";
import {
  composeRenderProps,
  TextArea as TextAreaBase,
  TextAreaProps as TextAreaBaseProps,
} from "react-aria-components";

import { cx } from "@/styled-system/css";
import { textareaStyles } from "./styles";

export const TextArea = ({ className, ...props }: TextAreaBaseProps) => {
  return (
    <TextAreaBase
      className={composeRenderProps(className, (className, renderProps) =>
        cx(textareaStyles(renderProps), className)
      )}
      {...props}
    />
  );
};

export type { TextAreaBaseProps as TextAreaProps };
