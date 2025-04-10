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
    onFileChange: (files: File[]) => {
      console.log('Selected file:', files[0].name);
    },
  },
};

export const Multiple: Story = {
  args: {
    onFileChange: (files: File[]) => {
      const fileNames = files.map((file: File) => file.name);
      console.log('Selected file:', fileNames);
    },
    multiple: true,
  },
};
