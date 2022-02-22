import loadable from "@loadable/component";
import { memo, useEffect, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Button from "src/compoents/Button";
import styles from "./index.module.less";
const Show1 = loadable(() => import("src/pages/drag"));
const vertexShaderSource = '' +
  'void main(){' +
  //给内置变量gl_PointSize赋值像素大小
  '   gl_PointSize=20.0;' +
  //顶点位置，位于坐标原点
  '   gl_Position =vec4(0.0,0.0,0.0,1.0);' +
  '}';
const fragShaderSource = '' +
  'void main(){' +
  //定义片元颜色
  '   gl_FragColor = vec4(1.0,0.0,0.0,1.0);' +
  '}';
const Collect = (prop: any) => {
    const g1: any = document.getElementById('webg1')
    useEffect(() => {
    console.log(g1);
    
    if (g1) {
      const content = g1.getContext('webg1')
      content.drawArrays(content.points, 0, 1)
    }
  }, [g1])
  return <div className={styles.box} id="box">
    <canvas id="webg1" width={500} height={500} style={{ background: 'green' }}>
    </canvas>
  </div>;
};

export default memo(Collect);
