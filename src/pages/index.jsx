import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import SpeakersSection from '../components/speakersSection/speakersSection'
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
const speakers = [
    {
        name: 'someone famous1',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        jobs: ['CEO of google', 'web dev'],
    },
    {
        name: 'someone famous2',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        jobs: ['CEO of facebook'],
    },
    {
        name: 'someone famous3',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        jobs: ['CEO of microsoft', 'app developer'],
    },
    {
        name: 'someone famous4',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        jobs: ['AI developer'],
    },
]

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
            <SpeakersSection speakers={speakers} />
        </Layout>
    )
}
