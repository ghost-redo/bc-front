"use client";
import { cx, RecipeVariantProps } from "@/styled-system/css";
import { forwardRef } from "react";
import {
  Button as ButtonBase,
  ButtonProps as ButtonBaseProps,
  composeRenderProps,
} from "react-aria-components";
import { buttonStyles } from "./styles";

type NonUndefined<T> = T extends undefined ? never : T;
export type ButtonVariants = NonUndefined<
  RecipeVariantProps<typeof buttonStyles>
>;
export interface IconButtonProps extends ButtonBaseProps, ButtonVariants {}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        className={composeRenderProps(className, (className, renderProps) => {
          return cx(buttonStyles(renderProps), className);
        })}
        {...props}
      >
        {children}
      </ButtonBase>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
