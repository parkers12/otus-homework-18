import React from "react";
import mixCn from "classnames";
import styles from "./button.module.scss";

export interface IButton {
  type: "button" | "reset" | "submit";
  children: React.ReactNode;
  className?: string;
  view?: "primary" | "secondary" | "text";
  isDisabled?: boolean;
  onClick?: () => void;
}

const classNameByView = {
  primary: styles.button_primary,
  secondary: styles.button_secondary,
  text: styles.button_text,
};

const Button: React.FC<IButton> = ({
  view,
  children,
  className,
  isDisabled = false,
  onClick,
  ...args
}: IButton) => {
  const cn = mixCn(styles.button, className, classNameByView[view]);
  return (
    <button onClick={onClick} className={cn} disabled={isDisabled} {...args}>
      {children}
    </button>
  );
};

export default Button;
