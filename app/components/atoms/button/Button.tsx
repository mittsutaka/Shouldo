import { ComponentProps } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
  btnType?: string;
}

export const Button = (props: ButtonProps) => {
  const modeClass = props.btnType == "primary" ? styles["btn-primary"] : styles["btn-secondory"];
  return (
    <button className={[styles.btn, modeClass].join(" ")} type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
};
