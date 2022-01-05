import React from "react";
import Button from "../components/Button";

export default {
    label: 'Button',
    components: Button,
};

const Template = (props) => <Button {...props} />;

export const Primary = Template.bind({});

Primary.props = {
    label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.props = {
    label: 'Secondary',
};