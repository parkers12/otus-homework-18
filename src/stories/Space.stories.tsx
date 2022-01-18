import React from "react";
import { Story } from "@storybook/react";
import Space from "../components/Space";
import { ISpace } from "../components/Space/Space";

export default {
  title: "Space",
  component: Space,
};

const Template: Story<ISpace> = (args) => <Space {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "space",
};

export const Discharged = Template.bind({});
Discharged.args = {
  className: "space",
  view: "discharged",
};

export const Compressed = Template.bind({});
Compressed.args = {
  className: "space",
  view: "compressed",
};

export const Thin = Template.bind({});
Thin.args = {
  className: "space",
  size: "thin",
};

export const Thick = Template.bind({});
Thick.args = {
  className: "space",
  size: "thick",
};

export const Blue = Template.bind({});
Blue.args = {
  className: "space",
  color: "blue",
};

export const Red = Template.bind({});
Red.args = {
  className: "space",
  color: "red",
};
