import Link from "next/link";

export default function TestimonialSection() {
    return (
        <>
            <div className="row test-cont">
                <h2 className="text-center fs-2 fw-2 p-1">Feedback!</h2>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title px-3">Pinku</h3>
                            <img src="assests\pinku.png" className="rounded-circle m-3 bg-light float-start" alt="" width="60"
                                height="60" />
                            <span className="card-text text-white d-block"><q>This interview assisted me in reducing the worries &
                                hesitations that sometimes arise before a real interview. When it comes to evaluation and
                                value for money, MockRock is by far the best. Strongly suggested for freshers as well as
                                experienced</q></span>
                            <Link href="#" className="btn btn-info my-2">Amazon</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Alina</h3>
                            <img src="assests\alina.png" className="rounded-circle m-3 bg-light float-start" alt="" width="60"
                                height="60" />
                            <span className="card-text text-white d-block"><q>Mock interview was remarkably similar to a real
                                interiew. It really helped in letting me know where I stood and what my main areas of
                                interest should be</q></span>
                            <Link href="#" className="btn btn-info my-2">Microsoft</Link>
                            <Link href="#" className="btn btn-info">IBM</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Harry</h3>
                            <img src="assests\harry.png" className="rounded-circle m-3 bg-light float-start" alt="" width="60"
                                height="60" />
                            <span className="card-text text-white d-block text-justify"><q>The experts looked over my entire profile
                                and made an effort to cover every area of it. This mentally prepared me to deal with any
                                situations that may arise during the actual interview</q></span>
                            <Link href="#" className="btn btn-info">Goggle</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}