import React from 'react'
import NavBar from '../NavBar'
import SEO from '../SEO'

const Layout = ({ seo, children }) => {
    return (
        <>
            <SEO {...seo} />
            <NavBar />
            <main>{children}</main>
        </>
    )
}

export default Layout
