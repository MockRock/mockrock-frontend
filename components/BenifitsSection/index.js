export default function BenifitsSections() {
    return(
        <>
            <h2 className="text-center fs-1 fw-bold px-2 pb-3">Why Choose Us?</h2>

            <div className="row benefit-card p-3 justify-content-center">
                <div className="card1 col-12 col-md-6 col-lg-6">
                    <div className="card mt-4 mt-md-2 card-1">
                        <img src="assests\confidence.png" className="img-fluid mx-auto" alt="..." width="90" height="auto"/>
                            <div className="card-body">
                                <h4 className="card-title text-white text-center">Confidence Booster</h4>
                                <p className="card-text text-white text-center">Efficiency and easiness are acquired via experience &
                                    effort. The more you practice, the less will be pressure. And anxiety hinders your confidence so
                                    avoid it!</p>
                            </div>
                    </div>
                </div>
                <div className="card1 col-12 col-md-6 col-lg-6">
                    <div className="card mt-5 mt-md-2 card-2">
                        <img src="assests\company.png" className="img-fluid mx-auto" alt="..." width="80" height="50"/>
                            <div className="card-body">
                                <h4 className="card-title text-white text-center">Interviewers from top MNC</h4>
                                <p className="card-text text-white text-center">Guidance from professionals working at big companies
                                    will assist you in building your career wisely. Pen down the useful tips shared by experts at
                                    the end of mock interview!</p>
                            </div>
                    </div>
                </div>
                
            </div>
            <div className="row benefit-card p-3  my-md-5 justify-content-center">
                <div className="card1 col-12 col-md-6 col-lg-6">
                    <div className="card mt-4 mt-md-2 card-3">
                        <img src="assests\referal.png" className="img-fluid mx-auto" alt="..." width="150" height="auto" />
                        <div className="card-body">
                            <h4 className="card-title text-white text-center">Direct Referral</h4>
                            <p className="card-text text-white text-center">If you rocked your mock interview & blessed enough then
                                you may get a chance to............. Yes, you guessed it right! Direct referral from your
                                interviewer. So take it seriously & give your best.</p>
                        </div>
                    </div>
                </div>
                <div className="card1 col-12 col-md-6 col-lg-6">
                    <div className="card mt-5 mt-md-2 card-4">
                        <img src="assests\improve.png" className="img-fluid mx-auto" alt="..." width="90" height="50" />
                        <div className="card-body">
                            <h4 className="card-title text-white text-center">Instant Report</h4>
                            <p className="card-text text-white text-center">Report reflects your proficiency as a whole. Made a
                                mistake? Learn from it! A detailed review will help you discover your strengths & weakness to
                                work harder.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}