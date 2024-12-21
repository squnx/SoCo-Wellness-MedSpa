import React from 'react';
import kadvancedData from './kadvancedData.json';
import Accordion from 'react-bootstrap/Accordion';

const Kadvanced = () => {
  return (
    <>
      {/* K-Advanced Section */}
      <section id="k-advanced" className="k-advanced section">
        <div className="container section-title" data-aos="fade-up">
          <span>K-Advanced</span>
          <h2>K-Advanced</h2>
          <p>Step 1 | Step 2 | Step 3</p>
        </div>
        <div className="container tabs" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-0">K-Advanced</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-1">Step 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">Step 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">Step 3</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-0">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>K-Advanced Aesthetic Skin Care</h4>
                      <p>This 3-step treatment consists of Deep Cleansing and Soft Peeling, Korean-Style Lymphatic Massage, and FDA-Cleared LED Bed and LED Facial Medical Device. The treatment takes approximately 1 hour and 30 minutes, and various facial masks with unique ingredients, as well as serums for dramatic effects, are also used. This treatment helps improve skin tone, texture, and elasticity while enhancing clarity, brightness, and radiance, and maintaining a healthy oil and moisture balance.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/k-advanced.jpg" alt="K-Advanced Aesthetic Skin Care" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Deep Cleansing and Soft Peeling</h4>
                      <p>Our treatment begins with a thorough cleansing to remove impurities, makeup, and excess oil, creating a clean foundation for the next steps. This is followed by a gentle exfoliation process to slough away dead skin cells, revealing a smoother and more vibrant complexion. By unclogging pores and minimizing the appearance of fine lines, this treatment improves overall skin texture. Ultimately, this process helps make your skin clearer, brighter, and more radiant, leaving you with a refreshed and rejuvenated look.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/k-advanced-1.jpg" alt="Deep Cleansing and Soft Peeling" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Korean-Style Lymphatic Massage</h4>
                      <p>This rejuvenating massage technique, inspired by traditional Korean practices, is designed to stimulate the lymphatic system. By gently massaging the skin, it promotes lymphatic drainage, helping to reduce puffiness, improve circulation, and eliminate toxins. This treatment helps improve skin tone, texture, and elasticity, leaving the skin feeling refreshed, revitalized, and more youthful.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/k-advanced-2.jpg" alt="Korean-Style Lymphatic Massage" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Advanced Light Therapy</h4>
                      <p>The final step in our K-Advanced treatment involves advanced light therapy using FDA-cleared LED devices.</p>
                      <p>LED Therapy (Light Emitting Diode Therapy) is a non-invasive and non-thermal light therapy method that uses specific wavelengths of light to promote skin regeneration and improvement. LED Therapy is used to address various skin concerns and improve skin health, offering a range of benefits depending on the specific wavelength of light used.</p>
                      <p>During the BED LED and Facial LED treatments, various facial masks with unique ingredients and serums are provided, allowing you to enjoy a comfortable and relaxing experience.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/k-advanced-3.jpg" alt="Advanced Light Therapy" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>K-Advanced Price</p>
        </div>
        <div className="container">
          <div className="row justify-content-center gy-3">
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-item">
                <h3>K-Advanced</h3>
                <div className="pricing-detail">
                  <ul>
                  <li><i className="bi bi-check2-all"></i>3-Step Treatment Protocol</li>
                    <li><i className="bi bi-check2-all"></i>Deep Cleansing</li>
                    <li><i className="bi bi-check2-all"></i>Soft Peeling</li>
                    <li><i className="bi bi-check2-all"></i>K-Style Lymphatic Massage</li>
                    <li><i className="bi bi-check2-all"></i>FDA-Cleared LED Bed</li>
                    <li><i className="bi bi-check2-all"></i>LED Facial Medical Devices</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$210</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>All You Need to Know About K-Advanced Aesthetic Skin Care</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-4 d-none d-lg-block" data-aos="fade-up">
              <h2>Have a question?</h2>
              <h4>Check out the FAQ!</h4>
              <div class="faq-arrow" data-aos="fade-up" data-aos-delay="200">
                <svg class="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <Accordion className="faq-container">
                {kadvancedData.map((faq, index) => (
                  <Accordion.Item key={index} className="faq-item" eventKey={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body className="faq-content">
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Kadvanced;
