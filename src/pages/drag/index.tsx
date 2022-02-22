import { memo, useRef, useState } from "react";
import styles from "./index.module.less";
// const sourceList = [
//   {
//     content:'2222222222222sdasdasdasdasdsdas速度速度速度速度',
//     key:'sdsdasda'
//   },
//   {
//     content:'2222222222222sdasdasdasdasdsdas速度速度速度速度',
//     key:'32131'
//   },
//   {
//     content:'2222222222222sdasdasdasdasdsdas速度速度速度速度',
//     key:'13123123'
//   }
// ]
const itemHeight = 16;
const getData = () => {
  return {
    value: `速度速度速度速度${Math.random() + Math.random()}`,
  };
};
const sourceList = new Array(100).fill(
  new Array(1).fill(`速度速度速度速度${Math.random() + Math.random()}`)
);
console.log(sourceList);

const Drag = () => {
  const [data, setData] = useState<any>(sourceList.slice(0, 10));
  const [listBoxRef, setListBoxRef] = useState<HTMLDivElement | null>(null);
  const [transForm, setTransForm] = useState<string>("");
  const [totalHeight, setTotalHeight] = useState<number>(
    sourceList.length * itemHeight
  );
  const scrollWrap = useRef<any>(null);
  const showScroll = (e: any) => {
    console.log(scrollWrap.current?.scrollTop);
    const start = Math.floor(scrollWrap.current?.scrollTop / itemHeight);
    const end = Math.floor(200 / itemHeight) + start;
    console.log(start, end);
    setTransForm(` translate3d(0,${start * itemHeight}px,0)`);
    console.log(sourceList.slice(start, end), "sourceList.slice(start,end)");
    console.log(totalHeight);

    setData((value: string | any[]) => sourceList.slice(start, end));
  };
  return (
    <div className={styles.dragWrap}>
      <div className={styles.dragBox} onScroll={showScroll} ref={scrollWrap}>
        <div
          style={{ height: totalHeight }}
          className={styles.positionWrap}
        ></div>
        <div style={{ transform: transForm }} className={styles.content}>
          {data.map((item: any, index: number) => {
            return (
              <div key={index}>
                {item.value} +{index}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Drag);
