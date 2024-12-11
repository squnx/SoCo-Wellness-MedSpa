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
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-1">Botox</a>
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
                <div className="tab-pane active show" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Botox</h4>
                      <p className="fst-italic">Botox is a widely popular, non-surgical treatment designed to smooth out fine lines and wrinkles by temporarily relaxing the muscles that cause them. Perfect for areas such as the forehead, between the brows, and around the eyes, Botox offers a quick and effective solution for maintaining a youthful, refreshed appearance. The procedure is minimally invasive, with little to no downtime, allowing you to return to your daily routine immediately after treatment. Our skilled professionals will work with you to achieve natural-looking results, enhancing your features without looking overdone.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="/assets/images/services/facial-1.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Filler</h4>
                      <p className="fst-italic">Facial fillers are an excellent solution for restoring volume and fullness to areas of the face that may have lost elasticity or plumpness over time. Whether you're looking to add volume to the cheeks, smooth out smile lines, or enhance your lips, dermal fillers provide immediate results. Our range of fillers, including hyaluronic acid-based products, are safe and effective in rejuvenating the skin and giving your face a more youthful, contoured appearance. The procedure is quick, with minimal discomfort, and results can last anywhere from several months to over a year, depending on the treatment area.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="/assets/images/services/facial-2.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Sculptra</h4>
                      <p className="fst-italic">Sculptra is an injectable treatment that works beneath the skin to stimulate natural collagen production, helping to restore lost volume and smooth out wrinkles. Unlike traditional fillers, Sculptra provides gradual, natural-looking results over time as collagen builds in areas such as the cheeks, temples, and jawline. It's an ideal solution for addressing deeper wrinkles and volume loss. The results can last up to two years, offering long-term rejuvenation with minimal downtime, leaving you with a refreshed and youthful appearance.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="/assets/images/services/facial-3.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h4>Thread</h4>
                      <p className="fst-italic">Thread lifting is an innovative non-surgical treatment designed to lift and tighten sagging skin, creating a more youthful and rejuvenated appearance. This procedure involves the insertion of specialized threads into the skin, which gently lift and stimulate collagen production for a firmer, more lifted look. It's ideal for areas such as the jawline, cheeks, and neck, providing an instant lifting effect with long-lasting benefits. The procedure is minimally invasive, with little to no downtime, and results improve over time as your skin regenerates and tightens naturally.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="/assets/images/services/facial-3.jpg" alt="" className="img-fluid" />
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
                <ul>
                  <li>Botox</li>
                  <li>Filler</li>
                  <li>Sculptra</li>
                  <li>Thread</li>
                </ul>
                <div className="btn-wrap">
                  <h4><span className="na">$4500</span> $2500</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
              {/* <div className="pricing-item featured"> */}
              <div className="pricing-item">
                <h3>Single Item</h3>
                <ul>
                  <li>Thread</li>
                  <li>Face lift</li>
                </ul>
                <div className="btn-wrap">
                  <h4>$1200</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Single Item</h3>
                <ul>
                  <li>Botox</li>
                </ul>
                <div className="btn-wrap">
                  <h4>$10<span>/unit</span>, $800<span>/100 units</span></h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="pricing-item">
                <h3>Single Item</h3>
                <ul>
                  <li>PRP + MTS with SoCo solution</li>
                </ul>
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
          <p>All You Need to Know About Facial Aesthetic Design</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="faq-container">
                {facialData.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                ))}
              </div> */}
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
