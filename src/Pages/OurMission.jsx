import React from 'react';

function OurMission() {
    return (
        <div className="container-xxl py-5" id="mission">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        {/* Image Section */}
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute w-100 h-100 rounded"
                                    src="Assets/img/call-to-action.jpg"
                                    alt="Our Mission"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4 text-logo-green">Our Mission</h1>
                                <p className="mb-4 text-logo-text">
                                    At Hope For Greatness, our mission is to empower orphans aged 6 to 18 to rise and thrive. 
                                    We are committed to nurturing their well-being, strengthening their personal development, 
                                    and promoting access to quality education and mentorship.
                                </p>
                                <p className="mb-4 text-logo-text">
                                    Through holistic programs in education, life skills, health, and emotional support, 
                                    we equip children with the tools they need to unlock their full potential and grow into confident, purpose-driven leaders of tomorrow.
                                </p>
                                <a className="btn bg-logo-green text-white py-3 px-5" href="#programs">
                                    Explore Programs <i className="fa fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurMission;
