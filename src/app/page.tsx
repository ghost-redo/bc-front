import { Button } from "@/component/button";
import { Checkbox } from "@/component/checkbox/checkbox";
import { IconButton } from "@/component/icon-button";
import { IconAdd } from "@/component/icon/icon-add";
import { IconMoreOutlined } from "@/component/icon/more-outlined";

export default function Home() {
  return (
    <div>
      <Button start={<IconAdd color="white" />} type="button">
        추가
      </Button>
      <IconButton>
        <IconMoreOutlined />
      </IconButton>
      <Checkbox defaultSelected />
    </div>
  );
}
