import Link from "next/link";
import type { EditorialItem } from "@/data/content";

export default function EditorialPage({ item, backHref = "/#experiencias", backLabel = "Voltar ao portal" }: { item: EditorialItem; backHref?: string; backLabel?: string }) {
  return (
    <main className="editorial-page">
      <header className="editorial-topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">EC</span>
          <span><strong>Engenharia de Computação</strong><small>SENAI CIMATEC · portal vivo</small></span>
        </Link>
        <Link className="editorial-back" href={backHref}>← {backLabel}</Link>
      </header>

      <article>
        <section className="editorial-hero">
          <div className="editorial-copy">
            <span className="editorial-kicker">{item.eyebrow}</span>
            <h1>{item.title}</h1>
            <p>{item.lead}</p>
            <div className="topic-row">{item.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
          </div>
          <figure className="editorial-hero-media">
            <img src={item.hero} alt={`Registro visual de ${item.title}`} />
          </figure>
        </section>

        <section className="editorial-intro">
          <div className="editorial-meta"><span>{item.tag}</span><small>Base editorial: {item.sourceLabel}</small></div>
          <p className="editorial-summary">{item.summary}</p>
        </section>

        <section className="editorial-body">
          <div className="editorial-text">
            {item.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <aside className="editorial-highlights" aria-label={`Destaques de ${item.title}`}>
            {item.highlights.map((highlight) => (
              <div key={`${highlight.value}-${highlight.label}`}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </aside>
        </section>

        {item.gallery && item.gallery.length > 0 && (
          <section className="editorial-gallery">
            <div className="section-head"><span>Registros</span><h2>Dados e marcos apresentados no material.</h2></div>
            {item.gallery.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </section>
        )}

        <section className="editorial-next">
          <span>Portal em construção contínua</span>
          <h2>Uma memória digital que cresce junto com o curso.</h2>
          <p>Novos projetos, resultados, imagens, depoimentos e links podem ser incorporados sem alterar a estrutura da experiência.</p>
          <Link className="primary" href="/">Voltar à Engenharia de Computação</Link>
        </section>
      </article>
    </main>
  );
}
