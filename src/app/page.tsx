import { css } from "../../styled-system/css";
import styles from "./page.module.css";
import { Flex } from "@/styled-system/jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Flex className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </Flex>
    </div>
  );
}
