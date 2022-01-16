import React from "react";
import mixCn from "classnames";
import styles from "./heading.module.scss";

export interface IHeading {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

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

const Heading: React.FC<IHeading> = ({
  type = "h1",
  children,
  className,
  ...args
}: IHeading) => {
  const cn = mixCn(styles.header, className, classNameByView[type]);
  const Tag = elements[type] as keyof JSX.IntrinsicElements;
  return (
    <Tag className={cn} {...args}>
      {children}
    </Tag>
  );
};

export default Heading;
