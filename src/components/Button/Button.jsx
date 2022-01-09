import React from "react";
import PropTypes from "prop-types";
import mixCn from "classnames";
import styles from "./button.module.scss";

const classNameByView = {
  primary: styles.button_primary,
  secondary: styles.button_secondary,
  text: styles.button_text,
};

const Button = ({ view, children, className, ...args }) => {
  const cn = mixCn(styles.button, className, classNameByView[view]);
  return (
    <button type="button" className={cn} {...args}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  view: PropTypes.oneOf(["primary", "secondary", "text"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
  view: "primary",
  className: undefined,
};

export default Button;
