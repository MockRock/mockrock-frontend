import {AuthProvider, ProtectRoute} from '../contexts/auth'
import {SessionProvider} from "next-auth/react"
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    return (
        <SessionProvider session={pageProps.session}>
                    <Component {...pageProps} />
        </SessionProvider>

    )
}

export default MyApp
