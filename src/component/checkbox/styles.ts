import { cva } from "@/styled-system/css";

export const rootStyles = cva({
  base: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    height: "16px",
  },
});

export const iconStyles = cva({
  base: {
    width: "16px",
    height: "16px",
    borderRadius: "4",
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: "#4A7CFE",
        color: "white",
        borderColor: "#4A7CFE",
      },
      false: {
        borderColor: "#E3E3E3",
      },
    },
  },
});

export const childrenWrapper = cva({
  base: {
    height: "100%",
    lineHeight: "15px",
  },
});
