import {AuthProvider, ProtectRoute} from '../contexts/auth'
import {SessionProvider} from "next-auth/react"
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from "next/head";
import React from 'react';

function MyApp({Component, pageProps}) {
    return (
        <React.StrictMode>
            <SessionProvider session={pageProps.session}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                </Head>
                <Component {...pageProps} />
            </SessionProvider>
        </React.StrictMode>

    )
}

export default MyApp
