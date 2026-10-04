import Image from "next/image";
import Link from "next/link";
import BackToTop from "./BackToTop";
import styles from "@/app/modul_css/footer.module.css";

const COMPANY_LINKS = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontak", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "ERP & CRM", href: "/services/erp-crm" },
];

// const SOCIALS = [
//   { label: "LinkedIn", short: "in", href: "#" },
//   { label: "Instagram", short: "ig", href: "https://www.instagram.com/yan_leyan/" },
//   { label: "Facebook", short: "f", href: "#" },
//   { label: "GitHub", short: "gh", href: "#" },
// ];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ================= FOOTER MAIN ================= */}
      <div className={styles.footerMain}>
        {/* BRAND */}
        <div className={styles.footerBrand}>
          <Link
            href="/"
            className={styles.footerLogo}
            aria-label="DB Tech Services - Beranda"
          >
            <Image
              src="/logo.jpeg"
              alt=""
              width={44}
              height={38}
              className={styles.footerLogoImg}
            />
            <span>DB Tech Services</span>
          </Link>

          <p className={styles.footerDescription}>
            Digital technology partner yang membantu perusahaan membangun
            software, website, dan sistem digital untuk kebutuhan bisnis modern.
          </p>

          {/* <div className={styles.footerSocial}>
            {SOCIALS.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.short}
                </a>
              );
            })}
          </div> */}
        </div>

        {/* COMPANY */}
        <div className={styles.footerColumn}>
          <h4>Company</h4>
          {COMPANY_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* SERVICES */}
        <div className={styles.footerColumn}>
          <h4>Services</h4>
          {SERVICE_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CONTACT */}
        <div className={`${styles.footerColumn} ${styles.footerContact}`}>
          <h4>Get in Touch</h4>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>@</span>
            <div>
              <small>Email</small>
              <a href="mailto:dbtechservicesindo@gmail.com">
                dbtechservicesindo@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>☎</span>
            <div>
              <small>Telpon</small>
              <a href="tel:+6285158823239">+62 851 5882 3239</a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>●</span>
            <div>
              <small>Lokasi</small>
              <span>Madiun, Jawa Timur</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <span>© 2026 DB Tech Services.</span>
          <span>All rights reserved.</span>
        </div>

        <div className={styles.footerBottomLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>

        <div className={styles.footerBackTop}>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}