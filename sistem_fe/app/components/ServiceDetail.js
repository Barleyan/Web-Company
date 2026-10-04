import Link from "next/link";
import s from "../modul_css/services.module.css";

/**
 * Template halaman detail layanan.
 * Props: hero {title, text, cta}, featuresTitle, featuresText, features[{title,text}],
 *        stepsTitle, stepsText, steps[{title,text}], checks[], cta {title, text}
 */
export default function ServiceDetail({
  hero, featuresTitle, featuresText, features,
  stepsTitle, stepsText, steps, checks, cta,
}) {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <Link href="/contact" className={s.btn}>{hero.cta}</Link>
      </section>

      <section className={s.section}>
        <div className={s.head}>
          <h2>{featuresTitle}</h2>
          <p>{featuresText}</p>
        </div>
        <div className={s.grid}>
          {features.map((f) => (
            <article key={f.title} className={s.card}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${s.section} ${s.alt}`}>
        <div className={s.head}>
          <h2>{stepsTitle}</h2>
          <p>{stepsText}</p>
        </div>
        <ol className={s.steps}>
          {steps.map((st, i) => (
            <li key={st.title}>
              <span className={s.num}>{i + 1}</span>
              <div>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <ul className={s.checks}>
          {checks.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>

      <section className={s.cta}>
        <h2>{cta.title}</h2>
        <p>{cta.text}</p>
        <Link href="/contact" className={s.btn}>{hero.cta}</Link>
      </section>
    </main>
  );
}