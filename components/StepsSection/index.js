export default function StepSection() {
    return(
        <>
            <div  id='steps' className="row steps-cont shadow-lg p-0 p-lg-5 mb-5 mt-4">
                <div className="col-sm-6">
                    <img src="assests\step.png" className="img-fluid p-4" width="84%" alt="steps"/>
                    <div className="left-cont p-0 p-lg-5">
                            <h3 className="card-title fs-2 fw-bold">Interview & Improve</h3>
                            <p className="card-text py-3 fs-6 mb-0">Grab this opportunity to enrich your interview skills & enjoy working at
                                your dream company. You are just 3 steps away... Get started now!</p>
                        <button type="button" className="btn3 shadow-lg my-0 my-lg-3 fw-1 fs-0 fs-lg-5" data-bs-toggle="modal"
                                data-bs-target="#loginModal">Starts @Rs 49/- </button>
                        </div>
                </div>
                <div className="col-sm-6">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item py-4 px-0 bg-transparent">
                            <h5 className="card-title fs-2 fw-bold">Step 1</h5>
                            <p className="card-text py-2 fs-6"> <strong className="text-warning">Register - </strong> Sign up with your
                                email id & verify it! Then quickly fill up your details & you are already a step closer to your
                                goal!</p>
                        </li>
                        <li className="list-group-item py-4 px-0 bg-transparent">
                            <h5 className="card-title py-2 fs-2 fw-bold">Step 2</h5>
                            <p className="card-text py-2 fs-6"><strong className="text-warning">Schedule - </strong>Schedule your
                                interview as per your availability & confirm it. Rock your mock interview with our experts
                                face-to-face!</p>
                        </li>
                        <li className="list-group-item py-4 px-0 bg-transparent">
                            <h5 className="card-title py-2 fs-2 fw-bold">Step 3</h5>
                            <p className="card-text py-2 fs-6"><strong className="text-warning">Improve - </strong> Get a precise
                                performance report to understand your strengths & skills. And enhance them by working on weaker
                                areas!</p>
                        </li>
                    </ul>
                </div>
                <p className="text-center fs-4"><i>Face your fears & fight till you fulfill your dreams</i></p>
                <p className="text-center fs-4"><i>Encounter this test run & you'll excel in the real one!</i></p>
            </div>
        </>
    )
}