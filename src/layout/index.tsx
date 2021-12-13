import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.less";
import { routes } from "src/routes";
import { useState } from "react";
import classNames from "classnames";
const Layout = () => {
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);
  return (
    <div className={styles.Wrap}>
      <div
        className={classNames(styles.leftBox, {
          [styles.isHidden]: hiddenMenu,
        })}
      >
        {routes.map((item) => {
          return (
            <div key={item.key}>
              {item.children ? (
                <>
                  {!item.hidden && (
                    <ul>
                      <span>{item.name}</span>
                      {item.children.map((v) => {
                        return (
                          <li key={v.key}>
                            <Link
                              to={v.path}
                              key={v.key}
                              className={styles.link}
                            >
                              {v.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  {!item.hidden && (
                    <li>
                      <Link to={item.path} key={item.key}>
                        {item.name}
                      </Link>
                    </li>
                  )}
                </>
              )}
            </div>
          );
        })}
        <div
          className={styles.hiddenMenu}
          onClick={() => {
            setHiddenMenu(!hiddenMenu);
          }}
        >
          {hiddenMenu ? "展开" : "收起"}
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
