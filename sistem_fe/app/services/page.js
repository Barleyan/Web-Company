import Link from "next/link";

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
  {
    title: "AI & Automation",
    slug: "ai-automation",
    description:
      "Otomatisasi workflow dan proses bisnis menggunakan teknologi AI.",
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    description:
      "Perencanaan dan konsultasi teknologi berdasarkan kebutuhan bisnis.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Strategi digital marketing, SEO dan pengembangan brand online.",
  },
];

export default function ServicesPage() {
  return (
    <main>

      <section className="page-hero">

        <span>OUR SERVICES</span>

        <h1>
          Digital solutions
          <br />
          for your business.
        </h1>

        <p>
          Solusi teknologi yang dirancang untuk membantu
          perusahaan meningkatkan efisiensi dan pertumbuhan.
        </p>

      </section>

      <section className="section">

        <div className="services-grid">

          {services.map((service) => (

            <div
              className="service-card"
              key={service.slug}
            >

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
              >
                Pelajari Selengkapnya →
              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}