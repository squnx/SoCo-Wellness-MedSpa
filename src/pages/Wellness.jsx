import React from 'react';
import wellnessData from './wellnessData.json';
import Accordion from 'react-bootstrap/Accordion';

const Wellness = () => {
  return (
    <>
      {/* Wellness Section */}
      <section id="tabs" className="tabs section">
        <div className="container section-title" data-aos="fade-up">
          <span>Wellness Program</span>
          <h2>Wellness Program</h2>
          <p>General Check Up | Vagina Health Care | Vaginal Volumizing Treatment | Weight Loss</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-0">Wellness Program</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-1">General Check Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">Vagina Health Care</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">Vaginal Volumizing Treatment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-4">Weight Loss</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-0">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Wellness Program</h4>
                      <p>Our Wellness Program is designed to support women's health with personalized services tailored to each stage of life. It includes a General Check-Up to assess overall health, as well as treatments for Vaginal Health Care and Vaginal Volumizing, using advanced therapies like PRP and Poly-L-Lactic Acid for rejuvenation. Additionally, our Weight Loss program offers FDA-approved medications and expert guidance to help achieve and maintain weight management goals. Our program provides comprehensive care to promote overall well-being and vitality.</p>
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
                      <h4>Woman's General Check Up</h4>
                      <p>The Woman's General Check-Up provides a comprehensive health evaluation tailored to women. It includes consultation, examination, and prescriptions, with medications available for purchase at the pharmacy. This check-up features blood tests, two ultrasound exams, and hormone testing, all conducted by specialized women's healthcare professionals.</p>
                      <p>Ultrasounds cover the abdomen, pelvis, breast, thyroid, carotid artery, and heart (echocardiogram), offering a thorough assessment to support your health and well-being.</p>
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
                      <h4>Wonam's Vagina Health Care</h4>
                      <p>Our Woman's Vaginal Health Care package offers a combination of PRP therapy, Thermiva treatments, and optional hormone therapy (separately priced). Designed to address a range of intimate health concerns, this package is priced at $3,300 for three sessions.</p>
                      <p>PRP therapy helps rejuvenate and enhance tissue health, while Thermiva utilizes radiofrequency technology to improve vaginal tightening, moisture, and overall comfort. Hormone therapy, available separately, can be added to support hormonal balance and optimize results. This comprehensive treatment plan is tailored to promote vaginal health and enhance overall well-being.</p>
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
                      <h4>Woman's Vaginal Volumizing Treatment</h4>
                      <p>The Woman's Vaginal Volumizing Treatment is priced at $2900 and is performed directly by a board-certified gynecologist. This procedure utilizes Poly-L-Lactic Acid, which stimulates collagen production to restore natural volume and elasticity to the vaginal area. The treatment is designed to enhance comfort, improve intimate health, and address concerns related to volume loss and elasticity. With professional care and expertise, this treatment aims to rejuvenate and support overall vaginal well-being.</p>
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
                      <h4>Weight Loss</h4>
                      <p>Our Weight Loss program is priced at $290, which includes consultation, prescription, and four injections per month. Alternatively, a consultation and prescription alone are available for $190. The program offers FDA-approved medications such as Mounjaro (Tirzepatide), Zepbound (Recaglutide), or Wegovy (Semaglutide) to support weight loss. These treatments are designed to help individuals achieve their weight loss goals by targeting appetite and metabolism, under the guidance of our experienced healthcare providers.</p>
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
          <p>Wellness Program Price</p>
        </div>
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-item">
                <h3>General Check Up</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Consultation</li>
                    <li><i className="bi bi-check2-all"></i>Examination</li>
                    <li><i className="bi bi-check2-all"></i>Prescription</li>
                    <li><i className="bi bi-check2-all"></i>Blood Tests</li>
                    <li><i className="bi bi-check2-all"></i>Two Ultrasound Exams</li>
                    <li><i className="bi bi-check2-all"></i>Hormone Testing</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$390</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              {/* <div className="pricing-item featured"> */}
              <div className="pricing-item">
                <h3>Vagina Health Care</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>PRP Therapy</li>
                    <li><i className="bi bi-check2-all"></i>Thermiva Treatments</li>
                    <li><i className="bi bi-check2-all"></i>Hormone Therapy (optional)</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$3300<span>/three sessions</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Vaginal Volumizing</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Performed by Gynecologist</li>
                    <li><i className="bi bi-check2-all"></i>Poly-L-Lactic Acid</li>
                    <li><i className="bi bi-check2-all"></i>Stimulates Collagen Production</li>
                    <li><i className="bi bi-check2-all"></i>Restores Volume & Elasticity</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$2900</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Weight Loss</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Consultation</li>
                    <li><i className="bi bi-check2-all"></i>Prescription</li>
                    <li><i className="bi bi-check2-all"></i>4 Injections/month</li>
                    <li><i className="bi bi-check2-all"></i>Mounjaro (Tirzepatide) or</li>
                    <li><i className="bi bi-check2-all"></i>Zepbound (Recaglutide) or</li>
                    <li><i className="bi bi-check2-all"></i>Wegovy (Semaglutide)</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$290, $190<span>/no injection</span></h4>
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
                {wellnessData.map((faq, index) => (
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

export default Wellness;
