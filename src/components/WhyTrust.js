import React, { useState, useEffect, useRef } from 'react';
import './WhyTrust.css';

const WhyTrust = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { 
      icon: '📈', 
      value: 100, 
      suffix: '%', 
      title: 'Profit Margin',
      description: 'Earn exponential profits',
      maxValue: 100
    },
    { 
      icon: '👥', 
      value: 10000, 
      suffix: '+', 
      title: 'Active Resellers',
      description: 'Join 10k+ successful online resellers',
      maxValue: 10000
    },
    { 
      icon: '🛍️', 
      value: 500000, 
      suffix: '+', 
      title: 'Order Delivered',
      description: 'Over 5 lakh orders fulfilled with reliability',
      maxValue: 500000
    },
    { 
      icon: '🚚', 
      value: 100, 
      suffix: '%', 
      title: 'Free Shipping',
      description: 'Free delivery to customers Across India',
      maxValue: 100
    },
    { 
      icon: '🛡️', 
      value: 0, 
      suffix: '', 
      title: 'Hidden Fees / Taxes',
      description: '100% transparent pricing',
      maxValue: 0
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counters
            stats.forEach((stat, index) => {
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = stat.maxValue / steps;
              const stepDuration = duration / steps;

              let currentStep = 0;
              const timer = setInterval(() => {
                currentStep++;
                setCounters((prev) => {
                  const newCounters = [...prev];
                  const newValue = Math.min(
                    Math.floor(increment * currentStep),
                    stat.maxValue
                  );
                  newCounters[index] = newValue;
                  return newCounters;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                  setCounters((prev) => {
                    const newCounters = [...prev];
                    newCounters[index] = stat.maxValue;
                    return newCounters;
                  });
                }
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  const formatNumber = (value, suffix) => {
    if (value >= 100000) {
      return `${(value / 100000).toFixed(0)}L${suffix}`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K${suffix}`;
    }
    return `${value}${suffix}`;
  };

  return (
    <section className="why-trust" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          Why Sellers Trust <span className="highlight">SeekhoBecho</span>
        </h2>
        <p className="section-description">
          SeekhoBecho turns dreamers into business owners with ready-to-sell products 
          and step-by-step guidance. Our sellers never feel alone we handle the hard 
          part so they can focus on earning.
        </p>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">
                {formatNumber(counters[index], stat.suffix)}
              </div>
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;

