import loadable from "@loadable/component";
import { memo, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { ReactComponent as AccountInfo } from "src/assets/medias/accountInfo.svg";
import Button from "src/compoents/Button";
import styles from "./index.module.less";
const Show1 = loadable(() => import("src/pages/drag"));

const Collect = (prop: any) => {
  console.log(prop, "prop");
  const [status, setStatus] = useState<boolean>(false);
  const counterUp = (e: any, count: number) => {
    // setStatus(true);
  };
  return <div className={styles.box}></div>;
};

export default memo(Collect);
