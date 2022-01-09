import React from "react";
import PropTypes from "prop-types";
import mixCn from "classnames";
import styles from "./paragraf.module.scss";

const classNameByView = {
  main: "",
  discharged: styles.text_discharged,
  compressed: styles.text_compressed,
};

const Paragraf = ({ view, children, className, ...args }) => {
  const cn = mixCn(styles.text, className, classNameByView[view]);
  return (
    <p className={cn} {...args}>
      {children}
    </p>
  );
};

Paragraf.propTypes = {
  children: PropTypes.node,
  view: PropTypes.oneOf(["main", "discharged", "compressed"]),
  className: PropTypes.string,
};

Paragraf.defaultProps = {
  children: undefined,
  view: "main",
  className: undefined,
};

export default Paragraf;
