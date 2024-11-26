import { type Meta, StoryObj } from "@storybook/react";
import { DownIcon } from ".";
import { IconSizes } from "../styled";

const meta: Meta<typeof DownIcon> = {
  title: "Atoms/Icon/DownIcon",
  component: DownIcon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: Object.keys(IconSizes),
    },
  },
};

type Story = StoryObj<typeof meta>;

export const small: Story = {
  args: {
    size: "s",
  },
};
export const medium: Story = {
  args: {
    size: "m",
  },
};
export const large: Story = {
  args: {
    size: "l",
  },
};

export default meta;
