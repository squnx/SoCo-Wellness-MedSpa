import React from 'react';
import kmedicalData from './kmedicalData.json';
import Accordion from 'react-bootstrap/Accordion';

const Kmedical = () => {
  return (
    <>
      {/* Wellness Section */}
      <section id="tabs" className="tabs section">
        <div className="container section-title" data-aos="fade-up">
          <span>K-Medical</span>
          <h2>K-Medical</h2>
          <p>K-Medical | Other Treatments</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-0">K-Medical</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-1">Liposuction</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">Acne</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">IV Therapy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-4">Hair Transplantation</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-0">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>K-Medical Aesthetic Skin Care</h4>
                      <p>Our K-Medical approach highlights the renowned expertise and innovation of Korean medical practices, known for their precision and patient-focused care. At the heart of this approach is our specialized 3-Step Treatment Protocol, designed to deliver effective and personalized solutions for your health and well-being.</p>
                      <p>From diagnosis to treatment and follow-up, our protocol ensures comprehensive care that combines advanced techniques with a deep understanding of individual needs. Experience the unique benefits of Korean medical excellence, crafted to support your journey toward optimal health.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/temp/tlsr.jpg" alt="" className="img-fluid" />
                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                          <span className="text-light p-2 fs-1">TBD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Liposuction</h4>
                      <p>Our Liposuction service offers a targeted solution for removing small volumes of unwanted fat while promoting rejuvenation and contouring. This specialized procedure removes 500-800ml of fat and includes a cutting-edge MSC (Mesenchymal Stem Cell) injection to enhance healing and tissue regeneration.</p>
                      <p>Performed by a highly skilled liposuction specialist, this treatment ensures precision and safety while delivering natural and refined results. Achieve a slimmer, more sculpted appearance with our advanced liposuction technique tailored to your individual goals.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-1.jpg" alt="" className="img-fluid" />
                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                          <span className="text-light p-2 fs-1">TBD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Acne</h4>
                      <p>Our Acne Care program is designed to address stubborn and persistent acne with a comprehensive and effective approach. This treatment plan includes a detailed consultation, personalized prescription, a two-month supply of medication, and advanced therapies like Scarlet (MRF) and LED Therapy.</p>
                      <p>By combining expert diagnosis with cutting-edge technology, we target the root causes of acne to restore your skin's health and clarity. Achieve smoother, clearer skin with our tailored treatments, ensuring long-lasting results and renewed confidence.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-2.jpg" alt="" className="img-fluid" />
                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                          <span className="text-light p-2 fs-1">TBD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>IV Therapy</h4>
                      <p>Our IV Therapy provides a premium wellness experience tailored exclusively for our VIP clients. This service includes a range of rejuvenating and health-boosting infusions, such as Garlic Injection, Cinderella Injection, Whitening Injection, Glutathione Injection, NAD, and Vitamin C.</p>
                      <p>Designed to enhance vitality, promote glowing skin, and support overall wellness, each session is carefully administered to deliver optimal results. Experience the benefits of personalized care and advanced therapies in a luxurious and private setting.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-3.jpg" alt="" className="img-fluid" />
                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                          <span className="text-light p-2 fs-1">TBD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Hair Transplantation</h4>
                      <p>Our Hair Transplantation service offers a comprehensive solution for those seeking to restore their natural hair. The procedure allows for the transplantation of up to 3,000 grafts, priced at $8,000. For cases exceeding 3,000 grafts, additional grafts are charged at $3 each.</p>
                      <p>This advanced procedure is performed by a team of medical professionals, including a specialized doctor, ensuring precision and optimal results. With careful planning and expert execution, we help you achieve fuller, natural-looking hair, boosting both confidence and appearance.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-3.jpg" alt="" className="img-fluid" />
                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                          <span className="text-light p-2 fs-1">TBD</span>
                        </div>
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
          <p>K-Medical &amp; Other Treatments Price</p>
        </div>
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-item">
                <h3>K-Medical</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Deep Cleansing</li>
                    <li><i className="bi bi-check2-all"></i>Soft Peeling</li>
                    <li><i className="bi bi-check2-all"></i>K-Style Lymphatic Massage</li>
                    <li><i className="bi bi-check2-all"></i>FDA-Cleared LED Bed</li>
                    <li><i className="bi bi-check2-all"></i>LED Facial Medical Devices</li>
                    <li><i className="bi bi-check2-all"></i>3-Step Treatment Protocol</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$160</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Liposuction</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Small -Volume Liposuction (500-800ml)</li>
                    <li><i className="bi bi-check2-all"></i>MSC Injection</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$5500</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="pricing-item">
                <h3>Acne</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Consultation</li>
                    <li><i className="bi bi-check2-all"></i>Prescription</li>
                    <li><i className="bi bi-check2-all"></i>Medication (2month)</li>
                    <li><i className="bi bi-check2-all"></i>Scarlet (MRF)</li>
                    <li><i className="bi bi-check2-all"></i>LED Therapy</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$2500<span>/four sessions</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>IV Therapy</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Garlic Injection</li>
                    <li><i className="bi bi-check2-all"></i>Cinderella Injection</li>
                    <li><i className="bi bi-check2-all"></i>Whitening Injection</li>
                    <li><i className="bi bi-check2-all"></i>Glutathione Injection</li>
                    <li><i className="bi bi-check2-all"></i>NAD</li>
                    <li><i className="bi bi-check2-all"></i>Vitamin C</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$250<span>/a session</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Hair Transplantation</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Up to 3,000 grafts</li>
                    <li><i className="bi bi-check2-all"></i>Additional $3 per graft</li>
                    <li><i className="bi bi-check2-all"></i>Performed by specialists</li>
                    <li><i className="bi bi-check2-all"></i>Restoring natural hair growth</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$8000</h4>
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
          <p>All You Need to Know About Wellness Program</p>
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
                {kmedicalData.map((faq, index) => (
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

export default Kmedical;
