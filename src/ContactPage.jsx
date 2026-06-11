import React, { useState, useEffect } from "react";

// ─── Google Forms Config ───
const GOOGLE_FORM_CONFIG = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfcpWpeF9EW7qIsSPAk8ajvH4lW2NNC_1Hd85Idc4lb2jxoEg/formResponse",
  fields: {
    firstName: "entry.228730259",
    lastName: "entry.1409036205",
    email: "entry.2066182869",
    organisation: "entry.1425259470",
    enquiry: "entry.1071782066",
    message: "entry.148796851"
  }
};

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [contactType, setContactType] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    enquiry: "",
    message: ""
  });

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 3D tilt hover handlers
  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = ((yc - y) / yc) * 2;
    const rotateY = ((x - xc) / xc) * 2;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.005, 1.005, 1.005)`;
  };

  const handleCardReset = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Use hidden iframe + form POST — the most reliable cross-origin Google Forms method
    const iframeName = "hidden_gform_iframe";
    let iframe = document.getElementById(iframeName);
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = iframeName;
      iframe.name = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }
    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM_CONFIG.actionUrl;
    form.target = iframeName;
    form.style.display = "none";
    Object.entries(GOOGLE_FORM_CONFIG.fields).forEach(([key, entryId]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = entryId;
      input.value = formData[key];
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    setFormSubmitted(true);
  };

  const nav = [
    { label: "About", href: "/#about" },
    { label: "Ministry", href: "/#ministry" },
    { label: "Work", href: "/#platforms" },
    { label: "Speaking", href: "/#speaking" },
    { label: "Shop", href: "/books" },
    { label: "Media", href: "/#media" },
    { label: "Connect", href: "/#connect" }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className="nav-logo" onClick={() => setIsNavOpen(false)}>
          <span className="nav-logo-name">Dr. Vessel Michael Aladejana</span>
          <span className="nav-logo-titles">Pastor · Advisor · Author · Speaker</span>
        </a>
        <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setIsNavOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="/contact" className="nav-cta" onClick={() => setIsNavOpen(false)}>
            Book Dr. Michael
          </a>
          <div
            className={`nav-mobile-toggle ${isNavOpen ? "open" : ""}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Contact Page Hero */}
      <section className="contact-page-hero">
        <div className="contact-page-hero-inner">
          <div className="s-eyebrow">
            <div className="s-line" style={{ background: "var(--light-gold)" }}></div>
            <span className="s-tag">Get in Touch</span>
          </div>
          <h1 className="contact-page-title">
            Let's build<br /><em>together.</em>
          </h1>
          <p className="contact-desc">
            Whether you are inviting Dr. Michael to speak at your church or conference, engaging Ascentry Advisory for corporate work, joining The Foundry, or purchasing a book — the conversation starts here.
          </p>
        </div>
      </section>

      {/* Contact Info & Platforms */}
      <section className="contact-page-info">
        <div className="contact-page-info-inner reveal">
          <div className="contact-info-col">
            <h3 className="contact-info-heading">Direct Contact</h3>
            <div className="contact-lines">
              <a href="mailto:michael@michaelaladejana.com" className="contact-line">
                <div className="contact-line-dash"></div>
                michael@michaelaladejana.com
              </a>
              <a
                href="https://ascentryadvisory.com"
                className="contact-line"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-line-dash"></div>
                ascentryadvisory.com
              </a>
              <a
                href="https://thefoundryleadership.com"
                className="contact-line"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-line-dash"></div>
                thefoundryleadership.com
              </a>
            </div>
          </div>
          <div className="contact-info-col">
            <h3 className="contact-info-heading">Platforms</h3>
            <div className="contact-platforms" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <div className="cp-links">
                <a
                  href="https://ascentryadvisory.com"
                  className="cp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cp-link-dot"></div>
                  Ascentry Advisory — Corporate & Organisational
                </a>
                <a
                  href="https://thefoundryleadership.com"
                  className="cp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cp-link-dot"></div>
                  The Foundry Leadership Institute — Personal Development
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Type Selector + Form */}
      <section className="contact-page-form-section">
        <div className="contact-page-form-inner reveal">
          {/* Two-card contact type selector */}
          {!contactType && !formSubmitted && (
            <div className="contact-type-grid">
              <div
                className="contact-type-card"
                onClick={() => setContactType("ministry")}
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
              >
                <div className="contact-type-icon">✦</div>
                <div className="contact-type-title">Ministry & Speaking</div>
                <div className="contact-type-desc">
                  Church services, conferences, retreats, prophetic ministry, The Foundry, books, media & general enquiries
                </div>
                <div className="contact-type-cta">Fill out the form →</div>
              </div>
              <a
                href="https://cal.com/michael-aladejana-j0rt6p"
                className="contact-type-card"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
                style={{ textDecoration: "none" }}
              >
                <div className="contact-type-icon">✦</div>
                <div className="contact-type-title">Corporate & Advisory</div>
                <div className="contact-type-desc">
                  Ascentry Advisory — executive development, change management, culture & human capital, corporate strategy
                </div>
                <div className="contact-type-cta">Book a consultation →</div>
              </a>
            </div>
          )}

          {/* Ministry & Speaking Form (Google Forms submission) */}
          {contactType === "ministry" && !formSubmitted && (
            <>
              <button
                className="contact-back-btn"
                onClick={() => setContactType(null)}
                type="button"
              >
                ← Back to options
              </button>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-input"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-input"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation or Church</label>
                  <input
                    type="text"
                    name="organisation"
                    className="form-input"
                    placeholder="Your organisation, church or company"
                    value={formData.organisation}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">I am reaching out about</label>
                  <select
                    name="enquiry"
                    className="form-select"
                    required
                    value={formData.enquiry}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an option</option>
                    <optgroup label="Ministry & Speaking">
                      <option value="Ministry speaking - Church/Conference/ retreat">Ministry Speaking — Church / Conference / Retreat</option>
                      <option value="Corporate keynote speaking">Corporate Keynote Speaking</option>
                      <option value="Prophetic ministry invitation">Prophetic Ministry Invitation</option>
                    </optgroup>
                    <optgroup label="The Foundry">
                      <option value="The foundation cohort - join/learn more">The Foundry Cohort — Join / Learn More</option>
                      <option value="Metamorphosis Conference 2026">Metamorphosis Conference 2026</option>
                      <option value="From potential to purpose course">From Potential to Purpose Course</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option value="Books & Products">Books & Products</option>
                      <option value="Media & Press Enquiry">Media & Press Enquiry</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </optgroup>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your need, opportunity or invitation..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <p className="form-fine">
                  All enquiries are treated with complete confidentiality. We respond within 2 business days.
                </p>
                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </>
          )}

          {/* Success confirmation */}
          {formSubmitted && (
            <div className="form-success">
              <h3>Thank you for your enquiry.</h3>
              <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
                We have received your message and will respond within 2 business days.
              </p>
              <a href="/" className="btn-primary" style={{ marginTop: "2rem", display: "inline-block" }}>
                ← Back to Home
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Dr. Vessel Michael Aladejana</div>
            <div className="footer-brand-tag">Pastor · Advisor · Author · Speaker · Founder</div>
            <p className="footer-brand-desc">
              One man. Many dimensions. One mission — to raise leaders who outlast their season and leave a legacy that outlasts their name.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li><a href="/#about">About</a></li>
              <li><a href="/#ministry">Ministry</a></li>
              <li><a href="/#platforms">Platforms</a></li>
              <li><a href="/#speaking">Speaking</a></li>
              <li><a href="/#events">Events</a></li>
              <li><a href="/#media">Media</a></li>
              <li><a href="/#shop">Shop</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Platforms</div>
            <ul className="footer-links">
              <li>
                <a href="https://ascentryadvisory.com" target="_blank" rel="noopener noreferrer">
                  Ascentry Advisory
                </a>
              </li>
              <li>
                <a href="https://thefoundryleadership.com" target="_blank" rel="noopener noreferrer">
                  The Foundry Leadership Institute
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pst.michaelmotcha?igsh=N3BscG84amdyd2k5" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@pst.michaelmotcha?si=hFDZILnN7234indR" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@pst.michaelmotcha?_r=1&_t=ZT-96UurXLzM0k" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:michael@michaelaladejana.com">michael@michaelaladejana.com</a></li>
              <li><a href="/contact">Book Dr. Michael</a></li>
              <li><a href="/contact">Ministry Invitation</a></li>
              <li><a href="/contact">Media & Press</a></li>
              <li><a href="/contact">Speaking Enquiry</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Dr. Vessel Michael Aladejana. All rights reserved.</span>
          <ul className="footer-legal">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Confidentiality</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
