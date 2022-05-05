import loadable from "@loadable/component";
import { memo, useEffect, useRef, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { ReactComponent as AccountInfo } from "src/assets/medias/accountInfo.svg";
import Button from "src/compoents/Button";
import styles from "./index.module.less";
const Show1 = loadable(() => import("src/pages/show1"));

const ReactDemo = (prop: any) => {
  console.log(prop, "prop");
  const [status, setStatus] = useState<boolean>(false);
  const curRef = useRef<any>(null);
  const counterUp = (e: any, count: number) => {
    curRef.current++;
    console.log(curRef.current);
  };
  useEffect(() => {
    console.log(curRef.current);
    throw new Error("sentry vite错误");
  }, [counterUp]);
  const Child = ({ wrap }: { wrap: any }) => {
    console.log(wrap);
    console.log();

    return (
      <>
        <span>2222</span>
      </>
    );
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
      <Child wrap={curRef} />
      <Button
        onClick={(e) => {
          counterUp(e, 2);
        }}
        disbled={status}
      >
        真的是按钮
      </Button>
      <Link to="/show/show2">23234</Link>
      <Link to="/show/show1">sss啊哈哈哈 成功了</Link>
      <Outlet />
    </div>
  );
};

export default memo(ReactDemo);
