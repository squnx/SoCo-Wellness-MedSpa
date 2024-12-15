import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <span>About Us</span>
          <h2>About Us</h2>
          <p>Our mission is to provide support for your beauty and health</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/about/about-us.jpg" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-8 content">
              <h4>Comprehensive Wellness and Women's Health Care</h4>
              <p>Our hormone therapy, IV therapy, and women's vaginal health care services have been expertly designed by our medical team in collaboration with Dr. Bo Y. Suh, a renowned specialist in hormones, stem cells, and infertility.</p>
              <p>Dr. Bo Y. Suh, M.D., is a distinguished OBGYN and Reproductive Endocrinology and Infertility Specialist. He holds esteemed credentials as a Fellow of the American College of Obstetricians and Gynecologists (FACOG) and a Fellow of the American College of Endocrinology (FACE). With 28 years of academic experience, Dr. Suh has served as a faculty member at UCLA, USC, and the University of Colorado, contributing extensively to the field of women's health.</p>
              <p className="mb-0">At SoCo, we are committed to serving each and every client with unparalleled care and dedication. Our mission is to empower you to feel beautiful, healthy, and happy—because your well-being is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section id="professionals" className="professionals section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Professionals</h2>
          <p>Expert Care by Our Skilled staffs</p>
        </div>
        {/* <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="member-img">
                  <img src="/assets/images/temp/about-450x450-man.png" className="img-fluid" alt="Terri Song" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Boyoung Suh</h4>
                  <span>M.D.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                  <img src="/assets/images/temp/about-450x450-woman.png" className="img-fluid" alt="Ivan Song" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Kate Jeong</h4>
                  <span>Nurse Practitioner</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="team-member">
                <div className="member-img">
                  <img src="/assets/images/temp/about-450x450-woman.png" className="img-fluid" alt="Terri Song" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Soojin Lee </h4>
                  <span>Nurse Practitioner</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div className="team-member">
                <div className="member-img">
                  <img src="/assets/images/about/terri_450x450.jpg" className="img-fluid" alt="Terri Song" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Terri Song</h4>
                  <span>Registered Nurses</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="container">

          <div className="row gy-4">

            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
                <i className="fas fa-user-md flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Boyoung Suh</span>
                  <p>M.D. - Lorem ipsum dolor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
                <i className="fas fa-user-nurse flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Kate Jeong</span>
                  <p>NP</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
              <i className="fas fa-user-nurse flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Soojin Lee</span>
                  <p>NP</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
              <i className="fas fa-user-nurse flex-shrink-0"></i>
                <div>
                  <span className="purecounter">Terri Song</span>
                  <p>RN</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
              <i className="fa-regular fa-user flex-shrink-0"></i>
                <div>
                  <span className="purecounter">First Last Name</span>
                  <p>Title</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
              <i className="fa-solid fa-user flex-shrink-0"></i>
                <div>
                  <span className="purecounter">First Last Name</span>
                  <p>Title</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
              <i className="fa-regular fa-user flex-shrink-0"></i>
                <div>
                  <span className="purecounter">First Last Name</span>
                  <p>COO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="professionals-item d-flex align-items-center w-100 h-100">
              <i className="fa-solid fa-user flex-shrink-0"></i>
                <div>
                  <span className="purecounter">First Last Name</span>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="testimonial section">
        <img src="/assets/images/bg-testimonial.jpg" className="testimonial-bg" alt="" />
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Heartfelt Stories from Our Valued Guests</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  loop={true}
                  speed={600}
                  autoplay={{
                    delay: 5000,
                  }}
                  slidesPerView="auto"
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/temp/about-450x450-man.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Lupe</h4>
                      <h3>Transformative Experience!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I've tried many medspa services before, but SoCo MedSpa stands out. Their TLSR combo completely rejuvenated my skin.!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Susan</h4>
                      <h3>Professional and Caring Staff</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>The team at SoCo is amazing. They take the time to explain everything and make you feel so comfortable. I've seen real results with their RF microneedling and  PRP treatment!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Michelle</h4>
                      <h3>Incredible Value!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I was amazed by how affordable their treatments are compared to other medspas. The quality of service is outstanding, and the results speak for themselves!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Jasmin</h4>
                      <h3>Customized Care</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>SoCo MedSpa truly listens to your concerns and provides tailored treatments. My skin has never looked better after the TLSR combo!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Esther</h4>
                      <h3>Absolutely Amazing Results!</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I've struggled with skin texture issues for years, but after trying the TLSR combo treatment, my skin has transformed. The RF microneedling, Ulthera ,MTS +soco solution and PRP were a game changer!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <img src="/assets/images/temp/about-450x450-woman.png" className="testimonial-img" alt="" />
                      <h4 className="mt-3">Unice</h4>
                      <h3>Affordable and Exceptional Care</h3>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>I couldn't believe how great the prices are for such high-quality treatments. SoCo MedSpa delivers excellent results without breaking the bank!</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;