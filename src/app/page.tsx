"use client";
import { Button } from "@/component/button";
import { Checkbox } from "@/component/checkbox";
import { IconButton } from "@/component/icon-button";
import { IconAdd } from "@/component/icon/icon-add";
import { IconMoreOutlined } from "@/component/icon/icon-more-outlined";
import { Input } from "@/component/input";
import { Select } from "@/component/select/select";
import { useSelect } from "@/component/select/useSelect";
import { TextArea } from "@/component/textarea";

export default function Home() {
  const { items, SelectList } = useSelect([
    {
      id: 1,
      value: "cat",
      label: "Cat",
    },
    {
      id: 2,
      value: "monkey",
      label: "Monkey",
    },
  ]);

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
      <TextArea placeholder="placeholder" />
      <Select items={items}>{SelectList}</Select>
    </div>
  );
}
