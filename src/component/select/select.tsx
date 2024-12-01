"use client";
import { css, cx } from "@/styled-system/css";
import {
  ButtonProps as AriaButtonProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  composeRenderProps,
  Label,
  ListBox,
  Popover,
  SelectValue,
  Text,
  ValidationResult,
} from "react-aria-components";
import { IconDownOutlined } from "../icon/icon-down-outlined";
import { selectStyles, triggerStyles } from "./styles";
import { CSSProperties } from "react";

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  popoverWidth?: CSSProperties["width"];
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  className,
  items,
  children,
  popoverWidth,
  ...props
}: SelectProps<T>) {
  const selectClass = selectStyles();

  return (
    <AriaSelect
      className={composeRenderProps(className, (className) => {
        return cx(selectClass["root"], className);
      })}
      {...props}
    >
      {(props) => (
        <>
          {label && (
            <Label
              className={css({
                textStyle: "b7",
              })}
            >
              {label}
            </Label>
          )}
          {description && (
            <Text
              className={css({
                textStyle: "b3",
                color: "grey.500",
              })}
              slot="description"
            >
              {description}
            </Text>
          )}
          <SelectTrigger isOpen={props.isOpen} isInvalid={props.isInvalid}>
            <SelectValue className={selectClass["selectValue"]} />
          </SelectTrigger>
          <Popover
            className={selectClass["popover"]}
            style={{ width: popoverWidth || "100%" }}
          >
            <ListBox
              selectionMode="single"
              className={css({
                maxHeight: "inherit",
                overflow: "visible",
              })}
              items={items}
            >
              {children}
            </ListBox>
          </Popover>
        </>
      )}
    </AriaSelect>
  );
}

const SelectTrigger = ({
  className,
  children,
  isInvalid,
  ...props
}: AriaButtonProps & {
  isInvalid: boolean;
  isOpen: boolean;
}) => {
  return (
    <Button
      type="button"
      className={composeRenderProps(className, (className) =>
        cx(
          triggerStyles({
            isInvalid,
          }),
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {children}
          <IconDownOutlined
            color={renderProps.isHovered ? "#739FFF" : "black"}
          />
        </>
      ))}
    </Button>
  );
};

Select.displayName = "Select";
