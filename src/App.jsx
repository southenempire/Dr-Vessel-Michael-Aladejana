import React, { useState, useEffect, useRef } from "react";
import portraitImg from "./assets/portrait.png";
import "./App.css";
import gallery1 from "./assets/gallery-1.jpg";
import gallery2 from "./assets/gallery-2.jpg";
import gallery3 from "./assets/gallery-3.jpg";
import gallery4 from "./assets/gallery-4.jpg";

// Data declarations matching the exact content of the reference site
const nav = [
  { label: "About", href: "#about" },
  { label: "Ministry", href: "#ministry" },
  { label: "Work", href: "#platforms" },
  { label: "Speaking", href: "#speaking" },
  { label: "Shop", href: "/books" },
  { label: "Media", href: "#media" },
  { label: "Connect", href: "#connect" }
];

const roles = [
  "Pastor",
  "Corporate Advisor",
  "Author",
  "Speaker",
  "Leadership Developer",
  "Founder"
];

const stats = [
  { n: "15+", l: "Years in ministry & leadership" },
  { n: "3", l: "Continents of impact" },
  { n: "2", l: "Global platforms built" }
];

const dimensions = [
  { icon: "I", label: "Pastor", desc: "Local church leader & itinerant minister across nations" },
  { icon: "II", label: "Advisor", desc: "Founder, Ascentry Advisory — corporate leadership & transformation" },
  { icon: "III", label: "Author", desc: "Published author of leadership, purpose & personal development titles" },
  { icon: "IV", label: "Speaker", desc: "World-class keynote speaker for corporate, faith and public sector events" },
  { icon: "V", label: "Founder", desc: "Founder, The Foundry Leadership Institute — from potential to purpose" }
];

const aboutStats = [
  { n: "15+", l: "Years in leadership" },
  { n: "3", l: "Continents impacted" },
  { n: "2", l: "Global platforms" },
  { n: "1", l: "Unwavering mission" }
];

const credentials = [
  "Doctor of Leadership & Organisational Development",
  "Pastor — local church & itinerant ministry",
  "Founder, Ascentry Advisory",
  "Founder, The Foundry Leadership Institute",
  "Author — From Potential to Purpose",
  "International keynote speaker, 15+ nations"
];

const ministryPillars = [
  {
    num: "01",
    title: "Local Church Leadership",
    desc: "Dr. Michael leads a local congregation with vision, structure and pastoral depth — building a community of believers who are grounded in truth and activated in purpose."
  },
  {
    num: "02",
    title: "Itinerant Ministry & Teaching",
    desc: "He ministers across nations as an itinerant teacher, preacher and prophetic voice — bringing the Word with clarity, authority and revelation that moves congregations and individuals."
  },
  {
    num: "03",
    title: "Corporate Prayer & Intercession",
    desc: "He leads corporate prayer gatherings — structured, theologically grounded, and atmospherically charged. His teaching on prayer challenges the performance of religion and calls believers into genuine alignment."
  },
  {
    num: "04",
    title: "The Foundry Leadership Institute",
    desc: "His faith-based leadership platform — developing marketplace leaders who carry both professional excellence and spiritual identity. Where potential becomes purpose."
  },
  {
    num: "05",
    title: "Prophetic Ministry & Counsel",
    desc: "Dr. Michael operates in prophetic ministry — speaking into individual lives and corporate gatherings with accuracy, love and the authority of a man who walks closely with God."
  }
];

const speakingTopics = [
  {
    num: "01",
    title: "From Potential to Purpose",
    desc: "The flagship message — moving individuals and organisations from buried capacity to expressed, legacy-building purpose."
  },
  {
    num: "02",
    title: "The Architecture of Leadership",
    desc: "Building leaders from the inside out — character, identity and interior life before strategy, title and platform."
  },
  {
    num: "03",
    title: "Organisational Transformation",
    desc: "Why organisations fail from the top — and how to build a leadership culture that produces permanent results."
  },
  {
    num: "04",
    title: "Faith, Identity & Marketplace",
    desc: "For faith conferences and ministry gatherings — the theology of purpose, calling and kingdom-minded leadership."
  },
  {
    num: "05",
    title: "The Discipline of Becoming",
    desc: "Personal development for leaders — the daily habits, associations and disciplines that separate the extraordinary from the ordinary."
  }
];

const speakingTypes = [
  { icon: "I", title: "Corporate Keynotes", desc: "C-suite events, leadership summits, financial conferences and corporate annual gatherings" },
  { icon: "II", title: "Church & Ministry", desc: "Sunday services, leadership conferences, retreats, prophetic gatherings and ministry events" },
  { icon: "III", title: "Conferences", desc: "Plenary and breakout sessions for leadership and personal development conferences worldwide" },
  { icon: "IV", title: "Masterclasses", desc: "Half and full-day intensive sessions for executive teams and leadership cohorts" }
];

const events = [
  {
    date: "November 2026",
    badge: "Ministry Event",
    type: "Annual Conference",
    title: "Metamorphosis Conference 2026",
    location: "📍 Houston, Texas",
    desc: "Three days of transformation — Friday through Sunday morning. Speakers, workshops and activation sessions for leaders at every stage of their journey. The Foundry Leadership Institute flagship annual event.",
    cta: "Register Interest",
    href: "#contact",
    external: false
  },
  {
    date: "Ongoing — Monthly",
    badge: "Foundry Cohort",
    type: "Leadership Development",
    title: "The Foundry Leadership Cohort",
    location: "📍 Houston, TX & Virtual",
    desc: "Monthly cohort sessions for emerging entrepreneurs and marketplace leaders. Structured curriculum, accountability, mentorship and community — building leaders from the inside out.",
    cta: "Learn More",
    href: "https://thefoundryleadership.com",
    external: true
  },
  {
    date: "Available Year-Round",
    badge: "Corporate",
    type: "Corporate Speaking & Advisory",
    title: "Ascentry Advisory Engagements",
    location: "📍 Worldwide",
    desc: "Corporate keynotes, executive masterclasses, leadership development programmes, and advisory retainers — available to organisations worldwide across all sectors.",
    cta: "Enquire",
    href: "https://ascentryadvisory.com",
    external: true
  },
  {
    date: "Available for Booking",
    badge: "Ministry",
    type: "Itinerant Ministry",
    title: "Church & Ministry Invitations",
    location: "📍 International",
    desc: "Dr. Michael is available to minister at churches, retreats, leadership conferences, and special services worldwide. He brings the Word with authority, precision, and a prophetic edge that shifts atmospheres.",
    cta: "Invite Dr. Michael",
    href: "#contact",
    external: false
  }
];

const sermons = [
  { num: "01", series: "From Potential to Purpose Series", title: "The Problem with Potential", meta: "The Foundry Leadership Institute · 2025" },
  { num: "02", series: "Prayer & Alignment Series", title: "Rethinking P.U.S.H. — Prayer as Alignment, Not Petition", meta: "Corporate Prayer Gathering · 2024" },
  { num: "03", series: "Identity & Purpose Series", title: "You Are Not Behind — You Are Early", meta: "Sunday Service · 2025" },
  { num: "04", series: "Leadership & Character", title: "The Interior Life — What Nobody Sees Becomes Everything", meta: "Metamorphosis Conference · 2024" },
  { num: "05", series: "Marketplace Leadership", title: "The Discipline of Becoming — Building in the Dark", meta: "The Foundry Cohort · 2025" }
];

const press = [
  { outlet: "Leadership Today", title: "The Advisor Who Doesn't Tell You What You Want to Hear", date: "Feature Article · 2025" },
  { outlet: "Houston Business Journal", title: "Dr. Michael Aladejana on Building Leaders That Outlast Their Organisations", date: "Interview · 2025" },
  { outlet: "The Foundry Podcast", title: "From Potential to Purpose — A Conversation with the Author", date: "Podcast Episode · 2025" },
  { outlet: "Faith & Business Review", title: "How One Pastor Built a Corporate Advisory Firm Without Losing His Calling", date: "Profile · 2024" },
  { outlet: "Kingdom Business Network", title: "Dr. Michael on The Foundry — We Don't Produce Followers. We Commission Leaders.", date: "Interview · 2024" }
];

const gallery = [
  { label: "Keynote Address", desc: "Global Leadership Summit", image: gallery1, featured: true },
  { label: "Ministry & Commissioning", desc: "Sunday Service", image: gallery4, featured: false },
  { label: "Corporate Advisory", desc: "Boardroom Strategy Session", image: gallery2, featured: false },
  { label: "Transformational Leadership", desc: "The Foundry Cohort", image: gallery3, featured: false }
];

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
      { type: "Pre-launch notification", price: "Free to join", cta: "Notify Me", href: "#contact", disabled: false, solid: true },
      { type: "Digital & Physical", price: "TBA", cta: "Coming Soon", href: "#", disabled: true, solid: false }
    ],
    coverBg: "linear-gradient(160deg,#2C2060 0%,#14103A 60%,#080608 100%)",
    coming: true
  }
];

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    name: "Instagram",
    handle: "@pst.michaelmotcha",
    cta: "Follow",
    href: "https://www.instagram.com/pst.michaelmotcha?igsh=N3BscG84amdyd2k5"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
    name: "YouTube",
    handle: "@pst.michaelmotcha",
    cta: "Subscribe",
    href: "https://youtube.com/@pst.michaelmotcha?si=hFDZILnN7234indR"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ),
    name: "TikTok",
    handle: "@pst.michaelmotcha",
    cta: "Follow",
    href: "https://www.tiktok.com/@pst.michaelmotcha?_r=1&_t=ZT-96UurXLzM0k"
  }

];

function Interactive3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    // Parent sizing
    let width = (canvas.width = canvas.parentElement.offsetWidth || 400);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 400);

    const points = [];
    const numPoints = 135;
    const radius = Math.min(width, height) * 0.38;

    // Generate points on a sphere using Fibonacci spiral for uniform spacing
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi)
      });
    }

    let angleX = 0.0015;
    let angleY = 0.002;
    let targetRotationX = 0.0015;
    let targetRotationY = 0.002;

    const handleMouseMove = (e) => {
      // Rotate based on general mouse position relative to window center
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      targetRotationX = y * 0.000015;
      targetRotationY = x * 0.000015;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement.offsetWidth || 400;
      height = canvas.height = canvas.parentElement.offsetHeight || 400;
    };
    window.addEventListener("resize", handleResize);

    const project = (x, y, z) => {
      const fov = 450;
      const distance = 400;
      const scale = fov / (distance + z);
      return {
        x: width / 2 + x * scale,
        y: height / 2 + y * scale,
        scale: scale
      };
    };

    const rotateX = (point, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y = point.y * cos - point.z * sin;
      const z = point.y * sin + point.z * cos;
      point.y = y;
      point.z = z;
    };

    const rotateY = (point, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = point.x * cos + point.z * sin;
      const z = -point.x * sin + point.z * cos;
      point.x = x;
      point.z = z;
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Dampen rotation transition for smoothness
      angleX += (targetRotationX - angleX) * 0.05;
      angleY += (targetRotationY - angleY) * 0.05;

      points.forEach((p) => {
        rotateX(p, angleX);
        rotateY(p, angleY);
      });

      // Sort points by depth (z) to fade background lines
      const sorted = [...points].sort((a, b) => b.z - a.z);

      // Render wireframe lines
      ctx.strokeStyle = "rgba(184, 148, 63, 0.08)"; // Very subtle gold
      ctx.lineWidth = 0.5;
      for (let i = 0; i < sorted.length; i++) {
        const p1 = project(sorted[i].x, sorted[i].y, sorted[i].z);
        for (let j = i + 1; j < sorted.length; j++) {
          const dx = sorted[i].x - sorted[j].x;
          const dy = sorted[i].y - sorted[j].y;
          const dz = sorted[i].z - sorted[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Only draw lines between nearby nodes
          if (dist < radius * 0.45) {
            const p2 = project(sorted[j].x, sorted[j].y, sorted[j].z);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Render nodes
      sorted.forEach((p) => {
        const proj = project(p.x, p.y, p.z);
        const alpha = Math.max(0.08, (p.z + radius) / (2 * radius));
        ctx.fillStyle = `rgba(212, 168, 83, ${alpha * 0.6})`; // Gold nodes fading in distance
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, Math.max(1, proj.scale * 2.2), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1
      }}
    />
  );
}

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic 3D tilt hover handlers
  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    // Cap tilt angle at 2 degrees for a minimal effect
    const rotateX = ((yc - y) / yc) * 2;
    const rotateY = ((x - xc) / xc) * 2;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.005, 1.005, 1.005)`;
  };

  const handleCardReset = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };
  const [activeRole, setActiveRole] = useState("Pastor");
  const [manualActiveRole, setManualActiveRole] = useState(null);
  const [mediaTab, setMediaTab] = useState("sermons");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactType, setContactType] = useState(null); // null = show cards, "ministry" = show form

  // Auto-cycle hero roles (moving the brown active background across the badges)
  useEffect(() => {
    if (manualActiveRole !== null) {
      const timeout = setTimeout(() => {
        setManualActiveRole(null);
      }, 10000); // Resume auto-cycling after 10 seconds of manual inactivity
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setActiveRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 2500); // Cycle every 2.5 seconds
    return () => clearInterval(interval);
  }, [manualActiveRole]);
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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
  }, [mediaTab]); // Re-observe when switching tabs because new DOM elements render

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ─── Google Forms Config (placeholder) ───
  // Replace these with your actual Google Form URL and entry IDs
  const GOOGLE_FORM_CONFIG = {
    actionUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
    fields: {
      firstName: "entry.XXXXXXXXXX",
      lastName: "entry.XXXXXXXXXX",
      email: "entry.XXXXXXXXXX",
      organisation: "entry.XXXXXXXXXX",
      enquiry: "entry.XXXXXXXXXX",
      message: "entry.XXXXXXXXXX"
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Build Google Forms submission data
    const body = new FormData();
    Object.entries(GOOGLE_FORM_CONFIG.fields).forEach(([key, entryId]) => {
      body.append(entryId, formData[key]);
    });
    try {
      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: "POST",
        body,
        mode: "no-cors" // Google Forms doesn't return CORS headers
      });
    } catch (_) {
      // no-cors requests always succeed from the browser's perspective
    }
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Site Navigation */}
      <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo" onClick={() => setIsNavOpen(false)}>
          <span className="nav-logo-name">Dr. Vessel Michael Aladejana</span>
          <span className="nav-logo-titles">Pastor · Advisor · Author · Speaker</span>
        </a>
        <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="#contact" className="nav-cta" onClick={() => setIsNavOpen(false)}>
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

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">Dr. Vessel Michael Aladejana</span>
          </div>
          <h1 className="hero-name">
            One man.<br />
            <strong>Many dimensions.</strong><br />
            <em>One mission.</em>
          </h1>
          <div className="hero-roles">
            {roles.map((role) => (
              <span
                key={role}
                className={`role-badge ${activeRole === role ? "active" : ""}`}
                onClick={() => {
                  setActiveRole(role);
                  setManualActiveRole(role);
                }}
                style={{ cursor: "pointer" }}
              >
                {role}
              </span>
            ))}
          </div>
          <p className="hero-desc">
            I build people who build things — in pulpits and boardrooms, in communities and corporations, across nations and generations. My mission is singular: to raise leaders who are excellent in character, precise in purpose, and permanent in impact.
          </p>
          <p className="hero-verse">
            &quot;Before I formed you in the womb I knew you; before you were born I sanctified you.&quot; — Jeremiah 1:5
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn-primary">Discover the Full Story</a>
            <a href="#contact" className="btn-ghost">Book an Engagement</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-wrap">
            <div className="hero-img-placeholder" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #8a3a4e, #5c2235, #3a1520)" }}>
              <Interactive3DCanvas />
              <img
                src={portraitImg}
                alt="Dr. Vessel Michael Aladejana"
                className="hero-portrait-img"
                style={{
                  position: "absolute",
                  bottom: "-15%",
                  left: "50%",
                  transform: "translateX(-50%) scale(1.18)",
                  transformOrigin: "center bottom",
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  zIndex: 2,
                  pointerEvents: "none"
                }}
              />
            </div>
            <div className="hero-img-overlay" style={{ zIndex: 3 }}></div>
          </div>

          <div className="hero-caption">
            <div className="hero-caption-name">Dr. Vessel Michael Aladejana</div>
            <div className="hero-caption-title">Pastor · Advisor · Author · Speaker · Founder</div>
          </div>
          <div className="hero-stats-bar">
            {stats.map((stat, idx) => (
              <div className="hero-stat" key={idx}>
                <div className="hero-stat-n">{stat.n}</div>
                <div className="hero-stat-l">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity Strip */}
      <div className="identity-strip">
        <div className="identity-grid">
          {dimensions.map((dim, idx) => (
            <div className="identity-item" key={idx}>
              <div className="identity-icon">{dim.icon}</div>
              <div className="identity-label">{dim.label}</div>
              <div className="identity-desc">{dim.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="site-section about" id="about" style={{ position: "relative", overflow: "hidden" }}>
        <div className="floating-bg-shape" style={{ top: "8%", left: "4%", fontSize: "3rem", color: "var(--gold)" }}>✦</div>
        <div className="floating-bg-shape" style={{ bottom: "12%", right: "6%", fontSize: "4.5rem", color: "var(--burgundy)", animationDelay: "-4s" }}>✦</div>
        <div className="reveal">
          <div className="s-eyebrow">
            <div className="s-line"></div>
            <span className="s-tag">The Full Story</span>
          </div>
          <h2 className="s-title">Not built<br />by accident.</h2>
          <div className="about-stats">
            {aboutStats.map((stat, idx) => (
              <div className="stat-block" key={idx}>
                <div className="stat-n">{stat.n}</div>
                <div className="stat-l">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal reveal-d1">
          <p className="about-p">
            Dr. Vessel Michael Aladejana is a pastor, corporate advisor, speaker, author and founder whose life and work refuse to be contained within a single description. He leads a local church congregation while travelling internationally as a minister, teacher and prophetic voice. He builds Fortune-level organisations as a corporate advisor while developing individual leaders through The Foundry Leadership Institute.
          </p>
          <p className="about-p">
            He carries the rare ability to speak with equal authority in a boardroom and a pulpit — to a CEO navigating transformation and a young entrepreneur trying to find their footing. The languages are different. The depth is the same. The mission is singular: to raise leaders who outlast their season, build things that outlast themselves, and leave a legacy that outlasts their name.
          </p>
          <blockquote className="about-quote">
            &quot;The world will not be changed by people who almost did something great. It will be changed by people who decided — in the ordinary moments of ordinary days — to be extraordinary anyway.&quot;
          </blockquote>
          <p className="about-p">
            He is the founder of Ascentry Advisory — a global leadership and organisational transformation firm — and The Foundry Leadership Institute, a personal development institution for marketplace leaders who carry both professional ambition and spiritual identity.
          </p>
          <div className="about-credentials">
            {credentials.map((cred, idx) => (
              <div className="cred-item" key={idx}>
                <div className="cred-dot"></div>
                {cred}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: ".875rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">Work with Dr. Michael</a>
            <a href="#ministry" className="btn-ghost">Ministry Work</a>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* Ministry Section */}
      <section className="site-section ministry" id="ministry">
        <div className="ministry-inner">
          <div className="reveal">
            <div className="s-eyebrow">
              <div className="s-line"></div>
              <span className="s-tag">Ministry & Pastoral Work</span>
            </div>
            <h2 className="s-title" style={{ color: "var(--ivory)" }}>
              Called before<br />he was<br /><em>formed.</em>
            </h2>
            <p className="ministry-desc">
              Before the boardrooms, before the books, before the conferences — there was a call. Dr. Michael Aladejana is first and foremost a man under divine assignment. He leads a local church congregation with the same intentionality he brings to corporate strategy, and he travels internationally as a speaker, teacher and prophetic voice to the nations.
            </p>
            <div className="ministry-verse">
              &quot;The Spirit of the Lord God is upon me, because the Lord has anointed me to bring good news to the poor; he has sent me to bind up the brokenhearted, to proclaim liberty to the captives.&quot;
              <span>— Isaiah 61:1</span>
            </div>
            <div className="ministry-cta">
              <a href="#events" className="btn-ivory">Upcoming Ministry Events</a>
              <a href="#media" className="btn-gold-outline">Watch / Listen</a>
            </div>
          </div>
          <div className="reveal reveal-d1">
            <div className="ministry-pillars">
              {ministryPillars.map((pillar) => (
                <div className="ministry-pillar" key={pillar.num}>
                  <div className="pillar-num">{pillar.num}</div>
                  <div>
                    <div className="pillar-title">{pillar.title}</div>
                    <div className="pillar-desc">{pillar.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="site-section platforms" id="platforms" style={{ position: "relative", overflow: "hidden" }}>
        <div className="floating-bg-shape" style={{ top: "15%", right: "8%", fontSize: "3.5rem", color: "var(--gold)", animationDelay: "-8s" }}>✦</div>
        <div className="floating-bg-shape" style={{ bottom: "10%", left: "5%", fontSize: "4rem", color: "var(--burgundy)", animationDelay: "-2s" }}>✦</div>
        <div className="platforms-header">
          <div className="reveal">
            <div className="s-eyebrow">
              <div className="s-line"></div>
              <span className="s-tag">Corporate Platforms</span>
            </div>
            <h2 className="s-title">
              Two platforms.<br /><em>One standard.</em>
            </h2>
          </div>
          <div className="reveal reveal-d1">
            <p className="s-body">
              Alongside his pastoral work, Dr. Michael leads two world-class platforms that serve leaders in the marketplace — one corporate and sector-agnostic, one faith-informed and purpose-driven.
            </p>
          </div>
        </div>
        <div className="platforms-grid reveal">
          <a
            href="https://ascentryadvisory.com"
            className="platform-card dark"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleCardTilt}
            onMouseLeave={handleCardReset}
          >
            <span className="platform-tag">Corporate · Advisory · Strategy</span>
            <div className="platform-name">Ascentry<br />Advisory</div>
            <p className="platform-desc">
              Strategic leadership advisory for corporations, financial institutions and organisations navigating transformation. Change management, culture, executive development and organisational strategy — delivered at the highest level.
            </p>
            <div className="platform-link">
              Visit Ascentry Advisory <div className="p-arrow"></div>
            </div>
          </a>
          <a
            href="https://thefoundryleadership.com"
            className="platform-card light"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleCardTilt}
            onMouseLeave={handleCardReset}
          >
            <span className="platform-tag">Leadership · Development · Purpose</span>
            <div className="platform-name">The Foundry<br />Leadership Institute</div>
            <p className="platform-desc">
              For marketplace leaders who carry both professional ambition and personal conviction. Courses, cohorts, conferences, and published resources — taking leaders from potential to purpose.
            </p>
            <div className="platform-link">
              Visit The Foundry <div className="p-arrow"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="site-section speaking" id="speaking">
        <div className="reveal">
          <div className="s-eyebrow">
            <div className="s-line" style={{ background: "var(--light-gold)" }}></div>
            <span className="s-tag">Speaking</span>
          </div>
          <h2 className="s-title">
            Every room<br />leaves <em>different.</em>
          </h2>
        </div>
        <div className="speaking-body">
          <div className="reveal">
            <p style={{ fontSize: ".95rem", color: "rgba(247,243,238,.55)", lineHeight: "1.85", marginBottom: "2rem" }}>
              Dr. Michael speaks to corporate executives and church congregations, to governments and gatherings of thousands — with the same commanding presence, the same depth of content, and the same ability to leave a room permanently shifted.
            </p>
            <div className="speaking-topics">
              {speakingTopics.map((topic) => (
                <div className="speaking-topic" key={topic.num}>
                  <div className="topic-num">{topic.num}</div>
                  <div>
                    <div className="topic-title">{topic.title}</div>
                    <div className="topic-desc">{topic.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-d1">
            <div className="speaking-types">
              {speakingTypes.map((type, idx) => (
                <div className="speaking-type" key={idx}>
                  <div className="type-icon">{type.icon}</div>
                  <div className="type-title">{type.title}</div>
                  <div className="type-desc">{type.desc}</div>
                </div>
              ))}
            </div>
            <div className="speaking-note">
              Dr. Michael speaks to <strong>both corporate and ministry audiences</strong> — bringing the same depth and authority to every engagement. He tailors every message to the specific room, need, and moment.
            </div>
            <a href="#contact" className="btn-ivory">Enquire About Speaking</a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="site-section events" id="events">
        <div className="reveal">
          <div className="s-eyebrow">
            <div className="s-line"></div>
            <span className="s-tag">Upcoming Events</span>
          </div>
          <h2 className="s-title">
            Be in<br />the <em>room.</em>
          </h2>
          <p className="s-body">
            From corporate leadership conferences to ministry gatherings — find your next encounter with Dr. Michael and the communities he builds.
          </p>
        </div>
        <div className="events-grid reveal">
          {events.map((evt, idx) => (
            <div
              className="event-card"
              key={idx}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
              <div className="event-top">
                <div className="event-date">{evt.date}</div>
                <span className="event-badge">{evt.badge}</span>
              </div>
              <div className="event-body">
                <div className="event-type">{evt.type}</div>
                <div className="event-title">{evt.title}</div>
                <div className="event-location">{evt.location}</div>
                <p className="event-desc">{evt.desc}</p>
                <a
                  href={evt.href}
                  className="event-link"
                  target={evt.external ? "_blank" : undefined}
                  rel={evt.external ? "noopener noreferrer" : undefined}
                >
                  {evt.cta} <div className="event-link-line"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section className="site-section media" id="media">
        <div className="media-header reveal">
          <div>
            <div className="s-eyebrow">
              <div className="s-line" style={{ background: "var(--light-gold)" }}></div>
              <span className="s-tag">Media</span>
            </div>
            <h2 className="s-title">
              The message.<br /><em>Everywhere.</em>
            </h2>
          </div>
          <p style={{ fontSize: ".95rem", color: "rgba(247,243,238,.45)", lineHeight: "1.85" }}>
            Sermons, teachings, interviews, press features and visual moments — a growing library of content from Dr. Michael's ministry, speaking and advisory work.
          </p>
        </div>
        <div className="media-tabs">
          <button
            className={`media-tab ${mediaTab === "sermons" ? "active" : ""}`}
            onClick={() => setMediaTab("sermons")}
          >
            Sermons &amp; Teachings
          </button>
          <button
            className={`media-tab ${mediaTab === "press" ? "active" : ""}`}
            onClick={() => setMediaTab("press")}
          >
            Press &amp; Features
          </button>
          <button
            className={`media-tab ${mediaTab === "gallery" ? "active" : ""}`}
            onClick={() => setMediaTab("gallery")}
          >
            Gallery
          </button>
        </div>

        <div>
          {mediaTab === "sermons" && (
            <>
              <div className="sermon-grid">
                {sermons.map((sermon) => (
                  <div className="sermon-item" key={sermon.num}>
                    <div className="sermon-num">{sermon.num}</div>
                    <div>
                      <div className="sermon-series">{sermon.series}</div>
                      <div className="sermon-title">{sermon.title}</div>
                      <div className="sermon-meta">{sermon.meta}</div>
                    </div>
                    <div className="sermon-play">
                      <svg viewBox="0 0 24 24">
                        <polygon points="5,3 19,12 5,21"></polygon>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
                <a href="#" className="btn-gold-outline">View Full Library</a>
                <a href="#connect" className="btn-gold-outline">Subscribe on YouTube</a>
              </div>
            </>
          )}

          {mediaTab === "press" && (
            <div className="press-grid">
              {press.map((pr, idx) => (
                <div className="press-item" key={idx}>
                  <div className="press-outlet">{pr.outlet}</div>
                  <div className="press-title">{pr.title}</div>
                  <div className="press-date">{pr.date}</div>
                </div>
              ))}
              <a href="#contact" className="press-item" style={{ textDecoration: "none" }}>
                <div className="press-outlet">Media &amp; Press</div>
                <div className="press-title" style={{ fontWeight: 500 }}>
                  For press enquiries, interview requests and media features contact our team
                </div>
                <div className="press-date" style={{ color: "var(--light-gold)" }}>
                  → Get in Touch
                </div>
              </a>
            </div>
          )}

          {mediaTab === "gallery" && (
            <>
              <div className="gallery-grid">
                {gallery.map((gal, idx) => (
                  <div
                    key={idx}
                    className={`gallery-item ${gal.featured ? "featured" : ""}`}
                  >
                    {gal.image ? (
                      <>
                        <img src={gal.image} alt={gal.label} />
                        <div className="gallery-item-info">
                          <h4 className="gallery-item-title">{gal.label}</h4>
                          <span className="gallery-item-desc">{gal.desc}</span>
                        </div>
                      </>
                    ) : (
                      <div className="gallery-item-label">
                        {gal.label}
                        {gal.desc && (
                          <>
                            <br />
                            {gal.desc}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Shop Teaser — Full catalogue at /books */}
      <section className="site-section shop" id="shop">
        <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <div className="s-eyebrow" style={{ justifyContent: "center" }}>
            <div className="s-line"></div>
            <span className="s-tag">Books &amp; Products</span>
          </div>
          <h2 className="s-title">
            Words that<br /><em>stay with you.</em>
          </h2>
          <p className="s-body" style={{ maxWidth: "none", marginBottom: "2.5rem" }}>
            Every product was built to do one thing — move you further along the journey from where you are to where you were designed to be. Digital books delivered instantly. Physical copies shipped worldwide.
          </p>
          <a href="/books" className="btn-primary">Browse Books &amp; Products →</a>
        </div>
      </section>

      {/* Social Section */}
      <section className="site-section social" id="connect">
        <div className="reveal">
          <div className="s-eyebrow">
            <div className="s-line"></div>
            <span className="s-tag">Follow the Journey</span>
          </div>
          <h2 className="s-title">
            The journey<br />is <em>public.</em>
          </h2>
          <p className="s-body">
            Follow Dr. Michael across platforms — daily leadership insight, ministry moments, behind-the-scenes content, and the ongoing story of what God is building.
          </p>
        </div>
        <div className="social-grid reveal">
          {socials.map((soc, idx) => (
            <a
              href={soc.href}
              className="social-card"
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
              <div className="social-icon-bg">
                <span className="social-icon">{soc.icon}</span>
              </div>
              <div className="social-name">{soc.name}</div>
              <div className="social-handle">{soc.handle}</div>
              <div className="social-cta">{soc.cta}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="site-section contact-section" id="contact">
        <div className="reveal">
          <div className="s-eyebrow">
            <div className="s-line" style={{ background: "var(--light-gold)" }}></div>
            <span className="s-tag">Get in Touch</span>
          </div>
          <h2 className="s-title">
            Let&#x27;s build<br /><em>together.</em>
          </h2>
          <p className="contact-desc">
            Whether you are inviting Dr. Michael to speak at your church or conference, engaging Ascentry Advisory for corporate work, joining The Foundry, or purchasing a book — the conversation starts here.
          </p>
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
          <div className="contact-platforms">
            <div className="cp-label">Platforms</div>
            <div className="cp-links">
              <a
                href="https://ascentryadvisory.com"
                className="cp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="cp-link-dot"></div>
                Ascentry Advisory — Corporate &amp; Organisational
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

        <div className="reveal reveal-d1">
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
                <div className="contact-type-title">Ministry &amp; Speaking</div>
                <div className="contact-type-desc">
                  Church services, conferences, retreats, prophetic ministry, The Foundry, books, media &amp; general enquiries
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
                <div className="contact-type-title">Corporate &amp; Advisory</div>
                <div className="contact-type-desc">
                  Ascentry Advisory — executive development, change management, culture &amp; human capital, corporate strategy
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
                    <optgroup label="Ministry &amp; Speaking">
                      <option>Ministry Speaking — Church / Conference / Retreat</option>
                      <option>Corporate Keynote Speaking</option>
                      <option>Prophetic Ministry Invitation</option>
                    </optgroup>
                    <optgroup label="The Foundry">
                      <option>The Foundry Cohort — Join / Learn More</option>
                      <option>Metamorphosis Conference 2026</option>
                      <option>From Potential to Purpose Course</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option>Books &amp; Products</option>
                      <option>Media &amp; Press Enquiry</option>
                      <option>General Enquiry</option>
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
              <li><a href="#about">About</a></li>
              <li><a href="#ministry">Ministry</a></li>
              <li><a href="#platforms">Platforms</a></li>
              <li><a href="#speaking">Speaking</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#media">Media</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact">Contact</a></li>
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
              <li><a href="#contact">Book Dr. Michael</a></li>
              <li><a href="#contact">Ministry Invitation</a></li>
              <li><a href="#contact">Media &amp; Press</a></li>
              <li><a href="#contact">Speaking Enquiry</a></li>
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
