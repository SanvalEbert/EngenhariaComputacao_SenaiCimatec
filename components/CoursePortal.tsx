"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  careers,
  ecosystem,
  experiences,
  formationAreas,
  indicators,
  partners,
  stories,
} from "@/data/course";

const sections = ["inicio", "ecossistema", "formacao", "resultados", "experiencias", "conexoes", "historias", "carreiras"];

export default function CoursePortal() {
  const [presentation, setPresentation] = useState(false);
  const [step, setStep] = useState(0);
  const current = useMemo(() => sections[step], [step]);

  useEffect(() => {
    if (!presentation) return;
    document.body.classList.add("presentation-mode");
    document.getElementById(current)?.scrollIntoView({ behavior: "smooth", block: "start" });

    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        setStep((value) => Math.min(sections.length - 1, value + 1));
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        setStep((value) => Math.max(0, value - 1));
      }
      if (event.key === "Escape") setPresentation(false);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("presentation-mode");
    };
  }, [presentation, current]);

  const startPresentation = () => {
    setStep(0);
    setPresentation(true);
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Engenharia de Computação - início">
          <span className="brand-mark">EC</span>
          <span><strong>Engenharia de Computação</strong><small>SENAI CIMATEC · visão da coordenação</small></span>
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#formacao">Formação</a><a href="#resultados">Resultados</a><a href="#experiencias">Experiências</a><a href="#historias">Histórias</a>
        </nav>
        <button className="present-button" onClick={startPresentation}>Apresentar curso <span>↗</span></button>
      </header>

      <section id="inicio" className="section hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="eyebrow">Engenharia de Computação · SENAI CIMATEC</div>
        <div className="hero-content">
          <div>
            <p className="overline">Tecnologia para conectar o mundo físico ao digital</p>
            <h1>Engenharia para <em>criar</em>, conectar e transformar.</h1>
            <p className="lead">Uma formação construída dentro de um ecossistema de educação, tecnologia, pesquisa, inovação e indústria.</p>
            <div className="hero-actions"><a className="primary" href="#ecossistema">Explorar o curso</a><button className="secondary" onClick={startPresentation}>Modo apresentação</button></div>
          </div>
          <div className="orbit" aria-label="Áreas conectadas pela Engenharia de Computação">
            <div className="orbit-center"><span>Engenharia</span><strong>Computação</strong></div>
            {formationAreas.slice(0, 6).map((area, index) => <span key={area} className={`orbit-item orbit-${index + 1}`}>{area}</span>)}
          </div>
        </div>
        <div className="hero-bottom"><span>Software</span><span>Hardware</span><span>IA</span><span>Dados</span><span>Cloud</span><span>Cyber</span></div>
      </section>

      <section id="ecossistema" className="section ecosystem-section">
        <div className="section-head"><span>01 · Onde o curso nasce</span><h2>Um curso dentro de um ecossistema maior.</h2><p>A Engenharia de Computação não é apresentada de forma isolada. Ela é uma das trajetórias de formação de um ambiente que conecta educação, pesquisa, tecnologia e indústria.</p></div>
        <div className="ecosystem-map">
          <div className="ecosystem-core"><span>SENAI</span><strong>CIMATEC</strong><small>Educação · Tecnologia · Inovação</small></div>
          <div className="ecosystem-nodes">{ecosystem.map((item) => <div className={`ecosystem-node ${item === "Graduação" ? "active" : ""}`} key={item}>{item}{item === "Graduação" && <small>→ Engenharia de Computação</small>}</div>)}</div>
        </div>
      </section>

      <section id="formacao" className="section formation-section">
        <div className="section-head"><span>02 · Formação</span><h2>Entre o físico e o digital existe uma engenharia.</h2><p>A formação combina fundamentos, computação, sistemas inteligentes e aplicação em problemas reais.</p></div>
        <div className="formation-layout"><div className="formation-core"><span>Engenharia de</span><strong>Computação</strong><p>Integração entre software, hardware, dados e inteligência.</p></div><div className="area-grid">{formationAreas.map((area) => <div className="area-card" key={area}>{area}</div>)}</div></div>
        <div className="journey"><span>Fundamentos</span><i>→</i><span>Computação</span><i>→</i><span>Engenharia</span><i>→</i><span>Sistemas Inteligentes</span><i>→</i><span>Projetos</span><i>→</i><span>Indústria</span></div>
      </section>

      <section id="resultados" className="section results-section">
        <div className="section-head light"><span>03 · Resultados</span><h2>Resultados que refletem uma construção coletiva.</h2><p>Indicadores ajudam a traduzir dimensões da formação, do desempenho discente e da qualidade acadêmica.</p></div>
        <div className="indicators">{indicators.map((item) => <article key={item.label} className="indicator"><div><strong>{item.value}</strong><span>{item.label}</span></div><p>{item.detail}</p></article>)}</div>
        <div className="results-note">Resultados são apresentados como evidências do ecossistema — e não como a única definição de qualidade.</div>
      </section>

      <section id="experiencias" className="section experiences-section">
        <div className="section-head"><span>04 · Muito além da sala</span><h2>A Engenharia acontece quando o estudante participa.</h2><p>Agora cada iniciativa passa a ter memória própria: contexto, imagens, resultados e histórias que podem crescer ao longo do tempo.</p></div>
        <div className="experience-grid">{experiences.map((item) => <Link className="experience-card" href={`/conteudos/${item.slug}/`} key={`${item.title}-${item.slug}`}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><b>Explorar iniciativa →</b></Link>)}</div>
      </section>

      <section id="conexoes" className="section connections-section">
        <div className="section-head"><span>05 · Conexões</span><h2>Um ecossistema conectado à tecnologia e ao mundo.</h2><p>Academias, empresas, ambientes de pesquisa e oportunidades internacionais ampliam o espaço de aprendizagem.</p></div>
        <div className="partner-row">{partners.map((partner) => <div key={partner}>{partner}</div>)}</div>
        <div className="connection-panels">
          <Link href="/conteudos/hiive-lab/"><span>Infraestrutura & pesquisa</span><h3>HIIVE LAB: onde imersão, pesquisa e indústria se encontram.</h3><p>Realidade Virtual e Imersiva, produção científica, formação, inovação e colaboração internacional.</p><strong>Conhecer o laboratório →</strong></Link>
          <Link href="/conteudos/internacionalizacao/"><span>Internacionalização</span><h3>Formação que pode atravessar fronteiras.</h3><p>Histórias de mobilidade acadêmica, pesquisa aplicada e experiências em ambientes internacionais.</p><strong>Alemanha · BRAACHEN · Fraunhofer →</strong></Link>
        </div>
      </section>

      <section id="historias" className="section stories-section">
        <div className="section-head"><span>06 · Histórias da Engenharia</span><h2>O site cresce junto com o curso.</h2><p>Resultados, projetos, pessoas e conquistas passam a compor uma memória digital viva da Engenharia de Computação.</p></div>
        <div className="stories-grid">{stories.map((story, index) => <article key={story.title} className={index === 0 ? "featured" : ""}><span>{story.kicker}</span><h3>{story.title}</h3><p>{story.text}</p><a href="#experiencias">Conhecer a história →</a></article>)}</div>
      </section>

      <section id="carreiras" className="section careers-section">
        <div className="section-head"><span>07 · Possibilidades</span><h2>Que tipo de problema você quer resolver?</h2><p>A formação abre diferentes caminhos. O ponto de partida é entender onde tecnologia e propósito se encontram.</p></div>
        <div className="career-grid">{careers.map((career) => <article key={career.title}><h3>{career.title}</h3>{career.roles.map((role) => <span key={role}>{role}</span>)}</article>)}</div>
        <div className="final-cta"><span>Isso é ser CIMATEC.</span><h2>Aprender, experimentar, construir e transformar.</h2><p>Este portal complementa as informações oficiais da Universidade e apresenta a Engenharia de Computação pela perspectiva das experiências, resultados e histórias do curso.</p><div><a className="primary" href="https://www.universidadesenaicimatec.edu.br/" target="_blank" rel="noreferrer">Informações oficiais ↗</a><a className="secondary link" href="#inicio">Voltar ao início ↑</a></div></div>
      </section>

      <footer><span>Engenharia de Computação · SENAI CIMATEC</span><span>Portal em construção contínua · visão da coordenação</span></footer>

      {presentation && <div className="presentation-controls" role="dialog" aria-label="Controles do modo apresentação"><button onClick={() => setStep((v) => Math.max(0, v - 1))} disabled={step === 0}>←</button><span>{String(step + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</span><button onClick={() => setStep((v) => Math.min(sections.length - 1, v + 1))} disabled={step === sections.length - 1}>→</button><button className="close" onClick={() => setPresentation(false)}>Sair ×</button></div>}
    </main>
  );
}
