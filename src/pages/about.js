import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm Vera, a business professional who specializes in helping companies succeed.</p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="Description" content="About Vera | A business professional" />
    </>
)

export default AboutPage