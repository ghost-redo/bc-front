import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconProps } from "./type";

const IconDownOutlined = (
  {
    width = 16,
    height = 16,
    color = "#27272a",
    ...props
  }: SVGProps<SVGSVGElement> & IconProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    ref={ref}
    {...props}
  >
    <path
      d="M13.8126 4H12.6407C12.561 4 12.486 4.03906 12.4391 4.10313L8.00008 10.2219L3.56101 4.10313C3.51414 4.03906 3.43914 4 3.35945 4H2.18758C2.08601 4 2.02664 4.11563 2.08601 4.19844L7.59539 11.7937C7.79539 12.0687 8.20476 12.0687 8.4032 11.7937L13.9126 4.19844C13.9735 4.11563 13.9141 4 13.8126 4Z"
      fill={color}
      fillOpacity="0.88"
    />
  </svg>
);
const ForwardRef = forwardRef(IconDownOutlined);
export { ForwardRef as IconDownOutlined };
