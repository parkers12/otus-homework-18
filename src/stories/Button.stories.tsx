import React from "react";
import { Story } from "@storybook/react";
import Button from "../components/Button";
import { IButton } from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  className: "button",
  children: "Primary",
  view: "primary",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: "button",
  className: "button",
  children: "Primary Disabled",
  view: "primary",
  isDisabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  className: "button",
  children: "Secondary",
  view: "secondary",
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: "button",
  className: "button",
  children: "Secondary Disabled",
  view: "secondary",
  isDisabled: true,
};

export const Text = Template.bind({});
Text.args = {
  type: "button",
  className: "button",
  children: "Text",
  view: "text",
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  type: "button",
  className: "button",
  label: "Text Disabled",
  children: "Text",
  view: "text",
  isDisabled: true,
};
