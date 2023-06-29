import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/footer'









const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>

        </>
    )
}

export default MainLayout