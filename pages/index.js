import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useSession, signIn, signOut} from "next-auth/react"
import Cookies from 'js-cookie'
import {getToken} from 'next-auth/jwt';

export default function Home({lang}) {
    const {data: session, status, token} = useSession()
    console.log(getToken)
    //if (lang) console.log(session, lang)
    
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <img src={session.user.image}/>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn('google')}>Sign in with Google</button>
            <button onClick={() => signIn('github')}>Sign in with Github</button>

        </>
    )
}

export async function getServerSideProps(context) {
    const lang = context.req.cookies['next-auth.session-token']
    return {props: {lang: lang ? lang : null}}

    // ...

}
