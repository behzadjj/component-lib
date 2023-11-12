import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/TextInput",
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LabelLess: Story = {
  args: {
    name: "textInput",
    className: "",
    placeholder: "Placeholder",
  },
};

export const Label: Story = {
  args: {
    name: "textInput",
    label: "label",
    className: "",
    placeholder: "Placeholder",
  },
};
