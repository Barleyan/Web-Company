const projects = [
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
  {
    category: "CRM",
    title: "Customer Management System",
    description:
      "Sistem pengelolaan pelanggan dan sales pipeline.",
  },
  {
    category: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Sistem terintegrasi untuk operasional perusahaan.",
  },
  {
    category: "Dashboard",
    title: "Business Intelligence Dashboard",
    description:
      "Dashboard untuk monitoring KPI dan performa bisnis.",
  },
];

export default function PortfolioPage() {
  return (
    <main>

      <section className="page-hero">

        <span>OUR PORTFOLIO</span>

        <h1>
          Projects that
          <br />
          create impact.
        </h1>

      </section>

      <section className="section">

        <div className="portfolio-grid">

          {projects.map((project, index) => (

            <div
              className="portfolio-card"
              key={index}
            >

              <div className="portfolio-image">
                <span>
                  {project.category}
                </span>

                <div className="portfolio-preview">
                  <div />
                  <div />
                  <div />
                </div>
              </div>

              <div className="portfolio-content">

                <small>
                  {project.category}
                </small>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <button>
                  View Project →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}