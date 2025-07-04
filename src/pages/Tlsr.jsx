import React from 'react';
import tlsrData from './tlsrData.json';
import Accordion from 'react-bootstrap/Accordion';

const TLSR = () => {
  return (
    <>
      {/* TLSR Section */}
      <section id="tlsr" className="tlsr section">
        <div className="container section-title" data-aos="fade-up">
          <span>TLSR</span>
          <h2>TLSR</h2>
          <p>Tightening | Lifting | Skin Quality | Regeneration</p>
        </div>
        <div className="container tabs" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-0">TLSR</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-1"><span>T</span>ightening</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2"><span>L</span>ifting</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3"><span>S</span>kin Quality</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-4"><span>R</span>egeneration</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-0">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Tightening, Lifting, Skin Quality, Regeneration</h4>
                      <p>TLSR is a natural, combination treatment based on medical theory, designed for tightening, lifting, improving skin quality, and skin regeneration. We specialize in TLSR procedures and take pride in the results we deliver. Experience something amazing. You won't be disappointed.</p>
                      <p>Experience the transformative benefits of TLSR at an incredible value&mdash;four treatments for the price of one. Rediscover your confidence with skin that looks and feels rejuvenated. You won't be disappointed.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/tlsr.jpg" alt="TLSR" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Radiofrequency Microneedling for tightening treatment</h4>
                      <p>Radiofrequency Microneedling treatment can help with tightening, lifting, and skin rejuvenation by reducing pores, improving scars, skin tone, texture, and overall skin health.</p>
                      <p>Scarlet is a safe RF system treatment with no downtime and no side effects. It effectively targets almost any skin tissue, allowing patients to resume their daily activities immediately after treatment. Unlike other microneedle treatments, it causes no bleeding or sensitivity. The Scarlet machine is FDA-cleared.</p>
                      <p>ThermiSmooth  is a monopolar RF device, ideal for those who are afraid of needle-based procedures and seek skin tightening treatments. It is an FDA-cleared medical device.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/tlsr-tightening.jpg" alt="Tightening" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Ultherapy for lifting treatment</h4>
                      <p><strong>Ulthera Lifting</strong>, also known as Ultherapy, is a non-invasive cosmetic procedure that uses focused ultrasound technology to lift and tighten the skin on the face, neck, and décolletage. It targets the deeper layers of the skin, including the foundational layer often addressed in surgical facelifts, without cutting or disrupting the skin's surface.</p>
                      <p>Ultherapy is the only FDA-cleared procedure to non-invasively lift the skin.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/tlsr-lifting.jpg" alt="Lifting" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>MTS with SoCo Solution for improving skin quality</h4>
                      <p>MTS (Microneedle Therapy System) treatment, also known as Microneedling, is a minimally invasive procedure that uses fine needles to create micro-injuries in the skin. These micro-injuries stimulate the skin's natural healing process, encouraging the production of collagen and elastin, which are essential for skin rejuvenation.</p>
                      <p>The most important aspect of MTS (Microneedle Therapy System) treatment is the MTS solution. we are committed to achieving the best results by using high-quality products that are applied to the skin surface during the procedure. </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/tlsr-skin-quality.jpg" alt="Skin Quality" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>PRP for skin rejuvenation treatment</h4>
                      <p>PRP (Platelet-Rich Plasma) treatment is a procedure that uses a concentrated form of the patient's own blood to promote healing and rejuvenation in various areas of the body.</p>
                      <p>It involves concentrating platelets, which are rich in growth factors and proteins that help in tissue repair and regeneration.</p>
                      <p>Due to these roles of the growth factors, we can expect many positive outcomes such as even skin tone, improved skin texture, healthier skin, and enhanced skin elasticity. To experience the various benefits of PRP, it is recommended to undergo this treatment 3-4 times a year. For anti-aging, we strongly recommend regularly injecting growth factors into your skin through PRP treatment every year.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/tlsr-regeneration.jpg" alt="Regeneration" className="img-fluid" />
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
          <p>TLSR Treatment Price</p>
        </div>
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="pricing-item featured"> */}
              <div className="pricing-item">
                <span className="advanced">Special</span>
                <h3>TLSR</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Thermi Smooth (Monopolar RF) or Scarlet(Bipolar Rf)</li>
                    <li><i className="bi bi-check2-all"></i>Ulthera (400 Lines)</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SoCo Solution</li>
                    <li><i className="bi bi-check2-all"></i>Platelet-Rich Plasma (PRP)</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">$3500</span> $2850</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="pricing-item">
                <span className="advanced">Special</span>
                <h3>Tightening</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Scarlet (Bipolar RF) or Thermismooth (Monopolar RF)</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SOCo Solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">$1200</span> $800</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <span className="advanced">Special</span>
                <h3>Lifting</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Ulthera (1000 Lines)</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SoCo Solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">$2800</span> $2400</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <span className="advanced">Special</span>
                <h3>Skin Quality</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>MTS with SoCo Solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">$400</span> $300</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <span className="advanced">Special</span>
                <h3>Regeneration</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>PRP (Platelet- Rich Plasma )</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SoCo Solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">$1200</span> $800</h4>
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
          <p>All You Need to Know About TLSR</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 d-none d-lg-block" data-aos="fade-up">
              <h2>Have a question?</h2>
              <h4>Check out the FAQ!</h4>
              <div className="faq-arrow" data-aos="fade-up" data-aos-delay="200">
                <svg className="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <Accordion className="faq-container">
                {tlsrData.map((faq, index) => (
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

export default TLSR;
