import React from "react";
import PropTypes from "prop-types";
import mixCn from "classnames";
import styles from "./heading.module.scss";

const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const classNameByView = {
  h1: styles.header_h1,
  h2: styles.header_h2,
  h3: styles.header_h3,
  h4: styles.header_h4,
  h5: styles.header_h5,
  h6: styles.header_h6,
};

const Heading = ({ type, children, className, ...args }) => {
  const cn = mixCn(styles.header, className, classNameByView[type]);
  const Tag = elements[type];
  return (
    <Tag className={cn} {...args}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Heading.defaultProps = {
  type: "h1",
  className: undefined,
  children: undefined,
};

export default Heading;
