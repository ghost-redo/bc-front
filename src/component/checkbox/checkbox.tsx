"use client";
import { cx } from "@/styled-system/css";
import { forwardRef } from "react";
import {
  CheckboxProps as BaseCheckboxProps,
  composeRenderProps,
  Checkbox as BaseCheckbox,
} from "react-aria-components";
import { IconCheck } from "../icon/icon-check";
import { childrenWrapper, iconStyles, rootStyles } from "./styles";

export const Checkbox = forwardRef<HTMLLabelElement, BaseCheckboxProps>(
  ({ className, children, ...props }, ref) => {
    const rootClass = rootStyles();
    return (
      <BaseCheckbox
        ref={ref}
        className={composeRenderProps(className, (className) => {
          return cx(rootClass, className);
        })}
        {...props}
      >
        {composeRenderProps(children, (children, renderProps) => {
          return (
            <>
              <span
                className={iconStyles({
                  isSelected: renderProps.isSelected,
                })}
              >
                {renderProps.isSelected ? (
                  <IconCheck width={11} height={9} />
                ) : null}
              </span>
              <span className={childrenWrapper()}>{children}</span>
            </>
          );
        })}
      </BaseCheckbox>
    );
  }
);
Checkbox.displayName = "Checkbox";
