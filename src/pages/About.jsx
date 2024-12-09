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
              <p>At our med spa, we are committed to empowering women with personalized and innovative health solutions. Our hormone therapy, IV therapy, and vaginal health care services have been meticulously crafted to address the unique needs of women at every stage of life.</p>
              <p>In collaboration with Dr. Bo Young Suh, a distinguished expert in hormones, stem cell therapy, and infertility, our treatments are rooted in cutting-edge research and tailored to support optimal health and vitality. Dr. Suh's extensive expertise ensures that each service is delivered with precision, care, and a focus on achieving long-lasting results.</p>
              <p className="mb-0">Whether you're seeking to restore balance through hormone therapy, enhance wellness with nutrient-rich IV therapy, or improve intimate health with advanced vaginal care treatments, we are here to guide you on your journey to feeling your best. At our med spa, your well-being is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section id="professionals" className="professionals section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Professionals</h2>
          <p>Expert Care by Our Skilled Registered Nurses</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
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
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                <img src="/assets/images/about/ivan_450x450.jpg" className="img-fluid" alt="Ivan Song" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>Ivan Song</h4>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="testimonial section">
        <img src="/assets/images/bg-testimonial.jpg" className="testimonial-bg" alt="" />
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Heartfelt Stories from Our Clients</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/about/terri_140x140.jpg" className="testimonial-img" alt="Terri Song" />
                <h3>Terri Song</h3>
                <h4>RN @ UCI Medical Center</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/about/ivan_450x450.jpg" className="testimonial-img" alt="Terri Song" />
                <h3>Ivan Song</h3>
                <h4>Software Engineer</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/about/terri_140x140.jpg" className="testimonial-img" alt="Terri Song" />
                <h3>Terri Song</h3>
                <h4>RN @ UCI Medical Center</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/about/terri_140x140.jpg" className="testimonial-img" alt="Terri Song" />
                <h3>Terri Song</h3>
                <h4>RN @ UCI Medical Center</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src="/assets/images/about/terri_140x140.jpg" className="testimonial-img" alt="Terri Song" />
                <h3>Terri Song</h3>
                <h4>RN @ UCI Medical Center</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </section>
    </>
  );
}

export default About;