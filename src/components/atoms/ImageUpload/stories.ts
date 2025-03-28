import type { Meta, StoryObj } from '@storybook/react';
import { ImageUpload } from '.';

const meta: Meta<typeof ImageUpload> = {
  title: 'Atoms/ImageUpload',
  component: ImageUpload,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    onFileChange: (fileList) => {
      // 파일명을 콘솔에 출력
      console.log('Selected file:', fileList[0].name);
    },
  },
};

export const Multiple: Story = {
  args: {
    onFileChange: (fileList) => {
      // 파일명을 콘솔에 출력
      const fileNames = Array.from(fileList).map((file: File) => file.name);
      console.log('Selected file:', fileNames);
    },
    multiple: true,
  },
};
