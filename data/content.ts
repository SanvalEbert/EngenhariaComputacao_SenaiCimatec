export type EditorialItem = {
  slug: string;
  title: string;
  tag: string;
  eyebrow: string;
  summary: string;
  lead: string;
  hero: string;
  sourceLabel: string;
  paragraphs: string[];
  highlights: { value: string; label: string }[];
  topics: string[];
  gallery?: { src: string; alt: string; caption?: string }[];
};

const raw = "https://raw.githubusercontent.com/SanvalEbert/EngenhariaComputacao_SenaiCimatec/main/public/content";
const asset = (name: string) => `${raw}/${name}`;

export const initiatives: EditorialItem[] = [
  {
    slug: "clube-de-programacao",
    title: "Clube de Programação",
    tag: "Comunidade",
    eyebrow: "Protagonismo estudantil",
    summary: "Uma das iniciativas estudantis de maior tradição do curso, conectando aprendizagem colaborativa, eventos, competições e formação algorítmica.",
    lead: "Uma comunidade construída por estudantes para estudantes — onde programação vira prática, colaboração e trajetória.",
    hero: asset("clube-programacao.webp"),
    sourceLabel: "PPT do curso + Relatório de Análise Crítica 2024",
    paragraphs: [
      "O Clube de Programação é apresentado no material do curso como a iniciativa estudantil de maior tradição na Computação. A proposta reúne estudantes em torno da aprendizagem colaborativa, da resolução de problemas, da organização de eventos e da preparação para competições.",
      "Em 2024, o Clube manteve dois projetos estruturantes: o Projeto Algoritmos, voltado à iniciação em lógica e programação em linguagem C, e o Projeto Maratonas, dedicado ao treinamento em programação competitiva em C++.",
      "A Semana de Computação 2024 reuniu mais de 230 inscritos, 70 apresentadores e 80 competidores, com 49,5 horas de atividades entre palestras, workshops e competições. O evento também distribuiu mais de R$ 12 mil em premiações para mais de 30 estudantes.",
      "Na OBI 2024, o Clube registrou 91 participantes na primeira fase, 14 na segunda e 4 na terceira. A atuação também alcançou a Maratona SBC de Programação, com sete trios participantes na fase regional.",
    ],
    highlights: [
      { value: "230+", label: "inscritos na Semana de Computação 2024" },
      { value: "91", label: "participantes na 1ª fase da OBI 2024" },
      { value: "469", label: "membros no Discord ao final de 2024" },
      { value: "5 anos", label: "marco apresentado pelo Clube no material recente" },
    ],
    topics: ["Algoritmos", "Programação competitiva", "OBI", "Maratona SBC", "Semana de Computação", "Comunidade"],
  },
  {
    slug: "aws-student-builder-group",
    title: "AWS Student Builder Group",
    tag: "Cloud",
    eyebrow: "Comunidade técnica",
    summary: "Grupo estudantil conectado à comunidade global de Builders, com foco em disseminação de conhecimento AWS e formação prática em computação em nuvem.",
    lead: "Cloud como comunidade: estudantes ensinando, aprendendo, certificando e construindo juntos.",
    hero: asset("aws-student-builder-group.webp"),
    sourceLabel: "PPT do curso",
    paragraphs: [
      "O AWS Student Builder Group é apresentado como uma iniciativa estudantil recente e de forte mobilização. O grupo se define como parte da comunidade global de Builders e tem como objetivo disseminar conhecimento sobre diferentes vertentes da AWS e aproximar estudantes de competências demandadas pelo mercado.",
      "No material aparecem frentes como Cloud Discovery e Cloud Certification, combinando introdução à nuvem, trilhas de aprendizagem e preparação para certificações.",
      "A comunidade também se conecta a eventos como AWS Community Day e AWS Student Community Day Salvador, ampliando o contato dos estudantes com profissionais, comunidades técnicas e experiências fora da sala de aula.",
    ],
    highlights: [
      { value: "Cloud", label: "eixo central da comunidade" },
      { value: "Discovery", label: "trilha de introdução e experimentação" },
      { value: "Certification", label: "preparação e desenvolvimento técnico" },
      { value: "Community", label: "aprendizagem entre pares e eventos" },
    ],
    topics: ["AWS", "Cloud", "Certificações", "Comunidade", "Eventos", "Carreira"],
  },
  {
    slug: "ieee-ras",
    title: "IEEE RAS CIMATEC",
    tag: "Robótica",
    eyebrow: "Robótica e automação",
    summary: "Comunidade estudantil ligada à Robotics & Automation Society, com trilhas, projetos e ações em robótica, automação e sistemas inteligentes.",
    lead: "Robótica atrelada à inovação — do código ao sistema físico, com aprendizagem em comunidade.",
    hero: asset("ieee-ras.svg"),
    sourceLabel: "PPT do curso",
    paragraphs: [
      "A IEEE RAS aparece no material do curso como uma iniciativa de robótica conectada à inovação. Os registros mostram estudantes organizando ações de formação, integração e desenvolvimento técnico.",
      "Entre as trilhas apresentadas estão Machine Learning, Visão Computacional e Python, além de atividades relacionadas à automação de sistemas embarcados com MATLAB e Simulink.",
      "A iniciativa amplia a experiência do estudante ao conectar programação, percepção computacional, automação e sistemas físicos — uma combinação diretamente relacionada ao perfil da Engenharia de Computação.",
    ],
    highlights: [
      { value: "ML", label: "trilha de Machine Learning" },
      { value: "CV", label: "trilha de Visão Computacional" },
      { value: "Python", label: "formação em programação" },
      { value: "RAS", label: "Robotics & Automation Society" },
    ],
    topics: ["Robótica", "Automação", "Machine Learning", "Visão Computacional", "Python", "Sistemas Embarcados"],
  },
  {
    slug: "cimatec-jr",
    title: "CIMATEC Jr",
    tag: "Empreendedorismo",
    eyebrow: "Empresa júnior",
    summary: "Empresa júnior poliengenharias e arquitetura e urbanismo, com participação estudantil em projetos, portfólio e experiências de atendimento a desafios reais.",
    lead: "Aprender engenharia também é aprender a transformar conhecimento em solução, proposta, entrega e relacionamento com cliente.",
    hero: asset("cimatec-jr.webp"),
    sourceLabel: "PPT do curso + Manual do Aluno da Universidade SENAI CIMATEC",
    paragraphs: [
      "A CIMATEC Jr integra o conjunto de iniciativas estudantis da Universidade e é descrita institucionalmente como empresa júnior poliengenharias e arquitetura e urbanismo.",
      "No material do curso, a presença da CIMATEC Jr é apresentada por meio de projetos, conteúdos e portfólio, incluindo frentes ligadas a modelagem 3D, landing pages, sistemas e outras soluções desenvolvidas pelos estudantes.",
      "Para a Engenharia de Computação, esse ambiente complementa a formação técnica com experiência em organização de projetos, comunicação, proposta de valor, relacionamento com clientes e desenvolvimento de soluções aplicadas.",
    ],
    highlights: [
      { value: "Projetos", label: "experiências aplicadas e portfólio" },
      { value: "Clientes", label: "contato com demandas reais" },
      { value: "Gestão", label: "organização e entrega" },
      { value: "Inovação", label: "soluções multidisciplinares" },
    ],
    topics: ["Empreendedorismo", "Projetos", "Portfólio", "Gestão", "Soluções digitais", "Multidisciplinaridade"],
  },
  {
    slug: "hackathons-e-competicoes",
    title: "Hackathons e competições",
    tag: "Desafios",
    eyebrow: "Aprendizagem por desafios",
    summary: "Competições que transformam conhecimento técnico em protótipos, soluções, colaboração e exposição nacional e internacional.",
    lead: "Quando existe um problema, um prazo e uma equipe, o conhecimento ganha outra intensidade.",
    hero: asset("hackastone-2026.svg"),
    sourceLabel: "PPT do curso",
    paragraphs: [
      "Hackathons, olimpíadas e maratonas fazem parte do repertório de experiências apresentado pelo curso. Esses ambientes desafiam os estudantes a tomar decisões, construir soluções e trabalhar de forma colaborativa sob restrições reais.",
      "No HACKaSTONE 2026 – Agentic AI for Education, as três equipes do SENAI CIMATEC apresentadas no material foram aprovadas para representar o Brasil na Grande Final presencial em Amsterdã, na Holanda. O PPT destaca que eram as únicas equipes da América Latina classificadas nessa etapa.",
      "A cultura de competição também aparece na OBI e na Maratona SBC de Programação, articulada ao trabalho permanente do Clube de Programação.",
    ],
    highlights: [
      { value: "3", label: "equipes CIMATEC classificadas no HACKaSTONE 2026" },
      { value: "Amsterdã", label: "destino da Grande Final presencial" },
      { value: "OBI", label: "olimpíada presente na formação complementar" },
      { value: "SBC", label: "programação competitiva em equipe" },
    ],
    topics: ["Hackathons", "Agentic AI", "Programação", "Competição", "Prototipagem", "Colaboração"],
  },
  {
    slug: "eventos-cientificos",
    title: "Eventos científicos",
    tag: "Pesquisa",
    eyebrow: "Ciência e comunidade",
    summary: "Participação e organização de eventos acadêmicos que aproximam estudantes de pesquisa, inovação, especialistas e redes científicas.",
    lead: "A formação também acontece quando o estudante entra em contato com a produção científica e com comunidades de pesquisa.",
    hero: asset("eventos-cientificos.svg"),
    sourceLabel: "PPT do curso",
    paragraphs: [
      "O material do curso destaca a participação e a organização de eventos acadêmicos como parte da estratégia de disseminação do conhecimento e integração com a comunidade científica.",
      "Entre os eventos citados estão SBG, SVR e SIBGRAPI 2025, relacionados a videogames, realidade virtual e computação gráfica, além do SIINTEC, que promove pesquisa, inovação e integração entre academia e indústria no CIMATEC.",
      "Essas experiências ajudam a aproximar ensino, pesquisa, extensão e inovação, mostrando ao estudante como conhecimento técnico circula, é discutido, validado e transformado em novas perguntas e soluções.",
    ],
    highlights: [
      { value: "SBG", label: "Simpósio Brasileiro de Games" },
      { value: "SVR", label: "realidade virtual e aumentada" },
      { value: "SIBGRAPI", label: "computação gráfica, padrões e imagens" },
      { value: "SIINTEC", label: "pesquisa, inovação e indústria" },
    ],
    topics: ["Pesquisa", "Games", "Realidade Virtual", "Computação Gráfica", "Inovação", "Indústria"],
  },
];

export const hiiveLab: EditorialItem = {
  slug: "hiive-lab",
  title: "HIIVE LAB",
  tag: "Pesquisa & imersão",
  eyebrow: "Human-Centric Industrial Immersive Engineering",
  summary: "Laboratório de estudos voltados ao uso de Realidade Virtual e Imersiva, conectando pesquisa, formação, inovação e colaboração internacional.",
  lead: "Um ambiente onde tecnologias imersivas encontram engenharia, indústria, educação e pesquisa aplicada.",
  hero: asset("hiive-lab.webp"),
  sourceLabel: "PPT do curso – Números e Marcos do HIIVE LAB",
  paragraphs: [
    "O HIIVE LAB – Human-Centric Industrial Immersive Engineering – é apresentado no material como laboratório de estudos voltados ao uso de Realidade Virtual e Imersiva.",
    "Os números consolidados no PPT registram quatro ICTs participantes, quatro laboratórios distribuídos e compartilhados, 49 títulos únicos de publicações e obras e 79 registros únicos de trabalhos e apresentações. O material também destaca 25 papers submetidos, 80 especialistas lato sensu formados, contatos com empresas, patentes, registros de software e participação de estudantes de graduação e professores.",
    "Em 2025, o laboratório aparece associado ao evento conjunto SVR · SBGames · SIBGRAPI, com 1.200 participantes, 12 palestrantes internacionais, 247 participantes baianos e 16 instituições da Bahia, conforme os números apresentados no material.",
    "A página de marcos do HIIVE LAB também registra frentes de internacionalização, o HackAStone Global de IA e a disciplina internacional Tech Frontiers for Industry 5.0, além de colaborações com instituições em Portugal, Alemanha, Singapura e Estados Unidos.",
  ],
  highlights: [
    { value: "4", label: "ICTs participantes" },
    { value: "49", label: "títulos únicos de publicações e obras" },
    { value: "25", label: "papers submetidos" },
    { value: "1.200", label: "participantes no evento conjunto destacado em 2025" },
  ],
  topics: ["Realidade Virtual", "Tecnologias Imersivas", "Indústria 5.0", "Pesquisa", "Internacionalização", "Inovação"],
};

export const internationalization: EditorialItem = {
  slug: "internacionalizacao",
  title: "Internacionalização",
  tag: "Experiência global",
  eyebrow: "Formação sem fronteiras",
  summary: "Mobilidade acadêmica, pesquisa aplicada e cooperação internacional ampliando a formação dos estudantes de Engenharia de Computação.",
  lead: "A experiência internacional não aparece como elemento isolado: ela se conecta a pesquisa, inovação e desenvolvimento tecnológico.",
  hero: asset("internacionalizacao.webp"),
  sourceLabel: "PPT do curso + Relatório de Análise Crítica 2024",
  paragraphs: [
    "O curso vem ampliando sua inserção em programas de mobilidade acadêmica e cooperação internacional, conectando estudantes a ambientes de pesquisa aplicada e inovação tecnológica fora do Brasil.",
    "O Relatório de Análise Crítica de 2024 registra seis estudantes de cursos de Engenharia aprovados no BRAACHEN 2024, com quatro estudantes de Engenharia de Computação identificados entre os selecionados para atividades relacionadas ao Fraunhofer IPT, na Alemanha.",
    "No material mais recente do curso, referente a 2025, aparecem seis estudantes aprovados para intercâmbio na Alemanha, cinco selecionados pelo programa BRAACHEN 2025 (IPT) e um estudante aprovado para o Fraunhofer IPK.",
    "Essas experiências são apresentadas como parte da formação com visão global, fortalecendo a atuação em pesquisa aplicada, inovação e redes colaborativas internacionais.",
  ],
  highlights: [
    { value: "6", label: "estudantes aprovados para intercâmbio na Alemanha em 2025" },
    { value: "5", label: "selecionados BRAACHEN 2025 (IPT)" },
    { value: "1", label: "aprovação para Fraunhofer IPK em 2025" },
    { value: "Global", label: "pesquisa aplicada, inovação e mobilidade" },
  ],
  topics: ["Alemanha", "BRAACHEN", "Fraunhofer IPT", "Fraunhofer IPK", "Mobilidade", "Pesquisa aplicada"],
};

export const partnerPrograms = [
  {
    name: "AWS Academy",
    logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E",
    href: "https://aws.amazon.com/training/awsacademy/",
    text: "Formação em computação em nuvem e acesso a experiências educacionais relacionadas ao ecossistema AWS.",
  },
  {
    name: "Cisco Networking Academy",
    logo: "https://cdn.simpleicons.org/cisco/1BA0D7",
    href: "https://www.netacad.com/",
    text: "Conexão com formação em redes, infraestrutura, cibersegurança e competências digitais.",
  },
  {
    name: "Fortinet",
    logo: "https://cdn.simpleicons.org/fortinet/EE3124",
    href: "https://www.fortinet.com/training/academic-partner-program",
    text: "Conteúdos e formação associados à segurança cibernética e ao desenvolvimento de competências técnicas.",
  },
  {
    name: "Huawei",
    logo: "https://cdn.simpleicons.org/huawei/FF0000",
    href: "https://e.huawei.com/en/talent/",
    text: "Conexão com tecnologias de infraestrutura, redes e desenvolvimento de talentos em TIC.",
  },
];

export const storiesWithLinks = [
  {
    kicker: "Competição internacional",
    title: "Equipes do CIMATEC avançam para final internacional",
    text: "HACKaSTONE 2026 conecta IA, educação, colaboração e protagonismo estudantil em uma competição global.",
    href: "/iniciativas/hackathons-e-competicoes",
  },
  {
    kicker: "Internacionalização",
    title: "Formação com experiências fora do Brasil",
    text: "BRAACHEN, Fraunhofer e intercâmbios aproximam estudantes de novos ambientes de pesquisa e inovação.",
    href: "/internacionalizacao",
  },
  {
    kicker: "Pesquisa aplicada",
    title: "HIIVE LAB conecta computação, imersão e indústria",
    text: "Tecnologias imersivas, pesquisa, colaboração internacional e formação em um ambiente multidisciplinar.",
    href: "/conexoes/hiive-lab",
  },
];
