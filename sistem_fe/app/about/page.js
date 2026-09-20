import "./about.css";

export default function AboutPage() {
  return (
    <main className="about">
      <section className="about-hero">
        <h1>
          Tentang <span className="about-gradient">Software House Kami :)</span>
        </h1>

        <p>
          Software House, singkatan dari <strong>Software House</strong>,
          didirikan tahun 2024 di Madiun. Kami percaya bahwa teknologi yang
          tepat adalah kunci pertumbuhan bisnis yang berkelanjutan.
        </p>
      </section>

      <section className="about-container">
        <div className="about-cards">
          <article className="about-card">
            <h2>Misi Kami</h2>
            <p>
              Memberdayakan bisnis Indonesia dengan solusi teknologi
              berkualitas dunia yang mudah diakses, tepat guna, dan terbukti
              meningkatkan revenue.
            </p>
          </article>

          <article className="about-card">
            <h2>Visi Kami</h2>
            <p>
              Menjadi growth partner pilihan utama bagi bisnis di Indonesia
              yang ingin scale-up melalui transformasi digital yang strategis.
            </p>
          </article>
        </div>

        <figure className="about-photo">
          {/* Taruh foto tim di public/images/tim-bms.jpg */}
          <img
            src="./akatsuki.jpg"
            alt="Tim BMS Services"
            loading="lazy"
          />
        </figure>
      </section>
    </main>
  );
}