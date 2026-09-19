import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "./home.module.css";

// Ganti gambar latar hero di sini.
// Taruh file gambar di folder `public/` lalu tulis path-nya (contoh: "/hero-bg.jpg").
const HERO_IMAGE = "/coding.jpg";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m13.5 5-3 14" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12.5 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="m6.3 6.3 2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "trend":
      return (
        <svg {...common}>
          <path d="M3 17 9 11l4 4 8-8" />
          <path d="M15 7h6v6" />
        </svg>
      );
    default:
      return null;
  }
}

const services = [
  {
    title: "Custom Software",
    description:
      "Aplikasi khusus yang dibuat sesuai kebutuhan dan proses bisnis perusahaan.",
    icon: "code",
    link: "/services/custom-software",
    size: "wide",
    featured: true,
  },
  {
    title: "Web Development",
    description: "Website modern, cepat, responsive dan siap dikembangkan.",
    icon: "globe",
    link: "/services/web-development",
    size: "narrow",
  },
  {
    title: "ERP & CRM",
    description:
      "Sistem terintegrasi untuk mengelola operasional dan hubungan pelanggan.",
    icon: "layers",
    link: "/services/erp-crm",
    size: "narrow",
  },
  {
    title: "AI & Automation",
    description:
      "Otomatisasi proses bisnis menggunakan teknologi AI dan workflow.",
    icon: "spark",
    link: "/services/ai-automation",
    size: "wide",
  },
  {
    title: "IT Consulting",
    description:
      "Konsultasi teknologi dan strategi digital untuk kebutuhan bisnis.",
    icon: "compass",
    link: "/services/it-consulting",
    size: "half",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategi digital untuk membantu bisnis menjangkau pelanggan lebih luas.",
    icon: "trend",
    link: "/services/digital-marketing",
    size: "half",
  },
];

const steps = [
  {
    title: "Diskusi kebutuhan",
    text: "Kami memahami proses bisnis dan target Anda sebelum menulis satu baris kode.",
  },
  {
    title: "Desain dan rencana",
    text: "Alur, tampilan, dan jadwal disepakati bersama agar tidak ada kejutan.",
  },
  {
    title: "Pengembangan",
    text: "Dibangun bertahap. Anda bisa mencoba hasilnya di setiap tahap.",
  },
  {
    title: "Peluncuran dan dukungan",
    text: "Sistem diluncurkan, dipantau, dan terus dikembangkan bersama Anda.",
  },
];

export default function Home() {
  return (
    <main className={`${styles.page} ${jakarta.className}`}>
      {/* HERO */}
      <section
        className={styles.hero}
        style={{ "--hero-image": `url(${HERO_IMAGE})` }}
      >
        <div className={styles.heroInner}>
          <p className={styles.badge}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
              <path d="m6.3 6.3 2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
            </svg>
            Software House No 1 di Indonesia
          </p>

          <h1 className={styles.title}>
            Software House
            <span className={styles.titleLine}>
              Software Custom &amp; Business Automation
            </span>
          </h1>

          <p className={styles.lead}>
            Kami bantu bisnis Anda tumbuh lewat website, software custom, dan
            strategi digital yang terbukti meningkatkan revenue.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.buttonPrimary}>
              Mulai Konsultasi
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/portfolio" className={styles.buttonSecondary}>
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Solusi teknologi untuk bisnis modern.
            </h2>
            <p className={styles.sectionText}>
              Dari website sederhana hingga sistem enterprise, kami membangun
              solusi sesuai kebutuhan bisnis.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link
                href={service.link}
                key={service.title}
                className={`${styles.serviceCard} ${styles[service.size]} ${
                  service.featured ? styles.featured : ""
                }`}
              >
                <span className={styles.serviceIcon}>
                  <Icon name={service.icon} />
                </span>
                <div className={styles.serviceBody}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className={styles.serviceLink}>Lihat layanan</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>
              Cara kami mengerjakan proyek Anda.
            </h2>
            <p className={styles.sectionText}>
              Empat tahap yang jelas, dengan hasil yang bisa Anda lihat di
              setiap langkah.
            </p>
          </div>

          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li className={styles.step} key={step.title}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div className={styles.ctaText}>
              <h2>Let&apos;s build something great together.</h2>
              <p>
                Ceritakan kebutuhan bisnis Anda dan mari diskusikan solusi
                digital yang tepat.
              </p>
            </div>
            <Link href="/contact" className={styles.ctaButton}>
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}