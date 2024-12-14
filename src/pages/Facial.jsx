import React from 'react';
import facialData from './facialData.json';
import Accordion from 'react-bootstrap/Accordion';

const Facial = () => {
  return (
    <>
      {/* Facial Section */}
      <section id="tabs" className="tabs section">
        <div className="container section-title" data-aos="fade-up">
          <span>Facial Aesthetic Design</span>
          <h2>Facial Aesthetic Design</h2>
          <p>Botox | Filler | Sculptra | Thread</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
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
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-0">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Facial Aesthetic Design</h4>
                      <p>Our Facial Aesthetic Design section offers personalized treatments to enhance your natural beauty and rejuvenate your appearance. With options like Botox, Filler, Sculptra, and Thread, we focus on smoothing wrinkles, restoring volume, and sculpting facial contours.</p>
                      <p>Each treatment is tailored to your unique goals, ensuring subtle, natural-looking results. Performed with precision and care, our minimally invasive procedures help you look and feel your best with confidence.</p>
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
                      <h4>Botox</h4>
                      <p>Botox is a widely popular, non-surgical treatment designed to smooth out fine lines and wrinkles by temporarily relaxing the muscles that cause them. Perfect for areas such as the forehead, between the brows, and around the eyes, Botox offers a quick and effective solution for maintaining a youthful, refreshed appearance. The procedure is minimally invasive, with little to no downtime, allowing you to return to your daily routine immediately after treatment. Our skilled professionals will work with you to achieve natural-looking results, enhancing your features without looking overdone.</p>
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
                      <h4>Filler</h4>
                      <p>Facial fillers are an excellent solution for restoring volume and fullness to areas of the face that may have lost elasticity or plumpness over time. Whether you're looking to add volume to the cheeks, smooth out smile lines, or enhance your lips, dermal fillers provide immediate results. Our range of fillers, including hyaluronic acid-based products, are safe and effective in rejuvenating the skin and giving your face a more youthful, contoured appearance. The procedure is quick, with minimal discomfort, and results can last anywhere from several months to over a year, depending on the treatment area.</p>
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
                      <h4>Sculptra</h4>
                      <p>Sculptra is an injectable treatment that works beneath the skin to stimulate natural collagen production, helping to restore lost volume and smooth out wrinkles. Unlike traditional fillers, Sculptra provides gradual, natural-looking results over time as collagen builds in areas such as the cheeks, temples, and jawline. It's an ideal solution for addressing deeper wrinkles and volume loss. The results can last up to two years, offering long-term rejuvenation with minimal downtime, leaving you with a refreshed and youthful appearance.</p>
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
                      <h4>Thread</h4>
                      <p>Thread lifting is an innovative non-surgical treatment designed to lift and tighten sagging skin, creating a more youthful and rejuvenated appearance. This procedure involves the insertion of specialized threads into the skin, which gently lift and stimulate collagen production for a firmer, more lifted look. It's ideal for areas such as the jawline, cheeks, and neck, providing an instant lifting effect with long-lasting benefits. The procedure is minimally invasive, with little to no downtime, and results improve over time as your skin regenerates and tightens naturally.</p>
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
          <p>Facial Aesthetic Design Treatment Price</p>
        </div>
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-item">
                <span className="advanced">Special</span>
                <h3>Facial Package</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Botox</li>
                    <li><i className="bi bi-check2-all"></i>Filler</li>
                    <li><i className="bi bi-check2-all"></i>Sculptra</li>
                    <li><i className="bi bi-check2-all"></i>Thread</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4><span className="na">$4500</span> $2500</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              {/* <div className="pricing-item featured"> */}
              <div className="pricing-item">
                <h3>Single Item</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Thread</li>
                    <li><i className="bi bi-check2-all"></i>Face lift</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$1200</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Single Item</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Botox</li>
                    <li><i className="bi bi-check2-all"></i>Jeuveau or Allergon or Hugel</li>
                    <li><i className="bi bi-check2-all"></i>FDA approved</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$10<span>/unit</span>, $800<span>/100 units</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Single Item</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Dermal  Fillers</li>
                    <li><i className="bi bi-check2-all"></i>Allergan Juvederm  or  RHA  or Restylane</li>
                    <li><i className="bi bi-check2-all"></i>FDA approved</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$450<span>/cc</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Single Item</h3>
                <div className="pricing-detail">
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Dermal  Fillers</li>
                    <li><i className="bi bi-check2-all"></i>3 Sessions of Sculptra</li>
                    <li><i className="bi bi-check2-all"></i>Galderma</li>
                    <li><i className="bi bi-check2-all"></i>FDA approved</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <h4>$2100</h4>
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
