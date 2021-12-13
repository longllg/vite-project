import { memo, useState } from "react";
import styles from "./index.module.less";
const Drag = () => {
  return <div className={styles.dragWrap}>drag</div>;
};

export default memo(Drag);
