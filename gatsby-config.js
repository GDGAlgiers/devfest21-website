/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Devfest Algiers 21`,
        description: `GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. We organize DevFest 2021 in its 10th edition to offer speaker sessions, codelabs, workshops and a big Hackathon for the participants to bring up some innovative solutions.`,
        author: `@GDG_Algiers`,
        siteUrl: 'https://devfest21.netlify.app',
        keywords: [
            'GDG',
            'Devfest',
            'Algiers',
            'Algeria',
            'Dev',
            'Development',
            'Technology',
            'Technologies',
            'Web',
            'Mobile',
            'Machine Learning',
            'Information',
        ],
        image: 'https://i.ibb.co/1vRR8nD/Devfest21-1.png',
    },
    /* Your site config here */
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-next-seo`,
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        'gatsby-plugin-robots-txt',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Cairo', 'Open Sans', 'Roboto', 'Montserrat'],
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-tailwind-styled-components`,
                short_name: `tailwindsc`,
                start_url: `/`,
                background_color: `#1C7EF0`,
                theme_color: `#1C7EF0`,
                display: `standalone`,
                icon: `docs/logo.svg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                emitWarning: true,
                failOnError: false,
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: [
                    'node_modules',
                    'bower_components',
                    '.cache',
                    'public',
                ],
                stages: ['develop', 'build-javascript'],
            },
        },
    ],
}
