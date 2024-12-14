import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Promos = () => {
  return (
    <>
      {/* Promos Us Section */}
      {/* <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <span>Promos</span>
          <h2>Promos</h2>
          <p>Necessitatibus eius consequatur ex aliquid</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/about/about-us.jpg" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-8 content">
              <h4>Comprehensive Wellness and Women's Health Care</h4>
              <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
              <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
              <p className="mb-0">Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.</p>
            </div>
          </div>
        </div>
      </section> */}

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
                    Contact us at <a href="tel:7146439204">714.643.9204</a> to schedule your appointment once you've received an invitation</li>
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
                    <li><i class="bi bi-check2-all"></i>Call <a href="tel:7146439204">714.643.9204</a> or email <a href="mailto:info@socowm.com">info@socowm.com</a></li>
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
    </>
  );
}

export default Promos;