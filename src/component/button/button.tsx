"use client";
import { cx, RecipeVariantProps } from "@/styled-system/css";
import React, { useRef } from "react";
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
export interface ButtonProps extends ButtonBaseProps, ButtonVariants {
  start?: React.ReactNode;
  end?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, start, end, children, style, ...props }, ref) => {
    const previousState = useRef<{ width?: number; isLoading?: boolean }>({
      width: undefined,
      isLoading: undefined,
    });
    return (
      <ButtonBase
        ref={(buttonRef) => {
          if (typeof ref === "function") {
            ref(buttonRef);
          } else if (ref) {
            ref.current = buttonRef;
          }
          previousState.current.width = buttonRef?.clientWidth;
        }}
        className={composeRenderProps(className, (className, renderProps) => {
          return cx(buttonStyles(renderProps), className);
        })}
        style={style}
        {...props}
      >
        {(childrenProps) => {
          return (
            <>
              {start}
              {typeof children === "function"
                ? children(childrenProps)
                : children}
              {end}
            </>
          );
        }}
      </ButtonBase>
    );
  }
);

Button.displayName = "Button";

export { Button };
