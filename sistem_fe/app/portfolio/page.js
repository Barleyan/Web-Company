import "./portfolio.css";
import PortfolioView from "../components/Portfolioview";

// Data diambil dari backend setiap halaman dibuka
async function getProjects() {
  const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${base}/api/portfolio`, { cache: "no-store" });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return null; // backend tidak bisa dijangkau
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main className="pf">
      <header className="pf-head">
        <h1>
          Portofolio <span>Kami</span>
        </h1>
        <p>Proyek yang telah kami kerjakan untuk membantu bisnis berkembang.</p>
      </header>

      {projects === null ? (
        <p className="pf-empty" role="alert">
          Portofolio belum bisa dimuat. Silakan coba lagi nanti.
        </p>
      ) : (
        <PortfolioView projects={projects} />
      )}
    </main>
  );
}