import loadable from "@loadable/component";
import { memo, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
const Show1 = loadable(() => import("src/pages/show1"));

const ReactDemo = (prop: any) => {
  console.log(prop, "prop");

  return (
    <div className="App">
      show
      <Link to="/show/show2">23234</Link>
      <Link to="/show/show1">sss</Link>
      <Outlet />
    </div>
  );
};

export default memo(ReactDemo);
