import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        if (window.$ && window.$('.header-carousel').owlCarousel) {
            window.$('.header-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                animateOut: 'fadeOut',
                dots: true,
                nav: false
            });
        }
    }, []);

    return (
        <>
            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5">
                <div className="owl-carousel header-carousel position-relative">
                    {/* Slide 1 */}
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="Assets/img/carousel-1.jpg" alt="Hope for Greatness Banner 1" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-2 text-white animated slideInDown mb-4">
                                            Hope For Greatness
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            A community-based organization empowering orphans aged 6–18 to rise and thrive through well-being, education, and mentorship.
                                        </p>
                                        <a href="#about" className="btn bg-logo-gold text-white rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                                            Learn More
                                        </a>
                                        <a href="#programs" className="btn bg-logo-green text-white rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                                            Our Programs
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="Assets/img/carousel-2.jpg" alt="Hope for Greatness Banner 2" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-2 text-white animated slideInDown mb-4">
                                            Unlocking Full Potential
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            Through training, wellness, empowerment, advocacy, education and mentorship, we equip orphans with tools and startup resources for a confident and purposeful life.
                                        </p>
                                        <a href="#about" className="btn bg-logo-gold text-white rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                                            Get Involved
                                        </a>
                                        <a href="#contact" className="btn bg-logo-green text-white rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}

           
{/* Advanced Program Overview Section */}
<div className="container-fluid" id="home-overview">
  <div className="container text-center">
    <h2 className="mb-3 text-logo-green">Empowering Orphans to Rise and Thrive</h2>
    <p className="lead mx-auto" style={{ maxWidth: '750px' }}>
      Hope For Greatness is a community-based organization that supports orphans aged 6–18 in achieving well-being,
      education, and life success.
    </p>

    <div className="row g-4 mt-4">
      {[
        {
          title: 'Capacity Building Training',
          desc: 'Leadership, communication, financial literacy, and entrepreneurship workshops to build skills and mindset.'
        },
        {
          title: 'Wellness Promotion',
          desc: "We ensure orphans' physical and emotional health through insurance and holistic care."
        },
        {
          title: 'Economic Empowerment',
          desc: 'Vocational and technical training to help orphans become financially independent.'
        },
        {
          title: 'Advocacy',
          desc: 'Community outreach and social media campaigns to raise awareness and drive change.'
        },
        {
          title: 'Education',
          desc: 'We provide school materials and academic support to encourage learning.'
        },
        {
          title: 'Mentorship Programs',
          desc: 'We connect orphans with caring mentors who support their growth and confidence.'
        }
      ].map((item, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="program-card">
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        </>
    );
}

export default Home;
