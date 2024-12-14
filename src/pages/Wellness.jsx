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
