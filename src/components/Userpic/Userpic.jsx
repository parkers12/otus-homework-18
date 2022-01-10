import React from "react";
import PropTypes from "prop-types";
import { Img } from "react-image";
import mixCn from "classnames";
import userpic from "../images/userpic.jpg";
import styles from "./userpic.module.scss";

const classNameBySize = {
  xs: styles.userpic_xs,
  s: styles.userpic_s,
  m: "",
  l: styles.userpic_l,
  xl: styles.userpic_xl,
};

const Userpic = ({ size, rounded, link, alt, title, className, ...args }) => {
  const cn = mixCn(
    styles.userpic,
    className,
    classNameBySize[size],
    rounded && styles.rounded
  );
  const logoAlt = alt || "Alt текст для фото";
  const logoTitle = title || "Title текст для фото";

  const image = (
    <Img
      src={userpic}
      alt={logoAlt}
      title={logoTitle}
      size={size}
      rounded={rounded}
      className={cn}
      {...args}
    />
  );

  return link ? <a to={link}>{image}</a> : image;
};

Userpic.propTypes = {
  link: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
  rounded: PropTypes.bool,
  alt: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

Userpic.defaultProps = {
  link: false,
  rounded: false,
  size: "m",
  alt: undefined,
  title: undefined,
  className: undefined,
};

export default Userpic;
