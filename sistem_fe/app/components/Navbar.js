"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "@/app/modul_css/navbar.module.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dropdowns = [
  {
    id: "services",
    label: "Services",
    basePath: "/services",
    allHref: "/services",
    allLabel: "All Services",
    items: [
      {
        href: "/services/custom-software",
        label: "Custom Software",
        desc: "Aplikasi sesuai proses bisnis Anda",
      },
      {
        href: "/services/web-development",
        label: "Web Development",
        desc: "Website cepat dan responsive",
      },
      {
        href: "/services/erp-crm",
        label: "ERP & CRM",
        desc: "Operasional dan pelanggan dalam satu sistem",
      },
      {
        href: "/services/ai-automation",
        label: "AI & Automation",
        desc: "Otomatisasi proses dengan AI",
      },
      {
        href: "/services/it-consulting",
        label: "IT Consulting",
        desc: "Konsultasi teknologi dan strategi digital",
      },
      {
        href: "/services/digital-marketing",
        label: "Digital Marketing",
        desc: "Jangkau pelanggan lebih luas",
      },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    basePath: "/solutions",
    allHref: "/solutions",
    allLabel: "All Solutions",
    items: [
      {
        href: "/solutions/business-automation",
        label: "Business Automation",
        desc: "Kurangi pekerjaan manual berulang",
      },
      {
        href: "/solutions/erp",
        label: "ERP System",
        desc: "Kelola keuangan, stok, dan operasional",
      },
      {
        href: "/solutions/crm",
        label: "CRM System",
        desc: "Pantau prospek dan hubungan pelanggan",
      },
      {
        href: "/solutions/dashboard",
        label: "Business Dashboard",
        desc: "Lihat data bisnis dalam satu layar",
      },
    ],
  },
];

const links = [
  { href: "/", label: "Home", position: "before" },
  { href: "/portfolio", label: "Portfolio", position: "after" },
  { href: "/about", label: "About", position: "after" },
  { href: "/insights", label: "Insights", position: "after" },
  { href: "/contact", label: "Contact", position: "after" },
];

function Chevron() {
  return (
    <svg
      className={styles.chevron}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeAll = () => {
    setMobileMenu(false);
    setOpenMenu(null);
  };

  // tutup menu setiap pindah halaman
  useEffect(() => {
    closeAll();
  }, [pathname]);

  // tutup dropdown saat klik di luar navbar atau tekan Escape
  useEffect(() => {
    const onClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // bayangan tipis setelah halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`${styles.link} ${isActive(link.href) ? styles.active : ""}`}
      aria-current={isActive(link.href) ? "page" : undefined}
    >
      {link.label}
    </Link>
  );

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${jakarta.className} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>Y</span>
          <span>YourCompany</span>
        </Link>

        {/* MENU */}
        <nav
          id="main-menu"
          className={`${styles.menu} ${mobileMenu ? styles.open : ""}`}
          aria-label="Menu utama"
        >
          {links.filter((l) => l.position === "before").map(renderLink)}

          {dropdowns.map((dd) => {
            const isOpen = openMenu === dd.id;
            return (
              <div className={styles.dropdown} key={dd.id}>
                <button
                  type="button"
                  className={`${styles.link} ${styles.trigger} ${
                    isActive(dd.basePath) ? styles.active : ""
                  } ${isOpen ? styles.triggerOpen : ""}`}
                  onClick={() => toggleMenu(dd.id)}
                  aria-expanded={isOpen}
                  aria-controls={`dd-${dd.id}`}
                >
                  {dd.label}
                  <Chevron />
                </button>

                {isOpen && (
                  <div className={styles.panel} id={`dd-${dd.id}`}>
                    {dd.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.panelItem}
                      >
                        <strong>{item.label}</strong>
                        <span>{item.desc}</span>
                      </Link>
                    ))}
                    <Link href={dd.allHref} className={styles.panelAll}>
                      {dd.allLabel}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}

          {links.filter((l) => l.position === "after").map(renderLink)}

          <Link href="/contact" className={`${styles.cta} ${styles.ctaMobile}`}>
            Let&apos;s Talk
          </Link>
        </nav>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <Link href="/contact" className={`${styles.cta} ${styles.ctaDesktop}`}>
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            className={styles.burger}
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-expanded={mobileMenu}
            aria-controls="main-menu"
            aria-label={mobileMenu ? "Tutup menu" : "Buka menu"}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileMenu ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}