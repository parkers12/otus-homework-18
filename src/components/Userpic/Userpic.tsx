import React from "react";
import { Img } from "react-image";
import mixCn from "classnames";
import Avatar from "../../assets/images/userpic.jpg";
import styles from "./userpic.module.scss";

export interface IUserpic {
  link?: boolean;
  size?: "xs" | "s" | "m" | "l" | "xl";
  rounded?: boolean;
  alt?: string;
  title?: string;
  className?: string;
}

const classNameBySize = {
  xs: styles.userpic_xs,
  s: styles.userpic_s,
  m: styles.userpic,
  l: styles.userpic_l,
  xl: styles.userpic_xl,
};

const Userpic: React.FC<IUserpic> = ({
  size = "m",
  rounded,
  link,
  alt,
  title,
  className,
  ...args
}) => {
  const cn = mixCn(
    styles.userpic,
    className,
    classNameBySize[size],
    rounded && styles.rounded
  );
  const url = "http://ya.ru";
  const logoAlt = alt || "Alt текст для фото";
  const logoTitle = title || "Title текст для фото";

  const image = (
    <Img
      src={Avatar}
      alt={logoAlt}
      title={logoTitle}
      className={cn}
      {...args}
    />
  );

  return link ? <a href={url}>{image}</a> : image;
};

export default Userpic;
