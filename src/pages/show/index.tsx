import loadable from '@loadable/component'
import { useState } from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom'
import RoutesCofig from 'src/routes'
const Show1 = loadable(() => import('src/pages/show1'))

function Show(prop: any) {
    console.log(prop, 'prop');

    return (
        <div className="App">
            show
            <Link to="/show/show2">23234</Link>
            <Link to="/show/show1">sss</Link>
            <Outlet />
        </div>
    )
}

export default Show
