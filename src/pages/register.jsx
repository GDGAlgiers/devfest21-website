import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

const REGISTER_SEO = {
    title: 'Register',
    description:
        '“DevFest”, short for “Developer Festival” is an annual technical event organized by Google Developers Groups (GDGs), aiming to deliver conferences and workshops to students, developers, professionals and everyone passionate about the tech field. It is considered as a great opportunity for them to network with tech enthusiasts and get updated about the latest trends.',
    openGraph: {
        url: 'https://devfest21.gdgalgiers.com/register',
        title: 'Devfest 21 Registration',
        description:
            '“DevFest”, short for “Developer Festival” is an annual technical event organized by Google Developers Groups (GDGs), aiming to deliver conferences and workshops to students, developers, professionals and everyone passionate about the tech field. It is considered as a great opportunity for them to network with tech enthusiasts and get updated about the latest trends.',
        images: [
            {
                url: 'https://i.ibb.co/1vRR8nD/Devfest21-1.png',
                width: 800,
                height: 600,
                alt: 'devfest',
            },
        ],
        site_name: 'Devfest21 GDG Algiers',
    },
}
function Register() {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        keywords
                        siteUrl
                        image
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
                ...REGISTER_SEO,
            }}
            style={{
                background:
                    'linear-gradient(107.56deg, #0053BA 0%, #0574EF 34.95%, #1C7EF0 89.12%)',
            }}
        >
            <NavBar className="z-10 bg-blue" />
            <iframe
                src="https://tripetto.app/run/EWHCQNPB6A"
                className="h-screen w-full"
                frameBorder="0"
                title="Form Registration"
            />
        </Layout>
    )
}

export default Register
