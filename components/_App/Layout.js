import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])

    return(
        <>
            <Head>
                <title>SH Digital - Next.js Webseite</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="SH Digital Landingpages - React Next Landing Page" />
                <meta name="og:title" property="og:title" content="SH Digital - React Next Landing Page"></meta>
                <meta name="twitter:card" content="SH Digital Landingpages - React Next Landing Page"></meta>
                <link rel="canonical" href=""></link>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;