import React, { useState, useEffect } from "react";

// ─── Product Data ────────────────────────────────────────────────────────────
const products = [
  {
    badge: "Bestseller",
    coverTitle: "From Potential\nto Purpose",
    coverAuthor: "Dr. Vessel Michael Aladejana",
    cat: "Leadership Course & Book · The Foundry",
    title: "From Potential to Purpose",
    desc: "Five transformational modules that move you from buried potential to expressed, legacy-building purpose. The Foundry Leadership Institute flagship curriculum.",
    formats: [
      { type: "Digital PDF — Instant delivery", price: "$35.00", cta: "Buy Digital", href: "https://michaeladejana.gumroad.com/l/tysgx", disabled: false, solid: true },
      { type: "Physical Copy — Ships Worldwide", price: "$49.00", cta: "Coming Soon", href: "#", disabled: true, solid: false }
    ],
    coverBg: "linear-gradient(160deg,#7A1E2E 0%,#2B0A14 50%,#0E0A08 100%)",
    coming: false
  },
  {
    badge: "For Entrepreneurs",
    coverTitle: "The Brand\nBuilder Journal",
    coverAuthor: "Aziah Creative Agency",
    cat: "Entrepreneur Journal · 90 Days",
    title: "The Brand Builder Journal",
    desc: "90 days of structured daily entries, weekly reviews and monthly milestone letters — for entrepreneurs and marketplace leaders building something that lasts.",
    formats: [
      { type: "Digital PDF — Print at Home", price: "$18.00", cta: "Coming Soon", href: "#", disabled: true, solid: true },
      { type: "Physical Copy — Ships Worldwide", price: "$45.00", cta: "Coming Soon", href: "#", disabled: true, solid: false }
    ],
    coverBg: "linear-gradient(160deg,#1D6B4F 0%,#0A3D28 50%,#041A10 100%)",
    coming: true
  },
  {
    badge: "",
    coverTitle: "Next Title\nForthcoming",
    coverAuthor: "Dr. Vessel Michael Aladejana",
    cat: "New Release · 2026",
    title: "Next Title — To Be Announced",
    desc: "The next publication from Dr. Michael Aladejana is in development. Join the list for early access, launch pricing and a personal note from the author.",
    formats: [
      { type: "Pre-launch notification", price: "Free to join", cta: "Notify Me", href: "/#contact", disabled: false, solid: true },
      { type: "Digital & Physical", price: "TBA", cta: "Coming Soon", href: "#", disabled: true, solid: false }
    ],
    coverBg: "linear-gradient(160deg,#2C2060 0%,#14103A 60%,#080608 100%)",
    coming: true
  }
];

// ─── BooksPage Component ─────────────────────────────────────────────────────
export default function BooksPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // 3D tilt hover handlers (identical to App.jsx)
  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = ((yc - y) / yc) * 8;
    const rotateY = ((x - xc) / xc) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardReset = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal scroll animation observer
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className="nav-logo">
          <span className="nav-logo-name">Dr. Vessel Michael Aladejana</span>
          <span className="nav-logo-titles">Pastor · Advisor · Author · Speaker</span>
        </a>
        <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <li>
            <a href="/" onClick={() => setIsNavOpen(false)}>
              ← Back to Home
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="/#contact" className="nav-cta" onClick={() => setIsNavOpen(false)}>
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

      {/* ── Books Hero Banner ──────────────────────────────────────────── */}
      <section
        className="site-section shop"
        style={{
          paddingTop: "72px",
          background: "var(--warm)"
        }}
      >
        <div className="shop-header reveal">
          <div>
            <div className="s-eyebrow">
              <div className="s-line"></div>
              <span className="s-tag">Books &amp; Products</span>
            </div>
            <h2 className="s-title">
              Words that<br /><em>stay with you.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: ".95rem", color: "var(--muted)", lineHeight: "1.85", marginBottom: "1.25rem" }}>
              Every product was built to do one thing — move you further along the journey from where you are to where you were designed to be. These are not just books. They are tools for transformation — written from real experience, real ministry, and a real understanding of what it takes to build something that lasts.
            </p>
            <div className="shop-note">
              <strong>Digital books</strong> are delivered instantly to your inbox after purchase via Gumroad. <strong>Physical copies</strong> are fulfilled on demand by Amazon — no waiting, no hassle, ships worldwide.
            </div>
          </div>
        </div>

        {/* ── Product Grid ───────────────────────────────────────────── */}
        <div className="shop-grid reveal">
          {products.map((prod, idx) => (
            <div
              className="product-card"
              key={idx}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
              <div className="product-cover" style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: prod.coverBg }}></div>
                {prod.badge && <span className="product-badge">{prod.badge}</span>}
                {prod.coming && (
                  <div className="coming-overlay">
                    <span className="coming-label">Coming 2026</span>
                  </div>
                )}
                <div className="product-cover-title" style={prod.coming ? { opacity: 0.35 } : undefined}>
                  {prod.coverTitle.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                <div className="product-cover-author" style={prod.coming ? { opacity: 0.25 } : { opacity: 0.55 }}>
                  {prod.coverAuthor}
                </div>
              </div>
              <div className="product-body">
                <div className="product-cat">{prod.cat}</div>
                <div className="product-title">{prod.title}</div>
                <p className="product-desc">{prod.desc}</p>
                <div className="product-formats">
                  {prod.formats.map((fmt, fIdx) => (
                    <div className="format-row" key={fIdx}>
                      <div>
                        <div className="format-type">{fmt.type}</div>
                        <div className="format-price">{fmt.price}</div>
                      </div>
                      <a
                        href={fmt.disabled ? undefined : fmt.href}
                        className={`format-btn ${fmt.solid ? "solid" : "outline-btn"} ${fmt.disabled ? "disabled" : ""}`}
                        target={fmt.href.startsWith("http") ? "_blank" : undefined}
                        rel={fmt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {fmt.cta}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust Section ──────────────────────────────────────────── */}
        <div className="shop-trust reveal">
          <div className="trust-item">
            <div className="trust-icon">⚡</div>
            <div>
              <div className="trust-title">Instant Digital Delivery</div>
              <div className="trust-desc">PDFs delivered to your inbox immediately after purchase — no waiting required.</div>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🌍</div>
            <div>
              <div className="trust-title">Ships Worldwide</div>
              <div className="trust-desc">Physical copies printed and shipped globally on demand via Amazon.</div>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">✦</div>
            <div>
              <div className="trust-title">Satisfaction Guaranteed</div>
              <div className="trust-desc">Digital products — full refund within 7 days if not satisfied. No questions asked.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
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
              <li><a href="/books" style={{ color: "var(--light-gold)" }}>Books &amp; Products</a></li>
              <li><a href="/#media">Media</a></li>
              <li><a href="/#contact">Contact</a></li>
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
              <li><a href="/#contact">Book Dr. Michael</a></li>
              <li><a href="/#contact">Ministry Invitation</a></li>
              <li><a href="/#contact">Media &amp; Press</a></li>
              <li><a href="/#contact">Speaking Enquiry</a></li>
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
