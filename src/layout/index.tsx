import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.less";
import { routes } from "src/routes";
const Layout = () => {
  return (
    <div className={styles.Wrap}>
      <div className={styles.leftBox}>
        {routes.map((item) => {
          return (
            <div key={item.key}>
              {item.children ? (
                <ul>
                  <span>{item.name}</span>
                  {item.children.map((v) => {
                    return (
                      <li key={v.key}>
                        <Link to={v.path} key={v.key} className={styles.link}>
                          {v.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <li>
                  <Link to={item.path} key={item.key}>
                    {item.name}
                  </Link>
                </li>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
