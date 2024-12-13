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
