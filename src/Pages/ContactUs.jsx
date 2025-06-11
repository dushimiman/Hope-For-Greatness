import React from 'react';

function ContactUs() {
    return (
        <div className="container-xxl py-5" id="contact">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-3 text-logo-green">Get In Touch</h1>
                    <p className="text-logo-text">
                        We’d love to hear from you. Reach out for questions, support, or opportunities to partner with Hope For Greatness.
                    </p>
                </div>

                <div className="row g-4 mb-5">
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                             style={{ width: '75px', height: '75px' }}>
                            <i className="fa fa-map-marker-alt fa-2x text-logo-green"></i>
                        </div>
                        <h6 className="text-logo-text">Kigali, Rwanda</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                             style={{ width: '75px', height: '75px' }}>
                            <i className="fa fa-envelope-open fa-2x text-logo-green"></i>
                        </div>
                        <h6 className="text-logo-text">greatness.10@gmail.com</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                             style={{ width: '75px', height: '75px' }}>
                            <i className="fa fa-phone-alt fa-2x text-logo-green"></i>
                        </div>
                        <h6 className="text-logo-text">+250 787 897 775</h6>
                    </div>
                </div>

                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here"
                                                    id="message" style={{ height: '100px' }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn bg-logo-green text-white w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <iframe
                                    className="position-relative rounded w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99349.0875868742!2d30.0000!3d-1.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5d503e3d5eb%3A0x13aa331b37d93ae3!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1603794290143"
                                    frameBorder="0"
                                    style={{ minHeight: '400px', border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                    title="Kigali Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
