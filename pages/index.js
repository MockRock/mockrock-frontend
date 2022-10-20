import Head from 'next/head'
import Image from 'next/image'
import Cookies from 'js-cookie'
import {getToken} from 'next-auth/jwt';
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection';
import StepSection from '../components/StepsSection';
import BenifitsSections from '../components/BenifitsSection';
import TestimonialSection from '../components/TestimonialSection';
import InterviewerCompanies from '../components/InterviewerCompaniesSection';
import Footer from '../components/Footer';
import {getSession, useSession} from "next-auth/react";




export default function Home() {
    const {data: session, status} = useSession();

    //useEffect(() => {
    //    console.log(session)
    //    const updateUser = async() => {
    //        try {
    //            const getUser = doc(db, "users",'hYms1BtlL3RTiaRRtTg9');
    //            const userSnap = await getDoc(getUser);
    //            if (userSnap.exists()) {
    //                console.log("Document data:", userSnap.data().email);
    //            } else {
    //                // doc.data() will be undefined in this case
    //                console.log("No such document!");
    //            }
    //            //const docRef = await addDoc(collection(db, "users"), session?.user ?? session?.user);
    //            //console.log("Document written with ID: ", docRef.id);
    //        } catch (e) {
    //            console.error("Error adding document: ", e);
    //        }
    //    }
    //    updateUser()
    //},[])
    return (
        <>
            <Navbar /> 
            <BannerSection/>
            <StepSection/>
            <BenifitsSections/>
            <TestimonialSection/>
            <InterviewerCompanies/>
            <Footer/>
        </>
    )
}
