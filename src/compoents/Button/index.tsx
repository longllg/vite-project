import React, { memo, useState } from "react";
import styles from "./index.module.less";
import classnames from "classnames";
interface Props {
  /** 按钮类型*/
  type?: "primary" | "Link";
  /** 是否可用*/
  disbled?: boolean; // 是否可用
  /** 按钮children*/
  children?: string; // 按钮children
  /** 是否展示图标*/
  Icon?: React.ReactNode; // 是否展示图标
  /** 自定义calss*/
  className?: string; // 自定义calss
  /** 点击事件*/
  onClick?: React.MouseEventHandler<HTMLElement>; // 点击事件
}
const Button = (prop: Props) => {
  const {
    children,
    Icon,
    disbled = true,
    onClick,
    type = "",
    className,
  } = prop;
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const tiggerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsAnimation(true);
    setTimeout(() => {
      setIsAnimation(false);
    }, 1000);
    e.stopPropagation();
    e.preventDefault();
    onClick?.(e);
  };
  return (
    <button
      className={classnames(
        styles["long-btn"],
        {
          [styles["primary-type"]]: type === "primary",
          [styles.disabled]: disbled,
          [styles.showAnimation]: isAnimation,
        },
        className
      )}
      disabled={disbled}
      onClick={(e) => {
        tiggerClick(e);
      }}
    >
      {Icon && Icon}
      {children}
      <div
        className={classnames({ [styles["long-active-circel"]]: isAnimation })}
      ></div>
    </button>
  );
};
export default memo(Button);
