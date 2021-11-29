import loadable from '@loadable/component'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { menuProp } from 'src/typing'
const Home = loadable(() => import('src/pages/home'))
const Show = loadable(() => import('src/pages/show'))
const Show1 = loadable(() => import('src/pages/show1'))
const Show2 = loadable(() => import('src/pages/show2'))
const routes: menuProp[] = [
    {
        name: '首页',
        path: '/',
        key: "home",
        component: <Home />,
    },
    {
        name: '次页',
        path: 'show',
        key: "Show",
        component: <Show />,
        children: [
            {
                name: '次页1',
                path: '/show/show1',
                key: "Show1",
                component: <Show1 />,
            },
            {
                name: 'ssdd',
                path: '/show/show2',
                key: "Show1",
                component: <Show2 />,
            }
        ]
    },
    {
        path: '*',
        name: '无此页面',
        key: "none",
        component: <Show1 />
    }
]
const RoutesCofig = (prop: any) => {
    console.log(prop, "prop");
    return <Router >
        <Routes>
            {
                routes.map(item => <Route key={item.key} path={item.path} element={item.component} >
                    {item.children?.map(v => <Route key={v.key} path={v.path} element={v.component} ></Route>)}
                </Route>)
            }
        </Routes>
    </Router>
}
export default RoutesCofig