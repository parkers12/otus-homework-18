import React from "react";
import mixCn from "classnames";
import styles from "./space.module.scss";

export interface ISpace {
  size?: "middle" | "thin" | "thick";
  view?: "main" | "discharged" | "compressed";
  color?: "gray" | "blue" | "red";
  className?: string;
}

const classNameByView = {
  discharged: styles.space_discharged,
  compressed: styles.space_compressed,
};

const classNameBySize = {
  thin: styles.space_thin,
  thick: styles.space_thick,
};

const classNameByColor = {
  blue: styles.space_blue,
  red: styles.space_red,
};

const Space: React.FC<ISpace> = ({ size, view, color, className, ...args }) => {
  const cn = mixCn(
    styles.space,
    className,
    classNameByView[view],
    classNameBySize[size],
    classNameByColor[color]
  );
  return <hr className={cn} {...args} />;
};

export default Space;
