import Link from "next/link";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="footer">

      {/* ================= FOOTER MAIN ================= */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link
            href="/"
            className="footer-logo"
          >

            <span className="footer-logo-icon">
              Y
            </span>

            <span>
              YourCompany
            </span>

          </Link>

          <p className="footer-description">
            Digital technology partner yang membantu
            perusahaan membangun software, website,
            dan sistem digital untuk kebutuhan bisnis modern.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="footer-social">

            <a
              href="#"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://www.instagram.com/yan_leyan/"
              aria-label="Instagram"
            >
              ig
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              aria-label="GitHub"
            >
              gh
            </a>

          </div>

        </div>


        {/* COMPANY */}
        <div className="footer-column">

          <h4>
            Company
          </h4>

          <Link href="/about">
            About Us
          </Link>

          <Link href="/portfolio">
            Portfolio
          </Link>

          <Link href="/insights">
            Insights
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h4>
            Services
          </h4>

          <Link href="/services/custom-software">
            Custom Software
          </Link>

          <Link href="/services/web-development">
            Web Development
          </Link>

          <Link href="/services/erp-crm">
            ERP & CRM
          </Link>

          <Link href="/services/ai-automation">
            AI & Automation
          </Link>

          <Link href="/services/it-consulting">
            IT Consulting
          </Link>

          <Link href="/services/digital-marketing">
            Digital Marketing
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h4>
            Get in Touch
          </h4>

          <div className="contact-item">

            <span className="contact-icon">
              @
            </span>

            <div>
              <small>
                Email
              </small>

              <a href="mailto:hello@yourcompany.id">
                hello@yourcompany.id
              </a>
            </div>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              ☎
            </span>

            <div>
              <small>
                Phone
              </small>

              <a href="tel:+6281234567890">
                +62 812-3456-7890
              </a>
            </div>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              ●
            </span>

            <div>
              <small>
                Location
              </small>

              <span>
                Madiun, Jawa Timur
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}
      <div className="footer-bottom">

        <div className="footer-bottom-left">

          <span>
            © 2026 YourCompany.
          </span>

          <span>
            All rights reserved.
          </span>

        </div>


        <div className="footer-bottom-links">

          <Link href="/privacy">
            Privacy Policy
          </Link>

          <Link href="/terms">
            Terms & Conditions
          </Link>

        </div>


        <div className="footer-back-top">
            <BackToTop />
        </div>

      </div>

    </footer>
  );
}