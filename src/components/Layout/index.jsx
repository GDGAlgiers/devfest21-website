import React from 'react'
import SEO from '../SEO'

const Layout = ({ seo, children }) => {
    return (
        <>
            <SEO {...seo} />
            <main>{children}</main>
        </>
    )
}

export default Layout
