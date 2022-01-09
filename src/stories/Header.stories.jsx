import React from "react";
import Heading from "../components/Heading";

export default {
  title: "Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  className: "header",
  children: "Заголовок первого уровня",
};

export const H2 = Template.bind({});
H2.args = {
  className: "header",
  type: "h2",
  children: "Заголовок второго уровня",
};

export const H3 = Template.bind({});
H3.args = {
  className: "header",
  type: "h3",
  children: "Заголовок третьего уровня",
};

export const H4 = Template.bind({});
H4.args = {
  className: "header",
  type: "h4",
  children: "Заголовок четвертого уровня",
};

export const H5 = Template.bind({});
H5.args = {
  className: "header",
  type: "h5",
  children: "Заголовок пятого уровня",
};

export const H6 = Template.bind({});
H6.args = {
  className: "header",
  type: "h6",
  children: "Заголовок шестого уровня",
};
