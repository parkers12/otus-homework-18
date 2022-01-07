import React from "react";
import { Button } from "../components/Button/Button";

export default {
  title: "Button",
  components: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
};
