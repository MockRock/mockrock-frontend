import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
    return(
        <>
            <div className="row main-cont align-items-center">
                <div className="left-cont my-auto col-12 col-md-6 col-lg-6">
                    <div className="left-inner">
                        <h2 className="card-title py-3 text-center text-lg-start">Worried about how to crack interviews as a <strong className="fresher"
                            style={{color: 'rgb(231, 0, 139)'}}>Fresher?</strong></h2>
                        <p className="card-text py-3 text-center text-lg-start">Power up with this pocket-friendly platform and ace your interviews to land
                            your ideal job! Attend a 1 : 1 mock interview with specialists working at prime companies in the
                            world.</p>
                        <div className="btn-wrap d-flex justify-content-around justify-content-lg-start">
                            <Link href="#steps"><button type="button" className="btn2 shadow-lg my-3">Explore Programs</button></Link>
                            <button data-bs-toggle="modal" data-bs-target="#loginModal" type="button" className="btn3 shadow-lg my-3 mx-0 mx-lg-3">Starts @49/-</button>
                        </div>
                    </div>
                </div>
                <div className="right-cont text-center col-12 col-md-6 col-lg-6">
                    <Image width={527} height={351} src="/assests/poster.png" className="img-fluid poster" alt="poster"/>
                </div>
            </div>
        </>
    )
}