import { Button } from "@/component/button";
import styles from "./page.module.css";
import { IconAdd } from "@/component/icon/IconAdd";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button start={<IconAdd color="white" />} type="button">
        추가
      </Button>
    </div>
  );
}
