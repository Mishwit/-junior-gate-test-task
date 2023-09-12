import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type Props = {
  onClick: () => void;
  text?: string;
  type: "submit" | "button";
  variant?: "yellow" | "white" | "pickColor";
  color?: string;
  isChecked?: boolean;
};

export const Button: React.FC<Props> = ({
  onClick,
  text,
  type,
  variant = "white",
  color,
  isChecked,
}) => (
  <button
    style={{ backgroundColor: color }}
    type={type}
    onClick={onClick}
    className={classNames(styles.button, {
      [styles.button_yellow]: variant === "yellow",
      [styles.button_white]: variant === "white",
      [styles.button_color]: variant === "pickColor",
      [styles.button_checked]: isChecked === true,
    })}
  >
    {text}
  </button>
);
