import type { Meta, StoryObj} from "@storybook/svelte";

import ImageBlock from "./ImageBlock.svelte";

const meta = {
  title: 'Base/ImageBlock',
  component: ImageBlock,
  tags: ['autodocs'],
  argTypes: {
    src: { type: 'text' },
  },
} satisfies Meta<ImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: ''
  }
}
