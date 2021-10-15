import React from 'react'
import SEO from '../SEO'

const Layout = (children, seo) => {
    return (
        <>
            <SEO {...seo} />
            <main>{children}</main>
        </>
    )
}

export default Layout
