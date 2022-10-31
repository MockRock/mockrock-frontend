import axios from "axios";
import {getSession, useSession, signOut} from "next-auth/react";
import {useRouter} from "next/router";
import Script from "next/script";
import {useEffect, useRef, useState} from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from './dashboard.module.css'
import {collection, setDoc, doc, getDoc} from "firebase/firestore";
import {db} from '../../firebase';

function Dashboard() {
    const {data: session, status} = useSession();
    let collegeRef = useRef()
    let semesterRef = useRef()
    let interviewDate = useRef()
    let targetCompany = useRef()

    console.log(session)
    const [dayscheduleData, setDayscheduleData] = useState(null)

    const scheduleModal = () => {
        const {Modal} = require("bootstrap");
        const myModal = new Modal("#scheduleInterview");
        myModal.show();

    };

    const handleScheduleForm = async (event) => {
        event.preventDefault()
        let formData = {
            college: collegeRef.current,
            semester: semesterRef.current,
            interviewDate: interviewDate.current,
            targetCompany: targetCompany.current
        }
        const userDate = new Date(formData.interviewDate).getTime()
        const currentDate = new Date().getTime()
        if( userDate < currentDate) {
            alert("Interview Schedule Date should be in future")
        }
        const getUser = doc(db, "users", session?.user?.email);
        const userSnap = await getDoc(getUser);
        const userRef = collection(db, "users");
        //await setDoc(doc(userRef, session?.user?.email), {...userSnap.data(), interviewDetails: [...userSnap.data().interviewDetails, formData]});
        console.log("sdds", formData)
    }
    useEffect(() => {
        console.log(session)
        const updateUser = async () => {
            try {
                const getUser = doc(db, "users", session?.user?.email);
                const userSnap = await getDoc(getUser);
                if (userSnap.exists()) {
                    console.log("User already exist:", userSnap.data());
                } else {
                    const userRef = collection(db, "users");
                    await setDoc(doc(userRef, session?.user?.email), {...session?.user, interviewDetails: []});
                }

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        updateUser()
    }, [])

    return (
        <>
            <Navbar />
            <div className="row">
                {/*<div className={`col-2 d-none d-lg-block ${styles.sidebarContainer}`}>
                    <ul className={` ${styles.sidebarUl}`}>
                        <li className={` ${styles.sidebarLi}`}><img width='40pxs' src="/assests/dashboard.png" /><a href="/dasboard">Dashboard</a></li>
                        <li className={` ${styles.sidebarLi}`}><img width='40px' src="/assests/laptop.png" /><a href="/interview">Interview</a></li>
                        <li className={` ${styles.sidebarLi}`}><img width='40px' src="/assests/profile.png" /><a href="/profile">Profile</a></li>
                    </ul>
                </div>*/}
                <div className={`col-12 ${styles.mainContainer}`}>
                    <div className={`row justify-content-center`}>
                        {dayscheduleData?.statusCode === 404 ? (
                            <div className={`col-12 text-left py-3`}>
                                <h3 className="py-2">Currently, there is No Interview Schedule for you</h3>
                                <button onClick={scheduleModal} type="button" className={`${styles.scheduleBtn}`}>Scedule Now</button>
                            </div>
                        ) : <>
                            <div className={`col-12 col-md-9 col-lg-9 text-center text-lg-left  py-3`}>
                                <h2>Hey, {session?.user?.name} <span className={styles.wave}>👋</span></h2>
                                <div className={`py-3 text-center`}>
                                    <div>
                                        <img width='50%' height="100%" src="/assests/no-interview.png" alt="no-interview" />
                                    </div>
                                    <h3 className="py-3">No Interview Found</h3>
                                    <button type="button" onClick={scheduleModal} data-bs-toggle="modal" data-bs-target="#scheduleInterview" className={`${styles.scheduleBtn}`}>Scedule Interview +</button>
                                </div>
                            </div>

                            {/*<!-- MODAL -->*/}
                            <div className="modal fade" id="scheduleInterview" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                                <div className={`modal-dialog ${styles.modalDialoge}`}>
                                    <div className={`modal-content text-white ${styles.modalContent}`}>
                                        <div className="modal-body">
                                            {/*<!-- MODAL LOGIN FORM -->*/}
                                            <h4>Let's assign you the perfect mentor for Interview Preparation Program</h4>
                                            <form onSubmit={handleScheduleForm} className="py-4">
                                                {/*<!-- LOGIN MODAL FORM BUTTONS -->*/}
                                                <div className="row">
                                                    <label className="fs-5">Your College Name</label>
                                                    <input onChange={(event) => collegeRef.current = event.target.value } className={styles.inputCollege} type='text' placeholder='Type your college' required />
                                                </div>
                                                    <div className="row">
                                                        <label className="fs-5">Current Semester</label>
                                                        <input onChange={(event) => semesterRef.current = event.target.value} className={styles.inputCollege} type='text' placeholder='E.g. 8th' required />
                                                    </div>
                                                <div className="row">
                                                        <label className="fs-5">When you are available for an interview</label>
                                                    <div className="position-relative p-0">
                                                            <input onChange={(event) => interviewDate.current = event.target.value} className={styles.inputCollege} type='date' required  />
                                                            {/*<i className={`fa fa-calendar ${styles.calendarIcon}`} aria-hidden="true"></i>*/}
                                                    </div>
                                                </div>
                                                    <div className="row">
                                                        <label className="fs-5">Mention companies that you are preparing for</label>
                                                        <input onChange={(event) => targetCompany.current = event.target.value} className={styles.inputCollege} type='text' placeholder='Amazon, Hashedin etc.' required />
                                                    </div>
                                                    <div className="text-center pt-4">
                                                    <button className={ `fs-5 ${styles.scheduleBtn}`} type="submit">Scedule Interview <br/><span style={{fontSize: 14}}><i className="fa fa-lock mx-2" aria-hidden="true"></i> Secure Checkout with Razorpay</span></button>
                                                    </div>
                                                {/*<!-- LOGIN MODAL FORM AFTER BUTTONS -->*/}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}

                        {/*<div className={`col-12 col-md-3 col-lg-3 py-3 text-center`}>
                                <button  type="button" className={`${styles.scheduleBtn}`}>Scedule Interview +</button>
                        </div>*/}
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
