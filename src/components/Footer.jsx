import React from 'react';

function Footer() {
    return (
        <div className="container-fluid bg-logo-green text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Get In Touch</h3>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Kigali, Rwanda</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+250 787 897 775</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>hopeforgreatness.10@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">OUR VALUES</h3>
                        <a className="btn btn-link text-white-50" href="#about">Integrity</a>
                        <a className="btn btn-link text-white-50" href="#contact">Compassion</a>
                        <a className="btn btn-link text-white-50" href="#programs">Hope</a>
                        <a className="btn btn-link text-white-50" href="#">Resilience</a>
                        <a className="btn btn-link text-white-50" href="#">Empowerment</a>
                        <a className="btn btn-link text-white-50" href="#">Inclusivity</a>
                        <a className="btn btn-link text-white-50" href="#">Collaboration</a>
                    </div>

                    {/* Our Services */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">What we do</h3>
                        <ul className="list-unstyled text-white-50">
                            <li className="mb-2"><i className="fa fa-check-circle me-2 text-logo-gold"></i> Educational Support</li>
                            <li className="mb-2"><i className="fa fa-check-circle me-2 text-logo-gold"></i> Mentorship Programs</li>
                            <li className="mb-2"><i className="fa fa-check-circle me-2 text-logo-gold"></i> Life Skills Training</li>
                            <li className="mb-2"><i className="fa fa-check-circle me-2 text-logo-gold"></i> Nutrition & Wellness</li>
                            <li className="mb-2"><i className="fa fa-check-circle me-2 text-logo-gold"></i> Startup Resource Provision</li>
                        </ul>
                    </div>

                    {/* Join Our Mission */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Join Our Mission</h3>
                        <p>
                            Be a part of our journey to empower orphans aged 6–18. Sign up to receive updates on our programs, success stories, and opportunities to make a difference.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom text-logo-gold" href="#">Hope For Greatness</a>, All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
