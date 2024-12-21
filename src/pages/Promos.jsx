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
      href: "/assets/images/gallery/gallery-hair-transplantation.jpg",
      dataGallery: "before-after",
      dataTitle: "Hair Transplantation",
      src: "/assets/images/gallery/gallery-hair-transplantation.jpg",
      alt: "Hair Transplantation",
    },
  ];

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
                <div class="col-lg-4 text-center">
                  <img src="/assets/images/promos/promos-vip-guest.jpg" alt="" class="img-fluid" />
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
                  <img src="/assets/images/promos/promos-gift-card.png" alt="" class="img-fluid" />
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
                  <img src="/assets/images/promos/promos-offer.png" alt="" class="img-fluid" />
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
      <section id="gallery" className="gallery section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Our Clients' Stunning Transformations</p>
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
