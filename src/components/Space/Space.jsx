import React from "react";
import PropTypes from "prop-types";
import mixCn from "classnames";
import styles from "./space.module.scss";

const classNameByView = {
  main: "",
  discharged: styles.space_discharged,
  compressed: styles.space_compressed,
};

const classNameBySize = {
  middle: "",
  thin: styles.space_thin,
  thick: styles.space_thick,
};

const classNameByColor = {
  gray: "",
  blue: styles.space_blue,
  red: styles.space_red,
};

const Space = ({ size, view, color, className, ...args }) => {
  const cn = mixCn(
    styles.space,
    className,
    classNameByView[view],
    classNameBySize[size],
    classNameByColor[color]
  );
  return <hr className={cn} {...args} />;
};

Space.propTypes = {
  size: PropTypes.oneOf(["middle", "thin", "thick"]),
  view: PropTypes.oneOf(["main", "discharged", "compressed"]),
  color: PropTypes.oneOf(["gray", "blue", "red"]),
  className: PropTypes.string,
};

Space.defaultProps = {
  size: "middle",
  view: "main",
  color: "gray",
  className: undefined,
};

export default Space;
