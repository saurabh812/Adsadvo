import React, { useState, useEffect } from 'react';

const TransformJourney = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: '01',
      title: 'Learn Foundations',
      description: 'Master Amazon dropshipping basics through structured learning modules',
      icon: '📚',
      color: '#FF7A18'
    },
    {
      number: '02',
      title: 'Setup Store',
      description: 'Create and configure your Amazon seller account with best practices',
      icon: '⚙️',
      color: '#3B82F6'
    },
    {
      number: '03',
      title: 'Launch Products',
      description: 'List products with optimized titles, images, and descriptions',
      icon: '🚀',
      color: '#10B981'
    },
    {
      number: '04',
      title: 'Scale & Grow',
      description: 'Implement advanced strategies to maximize sales and profits',
      icon: '📈',
      color: '#8B5CF6'
    }
  ];

  const features = [
    {
      icon: '▶',
      title: 'Video Training Library',
      description: 'Access 50+ hours of recorded sessions and tutorials',
      stat: '50+ Hours'
    },
    {
      icon: '🤝',
      title: 'Trusted Suppliers',
      description: 'Vetted suppliers ensuring product quality and delivery',
      stat: '100+ Verified'
    },
    {
      icon: '🎯',
      title: 'Expert Mentorship',
      description: '1:1 guidance from experienced Amazon sellers',
      stat: '24/7 Support'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev < 4 ? prev + 1 : 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .transform-section {
          padding: 100px 20px;
          background: #fff;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #FF7A18 0%, #FF5E00 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 18px;
          color: #6B7280;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Journey Steps */
        .journey-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 80px;
        }

        .step-card {
          position: relative;
          padding: 32px 24px;
          background: #F9FAFB;
          border-radius: 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .step-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 0, 0, 0.1);
          background: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .step-card.active {
          background: white;
          border-color: var(--step-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .step-number {
          font-size: 14px;
          font-weight: 700;
          color: var(--step-color);
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .step-icon {
          font-size: 32px;
          margin-bottom: 16px;
          display: block;
        }

        .step-title {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }

        .step-description {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
        }

        /* Progress Line */
        .progress-line {
          position: relative;
          height: 2px;
          background: #E5E7EB;
          margin: 40px 0;
        }

        .progress-fill {
          position: absolute;
          height: 100%;
          background: linear-gradient(90deg, #FF7A18, #3B82F6, #10B981, #8B5CF6);
          transition: width 0.3s ease;
          width: ${(activeStep / 4) * 100}%;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        /* Visual Demo */
        .visual-demo {
          position: relative;
          height: 400px;
          background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .demo-content {
          text-align: center;
          padding: 40px;
        }

        .demo-phone {
          width: 180px;
          height: 320px;
          background: white;
          border-radius: 16px;
          padding: 12px;
          margin: 0 auto 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .phone-icon {
          font-size: 40px;
          animation: float 3s ease-in-out infinite;
        }

        .phone-text {
          font-size: 14px;
          color: #4B5563;
          font-weight: 500;
        }

        .demo-stats {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .demo-stat {
          text-align: center;
          padding: 12px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .demo-stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
        }

        .demo-stat-label {
          font-size: 12px;
          color: #6B7280;
          font-weight: 500;
        }

        /* Features */
        .features-section {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .features-header h2 {
          font-size: 28px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 12px;
        }

        .features-header p {
          font-size: 16px;
          color: #6B7280;
          line-height: 1.6;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 24px;
          background: #F9FAFB;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: white;
          transform: translateX(5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #FF7A18;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          flex-shrink: 0;
        }

        .feature-content {
          flex: 1;
        }

        .feature-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        .feature-stat {
          font-size: 14px;
          font-weight: 600;
          color: #FF7A18;
          background: rgba(255, 122, 24, 0.1);
          padding: 4px 12px;
          border-radius: 50px;
        }

        .feature-description {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
          border-radius: 24px;
          padding: 60px;
        }

        .cta-title {
          font-size: 32px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 16px;
        }

        .cta-description {
          font-size: 18px;
          color: #6B7280;
          max-width: 600px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FF7A18;
          color: white;
          border: none;
          padding: 16px 40px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #E55A2B;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 122, 24, 0.2);
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .journey-steps {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .visual-demo {
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .transform-section {
            padding: 60px 20px;
          }
          
          .title {
            font-size: 32px;
          }
          
          .journey-steps {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .cta-section {
            padding: 40px 24px;
          }
          
          .cta-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 28px;
          }
          
          .badge {
            font-size: 12px;
            padding: 6px 16px;
          }
          
          .demo-stats {
            flex-direction: column;
            align-items: center;
          }
          
          .demo-stat {
            width: 100%;
            max-width: 200px;
          }
          
          .feature-header {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      <section className="transform-section">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <span className="badge">Start Your Journey</span>
            <h1 className="title">Transform Your Amazon Business</h1>
            <p className="subtitle">
              From learning basics to scaling success - a clear path to Amazon dropshipping mastery
            </p>
          </div>

          {/* Progress Line */}
          <div className="progress-line">
            <div className="progress-fill"></div>
          </div>

          {/* Journey Steps */}
          <div className="journey-steps">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card ${activeStep === index + 1 ? 'active' : ''}`}
                onClick={() => setActiveStep(index + 1)}
                style={{ '--step-color': step.color }}
              >
                <div className="step-number">{step.number}</div>
                <span className="step-icon">{step.icon}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="content-grid">
            {/* Visual Demo */}
            <div className="visual-demo">
              <div className="demo-content">
                <div className="demo-phone">
                  <div className="phone-screen">
                    <div className="phone-icon">📱</div>
                    <p className="phone-text">Amazon Seller</p>
                    <div className="demo-stats">
                      <div className="demo-stat">
                        <div className="demo-stat-value">300%</div>
                        <div className="demo-stat-label">Growth</div>
                      </div>
                      <div className="demo-stat">
                        <div className="demo-stat-value">98%</div>
                        <div className="demo-stat-label">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="features-section">
              <div className="features-header">
                <h2>Why Choose Adsadvo?</h2>
                <p>Comprehensive support at every step of your journey</p>
              </div>
              
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <div className="feature-header">
                        <h3 className="feature-title">{feature.title}</h3>
                        <span className="feature-stat">{feature.stat}</span>
                      </div>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-description">
              Join thousands of successful sellers who transformed their business with Adsadvo
            </p>
            <button className="cta-button">
              <span>▶</span>
              Start Free Training
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransformJourney;