import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconProps } from "./type";

const IconAdd = (
  { size = 16, color, ...props }: SVGProps<SVGSVGElement> & IconProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    color={color}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.75 4.25a.75.75 0 0 0-1.5 0v5h-5a.75.75 0 0 0 0 1.5h5v5a.75.75 0 0 0 1.5 0v-5h5a.75.75 0 0 0 0-1.5h-5z"
    />
  </svg>
);
const ForwardRef = forwardRef(IconAdd);
export { ForwardRef as IconAdd };
