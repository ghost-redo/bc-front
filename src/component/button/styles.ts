import { cva } from "@/styled-system/css";

export const buttonStyles = cva({
  base: {
    backgroundColor: "#4A7CFE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    borderRadius: "8px",
    gap: "8px",
    p: "0px 12px",
    height: "32px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    _hover: {
      backgroundColor: "#739FFF",
      "&:active": {
        backgroundColor: "#345DD9",
      },
    },
    _disabled: {
      backgroundColor: "#0000000A",
      color: "#00000040",
      borderColor: "#E3E3E3",
    },
  },
});
