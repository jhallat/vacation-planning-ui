import type { Meta, StoryObj} from "@storybook/svelte";

import SectionHeading from "./SectionHeading.svelte";

const meta = {
  title: 'Headings/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  argTypes: {
    caption: { type: 'text' },
  },
} satisfies Meta<SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    caption: 'Default'
  }
}
