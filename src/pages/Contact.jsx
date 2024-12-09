import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <span>Contact</span>
          <h2>Contact</h2>
          <p>Beauty Begins with a Conversation</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="info-item d-flex align-items-center">
                  <a href="tel:562-453-5272"><i className="icon bi bi-telephone flex-shrink-0"></i></a>
                  <div>
                    <h3 className="d-flex justify-content-start">Phone</h3>
                    <p>714.643.9204</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-item d-flex align-items-center">
                  <a href="mailto:info@mousewurx.com"><i className="bi bi-envelope flex-shrink-0"></i></a>
                  <div>
                    <h3 className="d-flex justify-content-start">Email<br /></h3>
                    <p>sococustomerservice1@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="300"> */}
          <form className="php-email-form" data-aos="fade-up" data-aos-delay="300">
            <div className="row gy-4">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="col-md-12 text-center">
                {/* <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div> */}
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="location section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Location</h2>
          {/* <p>All You Need to Know About TLSR</p> */}
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col" data-aos="fade-up" data-aos-delay="100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1965535834906!2d-117.92494740000001!3d33.88459139999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2b5fa88e94f3%3A0x29798cc16434f52d!2s1400%20N%20Harbor%20Blvd%20%23103%2C%20Fullerton%2C%20CA%2092835!5e0!3m2!1sen!2sus!4v1733686929093!5m2!1sen!2sus"
                style={{ border: 0, width: '100%', height: '370px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;