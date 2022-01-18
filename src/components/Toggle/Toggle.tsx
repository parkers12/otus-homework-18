import React from "react";
import mixCn from "classnames";
import Button from "../Button";
import styles from "./toggle.module.scss";

interface IHeader {
  title: string;
  isButton?: boolean;
}

export interface IToggle {
  header: IHeader;
  className?: string;
  children: React.ReactNode;
}

const Toggle: React.FC<IToggle> = ({
  className,
  header,
  children,
  ...args
}) => {
  const [show, toggleShow] = React.useState(true);
  const cn = mixCn(styles.toggle, className);
  const { title, isButton }: IHeader = header;
  const button = (
    <Button onClick={() => toggleShow(!show)} view="text" type="button">
      {show ? "Отобразить" : "Скрыть"}
    </Button>
  );

  return (
    <div className={cn} {...args}>
      <div className={styles.toggle__header}>
        {title}
        {isButton && button}
      </div>
      {show && <div className={styles.toggle__body}>{children}</div>}
    </div>
  );
};

export default Toggle;
