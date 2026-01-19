import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzPHd_SBPSxamXvkJewqH-Rl68O2qGIJwhAy5LxgbHzvtv6zYCvn12uAei_T3LTpjoCAQ/exec";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Network error. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Send us a message</h2>
      <p style={styles.subheading}>
        Our experts will contact you within 24 hours
      </p>

      <div style={styles.grid}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        style={styles.input}
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        style={styles.input}
      >
        <option value="">Select Service</option>
        <option value="Amazon">Amazon Dropshipping</option>
        <option value="Shopify">Shopify Store</option>
        <option value="Flipkart">Flipkart Setup</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your requirement..."
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        style={styles.textarea}
      />

      <button type="submit" style={styles.button}>
        🚀 Send Message
      </button>

      {status && <p style={styles.status}>{status}</p>}
    </form>
  );
};

export default ContactForm;
