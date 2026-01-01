import React, { useRef, useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const startScrolling = (direction) => {
    if (scrollIntervalRef.current) {
      stopScrolling();
    }
    
    scrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollAmount = 10;
        const currentScroll = scrollContainerRef.current.scrollLeft;
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        
        if (direction === 'left' && currentScroll > 0) {
          scrollContainerRef.current.scrollLeft -= scrollAmount;
        } else if (direction === 'right' && currentScroll < maxScroll) {
          scrollContainerRef.current.scrollLeft += scrollAmount;
        } else {
          stopScrolling();
        }
      }
    }, 16);
  };

  useEffect(() => {
    return () => {
      stopScrolling();
    };
  }, []);

  const handleMouseDown = (direction) => {
    startScrolling(direction);
  };

  const handleMouseUp = () => {
    stopScrolling();
  };

  const handleClick = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 350 + 32;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const testimonials = [
    {
      name: 'Sneha Gupta',
      title: 'Rocket Drop Shipper',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      text: 'This is the best cost-luxury I have ever seen because support is always available. Get secure and trusted platform.'
    },
    {
      name: 'Rajesh Kumar',
      title: 'Top Seller',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Amazing platform! The support team is always there to help. My business has grown 300% in just 6 months.'
    },
    {
      name: 'Priya Sharma',
      title: 'Elite Reseller',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'Zero inventory model works perfectly. I focus on selling while they handle everything else. Highly recommended!'
    },
    {
      name: 'Amit Patel',
      title: 'E-commerce Entrepreneur',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'Started with zero knowledge about dropshipping. The step-by-step training and support helped me earn my first ₹50,000 in just 2 months!'
    },
    {
      name: 'Kavita Singh',
      title: 'WhatsApp Business Owner',
      image: 'https://i.pravatar.cc/150?img=32',
      rating: 5,
      text: 'The WhatsApp mastery course changed everything for me. Now I manage multiple product catalogs and my sales have tripled. Thank you SeekhoBecho!'
    },
    {
      name: 'Vikram Reddy',
      title: 'Amazon Seller',
      image: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      text: 'Best investment I made this year! The verified suppliers and automated listing saved me countless hours. My Amazon store is now profitable.'
    },
    {
      name: 'Anjali Mehta',
      title: 'Social Media Seller',
      image: 'https://i.pravatar.cc/150?img=44',
      rating: 5,
      text: 'I love how easy it is to share products on Instagram and Facebook. The Instagram & Facebook mastery course taught me everything I needed to know.'
    },
    {
      name: 'Rohit Verma',
      title: 'Multi-Platform Seller',
      image: 'https://i.pravatar.cc/150?img=15',
      rating: 5,
      text: 'Selling on Amazon, Flipkart, and Meesho simultaneously seemed impossible. But SeekhoBecho made it so simple. Highly recommend!'
    },
    {
      name: 'Divya Nair',
      title: 'Home Business Owner',
      image: 'https://i.pravatar.cc/150?img=27',
      rating: 5,
      text: 'As a stay-at-home mom, I needed something flexible. This platform allows me to work from home and earn a good income. Life-changing!'
    },
    {
      name: 'Suresh Iyer',
      title: 'International Seller',
      image: 'https://i.pravatar.cc/150?img=14',
      rating: 5,
      text: 'The Amazon.com international dropshipping feature is amazing! I\'m now selling to customers worldwide without any inventory hassles.'
    },
    {
      name: 'Meera Joshi',
      title: 'Startup Founder',
      image: 'https://i.pravatar.cc/150?img=46',
      rating: 5,
      text: 'Created my own e-commerce website with their Diamond plan. The website development course was comprehensive and the support is outstanding.'
    },
    {
      name: 'Arjun Malhotra',
      title: 'Business Consultant',
      image: 'https://i.pravatar.cc/150?img=20',
      rating: 5,
      text: 'I recommend SeekhoBecho to all my clients. The transparent pricing, zero hidden fees, and excellent support make it the best choice.'
    },
    {
      name: 'Pooja Desai',
      title: 'Freelancer',
      image: 'https://i.pravatar.cc/150?img=28',
      rating: 5,
      text: 'Perfect for freelancers like me who want a side income. The low-risk model means I can focus on my main work while earning extra.'
    },
    {
      name: 'Nikhil Shah',
      title: 'Retail Business Owner',
      image: 'https://i.pravatar.cc/150?img=16',
      rating: 5,
      text: 'Expanded my retail business online with SeekhoBecho. The free shipping and delivery handling saved me so much time and money.'
    },
    {
      name: 'Riya Kapoor',
      title: 'Student Entrepreneur',
      image: 'https://i.pravatar.cc/150?img=48',
      rating: 5,
      text: 'As a college student, I needed something affordable. The Silver plan was perfect! I\'m earning while studying. Best decision ever!'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Loved by Thousands of Sellers</h2>
        <p className="section-description">
          Read success stories from real people growing their business with us.
        </p>
        
        <div className="testimonials-carousel-wrapper">
          <button 
            className="carousel-btn prev" 
            onClick={() => handleClick('left')}
            onMouseDown={() => handleMouseDown('left')}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={() => handleMouseDown('left')}
            onTouchEnd={handleMouseUp}
            aria-label="Previous testimonials"
          >
            ‹
          </button>
          
          <div className="testimonials-grid" ref={scrollContainerRef}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-title">{testimonial.title}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-btn next" 
            onClick={() => handleClick('right')}
            onMouseDown={() => handleMouseDown('right')}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={() => handleMouseDown('right')}
            onTouchEnd={handleMouseUp}
            aria-label="Next testimonials"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

