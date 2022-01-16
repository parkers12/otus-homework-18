import React from "react";
import { Story } from "@storybook/react";
import Userpic from "../components/Userpic";
import { IUserpic } from "../components/Userpic/Userpic";

export default {
  title: "Userpic",
  component: Userpic,
};

const Template: Story<IUserpic> = (args) => <Userpic {...args} />;

export const XSmall = Template.bind({});
XSmall.args = {
  className: "userpic",
  size: "xs",
};

export const Small = Template.bind({});
Small.args = {
  className: "userpic",
  size: "s",
};

export const Default = Template.bind({});
Default.args = {
  className: "userpic",
};

export const Large = Template.bind({});
Large.args = {
  className: "userpic",
  size: "l",
};

export const XLarge = Template.bind({});
XLarge.args = {
  className: "userpic",
  size: "xl",
};

export const Rounded = Template.bind({});
Rounded.args = {
  className: "userpic",
  rounded: true,
};

export const Alt = Template.bind({});
Alt.args = {
  className: "userpic",
  alt: "Альтернативный текст для фото",
};

export const Title = Template.bind({});
Title.args = {
  className: "userpic",
  title: "Заголовок текст для фото",
};

export const WithLink = Template.bind({});
WithLink.args = {
  className: "userpic",
  link: true,
};
