import { cva, sva } from "@/styled-system/css";

export const selectStyles = sva({
  slots: ["root", "selectValue", "popover", "listBox", "listBoxItem"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      background: "white",
      borderRadius: 8,
      fontSize: "14px",
      fontWeight: 400,
      width: "fit-content",
      _placeholder: {
        color: "grey.500",
      },
    },
    selectValue: {
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    popover: {
      border: "1px solid",
      borderColor: "transparent",
      background: "white",
      padding: "4px",
      borderRadius: "8px",
      boxShadow:
        "0px 2px 5px 0px rgba(70, 70, 70, 0.20), 0px 0px 1px 0px rgba(132, 132, 132, 0.31);",
      width: "var(--trigger-width)",
    },
    listBox: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
    listBoxItem: {
      display: "flex",
      width: "100%",
      padding: "5px 12px",
      alignItems: "center",
      alignSelf: "stretch",
      textStyle: "b3",
      borderRadius: 4,
      gap: 6,
      cursor: "pointer",
      _hover: {
        background: "#f4f4f5",
      },
      _selected: {
        color: "#739FFF",
        background: "#F0F7FF",
      },
    },
  },
});

export const triggerStyles = cva({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    border: "1px solid",
    borderColor: "#E3E3E3",
    cursor: "pointer",
    borderRadius: 8,
    background: "white",
    gap: "8px",
    _hover: {
      background: "transparent",
      color: "#739FFF",
      borderColor: "#739FFF",
      padding: "8px 16px",
    },
  },
});
