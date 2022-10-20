import {AuthProvider, ProtectRoute} from '../contexts/auth'
import {SessionProvider} from "next-auth/react"
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from "next/head";
import React from 'react';

function MyApp({Component, pageProps}) {
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    return (
        <React.StrictMode>
            <SessionProvider session={pageProps.session}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
                </Head>
                <Component {...pageProps} />
            </SessionProvider>
        </React.StrictMode>

    )
}

export default MyApp
