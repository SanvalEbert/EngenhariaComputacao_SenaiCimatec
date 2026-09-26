import Link from "next/link";
import { notFound } from "next/navigation";
import { contentPages, getContentPage } from "@/data/content";

export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.slug }));
}

export default async function EditorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getContentPage(slug);
  if (!page) notFound();

  return (
    <main className="detail-shell">
      <header className="detail-topbar">
        <Link href="/#experiencias" className="detail-brand">
          <span>EC</span>
          <strong>Engenharia de Computação</strong>
        </Link>
        <Link href="/#experiencias" className="detail-back">← Voltar ao portal</Link>
      </header>

      <article>
        <section className="detail-hero">
          <div className="detail-copy">
            <span className="detail-kicker">{page.tag}</span>
            <h1>{page.title}</h1>
            <h2>{page.subtitle}</h2>
            <p>{page.intro}</p>
            {page.chips && <div className="detail-chips">{page.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>}
          </div>
          <figure className="detail-figure">
            <img src={`../../media/${page.heroImage}`} alt={page.imageAlt} />
          </figure>
        </section>

        {page.stats && (
          <section className="detail-stats" aria-label="Indicadores em destaque">
            {page.stats.map((stat) => (
              <article key={`${stat.value}-${stat.label}`}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                {stat.note && <small>{stat.note}</small>}
              </article>
            ))}
          </section>
        )}

        <section className="detail-body">
          {page.sections.map((section, index) => (
            <section className="detail-section" key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </div>
            </section>
          ))}
        </section>

        <section className="detail-source">
          <span>Sobre este conteúdo</span>
          <p>{page.sourceLabel}</p>
          <Link href="/#experiencias">Explorar outras experiências →</Link>
        </section>
      </article>
    </main>
  );
}
