import "./portfolio.css";

const projects = [
  {
    category: "Enterprise",
    title: "Business Management System",
    description: "Platform terintegrasi untuk mengelola operasional perusahaan.",
    preview: "chart",
    tone: { bg: "#dbe5ff", fg: "#2b4fd8" },
  },
  {
    category: "Healthcare",
    title: "Hospital Management System",
    description: "Sistem digital untuk mengelola operasional rumah sakit.",
    preview: "table",
    tone: { bg: "#d5f0e6", fg: "#0f7a58" },
  },
  {
    category: "Retail",
    title: "Point of Sales",
    description: "Sistem kasir dan inventory untuk bisnis retail.",
    preview: "grid",
    tone: { bg: "#ffe2d2", fg: "#c4501b" },
  },
  {
    category: "CRM",
    title: "Customer Management System",
    description: "Sistem pengelolaan pelanggan dan sales pipeline.",
    preview: "board",
    tone: { bg: "#ead9fb", fg: "#7a3dc0" },
  },
  {
    category: "ERP",
    title: "Enterprise Resource Planning",
    description: "Sistem terintegrasi untuk operasional perusahaan.",
    preview: "table",
    tone: { bg: "#d6ebf5", fg: "#12708f" },
  },
  {
    category: "Dashboard",
    title: "Business Intelligence Dashboard",
    description: "Dashboard untuk monitoring KPI dan performa bisnis.",
    preview: "chart",
    tone: { bg: "#f8e6b8", fg: "#8f6500" },
  },
];

const barHeights = [40, 65, 50, 85, 60, 95, 72];

function PreviewMain({ variant }) {
  switch (variant) {
    case "chart":
      return (
        <div className="preview-main preview-main--chart">
          {barHeights.map((h, i) => (
            <i key={i} style={{ "--h": `${h}%` }} />
          ))}
        </div>
      );
    case "table":
      return (
        <div className="preview-main preview-main--table">
          {Array.from({ length: 6 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
      );
    case "grid":
      return (
        <div className="preview-main preview-main--grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
      );
    default:
      return (
        <div className="preview-main preview-main--board">
          <i />
          <i />
          <i />
        </div>
      );
  }
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function PortfolioPage() {
  return (
    <main className="portfolio">
      <section className="page-hero">
        <div>
          <span className="page-hero__tag">Our portfolio</span>
          <h1>
            Projects that
            <br />
            create impact.
          </h1>
        </div>

        <p className="page-hero__lead">
          Sistem yang kami bangun untuk membantu bisnis bekerja lebih rapi,
          cepat, dan terukur.
        </p>
      </section>

      <section className="section">
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article
              className="portfolio-card"
              key={project.title}
              style={{
                "--tone-bg": project.tone.bg,
                "--tone-fg": project.tone.fg,
              }}
            >
              <div className="portfolio-image">
                <span className="portfolio-image__tag">{project.category}</span>

                <div className="portfolio-preview" aria-hidden="true">
                  <div className="preview-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="preview-body">
                    <div className="preview-side">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <PreviewMain variant={project.preview} />
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <button
                  type="button"
                  className="portfolio-btn"
                  aria-label={`Lihat proyek ${project.title}`}
                >
                  View Project
                  <ArrowIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}