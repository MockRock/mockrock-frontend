import {getSession, useSession} from "next-auth/react";
import Script from "next/script";

function Dashboard() {
    const {data: session, status} = useSession();
    if (status === "loading") {
        return <p>loading....</p>;
    }
    if (status === "unauthenticated") {
        return <p>You are unauthenticatedddd</p>;
    }
    return (
        <>
            <iframe width='100%' height='750px' src='https://pratikyadav.zohobookings.in/portal-embed#/customer/114404000000023175' frameborder='0' allowfullscreen='' > </iframe>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {session}, // will be passed to the page component as props
    };
}

export default Dashboard;
