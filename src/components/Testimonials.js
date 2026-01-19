import React, { useState, useEffect, useRef, useCallback } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "E-commerce Entrepreneur",
      company: "StyleHub India",
      avatar: "👨‍💼",
      rating: 5,
      quote: "Adsadvo transformed our online presence. Our Shopify store revenue grew by 300% in just 3 months! Their team's expertise in digital marketing is unparalleled.",
      highlight: "300% Revenue Growth",
      color: "#FF7A18",
      stats: { projects: 45, growth: "300%", satisfaction: "100%" }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Amazon Seller",
      company: "HomeDecor Bliss",
      avatar: "👩‍💻",
      rating: 5,
      quote: "The Amazon Starter package was a game-changer. From account setup to PPC campaigns, Adsadvo handled everything professionally. 2x sales in first month!",
      highlight: "2x Sales Boost",
      color: "#3B82F6",
      stats: { projects: 28, growth: "200%", satisfaction: "98%" }
    },
    {
      id: 3,
      name: "Arun Mehta",
      role: "Startup Founder",
      company: "TechGadgets Pro",
      avatar: "👨‍🔬",
      rating: 5,
      quote: "White Label solution helped us build our brand from scratch. Focus on sales while Adsadvo handles backend - perfect partnership!",
      highlight: "Brand Built in 4 Weeks",
      color: "#10B981",
      stats: { projects: 67, growth: "450%", satisfaction: "100%" }
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Fashion Retailer",
      company: "UrbanChic Fashion",
      avatar: "👩‍🎨",
      rating: 5,
      quote: "The combo package gave us both Amazon and Shopify presence. Unified dashboard made managing both platforms seamless. Highly recommend!",
      highlight: "Dual Platform Success",
      color: "#8B5CF6",
      stats: { projects: 52, growth: "280%", satisfaction: "99%" }
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Dropshipping Expert",
      company: "GlobalDeals Direct",
      avatar: "🧑‍💼",
      rating: 5,
      quote: "CSV package saved us weeks of product research. Ready-to-import trending products gave us immediate competitive advantage.",
      highlight: "Instant Market Entry",
      color: "#EC4899",
      stats: { projects: 89, growth: "180%", satisfaction: "95%" }
    },
    {
      id: 6,
      name: "Anjali Reddy",
      role: "Beauty Brand Owner",
      company: "GlowNatural Cosmetics",
      avatar: "👩‍⚕️",
      rating: 5,
      quote: "Complete branding solution helped us stand out in crowded market. Professional guidance every step of the way.",
      highlight: "Market Leader in 6 Months",
      color: "#F59E0B",
      stats: { projects: 34, growth: "350%", satisfaction: "100%" }
    }
  ];

  // Fix 1: Wrap nextTestimonial in useCallback to stabilize its identity
  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, testimonials.length]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, testimonials.length]);

  const goToTestimonial = useCallback((index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, activeIndex]);

  // Fix 2: Add nextTestimonial to dependencies array
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, nextTestimonial]); // Added nextTestimonial to dependencies

  // Handle scroll progress for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setScrollProgress(progress);
      }
    };

    const container = carouselRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Fix 3: Remove unused variable or use it
  // Active testimonial data is actually used in the component, so let's use it properly
  // const getActiveTestimonial = () => {
  //   return testimonials[activeIndex];
  // };

  // const activeTestimonial = getActiveTestimonial();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .testimonials-section {
          padding: 120px 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .float-1 {
          position: absolute;
          top: 20%;
          left: 5%;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(255, 122, 24, 0.1) 0%, rgba(255, 122, 24, 0.05) 100%);
          border-radius: 50%;
          animation: floatAnimation 15s infinite ease-in-out;
        }

        .float-2 {
          position: absolute;
          top: 60%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
          border-radius: 50%;
          animation: floatAnimation 20s infinite ease-in-out reverse;
        }

        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FF7A18 0%, #FF5E00 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 24px;
          box-shadow: 0 10px 30px rgba(255, 122, 24, 0.2);
        }

        .section-title {
          font-size: 56px;
          font-weight: 900;
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 20px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Main Carousel */
        .carousel-container {
          position: relative;
          margin-bottom: 60px;
          perspective: 1000px;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: white;
          border: none;
          color: #0f172a;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .carousel-btn:hover {
          background: #0f172a;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .carousel-btn.prev {
          left: -30px;
        }

        .carousel-btn.next {
          right: -30px;
        }

        .carousel-track {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 500px;
        }

        /* 3D Carousel Card */
        .carousel-card {
          position: absolute;
          width: 800px;
          height: 400px;
          background: white;
          border-radius: 32px;
          padding: 50px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          transform: translateX(0) scale(1);
          opacity: 1;
          cursor: pointer;
        }

        .carousel-card.active {
          z-index: 10;
          transform: translateX(0) scale(1);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.12);
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                    linear-gradient(135deg, var(--card-color), rgba(var(--card-rgb), 0.3)) border-box;
        }

        .carousel-card.prev {
          transform: translateX(-80%) scale(0.8) rotateY(10deg);
          opacity: 0.6;
          z-index: 5;
        }

        .carousel-card.next {
          transform: translateX(80%) scale(0.8) rotateY(-10deg);
          opacity: 0.6;
          z-index: 5;
        }

        .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Card Header */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .client-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--card-color), rgba(var(--card-rgb), 0.3));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: white;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .client-details h3 {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .client-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .client-role {
          font-size: 16px;
          color: var(--card-color);
          font-weight: 600;
        }

        .client-company {
          font-size: 14px;
          color: #64748b;
          padding: 6px 12px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
        }

        .star {
          color: #FFD700;
          font-size: 20px;
        }

        /* Card Quote */
        .card-quote {
          flex-grow: 1;
          margin-bottom: 32px;
          position: relative;
        }

        .quote-mark {
          font-size: 60px;
          color: var(--card-color);
          opacity: 0.2;
          line-height: 0;
          margin-bottom: 20px;
        }

        .quote-text {
          font-size: 20px;
          color: #475569;
          line-height: 1.8;
          font-weight: 500;
          font-style: italic;
        }

        /* Card Stats */
        .card-stats {
          display: flex;
          gap: 24px;
          margin-top: 32px;
        }

        .stat-item {
          flex: 1;
          background: #f8fafc;
          padding: 20px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }

        .stat-value {
          font-size: 32px;
          font-weight: 900;
          color: var(--card-color);
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Highlight Badge */
        .highlight-badge {
          position: absolute;
          top: -15px;
          right: 40px;
          background: var(--card-color);
          color: white;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.5px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          animation: badgePulse 2s infinite;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Indicators */
        .indicators-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 60px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .indicator.active {
          background: var(--active-color);
          transform: scale(1.3);
          box-shadow: 0 0 20px var(--active-color-glow);
        }

        .indicator::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          background: var(--indicator-color);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .indicator.active::after {
          opacity: 0.2;
        }

        /* Mobile Carousel */
        .mobile-carousel {
          display: none;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          gap: 20px;
          padding: 20px 0;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .mobile-carousel::-webkit-scrollbar {
          display: none;
        }

        .mobile-card {
          min-width: 100%;
          scroll-snap-align: center;
          background: white;
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          border: 2px solid #f1f5f9;
        }

        .scroll-progress {
          display: none;
          width: 200px;
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          margin: 40px auto 0;
          overflow: hidden;
        }

        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #FF7A18, #3B82F6);
          border-radius: 2px;
          width: ${scrollProgress * 100}%;
          transition: width 0.3s ease;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 100px;
        }

        .overall-stat {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .overall-stat:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .overall-value {
          font-size: 56px;
          font-weight: 900;
          background: linear-gradient(135deg, #FF7A18 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          line-height: 1;
        }

        .overall-label {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          margin-top: 100px;
          padding: 60px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
        }

        .cta-title {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
        }

        .cta-subtitle {
          font-size: 18px;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .cta-button {
          padding: 20px 50px;
          background: linear-gradient(135deg, #FF7A18 0%, #FF5E00 100%);
          border: none;
          border-radius: 16px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 40px rgba(255, 122, 24, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 25px 60px rgba(255, 122, 24, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .carousel-card {
            width: 700px;
            height: 380px;
          }
          
          .section-title {
            font-size: 48px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .carousel-card {
            width: 600px;
            height: 450px;
            padding: 40px;
          }
          
          .carousel-btn.prev {
            left: 10px;
          }
          
          .carousel-btn.next {
            right: 10px;
          }
          
          .card-stats {
            flex-direction: column;
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 80px 20px;
          }
          
          .section-title {
            font-size: 36px;
          }
          
          .carousel-track {
            display: none;
          }
          
          .carousel-btn {
            display: none;
          }
          
          .mobile-carousel {
            display: flex;
          }
          
          .scroll-progress {
            display: block;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 60px;
          }
          
          .cta-section {
            padding: 40px 20px;
          }
          
          .cta-title {
            font-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 28px;
          }
          
          .section-subtitle {
            font-size: 16px;
          }
          
          .client-avatar {
            width: 60px;
            height: 60px;
            font-size: 30px;
          }
          
          .client-details h3 {
            font-size: 22px;
          }
          
          .quote-text {
            font-size: 16px;
          }
          
          .highlight-badge {
            position: relative;
            top: 0;
            right: 0;
            margin-top: 16px;
            display: inline-block;
          }
          
          .overall-value {
            font-size: 42px;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .testimonials-section {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          }
          
          .carousel-card, .mobile-card, .overall-stat {
            background: #1e293b;
            color: #f1f5f9;
          }
          
          .client-details h3, .quote-text {
            color: #f1f5f9;
          }
          
          .client-company, .stat-item {
            background: #334155;
          }
        }
      `}</style>

      <section className="testimonials-section" id="testimonials">
        <div className="floating-elements">
          <div className="float-1"></div>
          <div className="float-2"></div>
        </div>
        
        <div className="testimonials-container">
          {/* Header */}
          <div className="section-header">
            <div className="section-badge">
              <span>⭐</span> TRUSTED BY 500+ BUSINESSES
            </div>
            <h2 className="section-title">Success Stories That Inspire</h2>
            <p className="section-subtitle">
              See how businesses transformed their digital presence with Adsadvo's strategic solutions
            </p>
          </div>

          {/* Desktop 3D Carousel */}
          <div 
            className="carousel-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button 
              className="carousel-btn prev"
              onClick={prevTestimonial}
              disabled={isAnimating}
            >
              ←
            </button>
            
            <div className="carousel-track">
              {testimonials.map((testimonial, index) => {
                const rgbColor = hexToRgb(testimonial.color);
                const position = 
                  index === activeIndex ? 'active' :
                  index === (activeIndex - 1 + testimonials.length) % testimonials.length ? 'prev' :
                  index === (activeIndex + 1) % testimonials.length ? 'next' : 'hidden';
                
                return position !== 'hidden' ? (
                  <div
                    key={testimonial.id}
                    className={`carousel-card ${position}`}
                    onClick={() => goToTestimonial(index)}
                    style={{
                      '--card-color': testimonial.color,
                      '--card-rgb': rgbColor
                    }}
                  >
                    <div className="card-content">
                      <div className="card-header">
                        <div className="client-info">
                          <div className="client-avatar">
                            {testimonial.avatar}
                          </div>
                          <div className="client-details">
                            <h3>{testimonial.name}</h3>
                            <div className="client-meta">
                              <span className="client-role">{testimonial.role}</span>
                              <span className="client-company">{testimonial.company}</span>
                            </div>
                          </div>
                        </div>
                        <div className="rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="star">★</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="card-quote">
                        <div className="quote-mark">"</div>
                        <p className="quote-text">{testimonial.quote}</p>
                        <div className="highlight-badge">
                          {testimonial.highlight}
                        </div>
                      </div>
                      
                      <div className="card-stats">
                        <div className="stat-item">
                          <div className="stat-value">{testimonial.stats.projects}+</div>
                          <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-value">{testimonial.stats.growth}</div>
                          <div className="stat-label">Growth</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-value">{testimonial.stats.satisfaction}</div>
                          <div className="stat-label">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
            
            <button 
              className="carousel-btn next"
              onClick={nextTestimonial}
              disabled={isAnimating}
            >
              →
            </button>
          </div>

          {/* Mobile Carousel */}
          <div 
            className="mobile-carousel" 
            ref={carouselRef}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial) => {
              const rgbColor = hexToRgb(testimonial.color);
              return (
                <div
                  key={testimonial.id}
                  className="mobile-card"
                  style={{
                    '--card-color': testimonial.color,
                    '--card-rgb': rgbColor
                  }}
                >
                  <div className="card-content">
                    <div className="card-header">
                      <div className="client-info">
                        <div className="client-avatar">
                          {testimonial.avatar}
                        </div>
                        <div className="client-details">
                          <h3>{testimonial.name}</h3>
                          <div className="client-meta">
                            <span className="client-role">{testimonial.role}</span>
                            <span className="client-company">{testimonial.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="card-quote">
                      <div className="quote-mark">"</div>
                      <p className="quote-text">{testimonial.quote}</p>
                      <div className="highlight-badge">
                        {testimonial.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="scroll-progress">
            <div className="scroll-progress-bar"></div>
          </div>

          {/* Indicators */}
          <div className="indicators-container">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                style={{
                  '--active-color': testimonial.color,
                  '--active-color-glow': testimonial.color + '40',
                  '--indicator-color': testimonial.color
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Overall Stats */}
          <div className="stats-grid">
            <div className="overall-stat">
              <div className="overall-value">500+</div>
              <div className="overall-label">Happy Clients</div>
            </div>
            <div className="overall-stat">
              <div className="overall-value">98.5%</div>
              <div className="overall-label">Satisfaction Rate</div>
            </div>
            <div className="overall-stat">
              <div className="overall-value">300%</div>
              <div className="overall-label">Average Growth</div>
            </div>
            <div className="overall-stat">
              <div className="overall-value">24/7</div>
              <div className="overall-label">Support Available</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-title">Ready to Write Your Success Story?</h2>
            <p className="cta-subtitle">
              Join hundreds of successful businesses that transformed their digital presence with Adsadvo
            </p>
            <button className="cta-button">
              <span>Start Your Journey</span>
              <span>🚀</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// Helper function
const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

export default Testimonials;