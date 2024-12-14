import React from 'react';
import tlsrData from './tlsrData.json';
import Accordion from 'react-bootstrap/Accordion';

const TLSR = () => {
  return (
    <>
      {/* About Us Section */}
      {/* <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <span>TLSR</span>
          <h2>TLSR</h2>
          <p>Tightening | Lifting | Skin Quality | Skin Regeneration</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/bg-services.jpg" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-8 content">
              <h4>Necessitatibus eius consequatur ex aliquid fuga eum</h4>
              <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
              <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
              <p className="mb-0">Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* TLSR Section */}
      <section id="tlsr" className="tlsr tabs section">
        <div className="container section-title" data-aos="fade-up">
          <span>TLSR</span>
          <h2>TLSR</h2>
          <p>Tightening | Lifting | Skin Quality | Regeneration</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
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
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.</p>
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
                      <h4>Tightening</h4>
                      <p>Achieve firmer, smoother skin with our tightening treatments, designed to reduce the appearance of loose or sagging skin. Utilizing advanced technologies like radiofrequency and ultrasound, these treatments stimulate collagen production, resulting in tighter, more youthful-looking skin. Whether you're concerned about skin laxity around the face, neck, or body, our non-invasive solutions help restore the skin's natural firmness without downtime, leaving you with a refreshed, more contoured appearance.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/temp/tightening.jpg" alt="" className="img-fluid" />
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
                      <h4>Lifting</h4>
                      <p>Restore a youthful contour with our lifting treatments, specifically crafted to lift and firm areas that have lost elasticity. These non-invasive procedures work by stimulating the underlying tissues, promoting collagen and elastin production for a natural lift. Perfect for areas like the jawline, cheeks, and brows, our lifting treatments provide noticeable results without the need for surgery. Reclaim a more youthful, rejuvenated look with a treatment that lifts, defines, and smooths the skin.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/temp/lifting.jpg" alt="" className="img-fluid" />
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
                      <h4>Skin Quality</h4>
                      <p>Enhance the overall appearance and health of your skin with our skin quality treatments, designed to address common skin concerns such as dullness, uneven texture, and fine lines. Our treatments focus on improving skin tone, texture, and radiance by stimulating cell renewal and boosting collagen production. With regular treatments, you'll notice smoother, brighter skin with improved elasticity, creating a youthful glow that lasts. Achieve a natural, radiant complexion with our skin quality enhancement options.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/temp/skin-quality.jpg" alt="" className="img-fluid" />
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
                      <h4>Regeneration</h4>
                      <p>Revitalize and rejuvenate your skin with our skin regeneration treatments, which promote the natural healing and renewal of skin cells. By stimulating deep layers of the skin, these treatments help to reduce the signs of aging, repair damage from environmental stressors, and improve the overall health of your skin. With advanced techniques like microneedling, growth factors, and stem cell therapy, our skin regeneration services help restore your skin's youthful texture and tone, leaving it smoother, healthier, and more vibrant.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <div className="position-relative">
                        <img src="/assets/images/temp/skin-regeneration.jpg" alt="" className="img-fluid" />
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
          <p>TLSR Treatment Price</p>
        </div>
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-item">
                <span className="advanced">Special</span>
                <h3>TLSR</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Thermi smooth (monopolar)</li>
                    <li><i className="bi bi-check2-all"></i>Ulthera (500 lines)</li>
                    <li><i className="bi bi-check2-all"></i>Platelet-rich plasma (PRP)</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SoCo solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">R.S.P:$2500</span> $1550</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              {/* <div className="pricing-item featured"> */}
              <div className="pricing-item">
                <h3>Single Item</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Scarlet (MRF)</li>
                    <li><i className="bi bi-check2-all"></i>Thermismooth (RF)</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SOCo Solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$800</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Single Item</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Ulthera (1000 lines)</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SoCo solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$2100</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Single Item</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Hair Care</li>
                    <li><i className="bi bi-check2-all"></i>PRP</li>
                    <li><i className="bi bi-check2-all"></i>MTS with SoCo solution</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$800</h4>
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
