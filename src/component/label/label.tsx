import { cva, cx } from "@/styled-system/css";
import { forwardRef } from "react";
import {
  Label as LabelBase,
  LabelProps as LabelBaseProps,
} from "react-aria-components";

export interface LabelProps extends LabelBaseProps {
  isRequired?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, isRequired, ...props }, ref) => {
    return (
      <LabelBase
        className={cx(
          labelStyles({
            isRequired,
          }),
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Label.displayName = "Label";

const labelStyles = cva({
  base: {
    fontWeight: 600,
    fontSize: "16px",
    color: "#71717a",
  },
  variants: {
    isRequired: {
      true: {
        _after: {
          content: "'*'",
          color: "#FF4D4F",
          fontWeight: 400,
          paddingLeft: "4px",
        },
      },
    },
  },
});
