export default function AboutPage() {
  return (
    <main>

      <section className="page-hero">

        <span>ABOUT US</span>

        <h1>
          Technology partner
          <br />
          for modern business.
        </h1>

        <p>
          Kami membantu perusahaan menggunakan teknologi
          untuk membangun proses bisnis yang lebih terintegrasi.
        </p>

      </section>

      <section className="section">

        <div className="about-grid">

          <div className="about-box">
            <div className="about-number">
              01
            </div>

            <h3>
              Understand
            </h3>

            <p>
              Memahami kebutuhan dan proses bisnis
              sebelum membangun solusi.
            </p>
          </div>

          <div className="about-box">
            <div className="about-number">
              02
            </div>

            <h3>
              Build
            </h3>

            <p>
              Mengembangkan solusi dengan teknologi
              modern dan scalable.
            </p>
          </div>

          <div className="about-box">
            <div className="about-number">
              03
            </div>

            <h3>
              Grow
            </h3>

            <p>
              Membantu bisnis berkembang melalui
              teknologi yang tepat.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}