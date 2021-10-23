/* eslint-disable prettier/prettier */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import WhatIsDevfest from '../sections/WhatIsDesvfest'
import Layout from '../components/Layout'
import SpeakersSection from '../sections/speakersSection'
import HeroSection from '../sections/HeroSection'
import GdgWtmSection from '../sections/GdgWtmSection'
import Footer from '../components/Footer'
import speakers from '../data/speakers.json'
import Faq from '../sections/Faq'

const INDEX_SEO = {
    title: 'Home',
    description:
        '“DevFest”, short for “Developer Festival” is an annual technical event organized by Google Developers Groups (GDGs), aiming to deliver conferences and workshops to students, developers, professionals and everyone passionate about the tech field. It is considered as a great opportunity for them to network with tech enthusiasts and get updated about the latest trends.',
    openGraph: {
        url: 'https://devfest21.gdgalgiers.com/',
        title: 'Devfest 21 Home',
        description:
            '“DevFest”, short for “Developer Festival” is an annual technical event organized by Google Developers Groups (GDGs), aiming to deliver conferences and workshops to students, developers, professionals and everyone passionate about the tech field. It is considered as a great opportunity for them to network with tech enthusiasts and get updated about the latest trends.',
        images: [
            {
                url: 'https://i.ibb.co/2tcPq6h/Devfest21.png',
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
            <GdgWtmSection />
            <SpeakersSection speakers={speakers} />
            <Faq />
            <Footer />
        </Layout>
    )
}
