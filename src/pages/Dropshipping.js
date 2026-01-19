import React from "react";
import "./Dropshipping.css";

const platforms = [
  {
    title: "Amazon Dropshipping",
    desc: "Sell on Amazon without inventory. We handle sourcing, ads & logistics.",
    icon: "🅰️",
  },
  {
    title: "Flipkart Dropshipping",
    desc: "Launch your Flipkart store with expert catalog & ad support.",
    icon: "🛍️",
  },
  {
    title: "Meesho Dropshipping",
    desc: "Low investment business with trending products.",
    icon: "📦",
  },
  {
    title: "Own E-Commerce Website",
    desc: "Build your own brand with a custom website.",
    icon: "🌐",
  },
];

const Dropshipping = () => {
  return (
    <section className="dropshipping-page">
      <div className="dropshipping-hero">
        <h1>Start Your Online Dropshipping Business</h1>
        <p>
          With Adsadvo, launch and scale your dropshipping business across
          multiple platforms.
        </p>
      </div>

      <div className="dropshipping-grid">
        {platforms.map((item, index) => (
          <div className="dropshipping-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="dropshipping-cta">
        <h2>Ready to start dropshipping?</h2>
        <a href="/pricing" className="btn-primary">Get Started</a>
      </div>
    </section>
  );
};

export default Dropshipping;
