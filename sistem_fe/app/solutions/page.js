import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Business Automation",
      slug: "business-automation",
      description:
        "Otomatisasi pekerjaan dan workflow perusahaan.",
    },
    {
      title: "ERP System",
      slug: "erp",
      description:
        "Sistem enterprise untuk mengintegrasikan proses bisnis.",
    },
    {
      title: "CRM System",
      slug: "crm",
      description:
        "Kelola customer, leads, sales dan komunikasi.",
    },
    {
      title: "Business Dashboard",
      slug: "dashboard",
      description:
        "Pantau KPI dan performa bisnis secara visual.",
    },
  ];

  return (
    <main>

      <section className="page-hero">

        <span>BUSINESS SOLUTIONS</span>

        <h1>
          One platform.
          <br />
          Multiple possibilities.
        </h1>

        <p>
          Bangun sistem digital yang menghubungkan
          seluruh proses bisnis.
        </p>

      </section>

      <section className="section">

        <div className="services-grid">

          {solutions.map((item) => (

            <div
              className="service-card"
              key={item.slug}
            >

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <Link
                href={`/solutions/${item.slug}`}
              >
                View Solution →
              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}