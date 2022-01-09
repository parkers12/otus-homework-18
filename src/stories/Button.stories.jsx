import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { className: "button", children: "Primary" };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  className: "button",
  children: "Primary Disabled",
  disabled: "disabled",
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: "button",
  children: "Secondary",
  view: "secondary",
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  className: "button",
  children: "Secondary Disabled",
  view: "secondary",
  disabled: "disabled",
};

export const Text = Template.bind({});
Text.args = {
  className: "button",
  children: "Text",
  view: "text",
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  className: "button",
  children: "Text Disabled",
  view: "text",
  disabled: "disabled",
};
