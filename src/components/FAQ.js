import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Adsadvo and how does it work?',
      answer: 'Adsadvo is India\'s most trusted dropshipping platform that helps you start and grow your online business without inventory. We provide ready-to-sell products, verified suppliers, automated fulfillment, and expert support to help you scale your business confidently.'
    },
    {
      question: 'Do I need inventory to start?',
      answer: 'No, you don\'t need any inventory! That\'s the beauty of dropshipping. We operate on a zero-inventory model where you only pay for products after you receive orders from your customers. This eliminates the risk of unsold stock and upfront investment.'
    },
    {
      question: 'How much can I earn?',
      answer: 'Your earning potential depends on your efforts and the products you choose to sell. With our 100% profit margin model and no inventory costs, many of our sellers earn significant profits. Some active resellers have scaled their businesses to generate substantial monthly income.'
    },
    {
      question: 'Is any prior business experience required?',
      answer: 'No prior business experience is required! We provide step-by-step training, mentorship, and ongoing support to help you succeed. Our platform is designed for beginners and experienced sellers alike.'
    },
    {
      question: 'Is the support really lifetime?',
      answer: 'Yes! When you subscribe to our plans, you get full support for the duration of your subscription. Our expert team is always available to help you with account setup, product listing, order management, and any questions you may have.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-description">
          Everything you need to know before getting started.
        </p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-arrow">{openIndex === index ? '▲' : '▼'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

