import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const TitleBold: Story = {
  args: {
    variant: 'title_bold',
    children: 'This is a title_bold text',
  },
  parameters: {
    docs: {
      description: {
        story: 'title_bold에 쓰이는 텍스트로 사이즈는 1rem입니다.',
      },
    },
  },
};

export const TitleSemiBold: Story = {
  args: {
    variant: 'title_semibold',
    children: 'This is a title_semibold text',
  },
  parameters: {
    docs: {
      description: {
        story: 'title_semibold에 쓰이는 텍스트로 사이즈는 1rem입니다.',
      },
    },
  },
};

export const TitleRegular: Story = {
  args: {
    variant: 'title_regular',
    children: 'This is a title_regular text',
  },
  parameters: {
    docs: {
      description: {
        story: 'title_regular에 쓰이는 텍스트로 사이즈는 1rem입니다.',
      },
    },
  },
};

export const DescBold: Story = {
  args: {
    variant: 'desc_bold',
    children: 'This is a desc_bold text',
  },
  parameters: {
    docs: {
      description: {
        story: 'desc_bold에 쓰이는 텍스트로 사이즈는 0.875rem입니다.',
      },
    },
  },
};

export const DescRegular: Story = {
  args: {
    variant: 'desc_regular',
    children: 'This is a desc_regular text',
  },
  parameters: {
    docs: {
      description: {
        story: 'desc_regular에 쓰이는 텍스트로 사이즈는 0.875rem입니다.',
      },
    },
  },
};

export const GuideBold: Story = {
  args: {
    variant: 'guide_bold',
    children: 'This is a guide_bold text',
  },
  parameters: {
    docs: {
      description: {
        story: 'guide_bold에 쓰이는 텍스트로 사이즈는 0.8125rem입니다.',
      },
    },
  },
};

export const GuideRegular: Story = {
  args: {
    variant: 'guide_regular',
    children: 'This is a guide_regular text',
  },
  parameters: {
    docs: {
      description: {
        story: 'guide_regular에 쓰이는 텍스트로 사이즈는 0.8125rem입니다.',
      },
    },
  },
};

export const TagRegular: Story = {
  args: {
    variant: 'tag_regular',
    children: 'This is a tag_regular text',
  },
  parameters: {
    docs: {
      description: {
        story: 'tag_regular에 쓰이는 텍스트로 사이즈는 0.75rem입니다.',
      },
    },
  },
};

export const WritingBold: Story = {
  args: {
    variant: 'writing_bold',
    children: 'This is a writing_bold text',
  },
  parameters: {
    docs: {
      description: {
        story: 'writing_bold에 쓰이는 텍스트로 사이즈는 1.5rem입니다.',
      },
    },
  },
};

export const ButtonBold: Story = {
  args: {
    variant: 'button_bold',
    children: 'This is a button_bold text',
  },
  parameters: {
    docs: {
      description: {
        story: 'button_bold에 쓰이는 텍스트로 사이즈는 1.0625rem입니다.',
      },
    },
  },
};

export const BadgeRegular: Story = {
  args: {
    variant: 'badge_regular',
    children: 'This is a badge_regular text',
  },
  parameters: {
    docs: {
      description: {
        story: 'badge_regular에 쓰이는 텍스트로 사이즈는 0.6875rem입니다.',
      },
    },
  },
};
