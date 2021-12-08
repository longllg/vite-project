import loadable from "@loadable/component";
import { memo, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { ReactComponent as AccountInfo } from "src/assets/medias/accountInfo.svg";
import Button from "src/compoents/Button";
import styles from "./index.module.less";
const Show1 = loadable(() => import("src/pages/show1"));

const ReactDemo = (prop: any) => {
  console.log(prop, "prop");
  const [status, setStatus] = useState<boolean>(false);
  const counterUp = (e: any, count: number) => {
    // setStatus(true);
  };
  return (
    <div className={styles.box}>
      <Button
        onClick={(e) => {
          counterUp(e, 2);
        }}
        disbled={status}
        type="primary"
        Icon={<AccountInfo />}
      >
        真的是按钮
      </Button>
      <Button
        onClick={(e) => {
          counterUp(e, 2);
        }}
        disbled={status}
      >
        真的是按钮
      </Button>
      <Link to="/show/show2">23234</Link>
      <Link to="/show/show1">sss</Link>
      <Outlet />
    </div>
  );
};

export default memo(ReactDemo);
