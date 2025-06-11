import React from 'react';

function Facilities() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-3 text-logo-green">What we do</h1>
                    <p className="text-logo-text">At Hope for Greatness, we prioritize orphans' well-being, personal and professional growth.</p>
                </div>
                <div className="row g-4">
                    {/* Capacity building training */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="facility-item">
                            <div className="facility-icon bg-logo-green">
                                <span className="bg-logo-green"></span>
                                <i className="fa fa-book fa-3x text-white"></i>
                                <span className="bg-logo-green"></span>
                            </div>
                            <div className="facility-text bg-logo-green">
                                <h3 className="text-white mb-3">Capacity Building Training</h3>
                                <p className="mb-0 text-white">Workshops on leadership, communication, and entrepreneurship to empower orphans.</p>
                            </div>
                        </div>
                    </div>

                    {/* Wellness promotion */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="facility-item">
                            <div className="facility-icon bg-logo-gold">
                                <span className="bg-logo-gold"></span>
                                <i className="fa fa-users fa-3x text-white"></i>
                                <span className="bg-logo-gold"></span>
                            </div>
                            <div className="facility-text bg-logo-gold">
                                <h3 className="text-white mb-3">Wellness Promotion</h3>
                                <p className="mb-0 text-white">Providing health insurance and promoting physical & emotional well-being.</p>
                            </div>
                        </div>
                    </div>

                    {/* Economic empowerment */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="facility-item">
                            <div className="facility-icon bg-logo-green">
                                <span className="bg-logo-green"></span>
                                <i className="fa fa-tools fa-3x text-white"></i>
                                <span className="bg-logo-green"></span>
                            </div>
                            <div className="facility-text bg-logo-green">
                                <h3 className="text-white mb-3">Economic Empowerment</h3>
                                <p className="mb-0 text-white">Vocational and technical training to help orphans achieve financial independence.</p>
                            </div>
                        </div>
                    </div>

                    {/* Advocacy */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="facility-item">
                            <div className="facility-icon bg-logo-gold">
                                <span className="bg-logo-gold"></span>
                                <i className="fa fa-heartbeat fa-3x text-white"></i>
                                <span className="bg-logo-gold"></span>
                            </div>
                            <div className="facility-text bg-logo-gold">
                                <h3 className="text-white mb-3">Advocacy</h3>
                                <p className="mb-0 text-white">Community events and social media campaigns focused on orphan well-being.</p>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                        <div className="facility-item">
                            <div className="facility-icon bg-logo-green">
                                <span className="bg-logo-green"></span>
                                <i className="fa fa-graduation-cap fa-3x text-white"></i>
                                <span className="bg-logo-green"></span>
                            </div>
                            <div className="facility-text bg-logo-green">
                                <h3 className="text-white mb-3">Education</h3>
                                <p className="mb-0 text-white">We offer school materials and academic support to orphans in need.</p>
                            </div>
                        </div>
                    </div>

                    {/* Mentorship programs */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1.1s">
                        <div className="facility-item">
                            <div className="facility-icon bg-logo-gold">
                                <span className="bg-logo-gold"></span>
                                <i className="fa fa-user-friends fa-3x text-white"></i>
                                <span className="bg-logo-gold"></span>
                            </div>
                            <div className="facility-text bg-logo-gold">
                                <h3 className="text-white mb-3">Mentorship Programs</h3>
                                <p className="mb-0 text-white">We connect orphans with mentors to support their personal and career growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Facilities;
