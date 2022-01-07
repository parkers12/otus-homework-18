import React from "react";
import PropTypes from "prop-types";
// import mixCn from "classnames";
// import * as styles from "./button.module.scss";
// import * as styles from "./button.module.css";

import "./button.scss";

// const classNameByView = {
//     primary: '',
//     secondary: styles.button_secondary
// };

export const Button = ({ primary, label, ...args }) => {
  return (
    <button type="button" {...args}>
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
};
