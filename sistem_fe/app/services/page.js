import Link from "next/link";
import "./services.css";

const services = [
  {
    title: "Custom Software",
    slug: "custom-software",
    description:
      "Software yang dirancang berdasarkan proses bisnis dan kebutuhan perusahaan.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Website modern, responsive dan scalable untuk kebutuhan bisnis.",
  },
  {
    title: "ERP & CRM",
    slug: "erp-crm",
    description:
      "Sistem terintegrasi untuk mengelola operasional, pelanggan dan data perusahaan.",
  },
];

// Ikon sederhana untuk tiap layanan
const icons = {
  "custom-software": <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  "web-development": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  "erp-crm": (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  "ai-automation": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
  "it-consulting": (
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 21 12Z" />
  ),
  "digital-marketing": <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
};

export default function ServicesPage() {
  return (
    <main className="sv">
      <section className="sv-hero">

        <h1>
          Solusi Digital dan Teknologi <br />
          <em>Untuk Bisnis Anda.</em>
        </h1>

        <p>
          Solusi teknologi yang dirancang untuk membantu perusahaan
          meningkatkan efisiensi dan pertumbuhan.
        </p>
      </section>

      <section className="sv-grid">
        {services.map((service) => (
          <article className="sv-card" key={service.slug}>
            <div className="sv-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[service.slug]}
              </svg>
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <Link href={`/services/${service.slug}`} className="sv-link">
              Pelajari Selengkapnya <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}