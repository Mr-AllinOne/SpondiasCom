import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const RootRouterService = () => {
    return (
        <div>
            <Outlet />

        </div>
    )
}

export default RootRouterService
