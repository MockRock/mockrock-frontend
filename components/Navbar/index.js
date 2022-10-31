import Image from "next/image";
import {useSession, signIn, signOut} from "next-auth/react"
import Link from "next/link";

export default function Navbar() {
    const {data: session} = useSession()

    const showModal = () => {
        if(session) {
            signOut()
        } else{
            const {Modal} = require("bootstrap");
            const myModal = new Modal("#loginModal");
            myModal.show();
        }
        
    };

    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-inner justify-content-between">
                    <div className="logo d-flex justify-content-center align-middle">
                        <Image src="/assests/logo.png" width='190px' height='64.57px' />
                    </div>
                    {/*<!-- COLLAPSE BUTTON ICON -->*/}
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                        <i className="fa fa-bars"></i>
                    </button>
                    {/*<!-- MENUS BESIDE THE LOGO TO BE COLLAPSED -->*/}
                    <div className="menu collapse navbar-collapse" id="btn">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <Link href="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item"><Link href="about.html" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link href="contact.html" className="nav-link">Contact Us</Link></li>
                            <li className="nav-item"><Link href="/dashboard" className="nav-link">Dashboard</Link></li>
                        </ul>
                        {/*<!-- </div> -->*/}
                        {/*<!-- BUTTON ON NAVBAR AT THE TOP RIGHT CORNER -->*/}
                        {/*<!-- <div className="buttons collapse navbar-collapse" id="btn"> -->*/}
                        <button type="button" onClick={showModal} className="btn1 nav-item" data-bs-toggle="modal" data-bs-target="#loginModal">{session ? "Logout" : "Get Started"} <i
                            className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
                {/*<!-- MODAL -->*/}
                <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog text-black">
                        <div className="modal-content bg-light text-black">
                            <div className="modal-header">
                                <h5 className="modal-title text-black" id="loginModalLabel">Login to MockRock</h5>
                                {/*<button onClick={closeModal} type="button" className="btn-close text-bg-light" data-bs-dismiss="modal"
                                    aria-label="Close"></button>*/}
                            </div>
                            <div className="modal-body">
                                {/*<!-- MODAL LOGIN FORM -->*/}
                                <form>
                                    {/*<!-- LOGIN MODAL FORM BUTTONS -->*/}
                                    <div className="btns-modal d-grid gap-3 my-4">
                                        <button
                                            onClick={() => signIn('google')}
                                            className="google btn shadow-lg btn-lg rounded-1 mx-auto d-flex justify-content-center align-items-center position-relative"
                                            type="button" style={{width: '330px'}}> <img src="assests\google.png" alt="Google"
                                                width="25" height="25" className="position-absolute" /> Sign in with Google</button>
                                        <button
                                            className="facebook btn shadow-lg btn-lg rounded-1 mx-auto d-flex justify-content-center align-items-center position-relative"
                                            type="button" style={{width: '330px'}}> <img src="assests\facebook.jpg" alt="Facebook"
                                                width="25" height="25" className="position-absolute" /> Sign in with Facebook</button>
                                        <button
                                            className="twitter btn shadow-lg btn-lg rounded-0 mx-auto d-flex justify-content-center align-items-center position-relative"
                                            type="button" style={{width: '330px'}}> <img src="assests\twitter.png" alt="Google"
                                                width="30" height="30" className="position-absolute" /> Sign in with Twitter</button>
                                        <button
                                            className="github btn shadow-lg btn-lg rounded-0 mx-auto d-flex justify-content-center align-items-center position-relative"
                                            type="button" style={{width: '330px'}}> <img src="assests\github.png" alt="Google"
                                                width="25" height="25" className="position-absolute" /> Sign in with Github</button>
                                    </div>
                                    {/*<!-- LOGIN MODAL FORM AFTER BUTTONS -->*/}
                                    <div className="mb-3">
                                        <label htmlFor="loginInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="loginInputEmail1"
                                            placeholder="Enter your email address..." aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="loginInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Enter your passsword..."
                                            id="loginInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*</Link>*/}
                {/*</div>*/}
            </nav >
        </>
    )
}