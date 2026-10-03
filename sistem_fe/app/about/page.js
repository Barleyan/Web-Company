import "./about.css";

const MISI = [
  {
    title: "Solusi Berstandar Tinggi",
    text: "Menyediakan perangkat lunak dan solusi teknologi berkualitas tinggi yang mudah diakses serta tepat guna.",
  },
  {
    title: "Berorientasi pada Pertumbuhan",
    text: "Membantu mitra bisnis mengoptimalkan operasional dan meningkatkan pendapatan (revenue) melalui strategi digital yang terbukti.",
  },
  {
    title: "Kemitraan Berkelanjutan",
    text: "Memberikan pendampingan teknologi yang andal untuk mendukung adaptasi digital di berbagai lini bisnis.",
  },
];

export default function AboutPage() {
  return (
    <main className="about">
      <section className="about-hero">
        <h1>
          Tentang <span className="about-dark">DB Tech</span>{" "}
          <span className="about-light">Services</span>
        </h1>

        <p>
          Didirikan pada tahun 2026 di Madiun, kami hadir sebagai software house
          yang berfokus pada penyediaan solusi digital yang inovatif dan
          terukur. Kami percaya bahwa efisiensi dan penerapan teknologi yang
          tepat sasaran adalah kunci utama bagi bisnis untuk tumbuh secara
          berkelanjutan di era digital.
        </p>
      </section>

      <section className="about-container">
        <div className="about-cards">
          <article className="about-card">
            <h2>Misi Kami</h2>
            <ul className="about-list">
              {MISI.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="about-card">
            <h2>Visi Kami</h2>
            <p>
              Menjadi growth partner pilihan utama bagi bisnis di Indonesia
              dalam mengakselerasi skala usaha (scale-up) melalui transformasi
              digital yang strategis dan berdampak jangka panjang.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}