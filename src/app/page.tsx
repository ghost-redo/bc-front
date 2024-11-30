import { Button } from "@/component/button";
import styles from "./page.module.css";
import { IconAdd } from "@/component/icon/icon-add";
import { IconMoreOutlined } from "@/component/icon/more-outlined";
import { IconButton } from "@/component/icon-button";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button start={<IconAdd color="white" />} type="button">
        추가
      </Button>
      <IconButton>
        <IconMoreOutlined />
      </IconButton>
    </div>
  );
}
