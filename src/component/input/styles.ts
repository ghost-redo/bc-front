import { cva } from "@/styled-system/css";

export const inputStyles = cva({
  base: {
    height: "32px",
    background: "white",
    fontSize: "14px",
    fontWeight: 400,
    paddingInline: "12px",
    _placeholder: {
      color: "#a1a1aa",
    },
    borderRadius: "8px",
    border: "1px solid #e4e4e7",
    _hover: {
      border: "1px solid #4A7CFE",
    },
    _focus: {
      border: "1px solid #4A7CFE",
      boxShadow: "0px 0px 0px 2px rgba(74, 124, 254, 0.15)",
    },
  },
});
