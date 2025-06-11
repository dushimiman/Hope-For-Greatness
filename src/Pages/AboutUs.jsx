import React from 'react';

function AboutUs() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-4 text-logo-green">Discover More About Hope For Greatness</h1>
                        <p className="text-logo-text">
                            Hope For Greatness is a community-based organization that empowers orphans aged 6 to 18 to rise and thrive. 
                            We prioritize their well-being, personal growth, and education through targeted programs that build confidence, clarity, and purpose.
                        </p>
                        <p className="mb-4 text-logo-text">
                            Through mentorship, skills development, training, and provision of startup resources, we support young orphans in unlocking their full potential. 
                            We also foster cultural identity and resilience through community engagement and creative expression.
                        </p>
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-6">
                                <a className="btn bg-logo-gold text-white rounded-pill py-3 px-5" href="#">
                                    Read More
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="ms-3">
                                        <small className="text-logo-gold">CEO & Founder</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img className="img-fluid w-75 rounded-circle bg-logo-gold p-3" src="Assets/img/about-1.jpg" alt="about1" />
                            </div>
                            <div className="col-6 text-start" style={{ marginTop: "-150px" }}>
                                <img className="img-fluid w-100 rounded-circle bg-logo-green p-3" src="Assets/img/about-2.jpg" alt="about2" />
                            </div>
                            <div className="col-6 text-end" style={{ marginTop: "-150px" }}>
                                <img className="img-fluid w-100 rounded-circle bg-logo-gold p-3" src="Assets/img/about-3.jpg" alt="about3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
