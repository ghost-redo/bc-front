import { cva } from "@/styled-system/css";

export const buttonStyles = cva({
  base: {
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    borderRadius: "8px",
    fontWeight: "normal",
    gap: "8px",
    _hover: {
      backgroundColor: "#e4e4e7",
    },
    _disabled: {
      backgroundColor: "#e4e4e7",
    },
    _pressed: {
      backgroundColor: "#e4e4e7",
    },
  },
});
