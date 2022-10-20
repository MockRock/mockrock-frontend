import axios from "axios";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Script from "next/script";
import {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from './dashboard.module.css'
import {collection, setDoc, doc, getDoc} from "firebase/firestore";
import {db} from '../../firebase';

function Dashboard() {
    const {data: session, status} = useSession();
    const [dayscheduleData, setDayscheduleData] = useState(null)
    let bookingId = []

    if (status === "loading") {
        return <p>loading....</p>;
    }
    if (status === "unauthenticated") {
        return <p>You are unauthenticated</p>;
    }
    const router = useRouter()
    const handleSchedule = () => {
        router.push('https://mockrock.dayschedule.com/mock-rock-int')
    }
    useEffect(() => {
        console.log(session)
        const updateUser = async () => {
            try {
                const getUser = doc(db, "users", session?.user?.email);
                const userSnap = await getDoc(getUser);
                if (userSnap.exists()) {
                    console.log("User already exist:", userSnap.data().email);
                } else {
                    const userRef = collection(db, "users");
                    await setDoc(doc(userRef, session?.user?.email), session?.user ?? session?.user);
                }

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        updateUser()
    }, [])

    //useEffect(() => {
    //    axios.post('https://api.dayschedule.com/v1/auth/signin', {
    //        "email": "mockrockinterview@gmail.com",
    //        "password": "Pratik@123"
    //    }).then((response) => {
    //        localStorage.setItem('dayscheduleToken', response.data.token)
    //    }).then(() => {
    //        const getToken = localStorage.getItem('dayscheduleToken')
    //        axios.get(`https://api.dayschedule.com/v1/bookings?start=2022-10-16&end=2025-10-22`, {headers: {"Authorization": `Bearer ${getToken}`}})
    //            .then((response) => {
    //                setDayscheduleData(response.data)
    //                response.data.result.forEach(booking => {
    //                    bookingId.push(booking.booking_id)
    //                });
    //                console.log(bookingId)
    //            })
    //            .then(() => {
    //                let countBooking = 0
    //                bookingId.forEach((id) => {
    //                    axios.get(`https://api.dayschedule.com/v1/bookings/${id}`, {headers: {"Authorization": `Bearer ${getToken}`}})
    //                    .then((response) => {
    //                        console.log(response.data.invitees[0].email === session.user.email)
    //                        if (response.data.invitees[0].email === session.user.email){
    //                            countBooking++
    //                        } 
    //                    })
    //                })
    //                console.log(countBooking)
    //            })
    //            .catch((err) => {
    //                console.log(err)
    //                setDayscheduleData(err.response.data)
    //            })
    //    }).catch((err) => console.log(err))
    //}, [])


    if (!dayscheduleData) <p>loading....</p>
    return (
        <>
            <Navbar />
            <div className="row">
                <div className={`col-2 d-none d-lg-block ${styles.sidebarContainer}`}>
                    <ul className={` ${styles.sidebarUl}`}>
                        <li className={` ${styles.sidebarLi}`}><img width='40pxs' src="/assests/dashboard.png" /><a href="/dasboard">Dashboard</a></li>
                        <li className={` ${styles.sidebarLi}`}><img width='40px' src="/assests/laptop.png" /><a href="/interview">Interview</a></li>
                        <li className={` ${styles.sidebarLi}`}><img width='40px' src="/assests/profile.png" /><a href="/profile">Profile</a></li>
                    </ul>
                </div>
                <div className={`col-10 ${styles.mainContainer}`}>
                    <div className={`row justify-content-center`}>
                        {dayscheduleData?.statusCode === 404 ? (
                            <div className={`col-12 col-md-9 col-lg-9 text-center py-3`}>
                                <h3 className="py-2">Currently, there is No Interview Schedule for you</h3>
                                <button onClick={handleSchedule} type="button" className={`${styles.scheduleBtn}`}>Scedule Now</button>
                            </div>
                        ) : <>
                            <div className={`col-12 col-md-9 col-lg-9 text-center py-3`}>
                                <h3>You have {dayscheduleData?.total} Interview Schedule</h3>
                            </div>
                        </>}

                        <div className={`col-12 col-md-3 col-lg-3 py-3 text-center`}>
                            {dayscheduleData?.total > 0 ? (
                                <button onClick={handleSchedule} type="button" className={`${styles.scheduleBtn}`}>Scedule Interview +</button>
                            ) : <p>Loading...</p>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
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
