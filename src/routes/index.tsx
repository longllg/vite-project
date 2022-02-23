import loadable from "@loadable/component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { menuProp } from "src/typing";
const Layout = loadable(() => import("src/layout"));
const Home = loadable(() => import("src/pages/home"));
const React = loadable(() => import("src/pages/react"));
const Show1 = loadable(() => import("src/pages/show1"));
const routes: menuProp[] = [
  {
    name: "学习篇",
    path: "/",
    key: "Show",
    component: <Layout />,
    children: [
      {
        name: "three.js",
        path: "/home",
        key: "34343",
        component: <Home />,
      },
      {
        name: "react",
        path: "/react",
        key: "23232",
        component: <React />,
      },
      {
        name: "vue",
        path: "/show2",
        key: "123123124",
        component: <React />,
      },
    ],
  },
  {
    path: "*",
    name: "无此页面",
    key: "none",
    component: <Show1 />,
  },
];
const RoutesCofig = (prop: any) => {
  console.log(prop, "prop");
  return (
    <Router>
      <Routes>
        {routes.map((item) => (
          <Route key={item.key} path={item.path} element={item.component}>
            {item.children?.map((v) => (
              <Route key={v.key} path={v.path} element={v.component}></Route>
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};
export { RoutesCofig, routes };
