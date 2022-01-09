import React from "react";
import PropTypes from "prop-types";
import mixCn from "classnames";
import Button from "../Button";
import styles from "./toggle.module.scss";

const Toggle = ({ className, header, body, ...args }) => {
  const [show, toggleShow] = React.useState(true);
  const cn = mixCn(styles.toggle, className);
  const { title, isButton } = header;
  console.log(title);
  const button = (
    <Button onClick={() => toggleShow(!show)} view="text">
      {show ? "Отобразить" : "Скрыть"}
    </Button>
  );

  return (
    <div className={cn} {...args}>
      <div className={styles.toggle__header}>
        {title}
        {isButton && button}
      </div>
      {show && <div className={styles.toggle__body}>{body}</div>}
    </div>
  );
};

Toggle.propTypes = {
  header: PropTypes.node,
  className: PropTypes.string,
  body: PropTypes.node,
};

Toggle.defaultProps = {
  header: undefined,
  className: undefined,
  body: undefined,
};

export default Toggle;
