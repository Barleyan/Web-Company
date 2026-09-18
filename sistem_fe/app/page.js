"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const services = [
    {
      title: "Custom Software",
      description:
        "Aplikasi khusus yang dibuat sesuai kebutuhan dan proses bisnis perusahaan.",
      icon: "⌘",
    },
    {
      title: "Web Development",
      description:
        "Website modern, cepat, responsive dan siap dikembangkan.",
      icon: "◈",
    },
    {
      title: "ERP & CRM",
      description:
        "Sistem terintegrasi untuk mengelola operasional dan hubungan pelanggan.",
      icon: "▦",
    },
    {
      title: "AI & Automation",
      description:
        "Otomatisasi proses bisnis menggunakan teknologi AI dan workflow.",
      icon: "✦",
    },
    {
      title: "IT Consulting",
      description:
        "Konsultasi teknologi dan strategi digital untuk kebutuhan bisnis.",
      icon: "◎",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategi digital untuk membantu bisnis menjangkau pelanggan lebih luas.",
      icon: "↗",
    },
  ];

  const portfolios = [
    {
      category: "Enterprise",
      title: "Business Management System",
      description:
        "Platform terintegrasi untuk mengelola operasional perusahaan.",
    },
    {
      category: "Healthcare",
      title: "Hospital Management System",
      description:
        "Sistem digital untuk mengelola operasional rumah sakit.",
    },
    {
      category: "Retail",
      title: "Point of Sales",
      description:
        "Sistem kasir dan inventory untuk bisnis retail.",
    },
  ];

  const insights = [
    {
      category: "Technology",
      title: "Mengapa Bisnis Membutuhkan Digitalisasi?",
    },
    {
      category: "CRM",
      title: "Cara Menggunakan CRM untuk Meningkatkan Customer Relationship",
    },
    {
      category: "ERP",
      title: "Mengenal Sistem ERP untuk Operasional Perusahaan",
    },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileMenu(false);
    setOpenMenu(null);
  };

  return (
    <main>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar-container">
          <div
            className="logo"
            onClick={() => scrollTo("home")}
          >
            <span className="logo-icon">Y</span>
            <span>YourCompany</span>
          </div>

          {/* Desktop Menu */}
          <nav className={`nav-menu ${mobileMenu ? "active" : ""}`}>
            <button onClick={() => scrollTo("home")}>
              Home
            </button>

            <div className="nav-dropdown">
              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === "services" ? null : "services"
                  )
                }
              >
                Services
                <span>⌄</span>
              </button>

              {openMenu === "services" && (
                <div className="dropdown-menu">
                  <button onClick={() => scrollTo("services")}>
                    Custom Software
                  </button>
                  <button onClick={() => scrollTo("services")}>
                    Web Development
                  </button>
                  <button onClick={() => scrollTo("services")}>
                    ERP & CRM
                  </button>
                  <button onClick={() => scrollTo("services")}>
                    AI & Automation
                  </button>
                </div>
              )}
            </div>

            <div className="nav-dropdown">
              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === "solutions" ? null : "solutions"
                  )
                }
              >
                Solutions
                <span>⌄</span>
              </button>

              {openMenu === "solutions" && (
                <div className="dropdown-menu">
                  <button onClick={() => scrollTo("solutions")}>
                    Business Automation
                  </button>
                  <button onClick={() => scrollTo("solutions")}>
                    ERP System
                  </button>
                  <button onClick={() => scrollTo("solutions")}>
                    CRM System
                  </button>
                  <button onClick={() => scrollTo("solutions")}>
                    Dashboard
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => scrollTo("portfolio")}>
              Portfolio
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("insights")}>
              Insights
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>

            <button
              className="nav-cta"
              onClick={() => scrollTo("contact")}
            >
              Let's Talk
            </button>
          </nav>

          {/* Mobile Button */}
          <button
            className="mobile-button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="badge">
              DIGITAL TECHNOLOGY PARTNER
            </div>

            <h1>
              Build Digital
              <br />
              <span>Solutions</span>
              <br />
              That Grow Your Business.
            </h1>

            <p>
              Kami membantu perusahaan membangun software,
              website dan sistem digital yang scalable,
              terintegrasi dan sesuai kebutuhan bisnis.
            </p>

            <div className="hero-buttons">
              <button
                className="button-primary"
                onClick={() => scrollTo("contact")}
              >
                Start a Project →
              </button>

              <button
                className="button-secondary"
                onClick={() => scrollTo("portfolio")}
              >
                View Portfolio
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-card">
              <div className="dashboard-header">
                <div>
                  <small>BUSINESS OVERVIEW</small>
                  <h3>Dashboard</h3>
                </div>

                <div className="online">
                  <span></span>
                  Live
                </div>
              </div>

              <div className="dashboard-stats">
                <div>
                  <small>Projects</small>
                  <strong>128</strong>
                  <span>+18.4%</span>
                </div>

                <div>
                  <small>Clients</small>
                  <strong>84</strong>
                  <span>+12.8%</span>
                </div>
              </div>

              <div className="chart">
                <div className="chart-line">
                  <i style={{ height: "35%" }}></i>
                  <i style={{ height: "50%" }}></i>
                  <i style={{ height: "42%" }}></i>
                  <i style={{ height: "70%" }}></i>
                  <i style={{ height: "58%" }}></i>
                  <i style={{ height: "85%" }}></i>
                  <i style={{ height: "75%" }}></i>
                  <i style={{ height: "95%" }}></i>
                </div>
              </div>

              <div className="dashboard-footer">
                <span>Business Performance</span>
                <strong>+32.5%</strong>
              </div>
            </div>

            <div className="floating-card card-one">
              <span>✓</span>
              Project Delivered
              <strong>98%</strong>
            </div>

            <div className="floating-card card-two">
              <span>↗</span>
              Business Growth
              <strong>+42%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="stats-container">
          <div>
            <strong>50+</strong>
            <span>Projects Delivered</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>Business Clients</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Technology Solutions</span>
          </div>

          <div>
            <strong>99%</strong>
            <span>Project Commitment</span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="section">
        <div className="section-heading">
          <span>OUR SERVICES</span>

          <h2>
            Technology solutions
            <br />
            for modern businesses.
          </h2>

          <p>
            Dari website sederhana hingga sistem enterprise,
            kami membangun solusi sesuai kebutuhan bisnis.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section id="solutions" className="dark-section">
        <div className="solutions-container">
          <div>
            <span className="section-label">
              BUSINESS SOLUTIONS
            </span>

            <h2>
              One platform.
              <br />
              Multiple possibilities.
            </h2>

            <p>
              Bangun sistem digital yang menghubungkan
              seluruh proses bisnis dalam satu ekosistem.
            </p>
          </div>

          <div className="solution-list">
            <div>
              <span>01</span>
              <div>
                <h3>Business Automation</h3>
                <p>
                  Otomatisasi workflow untuk mengurangi
                  pekerjaan manual.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>ERP & CRM</h3>
                <p>
                  Integrasikan data dan proses bisnis
                  dalam satu sistem.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>Real-time Dashboard</h3>
                <p>
                  Pantau performa bisnis melalui data
                  yang terintegrasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">
        <div className="about-grid">
          <div className="about-box">
            <div className="about-number">01</div>
            <h3>Understand</h3>
            <p>
              Memahami kebutuhan dan proses bisnis
              sebelum membangun solusi.
            </p>
          </div>

          <div className="about-box">
            <div className="about-number">02</div>
            <h3>Build</h3>
            <p>
              Mengembangkan solusi dengan teknologi
              modern dan scalable.
            </p>
          </div>

          <div className="about-box">
            <div className="about-number">03</div>
            <h3>Grow</h3>
            <p>
              Membantu bisnis berkembang melalui
              teknologi yang tepat.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="section portfolio-section">
        <div className="section-heading">
          <span>OUR PORTFOLIO</span>

          <h2>
            Projects that
            <br />
            create impact.
          </h2>
        </div>

        <div className="portfolio-grid">
          {portfolios.map((item, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image">
                <span>{item.category}</span>

                <div className="portfolio-preview">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="portfolio-content">
                <small>{item.category}</small>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section id="insights" className="section insights-section">
        <div className="section-heading">
          <span>INSIGHTS</span>

          <h2>
            Ideas for digital
            <br />
            business growth.
          </h2>
        </div>

        <div className="insights-grid">
          {insights.map((item, index) => (
            <article className="insight-card" key={index}>
              <div className="insight-image">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="insight-content">
                <small>{item.category}</small>

                <h3>{item.title}</h3>

                <button>
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="cta-section">
        <div className="cta-container">
          <span>READY TO START?</span>

          <h2>
            Let's build something
            <br />
            <span>great together.</span>
          </h2>

          <p>
            Ceritakan kebutuhan bisnis Anda dan
            mari diskusikan solusi digital yang tepat.
          </p>

          <button className="cta-button">
            Start a Conversation →
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">Y</span>
              <span>YourCompany</span>
            </div>

            <p>
              Digital technology partner untuk
              pertumbuhan bisnis modern.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <button onClick={() => scrollTo("about")}>
              About
            </button>
            <button onClick={() => scrollTo("portfolio")}>
              Portfolio
            </button>
            <button onClick={() => scrollTo("insights")}>
              Insights
            </button>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <button onClick={() => scrollTo("services")}>
              Custom Software
            </button>
            <button onClick={() => scrollTo("services")}>
              Web Development
            </button>
            <button onClick={() => scrollTo("services")}>
              ERP & CRM
            </button>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <span>hello@yourcompany.id</span>
            <span>+62 812-3456-7890</span>
            <span>Madiun, Jawa Timur</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 YourCompany. All rights reserved.
          </span>

          <span>
            Privacy Policy · Terms
          </span>
        </div>
      </footer>
    </main>
  );
}