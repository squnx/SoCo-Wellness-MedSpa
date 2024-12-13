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
                <div className="tab-pane active show" id="tabs-tab-0">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Tightening, Lifting, Skin Quality, Regeneration</h4>
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <img src="/assets/images/temp/tlsr.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Tightening</h4>
                      <p>Achieve firmer, smoother skin with our tightening treatments, designed to reduce the appearance of loose or sagging skin. Utilizing advanced technologies like radiofrequency and ultrasound, these treatments stimulate collagen production, resulting in tighter, more youthful-looking skin. Whether you're concerned about skin laxity around the face, neck, or body, our non-invasive solutions help restore the skin's natural firmness without downtime, leaving you with a refreshed, more contoured appearance.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <img src="/assets/images/temp/tightening.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Lifting</h4>
                      <p>Restore a youthful contour with our lifting treatments, specifically crafted to lift and firm areas that have lost elasticity. These non-invasive procedures work by stimulating the underlying tissues, promoting collagen and elastin production for a natural lift. Perfect for areas like the jawline, cheeks, and brows, our lifting treatments provide noticeable results without the need for surgery. Reclaim a more youthful, rejuvenated look with a treatment that lifts, defines, and smooths the skin.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <img src="/assets/images/temp/lifting.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Skin Quality</h4>
                      <p>Enhance the overall appearance and health of your skin with our skin quality treatments, designed to address common skin concerns such as dullness, uneven texture, and fine lines. Our treatments focus on improving skin tone, texture, and radiance by stimulating cell renewal and boosting collagen production. With regular treatments, you'll notice smoother, brighter skin with improved elasticity, creating a youthful glow that lasts. Achieve a natural, radiant complexion with our skin quality enhancement options.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <img src="/assets/images/temp/skin-quality.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Regeneration</h4>
                      <p>Revitalize and rejuvenate your skin with our skin regeneration treatments, which promote the natural healing and renewal of skin cells. By stimulating deep layers of the skin, these treatments help to reduce the signs of aging, repair damage from environmental stressors, and improve the overall health of your skin. With advanced techniques like microneedling, growth factors, and stem cell therapy, our skin regeneration services help restore your skin's youthful texture and tone, leaving it smoother, healthier, and more vibrant.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-sm-block">
                      <img src="/assets/images/temp/skin-regeneration.jpg" alt="" className="img-fluid" />
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
                    <li><i class="bi bi-check2-all"></i>Thermi smooth (monopolar)</li>
                    <li><i class="bi bi-check2-all"></i>Ulthera (500 lines)</li>
                    <li><i class="bi bi-check2-all"></i>Platelet-rich plasma (PRP)</li>
                    <li><i class="bi bi-check2-all"></i>MTS + SoCo solution</li>
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
                    <li><i class="bi bi-check2-all"></i>Scarlet (MRF)</li>
                    <li><i class="bi bi-check2-all"></i>Thermismooth (RF)</li>
                    <li><i class="bi bi-check2-all"></i>MTS with SOCo Solution</li>
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
                    <li><i class="bi bi-check2-all"></i>Ulthera (1000 lines)</li>
                    <li><i class="bi bi-check2-all"></i>MTS with SoCo solution</li>
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
                    <li><i class="bi bi-check2-all"></i>PRP + MTS with SoCo solution</li>
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
