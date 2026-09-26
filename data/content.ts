export type ContentStat = {
  value: string;
  label: string;
  note?: string;
};

export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ContentPage = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  imageAlt: string;
  stats?: ContentStat[];
  sections: ContentSection[];
  chips?: string[];
  sourceLabel: string;
};

export const contentPages: ContentPage[] = [
  {
    slug: "clube-de-programacao",
    tag: "Comunidade estudantil",
    title: "Clube de Programação",
    subtitle: "Código, comunidade, competição e aprendizagem entre pares.",
    intro:
      "Uma das iniciativas estudantis de maior tradição da Computação no SENAI CIMATEC. O Clube transforma a prática de programação em comunidade, formação complementar, eventos e preparação para competições.",
    heroImage: "clube.webp",
    imageAlt: "Registros do Clube de Programação, OBI e Semana de Computação",
    stats: [
      { value: "230+", label: "inscritos", note: "Semana de Computação 2024" },
      { value: "91", label: "participantes", note: "OBI — 1ª fase em 2024" },
      { value: "469", label: "membros", note: "Discord ao final de 2024" },
      { value: "7", label: "trios", note: "Maratona SBC 2024" },
    ],
    sections: [
      {
        title: "Aprender junto faz parte da formação",
        paragraphs: [
          "O Clube de Programação funciona como espaço permanente de engajamento discente. Em 2024, manteve o Projeto Algoritmos, voltado à iniciação em lógica e programação em C, e o Projeto Maratonas, direcionado à programação competitiva em C++.",
          "A proposta amplia a formação para além das disciplinas, estimulando autonomia, resolução de problemas, colaboração e protagonismo estudantil.",
        ],
      },
      {
        title: "Competições como ambiente de aprendizagem",
        paragraphs: [
          "Na Olimpíada Brasileira de Informática de 2024, o Clube registrou 91 estudantes na primeira fase, 14 na segunda e 4 na terceira. A participação também se estendeu à Maratona SBC de Programação, com sete trios representando o curso.",
        ],
        bullets: [
          "Projeto Algoritmos — iniciação em lógica e programação",
          "Projeto Maratonas — treinamento em programação competitiva",
          "Participação na OBI e na Maratona SBC",
          "Organização e apoio à Semana de Computação",
        ],
      },
      {
        title: "Uma comunidade que também organiza experiências",
        paragraphs: [
          "A Semana de Computação 2024 reuniu mais de 230 inscritos, 70 apresentadores e 80 competidores, com 49,5 horas de programação entre palestras, workshops e competições de Programação, Inteligência Artificial, Cibersegurança e Games.",
        ],
      },
    ],
    chips: ["Programação", "OBI", "Maratona SBC", "Extensão", "Comunidade"],
    sourceLabel: "Conteúdo consolidado a partir da apresentação do curso e do Relatório de Análise Crítica 2024.",
  },
  {
    slug: "aws-student-builder-group",
    tag: "Cloud & comunidade",
    title: "AWS Student Builder Group",
    subtitle: "Estudantes conectados à comunidade global de builders.",
    intro:
      "Uma comunidade estudantil criada para disseminar conhecimento sobre diferentes vertentes da AWS, estimular aprendizagem entre pares e aproximar estudantes das práticas de computação em nuvem.",
    heroImage: "aws.webp",
    imageAlt: "Painel do AWS Student Builder Group com atividades de cloud e comunidade",
    stats: [
      { value: "AWS", label: "Builders", note: "comunidade estudantil" },
      { value: "2", label: "frentes", note: "Cloud Discovery e Cloud Certification" },
    ],
    sections: [
      {
        title: "Cloud como prática, não apenas como conteúdo",
        paragraphs: [
          "O grupo se apresenta como uma comunidade de estudantes integrada ao ecossistema global de builders. O objetivo é disseminar conhecimento sobre serviços e práticas da AWS e preparar universitários para um mercado em que arquiteturas de nuvem fazem parte do cotidiano de desenvolvimento e infraestrutura.",
        ],
      },
      {
        title: "Aprendizagem em comunidade",
        paragraphs: [
          "O material do curso registra ações como Cloud Discovery e Cloud Certification, além da participação em iniciativas de comunidade como AWS Community Day e AWS Student Community Day Salvador.",
        ],
        bullets: [
          "Cloud Discovery",
          "Cloud Certification",
          "Compartilhamento de conhecimento entre estudantes",
          "Conexão com eventos e comunidades AWS",
        ],
      },
    ],
    chips: ["AWS", "Cloud", "Certificações", "Comunidade", "Carreira"],
    sourceLabel: "Conteúdo derivado do material apresentado pelo AWS Student Builder Group no PPT do curso.",
  },
  {
    slug: "ieee-ras",
    tag: "Robótica & automação",
    title: "IEEE RAS CIMATEC",
    subtitle: "Robótica atrelada à inovação e à construção de comunidade técnica.",
    intro:
      "O capítulo estudantil ligado à IEEE Robotics and Automation Society aproxima estudantes de robótica, automação, sistemas embarcados, inteligência artificial e visão computacional por meio de trilhas, encontros e atividades práticas.",
    heroImage: "ieee-ras.webp",
    imageAlt: "Atividades da IEEE RAS CIMATEC em robótica, automação e formação técnica",
    sections: [
      {
        title: "Uma trilha de formação construída por estudantes",
        paragraphs: [
          "Os registros do curso mostram uma comunidade que combina encontros de integração, processos de eleição estudantil, palestras e trilhas técnicas. Entre os temas apresentados estão Python, Machine Learning, Visão Computacional e automação de sistemas embarcados com MATLAB e Simulink.",
        ],
      },
      {
        title: "Robótica como ponto de encontro entre áreas",
        paragraphs: [
          "A RAS cria um espaço onde software, eletrônica, automação e inteligência artificial se encontram em problemas físicos. Essa transversalidade é especialmente aderente à identidade da Engenharia de Computação.",
        ],
        bullets: ["Robótica e automação", "Visão Computacional", "Machine Learning", "Python", "Sistemas embarcados"],
      },
    ],
    chips: ["IEEE", "Robótica", "Automação", "Visão Computacional", "IA"],
    sourceLabel: "Conteúdo derivado dos registros da IEEE RAS CIMATEC presentes na apresentação do curso.",
  },
  {
    slug: "cimatec-jr",
    tag: "Empreendedorismo",
    title: "CIMATEC Jr",
    subtitle: "Projetos, clientes e gestão como parte da experiência universitária.",
    intro:
      "A empresa júnior conecta estudantes de diferentes engenharias e Arquitetura a experiências de projeto, organização, relacionamento com clientes e construção de soluções com aplicação real.",
    heroImage: "cimatec-jr.webp",
    imageAlt: "Registros de projetos e equipe da CIMATEC Jr",
    sections: [
      {
        title: "Empreender também é aprender engenharia",
        paragraphs: [
          "Os registros apresentados no curso mostram atuação em modelagem 3D, desenvolvimento de landing pages, sistemas de gestão, rotulagem e conteúdos relacionados a arquitetura e criação de negócios.",
          "A participação em uma empresa júnior amplia a experiência com organização de equipes, negociação, escopo, entrega e comunicação profissional.",
        ],
      },
      {
        title: "Formação interdisciplinar",
        paragraphs: [
          "A CIMATEC Jr aparece no ecossistema institucional como iniciativa estudantil de caráter poliengenharias e Arquitetura e Urbanismo, criando oportunidades para que estudantes trabalhem em equipes multidisciplinares.",
        ],
      },
    ],
    chips: ["Empreendedorismo", "Projetos", "Clientes", "Gestão", "Interdisciplinaridade"],
    sourceLabel: "Conteúdo consolidado a partir da apresentação do curso e de informações institucionais sobre iniciativas estudantis.",
  },
  {
    slug: "hiive-lab",
    tag: "Pesquisa & tecnologias imersivas",
    title: "HIIVE LAB",
    subtitle: "Human-Centric Industrial Immersive Engineering.",
    intro:
      "Laboratório de estudos voltados ao uso de Realidade Virtual e Imersiva, articulando pesquisa, formação, inovação, colaboração internacional e aplicações industriais centradas em pessoas.",
    heroImage: "hiive.webp",
    imageAlt: "Identidade visual do HIIVE LAB — Human-Centric Industrial Immersive Engineering",
    stats: [
      { value: "4", label: "ICTs", note: "participantes" },
      { value: "49", label: "títulos", note: "publicações e obras" },
      { value: "79", label: "registros", note: "trabalhos e apresentações" },
      { value: "4", label: "patentes", note: "aprovadas ou em andamento" },
    ],
    sections: [
      {
        title: "Pesquisa, formação e inovação em tecnologias imersivas",
        paragraphs: [
          "O material do HIIVE LAB registra quatro laboratórios distribuídos e compartilhados, produção científica, formação de especialistas, contatos com empresas e participação de estudantes de graduação e professores.",
          "O laboratório aproxima realidade virtual, realidade estendida, computação gráfica e interação humano-computador de desafios industriais e educacionais.",
        ],
      },
      {
        title: "Conexões internacionais",
        paragraphs: [
          "Os marcos apresentados pelo laboratório incluem colaborações e prospecções com instituições em Portugal, Alemanha, Singapura, Estados Unidos, México, França e Gana, além de participação em eventos e missões técnicas.",
        ],
        bullets: [
          "NOVA University Lisbon e Universidade Lusíada",
          "University of Augsburg",
          "Nanyang Technological University",
          "University of Florida",
          "Frentes de internacionalização com México, França e Gana",
        ],
      },
    ],
    chips: ["Realidade Virtual", "XR", "IHC", "Indústria 5.0", "Pesquisa"],
    sourceLabel: "Conteúdo consolidado a partir dos slides de apresentação e números do HIIVE LAB.",
  },
  {
    slug: "internacionalizacao",
    tag: "Experiência global",
    title: "Internacionalização",
    subtitle: "Formação que pode atravessar fronteiras.",
    intro:
      "Mobilidade acadêmica, pesquisa aplicada e intercâmbio internacional fazem parte das trajetórias que ampliam a formação dos estudantes de Engenharia de Computação.",
    heroImage: "internacionalizacao.webp",
    imageAlt: "Slide de internacionalização com estudantes e indicadores de mobilidade",
    stats: [
      { value: "6", label: "estudantes", note: "aprovados para intercâmbio na Alemanha em 2025" },
      { value: "5", label: "selecionados", note: "BRAACHEN 2025 — IPT" },
      { value: "1", label: "estudante", note: "Fraunhofer IPK em 2025" },
    ],
    sections: [
      {
        title: "2025 — ampliação das experiências internacionais",
        paragraphs: [
          "A apresentação do curso registra seis estudantes aprovados para intercâmbio na Alemanha em 2025, cinco selecionados pelo programa BRAACHEN 2025, ligado ao Fraunhofer IPT, e um estudante aprovado para o Fraunhofer IPK.",
          "As experiências estão associadas à pesquisa aplicada, inovação tecnológica e ao fortalecimento de uma formação com visão global.",
        ],
      },
      {
        title: "2024 — trajetória já em construção",
        paragraphs: [
          "No ciclo anterior, o relatório do curso registrou estudantes de Engenharia de Computação entre os aprovados no BRAACHEN 2024, reforçando a continuidade das ações de mobilidade e cooperação internacional.",
        ],
      },
    ],
    chips: ["Alemanha", "BRAACHEN", "Fraunhofer IPT", "Fraunhofer IPK", "Pesquisa aplicada"],
    sourceLabel: "Conteúdo consolidado a partir da apresentação do curso e do Relatório de Análise Crítica 2024.",
  },
];

export function getContentPage(slug: string) {
  return contentPages.find((page) => page.slug === slug);
}
