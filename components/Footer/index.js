import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer className="text-center text-lg-start bg-dark text-muted">
                {/*<!-- Section: Social media -->*/}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/*<!-- Left -->*/}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/*<!-- Left -->*/}

                    {/*<!-- Right -->*/}
                    <div>
                        <Link href="" className="me-4 link-secondary">
                            <i className="fa fa-facebook-official"></i>
                        </Link>
                        <Link href="" className="me-4 link-secondary">
                            <i className="fa fa-twitter-square"></i>
                        </Link>
                        <Link href="" className="me-4 link-secondary">
                            <i className="fa fa-google"></i>
                        </Link>
                        <Link href="" className="me-4 link-secondary">
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link href="" className="me-4 link-secondary">
                            <i className="fa fa-linkedin"></i>
                        </Link>
                        <Link href="" className="me-4 link-secondary">
                            <i className="fa fa-github"></i>
                        </Link>
                    </div>
                    {/*<!-- Right -->*/}
                </section>
                {/*<!-- Section: Social media -->*/}

                {/*<!-- Section: Links  -->*/}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/*<!-- Grid row -->*/}
                        <div className="row mt-3">
                            {/*<!-- Grid column -->*/}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/*<!-- Content -->*/}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/*<!-- Grid column -->*/}

                            {/*<!-- Grid column -->*/}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/*<!-- Links -->*/}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link href="#!" className="text-reset">Angular</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-reset">React</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-reset">Vue</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-reset">Laravel</Link>
                                </p>
                            </div>
                            {/*<!-- Grid column -->*/}

                            {/*<!-- Grid column -->*/}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/*<!-- Links -->*/}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link href="/about-us" className="text-reset">About us</Link>
                                </p>
                                <p>
                                    <Link href="/contactus" className="text-reset">Contact us</Link>
                                </p>
                                <p>
                                    <Link href="/terms-and-condition" className="text-reset">Terms & Condition</Link>
                                </p>
                                <p>
                                    <Link href="/privacy-policy" className="text-reset">Privacy Policy</Link>
                                </p>
                            </div>
                            {/*<!-- Grid column -->*/}

                            {/*<!-- Grid column -->*/}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/*<!-- Links -->*/}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fa fa-home me-3 text-secondary"></i> Bangalore, Karnataka</p>
                                <p>
                                    <i className="fa fa-envelope me-3 text-secondary"></i>
                                    info@mockrock.com
                                </p>
                                <p><i className="fa fa-phone me-3 text-secondary"></i> + 91 814 567 88</p>
                                <p><i className="fa fa-print me-3 text-secondary"></i> + 91 963 567 89</p>
                            </div>
                            {/*<!-- Grid column -->*/}
                        </div>
                        {/*<!-- Grid row -->*/}
                    </div>
                </section>
                {/*<!-- Section: Links  -->*/}

                {/*<!-- Copyright -->*/}
                <div className="text-center p-4" style={{backgroundColor: "rgba(2, 0, 36, 1)"}}>
                    © 2021 Copyright:
                    <Link className="text-reset fw-bold" href="https://mockrock.in/"> mockrock.in</Link>
                </div>
                {/*<!-- Copyright -->*/}
            </footer>
        </>
    )
}