import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Modal } from 'react-bootstrap';

const PromosGalleryModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState({ before: null, after: null });

  const beforeAfterPairs = [
    {
      before: "/assets/images/gallery/gallery-1.jpg",
      after: "/assets/images/gallery/gallery-1-after.jpg",
    },
    {
      before: "/assets/images/gallery/gallery-01.jpg",
      after: "/assets/images/gallery/gallery-01.jpg",
    },
    {
      before: "/assets/images/gallery/gallery-02.jpg",
      after: "/assets/images/gallery/gallery-02.jpg",
    },
    {
      before: "/assets/images/gallery/gallery-4.jpg",
      after: "/assets/images/gallery/gallery-4-after.jpg",
    },
    {
      before: "/assets/images/gallery/gallery-5.jpg",
      after: "/assets/images/gallery/gallery-5-after.jpg",
    },
    {
      before: "/assets/images/gallery/gallery-6.jpg",
      after: "/assets/images/gallery/gallery-6-after.jpg",
    },
    {
      before: "/assets/images/gallery/gallery-7.jpg",
      after: "/assets/images/gallery/gallery-7-after.jpg",
    },
    {
      before: "/assets/images/gallery/gallery-8.jpg",
      after: "/assets/images/gallery/gallery-8-after.jpg",
    },
  ];

  const handleImageClick = (pair) => {
    setCurrentImages(pair);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentImages({ before: null, after: null });
  };

  return (
    <>
      {/* Promos Section */}
      <section id="promos" class="promos section">
        <div className="container section-title" data-aos="fade-up">
          <span>Promos</span>
          <h2>Promos</h2>
          <p>Exclusive Promotions &amp; Savings at SoCo</p>
        </div>
        <div class="container">
          <div class="d-flex justify-content-center">
            <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#promos-tab-1">
                  <h4>VIP Guest</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#promos-tab-2">
                  <h4>Gift Card</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#promos-tab-3">
                  <h4>Exclusive Offers</h4>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="promos-tab-1">
              <div class="row">
                {/* <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"> */}
                <div class="col-lg-4 text-center d-none d-sm-block">
                  <img src="/assets/images/temp/promos-vip-guest.jpg" alt="" class="img-fluid" />
                </div>
                <div class="col-lg-8 mt-3 mt-lg-0 d-flex flex-column">
                  <h4>VIP Guest Invitation Event</h4>
                  <p>We offer complimentary treatments exclusively for our VIP guests. Don't miss this chance to indulge in an exceptional experience!</p>
                  <h6>Complimentary Treatments</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>PRP + MTS with SoCo Solution (Value: $800)</li>
                    <li><i class="bi bi-check2-all"></i>Microneedling RF + MTS with SoCo Solution (Value: $800)</li>
                  </ul>
                  <h6>Reservations</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>
                      Contact us at Call&nbsp;<a href="tel:7146439204">714.643.9204</a>&nbsp;to schedule your appointment once you've received an invitation</li>
                    <li><i class="bi bi-check2-all"></i>Visit us on your scheduled date once confirmed</li>
                  </ul>
                  <h6>Note</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>Eligibility: Individuals with influence who can effectively introduce new clients</li>
                    <li><i class="bi bi-check2-all"></i>Runs until marketing objectives are achieved, limited to a select number of guests each month</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="promos-tab-2">
              <div class="row">
                <div class="col-lg-4 text-center d-none d-sm-block">
                  <img src="/assets/images/temp/promos-gift-card.png" alt="" class="img-fluid" />
                </div>
                <div class="col-lg-8 mt-3 mt-lg-0 d-flex flex-column">
                  <h4>SoCo Wellness MedSpa Gift Card</h4>
                  <p>Give the gift of wellness and beauty with SoCo gift cards, perfect for any of our premium treatment services.</p>
                  <h6>Gift Card Benefits</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>Redeemable for all treatments</li>
                    <li><i class="bi bi-check2-all"></i>Includes an exclusive cosmetic gift</li>
                  </ul>
                  <h6>How to Purchase</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>Call&nbsp;<a href="tel:7146439204">714.643.9204</a>&nbsp;or email&nbsp;<a href="mailto:info@socowm.com">info@socowm.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="promos-tab-3">
              <div class="row">
                <div class="col-lg-4 text-center d-none d-sm-block">
                  <img src="/assets/images/temp/promos-illustration-3.webp" alt="" class="img-fluid" />
                </div>
                <div class="col-lg-8 mt-3 mt-lg-0 d-flex flex-column">
                  <h4>Exclusive Offers at SoCo</h4>
                  <p>Enjoy exclusive offers and expert care in a results-driven environment to help you look and feel your best.</p>
                  <h6>New Customer First Visit Discount</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>10% Off First Treatment</li>
                  </ul>
                  <h6>Limited-Time Offer!</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>FREE Consultation with any booked service</li>
                  </ul>
                  <h6>Referral Discount</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>Existing customers can refer a new client to receive a 5% discount for both</li>
                  </ul>
                  <h6>Membership Program</h6>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>All treatment recipients are eligible for membership and enjoy a 10% discount on cosmetic purchases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {beforeAfterPairs.map((pair, index) => (
              <SwiperSlide key={index}>
                <img
                  src={pair.before}
                  className="img-fluid"
                  alt={`Gallery Image ${index + 1}`}
                  onClick={() => handleImageClick(pair)}
                  style={{ cursor: "pointer" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal for Before/After Image */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Before/After Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentImages.before && currentImages.after && (
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={currentImages.before}
                className="img-fluid mx-2"
                alt="Before"
                style={{ maxWidth: "45%" }}
              />
              <img
                src={currentImages.after}
                className="img-fluid mx-2"
                alt="After"
                style={{ maxWidth: "45%" }}
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PromosGalleryModal;