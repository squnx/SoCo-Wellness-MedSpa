import React from 'react';
import facialData from './facialData.json';
import Accordion from 'react-bootstrap/Accordion';

const Facial = () => {
  return (
    <>
      {/* Facial Section */}
      <section id="facial" className="facial section">
        <div className="container section-title" data-aos="fade-up">
          <span>Facial Aesthetic Design</span>
          <h2>Facial Aesthetic Design</h2>
          <p>Botox | Filler | Sculptra | Thread</p>
        </div>
        <div className="container tabs" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-0">Facial Aesthetic Design</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-1">Botox</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">Filler</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">Sculptra</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-4">Thread</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-5">Skinvive</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-0">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Full-Face Contouring Using Botox, Fillers, Sculptra, and Thread Materials</h4>
                      <p>At SoCo, our team strives to provide artistic procedures that go beyond simple single treatments like Botox, fillers, or thread lifting. Each treatment is interconnected and designed holistically, considering various factors of the face to enhance its maximum beauty.</p>
                      <p>Our procedures are designed with meticulous attention to the golden ratio, proportional harmony, and facial symmetry, ensuring natural and balanced results. Each treatment is performed by a highly skilled and experienced professional.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-aesthetic.jpg" alt="Facial Aesthetic Design" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Effortless Elegance, Naturally Achieved</h4>
                      <p>Botox is a widely popular, non-surgical treatment designed to smooth out fine lines and wrinkles by temporarily relaxing the muscles that cause them. Perfect for areas such as the forehead, between the brows, and around the eyes, Botox offers a quick and effective solution for maintaining a youthful, refreshed appearance. The procedure is minimally invasive, with little to no downtime, allowing you to return to your daily routine immediately after treatment. Our skilled professionals will work with you to achieve natural-looking results, enhancing your features without looking overdone. Botox, fillers, Sculptra, and thread procedures utilize the refined aesthetic techniques of K-beauty to deliver maximum results.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-aesthetic-botox.jpg" alt="Botox" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Achieve a Youthful, Contoured Look</h4>
                      <p>Facial fillers are an excellent solution for restoring volume and fullness to areas of the face that may have lost elasticity or plumpness over time. Whether you're looking to add volume to the cheeks, smooth out smile lines, or enhance your lips, dermal fillers provide immediate results. Our range of fillers, including hyaluronic acid-based products, are safe and effective in rejuvenating the skin and giving your face a more youthful, contoured appearance. The procedure is quick, with minimal discomfort, and results can last from several months to over a year, depending on the treatment area. Botox, fillers, Sculptra, and thread procedures utilize the refined aesthetic techniques of K-beauty to deliver maximum results.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-aesthetic-filler.jpg" alt="Filler" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Boost Collagen, Revive Volume</h4>
                      <p>Sculptra is a biostimulatory injectable treatment used to stimulate collagen production and restore facial volume lost due to aging, weight loss, or other factors. Unlike traditional fillers, Sculptra provides gradual, natural-looking results over time as collagen builds in areas such as the cheeks, temples, and jawline. The results can last up to two years, offering long-term rejuvenation with minimal downtime, leaving you with a refreshed and youthful appearance.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-aesthetic-sculptra.jpg" alt="Sculptra" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Suture Thread Face Lifting</h4>
                      <p>Suture Thread Face Lifting (also known as Thread Lift) is a minimally invasive cosmetic procedure that uses dissolvable sutures to lift and tighten sagging facial skin. This treatment provides an immediate lifting effect while stimulating the body's natural collagen production, resulting in a more youthful appearance. Results can last up to 10-12 months, depending on individual factors.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-aesthetic-thread.jpg" alt="Thread" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Enhance Skin Smoothness and Radiance</h4>
                      <p>SKINVIVE™ by JUVÉDERM® injectable gel is a sterile, biodegradable, non-pyrogenic, viscoelastic, clear, colorless, homogeneous gel implant. It consists of hyaluronic acid (HA).</p>
                      <p>Skinvive is the first and only FDA-approved hyaluronic acid(HA) microdropplet injectable in the usa to improve skin smoothness of the cheeks. Increases skin smoothness and provide a lasting glow for up to 6 months with optimal treatment.</p>
                      {/* <p>SKINVIVE™ by JUVÉDERM® injectable gel is indicated for intradermal injection to improve skin smoothness of the cheeks in adults over the age of 21.</p> */}
                      <p>Skinvive works by injecting a small amount of hyaluronic acid (HA) directly into the skin's dermal layer to improve its overall texture and appearance SKINVIVE™ by JUVÉDERM® injectable gel is packaged for single-patient use.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-aesthetic-skinvive.jpg" alt="Skinvive" className="img-fluid" />
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
          <p>Facial Aesthetic Design Treatments Price</p>
        </div>
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-item">
                <h3>Facial Package</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Botox, Filler ,Sculptra, Thread</li>
                    <li><i className="bi bi-check2-all"></i>Pricing is determined by product usage and procedure complexity</li>
                    <li><i className="bi bi-check2-all"></i>Pricing will be finalized following consultation</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$1500 - $4500</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="pricing-item">
                <h3>Botox</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Xeomin or Jeuveau or Allergan</li>
                    <li><i className="bi bi-check2-all"></i>FDA Approved</li>
                    <li><i className="bi bi-check2-all"></i>Pricing will be finalized following consultation</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$7 - $10<span>/unit</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Filler</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Allergan Juvéderm or RHA or Restylane</li>
                    <li><i className="bi bi-check2-all"></i>FDA Approved</li>
                    <li><i className="bi bi-check2-all"></i>Pricing will be finalized following consultation</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$450<span>/cc</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Sculptra</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>3 Sessions of Sculptra</li>
                    <li><i className="bi bi-check2-all"></i>Galderma</li>
                    <li><i className="bi bi-check2-all"></i>FDA Approved</li>
                    <li><i className="bi bi-check2-all"></i>Pricing will be finalized following consultation</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$2100<span>/3 Sessions</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Thread</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Face lift</li>
                    <li><i className="bi bi-check2-all"></i>Pricing will be finalized following consultation</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$1500</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
              <span className="advanced">Special</span>
                <h3>Skinvive</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>FDA-approved hyaluronic acid (HA)</li>
                    <li><i className="bi bi-check2-all"></i>Skinvive by Juvederm</li>
                    <li><i className="bi bi-check2-all"></i>To boost hydration and improve skin smoothness</li>
                    <li><i className="bi bi-check2-all"></i>One syringe of skinvive</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">$600</span> $300</h4>
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
          <p>All You Need to Know About Facial Aesthetic Design</p>
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
                {facialData.map((faq, index) => (
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

export default Facial;
