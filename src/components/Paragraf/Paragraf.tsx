import React from "react";
import mixCn from "classnames";
import styles from "./paragraf.module.scss";

export interface IParagraf {
  view?: "main" | "discharged" | "compressed";
  children: React.ReactNode;
  className?: string;
}

const classNameByView = {
  discharged: styles.text_discharged,
  compressed: styles.text_compressed,
};

const Paragraf: React.FC<IParagraf> = ({
  view,
  children,
  className,
  ...args
}) => {
  const cn = mixCn(styles.text, className, classNameByView[view]);
  return (
    <p className={cn} {...args}>
      {children}
    </p>
  );
};

export default Paragraf;
