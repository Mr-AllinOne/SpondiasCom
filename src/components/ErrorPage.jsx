import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <Header />
            <h1 style={{ margin: "10px", color: "red", fontSize: "20px" }}>An error has occured</h1>
            <p style={{ margin: "10px", color: "red", fontSize: "20px" }}>Couldn't find this page</p>

        </div>
    )
}

export default ErrorPage
