import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Home = () => {
  const [animate, setAnimate] = useState(true);

  const handleSlideChange = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50); // Small delay to reset the animation
  };

  const carouselItems = [
    {
      background: '/assets/images/home/hero-01.jpg',
      title: 'Welcome to Soco WM',
      text: 'Living Your Best Life',
      bgStyle: 'transparent-60',
      buttonLink: '/tlsr',
      buttonText: 'Enhance Your Wellness',
    },
    {
      background: '/assets/images/home/hero-02.jpg',
      title: 'Soco Wellness MedSpa',
      text: 'Our promise to all of our clients is excellence',
      bgStyle: 'transparent-60',
      buttonLink: '/about',
      buttonText: 'Explore SoCo',
    },
    {
      background: '/assets/images/home/hero-promos.jpg',
      title: 'Promos',
      text: 'Exclusive Promotions & Savings at SoCo',
      bgStyle: 'transparent-60',
      buttonLink: '/promos',
      buttonText: 'Check Out Offers',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="hero-container">
          <Carousel fade interval={5000} controls indicators={true} pause={false} onSlide={handleSlideChange}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index} className={item.bgStyle}>
                <div className="carousel-container">
                  <img src={item.background} alt="" data-aos="fade-in" />
                  <div className={`container text-center ${animate ? 'zoom-out' : ''}`}>
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2>{item.title}</h2>
                        <p className="mb-0">{item.text}</p>
                        <Button className="more" size="lg" href={item.buttonLink}>{item.buttonText}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="mission-col">
                <div className="img">
                  <img src="/assets/images/home/wellness-focused.jpg" alt="Wellness-Focused MedSpa" className="img-fluid" />
                </div>
                <h2 className="title">Wellness-Focused MedSpa</h2>
                <p>A wellness-focused medspa emphasizes women's wellness in addition to traditional medspa services. Unlike conventional medspas, a wellness-focused medspa highlights overall health as the foundation for beauty. These services are overseen and performed by licensed healthcare professionals, such as doctors, nurse practitioners (NPs), nurses, or aestheticians.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="mission-col">
                <div className="img">
                  <img src="/assets/images/home/natural-rejuvenation.jpg" alt="Natural Rejuvenation Pursuits" className="img-fluid" />
                </div>
                <h2 className="title">Natural Rejuvenation Pursuits</h2>
                <p>At SoCo, we prioritize natural methods for skin rejuvenation, using ingredients and techniques that stimulate the skin's healing process. Our approach boosts collagen and elastin production for long-lasting, youthful results, without relying on harsh chemicals. We take pride in enhancing your natural beauty through treatments that support your skin’s innate regenerative abilities.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="mission-col">
                <div className="img">
                  <img src="/assets/images/home/home-k-beauty.jpg" alt="Proud of K-Beauty" className="img-fluid" />
                </div>
                <h2 className="title">Proud of K-Beauty</h2>
                <p>We take pride in K-beauty. K-beauty (Korean beauty) treatments are known for their effectiveness. With a delicate and meticulous approach, K-beauty always strives to offer the best for its clients. Driven by passion and a commitment to constant innovation, K-beauty focuses on achieving natural beauty by promoting inner health that radiates outward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  );
};

export default Home;