import { Button } from "@/component/button";
import { Checkbox } from "@/component/checkbox";
import { IconButton } from "@/component/icon-button";
import { IconAdd } from "@/component/icon/icon-add";
import { IconMoreOutlined } from "@/component/icon/more-outlined";
import { Input } from "@/component/input";

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
      <Input placeholder="placeholder" />
    </div>
  );
}
