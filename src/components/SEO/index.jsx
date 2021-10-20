import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'

const SEO = (props) => (
    <GatsbySeo
        {...props}
        // eslint-disable-next-line react/destructuring-assignment
        language={props.language ?? 'en'}
        titleTemplate="%s | GDG Algiers' Devfest2 "
    />
)
export default SEO
