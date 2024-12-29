import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Promos = () => {
  useEffect(() => {
    // Initialize GLightbox
    GLightbox({
      selector: '.glightbox',
    });
  }, []);

  const slidesData = [
    // {
    //   href: "/assets/images/gallery/gallery-1-after.jpg",
    //   dataGallery: "before-after",
    //   dataTitle: "Before and After - 1",
    //   src: "/assets/images/gallery/gallery-1.jpg",
    //   alt: "Gallery Image 1",
    // },
    {
      href: "/assets/images/gallery/gallery-acne.jpg",
      dataGallery: "before-after",
      dataTitle: "Achieve Healthier, Smoother Skin",
      src: "/assets/images/gallery/gallery-acne.jpg",
      alt: "Achieve Healthier, Smoother Skin",
    },
    {
      href: "/assets/images/gallery/gallery-face-mask.jpg",
      dataGallery: "before-after",
      dataTitle: "Woman with a face mask",
      src: "/assets/images/gallery/gallery-face-mask.jpg",
      alt: "Woman with a face mask",
    },
    {
      href: "/assets/images/gallery/gallery-colored-powders.jpg",
      dataGallery: "before-after",
      dataTitle: "Bowls of different colored powders",
      src: "/assets/images/gallery/gallery-colored-powders.jpg",
      alt: "Bowls of different colored powders",
    },
    {
      href: "/assets/images/gallery/gallery-k-beauty.jpg",
      dataGallery: "before-after",
      dataTitle: "Proud of K-Beauty",
      src: "/assets/images/gallery/gallery-k-beauty.jpg",
      alt: "Proud of K-Beauty",
    },
    {
      href: "/assets/images/gallery/gallery-prp.jpg",
      dataGallery: "before-after",
      dataTitle: "PRP for skin rejuvenation treatment",
      src: "/assets/images/gallery/gallery-prp.jpg",
      alt: "PRP for skin rejuvenation treatment",
    },
    {
      href: "/assets/images/gallery/gallery-filler.jpg",
      dataGallery: "before-after",
      dataTitle: "Comparison before and after lip filler injections",
      src: "/assets/images/gallery/gallery-filler.jpg",
      alt: "Comparison before and after lip filler injections",
    },
    {
      href: "/assets/images/gallery/gallery-mts.jpg",
      dataGallery: "before-after",
      dataTitle: "MTS with SoCo Solution for improving skin quality",
      src: "/assets/images/gallery/gallery-mts.jpg",
      alt: "MTS with SoCo Solution for improving skin quality",
    },
    {
      href: "/assets/images/gallery/gallery-tlsr.jpg",
      dataGallery: "before-after",
      dataTitle: "Tightening, Lifting, Skin Quality, Regeneration",
      src: "/assets/images/gallery/gallery-tlsr.jpg",
      alt: "Tightening, Lifting, Skin Quality, Regeneration",
    },
    {
      href: "/assets/images/gallery/gallery-hair-transplantation.jpg",
      dataGallery: "before-after",
      dataTitle: "Hair Transplantation",
      src: "/assets/images/gallery/gallery-hair-transplantation.jpg",
      alt: "Hair Transplantation",
    },
    {
      href: "/assets/images/gallery/gallery-sculptra.jpg",
      dataGallery: "before-after",
      dataTitle: "Boost Collagen, Revive Volume",
      src: "/assets/images/gallery/gallery-sculptra.jpg",
      alt: "Boost Collagen, Revive Volume",
    },
    {
      href: "/assets/images/gallery/gallery-lifting.jpg",
      dataGallery: "before-after",
      dataTitle: "Ultherapy for lifting treatment",
      src: "/assets/images/gallery/gallery-lifting.jpg",
      alt: "Ultherapy for lifting treatment",
    },
    {
      href: "/assets/images/gallery/gallery-botox.jpg",
      dataGallery: "before-after",
      dataTitle: "Effortless Elegance, Naturally Achieved",
      src: "/assets/images/gallery/gallery-botox.jpg",
      alt: "Effortless Elegance, Naturally Achieved",
    },
    {
      href: "/assets/images/gallery/gallery-weight-loss.jpg",
      dataGallery: "before-after",
      dataTitle: "Affordable Weight Loss Solutions",
      src: "/assets/images/gallery/gallery-weight-loss.jpg",
      alt: "Affordable Weight Loss Solutions",
    },
  ];

  return (
    <>
      {/* Promos Section */}
      <section id="promos" className="promos section">
        <div className="container section-title" data-aos="fade-up">
          <span>Promos</span>
          <h2>Promos</h2>
          <p>Exclusive Promotions &amp; Savings at SoCo</p>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#promos-tab-1">
                  <h4>VIP Guest</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#promos-tab-2">
                  <h4>Gift Card</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#promos-tab-3">
                  <h4>Exclusive Offers</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="promos-tab-1">
              <div className="row">
                {/* <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"> */}
                {/* <div className="col-lg-4 text-center d-none d-sm-block"> */}
                <div className="col-lg-4 text-center">
                  <img src="/assets/images/promos/promos-vip-guest.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-column">
                  <h4>VIP Guest Invitation Event</h4>
                  <p>We offer complimentary treatments exclusively for our VIP guests. Don't miss this chance to indulge in an exceptional experience!</p>
                  <h6>Complimentary Treatments</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>PRP + MTS with SoCo Solution (Value: $800)</li>
                    <li><i className="bi bi-check2-all"></i>Microneedling RF + MTS with SoCo Solution (Value: $800)</li>
                  </ul>
                  <h6>Reservations</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i><span>Contact us at <a href="tel:7146439204">714.643.9204</a> to schedule your appointment once you've received an invitation</span></li>
                    <li><i className="bi bi-check2-all"></i>Visit us on your scheduled date once confirmed</li>
                  </ul>
                  <h6>Note</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Eligibility: Individuals with influence who can effectively introduce new clients</li>
                    <li><i className="bi bi-check2-all"></i>Runs until marketing objectives are achieved, limited to a select number of guests each month</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="promos-tab-2">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <img src="/assets/images/promos/promos-gift-card.png" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-column">
                  <h4>SoCo Wellness MedSpa Gift Card</h4>
                  <p>Give the gift of wellness and beauty with SoCo gift cards, perfect for any of our premium treatment services.</p>
                  <h6>Gift Card Benefits</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Redeemable for all treatments</li>
                    <li><i className="bi bi-check2-all"></i>Includes an exclusive cosmetic gift</li>
                  </ul>
                  <h6>How to Purchase</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i><span>Call us at <a href="tel:7146439204">714.643.9204</a> or email us at <a href="mailto:info@socowm.com">info@socowm.com</a></span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="promos-tab-3">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <img src="/assets/images/promos/promos-offer.png" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-column">
                  <h4>Exclusive Offers at SoCo</h4>
                  <p>Enjoy exclusive offers and expert care in a results-driven environment to help you look and feel your best.</p>
                  <h6>New Customer First Visit Discount</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>10% Off First Treatment</li>
                  </ul>
                  <h6>Limited-Time Offer!</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>FREE Consultation with any booked service</li>
                  </ul>
                  <h6>Referral Discount</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Existing customers can refer a new client to receive a 5% discount for both</li>
                  </ul>
                  <h6>Membership Program</h6>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>All treatment recipients are eligible for membership and enjoy a 10% discount on cosmetic purchases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Specials Section */}
      <section id="specials" className="specials section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>2025 Specials</h2>
          <p>Plan Your 2025 Adventure</p>
        </div>
        <div className="container tabs" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tabs-tab-1">New Year Special</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">Happy Valentine's Day Special</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">Mother's Day Special</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-4">Summer Break Special</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-5">Halloween Special</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-6">Holiday Special</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tabs-tab-1">
                  <div className="row">
                    <div className="col-lg-6 details order-2 order-lg-1">
                      <h4>New Year Special</h4>
                      <h6>Diet Promotion<span> (January 1 - January 31)</span></h6>
                      <p>Start the new year feeling lighter and refreshed, both body and mind! Book now and take advantage of this special offer!</p>
                      <h6>Diet Program Details</h6>
                      <ul>
                        <li><i className="bi bi-check2-all"></i>$900/3 months</li>
                        <li><i className="bi bi-check2-all"></i>Weight Loss Injections: Once a week, a total of 12 sessions (over 3 months)</li>
                        <li><i className="bi bi-check2-all"></i>Complimentary Treatment Gift Worth $1200 (33cc and MTS with SoCo Solution)</li>
                        <li><i className="bi bi-check2-all"></i>This promotion is available for a limited time only</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/wellness-weight-loss.jpg" alt="Special Treatments" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-2">
                  <div className="row">
                    <div className="col-lg-6 details order-2 order-lg-1">
                      <h4>Happy Valentine's Day Special</h4>
                      <h6>Tightening & Lifting Promotion <span>(January 14 - February 14)</span></h6>
                      <p>SoCo specializes in TLSR treatments. We strongly recommend combo menus that address tightening,lifting, skin tone, skin texture, skin elasticity, and regeneration. All machines are FDA cleared.</p>
                      <h6>Tightening & Lifting Program Details</h6>
                      <ul>
                        <li><i className="bi bi-check2-all"></i>TL (Tightening & Lifting): Bipolar or Monopolar Microneedling + Ulthera 400 Lines at $1800</li>
                        <li><i className="bi bi-check2-all"></i>We offer a complimentary Skin Regeneration treatment (33cc PRP) valued at $800</li>
                        <li><i className="bi bi-check2-all"></i>This promotion is available for a limited time only</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/tlsr-lifting.jpg" alt="Liposuction" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-3">
                  <div className="row">
                    <div className="col-lg-6 details order-2 order-lg-1">
                      <h4>Mother's Day Special</h4>
                      <h6>Gift Your Parents with a Gift Card <span>(April 11 - May 11)</span></h6>
                      <p>Express your gratitude to your mother with the gift of beauty. We create personalized treatment plans that enhance your natural features, considering your facial proportions, symmetry, and overall harmony.</p>
                      <h6>Mother's Day Program Details.</h6>
                      <ul>
                        <li><i className="bi bi-check2-all"></i>Botox</li>
                        <li><i className="bi bi-check2-all"></i>Fillers</li>
                        <li><i className="bi bi-check2-all"></i>Thread Lift</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/facial-aesthetic.jpg" alt="Acne" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-4">
                  <div className="row">
                    <div className="col-lg-6 details order-2 order-lg-1">
                      <h4>Summer Break Special</h4>
                      <h6>Acne Special Care <span>(May 1 - Aug 31)</span></h6>
                      <p>Experience clearer, healthier skin this summer with our Acne Special Care Package. This limited-time offer includes a personalized consultation, advanced treatments like Scarlet RF and LED Therapy, and a complimentary EGF gift to help you achieve your skin goals.</p>
                      <h6>Acne Special Care Program Details</h6>
                      <ul>
                        <li><i className="bi bi-check2-all"></i>Consultation: $200 includes prescription and a 2-3 month medication plan (medication cost not included)</li>
                        <li><i className="bi bi-check2-all"></i>Scarlet (Bipolar RF): $3,200 (4 sessions)</li>
                        <li><i className="bi bi-check2-all"></i>LED Therapy: $400 (4 sessions)</li>
                        <li><i className="bi bi-check2-all"></i><span><span className="na">$3,800</span> $2,500 + Complimentary EGF Gift</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/treatments-acne.jpg" alt="Hair Transplantation" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-5">
                  <div className="row">
                    <div className="col-lg-6 details order-2 order-lg-1">
                      <h4>Halloween Special</h4>
                      <h6>Encore TL Special Promotion <span>(October 1 - October 31)</span></h6>
                      <p>Experience immediate tightening and lifting with no downtime! At SoCo, we specialize in TLSR treatments. Our customized treatment plans address multiple concerns, including tightening, lifting, skin tone, texture, elasticity, and regeneration. All devices are FDA-cleared.</p>
                      <h6>Special Offer</h6>
                      <ul>
                        <li><i className="bi bi-check2-all"></i>Complimentary Skin Regeneration Treatment (valued at $800)</li>
                        <li><i className="bi bi-check2-all"></i>EGF Cosmetic Gift</li>
                      </ul>
                      <h6>TL (Tightening & Lifting) Details</h6>
                      <ul>
                        <li><i className="bi bi-check2-all"></i>Bipolar or Monopolar Microneedling + Ulthera (400 lines)</li>
                        <li><i className="bi bi-check2-all"></i>Price: $1,800</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/services/tlsr-tightening.jpg" alt="Hair Transplantation" className="img-fluid" />
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center"><span className="text-light fs-6 caption">Photo shown is illustrative only</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs-tab-6">
                  <div className="row">
                    <div className="col-lg-6 details order-2 order-lg-1">
                      <h4>Holiday Special</h4>
                      <h6>SOCO Gift Card <span>(Nov 1 - Dec 25)</span></h6>
                      <p>Share a joyful and happy holiday season with your family, relatives, and beloved friends by giving them a SOCO Gift Card!</p>
                      <h6>SOCO Gift Card Details</h6>
                      <ul>
                        <li><i className="bi bi-check2-all"></i>Buy a $300 Gift Card: Receive a complimentary EGF skincare product (valued at $75)</li>
                        <li><i className="bi bi-check2-all"></i>Buy a $900 Gift Card: Receive a complimentary EGF skincare product (valued at $75) and an MTS treatment (valued at $400)</li>
                        <li><i className="bi bi-check2-all"></i>Buy a $1,200 Gift Card: Receive a complimentary EGF skincare product (valued at $75) and a PRP treatment (valued at $800)</li>
                      </ul>
                      <p>* Gift cards cannot be combined with other complimentary services or discounts. Complimentary treatments are limited to one per service.</p>
                    </div>
                    <div className="col-lg-6 text-center order-1 order-lg-2 d-none d-lg-block">
                      <div className="position-relative">
                        <img src="/assets/images/promos/promos-gift-card-specials.png" alt="Hair Transplantation" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          {/* <p>Our Clients' Stunning Transformations</p> */}
          <p>Visual Journey Through the World of Wellness</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            centeredSlides={true}
            // modules={[Autoplay, Pagination, Navigation]}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            // navigation
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <a
                  href={slide.href}
                  className="glightbox"
                  data-gallery={slide.dataGallery}
                  data-title={slide.dataTitle}
                >
                  <img
                    src={slide.src}
                    className="img-fluid"
                    alt={slide.alt}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Promos;
