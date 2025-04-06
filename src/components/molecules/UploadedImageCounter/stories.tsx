import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UploadedImageCounter } from '.';

const meta: Meta<typeof UploadedImageCounter> = {
  title: 'Molecules/UploadedImageCounter',
  component: UploadedImageCounter,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '사진 등록',
    totalCount: 10,
    multiple: true,
  },
  render: (args) => {
    const Component = () => {
      const [images, setImages] = useState<File[]>([]);
      const handleImageUpload = (files: File[]) => {
        setImages((prev) => [...prev, ...files]);
      };

      const handleExceed = (exceededCount: number) => {
        console.warn(
          `${exceededCount}개의 이미지가 최대 개수를 초과하여 추가되지 않았어요!`,
        );
      };

      return (
        <UploadedImageCounter
          text={args.text}
          files={images}
          currentCount={images.length}
          totalCount={args.totalCount}
          onChange={handleImageUpload}
          multiple={args.multiple}
          onExceed={handleExceed}
        />
      );
    };
    return <Component />;
  },
};

export default meta;
