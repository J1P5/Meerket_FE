import { type Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from ".";

const meta: Meta<typeof ErrorMessage> = {
  title: "Molecules/ErrorMessage",
  component: ErrorMessage,
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
  }
};

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    message: "제목은 필수 입력 항목입니다.",
  },
  parameters: {
    docs: {
      description: {
        story: "제목 유효성 검사입니다.",
      },
    },
  },
};


export default meta;