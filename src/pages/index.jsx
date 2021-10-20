import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import WhatIsDevfest from '../components/WhatIsDesvfest/WhatIsDevfest'
import Layout from '../components/Layout'
import HeroSection from '../sections/HeroSection'

const INDEX_SEO = {
    title: 'Home',
    description:
        'GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. We organize DevFest 2021 in its 9th edition to offer speaker sessions, codelabs, workshops and an amazing Hackathon.',
    openGraph: {
        url: 'https://devfest21.netlify.app',
        title: 'Devfest 21 Home',
        description: 'Devfest21 event from GDG Algiers',
        images: [
            {
                url: 'https://i.ibb.co/kQgBCJD/devfest-Card.png',
                width: 800,
                height: 600,
                alt: 'devfest',
            },
        ],
        site_name: 'Devfest21 GDG Algiers',
    },
}

export default function Home() {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        keywords
                        siteUrl
                    }
                }
            }
        `
    )

    return (
        <Layout
            seo={{
                twitter: {
                    handle: site.siteMetadata.author,
                    cardType: 'summary_large_image',
                },
                metaTags: [
                    {
                        property: 'keywords',
                        content: site.siteMetadata.keywords.join(','),
                    },
                ],
                ...INDEX_SEO,
            }}
        >
            <HeroSection />
            <WhatIsDevfest />
        </Layout>
    )
}
