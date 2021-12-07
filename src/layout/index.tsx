import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.less";
import { routes } from "src/routes";
const Layout = () => {
  return (
    <div className={styles.Wrap}>
      <div className={styles.leftBox}>
        {routes[0]?.children.map((itme) => (
          <Link to={itme.path}>{itme.name}</Link>
        ))}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
