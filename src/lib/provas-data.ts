import { ProvaCompleta } from '@/types';

export const PROVAS_DATA: ProvaCompleta[] = [
  // 1. ENEM
  {
    id: 'enem',
    slug: 'enem',
    nomeOficial: 'Exame Nacional do Ensino Médio',
    apelido: 'ENEM',
    sigla: 'ENEM',
    instituicao: 'INEP / MEC',
    categoria: 'nacional',
    estado: 'Nacional',
    tipoProva: 'mista',
    quantidadeFases: 1,
    vagasAproximadas: 350000,
    resumoFuncionamento: 'Maior avaliação educacional do país. Suas notas são o passaporte para o SiSU (universidades federais e estaduais), ProUni (bolsas em faculdades privadas) e FIES (financiamento estudantil), além de convênios com universidades de Portugal.',
    siteOficial: 'https://enem.inep.gov.br',
    editalAtualUrl: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/editais',
    editalAnteriorUrl: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/edicoes-anteriores',
    ultimaAtualizacao: '2026-11-01',
    fonteOficialValidada: true,
    taxaInscricao: 85.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Concluintes do Ensino Médio em rede pública, bolsistas integrais com renda familiar per capita até 1,5 salário mínimo ou inscritos no CadÚnico.',
    calendario: [
      { id: 'en-1', evento: 'Solicitação de Isenção da Taxa', dataInicio: '2026-04-15', dataFim: '2026-04-26', status: 'confirmado' },
      { id: 'en-2', evento: 'Período de Inscrições Gerais', dataInicio: '2026-05-27', dataFim: '2026-06-14', status: 'confirmado' },
      { id: 'en-3', evento: 'Cartão de Confirmação e Local de Prova', dataInicio: '2026-10-21', status: 'confirmado' },
      { 
        id: 'en-4', 
        evento: '1º Domingo de Prova (Linguagens, Humanas e Redação)', 
        dataInicio: '2026-11-03', 
        horarioAberturaPortoes: '12:00',
        horarioFechamentoPortoes: '13:00',
        duracaoHoras: 5.5,
        status: 'confirmado',
        observacao: 'Início às 13:30. Término às 19:00.'
      },
      { 
        id: 'en-5', 
        evento: '2º Domingo de Prova (Matemática e Ciências da Natureza)', 
        dataInicio: '2026-11-10', 
        horarioAberturaPortoes: '12:00',
        horarioFechamentoPortoes: '13:00',
        duracaoHoras: 5.0,
        status: 'confirmado',
        observacao: 'Início às 13:30. Término às 18:30.'
      },
      { id: 'en-6', evento: 'Divulgação dos Gabaritos Oficiais', dataInicio: '2026-11-20', status: 'confirmado' },
      { id: 'en-7', evento: 'Resultado Individual & Abertura SiSU', dataInicio: '2027-01-13', status: 'previsto' }
    ],
    assuntosMaisCobrados: [
      { disciplina: 'Matemática', assunto: 'Geometria Espacial e Plana', porcentagem: 22.5 },
      { disciplina: 'Matemática', assunto: 'Razão, Proporção e Regra de Três', porcentagem: 20.0 },
      { disciplina: 'Ciências da Natureza', assunto: 'Ecologia e Impactos Ambientais', porcentagem: 28.0 },
      { disciplina: 'Linguagens', assunto: 'Interpretação e Funções da Linguagem', porcentagem: 34.0 },
      { disciplina: 'Ciências Humanas', assunto: 'Cidadania, Direitos Humanos e Democracia', porcentagem: 25.0 }
    ],
    materiaisOficiais: [
      { titulo: 'Prova Azul Caderno 1', ano: 2024, fase: '1º Dia', tipo: 'prova', urlDownload: 'https://download.inep.gov.br/enem/provas/2024_DIA1.pdf' },
      { titulo: 'Gabarito Oficial Caderno 1', ano: 2024, fase: '1º Dia', tipo: 'gabarito', urlDownload: 'https://download.inep.gov.br/enem/gabaritos/2024_GAB_DIA1.pdf' },
      { titulo: 'Cartilha de Redação Nota 1000 Oficial', ano: 2024, tipo: 'redacoes_nota_maxima', urlDownload: 'https://download.inep.gov.br/enem/redacao/cartilha_participante.pdf' }
    ],
    cursosDestaque: [
      { nome: 'Medicina (Média Federal)', pesos: { 'Redação': 2, 'Natureza': 3, 'Matemática': 3, 'Linguagens': 1.5, 'Humanas': 1 }, notaCorteAmplaUltimoAno: 808.4, concorrenciaCandidatoVaga: 115, vagasTotais: 120 },
      { nome: 'Direito', pesos: { 'Redação': 2, 'Natureza': 1, 'Matemática': 1, 'Linguagens': 3, 'Humanas': 3 }, notaCorteAmplaUltimoAno: 745.2, concorrenciaCandidatoVaga: 42, vagasTotais: 150 },
      { nome: 'Engenharia da Computação', pesos: { 'Redação': 1.5, 'Natureza': 2.5, 'Matemática': 4, 'Linguagens': 1, 'Humanas': 1 }, notaCorteAmplaUltimoAno: 782.0, concorrenciaCandidatoVaga: 65, vagasTotais: 80 }
    ],
    planoEstudo: {
      ativo: true,
      visaoGeral: 'Método Foco-TRI: Otimização de tempo e coerência pedagógica para maximizar a nota na Teoria de Resposta ao Item.',
      metodologia: 'Técnica dos 3 Blocos de Triagem em prova: Questões Fáceis primeiro (garantem a pontuação TRI), Redação estruturada no início da tarde e simulados com cronômetro real.',
      ciclosEstudo: [
        {
          semana: 1,
          focoPrincipal: 'Base TRI e Interpretação Rápida de Gráficos',
          estrategiaFixacao: 'Flashcards de fórmulas essenciais e 30 questões de razão e proporção aplicadas ao cotidiano.',
          conteudosChave: ['Leitura rápida de enunciados longos', 'Ecologia fundamental', 'Estrutura dissertativa-argumentativa']
        },
        {
          semana: 2,
          focoPrincipal: 'Domínio da Redação Nota 1000',
          estrategiaFixacao: 'Construção de repertório curinga (Filosofia/Sociologia) e esqueletos de proposta de intervenção com os 5 elementos (Agente, Ação, Meio, Efeito e Detalhamento).',
          conteudosChave: ['Competência 5 do ENEM', 'Termologia e Ondulatória', 'Geometria plana essencial']
        }
      ],
      dicasPraticasInovadoras: [
        'Nunca chute tudo em uma única letra: a TRI penaliza acertos aleatórios em questões difíceis se errar as fáceis.',
        'Faça a leitura das alternativas antes do texto de apoio: na maioria das questões de Linguagens e Humanas, o comando da questão já direciona o que você deve buscar.'
      ]
    }
  },

  // 2. FUVEST (USP)
  {
    id: 'fuvest',
    slug: 'fuvest',
    nomeOficial: 'Vestibular da Universidade de São Paulo',
    apelido: 'Fuvest',
    sigla: 'FUVEST',
    instituicao: 'Fundação Universitária para o Vestibular (USP)',
    categoria: 'tradicional',
    estado: 'SP',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 11147,
    resumoFuncionamento: 'Principal vestibular tradicional do Brasil. Dá acesso exclusivo a quase todos os cursos da Universidade de São Paulo (USP). Divide-se em 1ª fase (90 testes de múltipla escolha) e 2ª fase (discursiva em 2 dias com redação e matérias específicas do curso).',
    siteOficial: 'https://www.fuvest.br',
    editalAtualUrl: 'https://www.fuvest.br/vestibular-da-usp-guia-de-provas',
    editalAnteriorUrl: 'https://www.fuvest.br/vestibular-da-usp-provas-anteriores',
    ultimaAtualizacao: '2026-10-28',
    fonteOficialValidada: true,
    taxaInscricao: 211.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Redução de 50% para estudantes com remuneração mensal inferior a 2 salários mínimos ou isenção de 100% via comprovação socioeconômica.',
    calendario: [
      { id: 'fuv-1', evento: 'Pedidos de Isenção / Redução de Taxa', dataInicio: '2026-05-15', dataFim: '2026-06-12', status: 'confirmado' },
      { id: 'fuv-2', evento: 'Inscrições Abertas', dataInicio: '2026-08-19', dataFim: '2026-10-08', status: 'confirmado' },
      { 
        id: 'fuv-3', 
        evento: '1ª Fase (90 Questões Objetivas)', 
        dataInicio: '2026-11-17', 
        horarioAberturaPortoes: '12:00',
        horarioFechamentoPortoes: '13:00',
        duracaoHoras: 5.0,
        status: 'confirmado'
      },
      { id: 'fuv-4', evento: 'Convocação para 2ª Fase', dataInicio: '2026-12-02', status: 'confirmado' },
      { 
        id: 'fuv-5', 
        evento: '2ª Fase - 1º Dia (Português e Redação)', 
        dataInicio: '2026-12-15', 
        horarioFechamentoPortoes: '13:00',
        duracaoHoras: 4.0,
        status: 'confirmado'
      },
      { 
        id: 'fuv-6', 
        evento: '2ª Fase - 2º Dia (Disciplinas Específicas)', 
        dataInicio: '2026-12-16', 
        horarioFechamentoPortoes: '13:00',
        duracaoHoras: 4.0,
        status: 'confirmado'
      },
      { id: 'fuv-7', evento: 'Divulgação da 1ª Chamada Oficial', dataInicio: '2027-01-24', status: 'previsto' }
    ],
    obrasLiterarias: [
      { titulo: 'Marília de Dirceu', autor: 'Tomás Antônio Gonzaga', analiseResumida: 'Arcadismo brasileiro, dualidade entre o lirismo bucólico e a prisão política na Inconfidência Mineira.' },
      { titulo: 'Quincas Borba', autor: 'Machado de Assis', analiseResumida: 'Realismo e a teoria do Humanitismo, ironia machadiana e loucura do protagonista.' },
      { titulo: 'Alguma Poesia', autor: 'Carlos Drummond de Andrade', analiseResumida: 'Modernismo de 1930, poemas do cotidiano, gauche e crise existencial.' },
      { titulo: 'Mensagem', autor: 'Fernando Pessoa', analiseResumida: 'Nacionalismo mítico, sebastianismo e o Quinto Império português.' }
    ],
    assuntosMaisCobrados: [
      { disciplina: 'Física', assunto: 'Mecânica (Dinâmica e Energia)', porcentagem: 31.0 },
      { disciplina: 'Química', assunto: 'Físico-Química e Termoquímica', porcentagem: 26.5 },
      { disciplina: 'Biologia', assunto: 'Genética e Fisiologia Humana', porcentagem: 29.0 },
      { disciplina: 'História', assunto: 'Brasil Colônia e Era Vargas', porcentagem: 24.0 }
    ],
    materiaisOficiais: [
      { titulo: 'Caderno de Provas 1ª Fase', ano: 2024, tipo: 'prova', urlDownload: 'https://www.fuvest.br/wp-content/uploads/fuvest2024_1fase_prova.pdf' },
      { titulo: 'Gabarito Oficial 1ª Fase', ano: 2024, tipo: 'gabarito', urlDownload: 'https://www.fuvest.br/wp-content/uploads/fuvest2024_1fase_gabarito.pdf' },
      { titulo: 'Manual do Candidato Fuvest Completo', ano: 2025, tipo: 'manual', urlDownload: 'https://www.fuvest.br/wp-content/uploads/fuvest2025_manual_candidato.pdf' }
    ],
    cursosDestaque: [
      { nome: 'Medicina (Pinheiros/SP)', pesos: { 'Física': 2, 'Química': 3, 'Biologia': 3 }, notaCorteAmplaUltimoAno: 79.0, concorrenciaCandidatoVaga: 118, vagasTotais: 175 },
      { nome: 'Direito (Largo São Francisco)', pesos: { 'História': 3, 'Geografia': 2, 'Matemática': 1 }, notaCorteAmplaUltimoAno: 64.0, concorrenciaCandidatoVaga: 27.5, vagasTotais: 460 },
      { nome: 'Engenharia Mecatrônica (Poli)', pesos: { 'Matemática': 3, 'Física': 3, 'Química': 2 }, notaCorteAmplaUltimoAno: 67.0, concorrenciaCandidatoVaga: 35.0, vagasTotais: 60 }
    ],
    planoEstudo: {
      ativo: true,
      visaoGeral: 'Método FUVEST Alta Densidade: Rigor conceitual e resposta discursiva direta sem enrolação.',
      metodologia: 'Treinamento reverso: resolução das últimas 10 edições da 1ª fase aos sábados e redação de respostas discursivas em folhas oficiais pautadas.',
      ciclosEstudo: [
        {
          semana: 1,
          focoPrincipal: 'Imersão nas Obras Literárias & Exatas Fundamentais',
          estrategiaFixacao: 'Mapas de personagens e relações cruzadas entre autores obrigatórios.',
          conteudosChave: ['Arcadismo vs Realismo', 'Dinâmica Newtoniana', 'Estequiometria com pureza e rendimento']
        }
      ],
      dicasPraticasInovadoras: [
        'Na 2ª fase, a Fuvest não quer resumo do enunciado: comece a resposta pelo resultado ou tese principal e justifique com cálculo/teoria logo abaixo.',
        'Dominar as 9 leituras obrigatórias garante cerca de 10 a 14 questões diretas na 1ª e 2ª fase somadas.'
      ]
    }
  },

  // 3. UNICAMP (Comvest)
  {
    id: 'unicamp',
    slug: 'unicamp',
    nomeOficial: 'Vestibular Unicamp',
    apelido: 'Unicamp',
    sigla: 'UNICAMP',
    instituicao: 'Comissão Permanente para os Vestibulares da Unicamp (Comvest)',
    categoria: 'tradicional',
    estado: 'SP',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 3340,
    resumoFuncionamento: 'Vestibular moderno, contextualizado e crítico. Famoso por sua proposta de redação com dois gêneros textuais diferentes (ex: carta aberta, manifesto, podcast escrito) para escolha do candidato.',
    siteOficial: 'https://www.comvest.unicamp.br',
    editalAtualUrl: 'https://www.comvest.unicamp.br/vestibular-atual/edital',
    editalAnteriorUrl: 'https://www.comvest.unicamp.br/vestibular-anteriores',
    ultimaAtualizacao: '2026-10-25',
    fonteOficialValidada: true,
    taxaInscricao: 210.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Isenção concedida para alunos de escola pública com renda familiar per capita inferior a 1,5 salário mínimo ou funcionários da Unicamp/Funcamp.',
    calendario: [
      { id: 'uni-1', evento: 'Período de Inscrições Gerais', dataInicio: '2026-08-01', dataFim: '2026-09-09', status: 'confirmado' },
      { id: 'uni-2', evento: '1ª Fase (72 Questões de Múltipla Escolha)', dataInicio: '2026-10-20', status: 'confirmado' },
      { id: 'uni-3', evento: '2ª Fase (2 Dias Discursivos)', dataInicio: '2026-12-01', dataFim: '2026-12-02', status: 'confirmado' }
    ],
    materiaisOficiais: [
      { titulo: 'Caderno Prova 1ª Fase Unicamp', ano: 2024, tipo: 'prova', urlDownload: 'https://www.comvest.unicamp.br/vest2024/F1_caderno.pdf' },
      { titulo: 'Expectativas de Resposta 2ª Fase', ano: 2024, tipo: 'gabarito', urlDownload: 'https://www.comvest.unicamp.br/vest2024/F2_respostas.pdf' }
    ],
    planoEstudo: {
      ativo: true,
      visaoGeral: 'Treino de Gêneros Textuais e Interdisciplinaridade Científica Aplicada.',
      metodologia: 'Prática de produção textual com múltiplos interlocutores e leitura crítica de textos jornalísticos e acadêmicos contemporâneos.',
      ciclosEstudo: [
        {
          semana: 1,
          focoPrincipal: 'Gêneros Não-Dissertativos & Análise de Gráficos Sociais',
          estrategiaFixacao: 'Redação semanal alternando manifesto, resenha e discurso político.',
          conteudosChave: ['Intertextualidade', 'Transformações Químicas no Meio Ambiente']
        }
      ],
      dicasPraticasInovadoras: [
        'A Unicamp pune severamente o candidato que quebra a máscara do gênero textual (ex: esquecer de assinar uma carta fictícia quando o enunciado exige).'
      ]
    }
  },

  // 4. UNESP (Vunesp)
  {
    id: 'unesp',
    slug: 'unesp',
    nomeOficial: 'Vestibular Unesp',
    apelido: 'Unesp',
    sigla: 'UNESP',
    instituicao: 'Fundação Vunesp',
    categoria: 'tradicional',
    estado: 'SP',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 7690,
    resumoFuncionamento: 'Vestibular distribuído por todo o estado de SP. 1ª fase com 90 questões objetivas interdisciplinares e 2ª fase com 36 questões discursivas mais redação dissertativa clássica.',
    siteOficial: 'https://www.vunesp.com.br',
    editalAtualUrl: 'https://www.vunesp.com.br/VNSP2401',
    editalAnteriorUrl: 'https://www.vunesp.com.br/anteriores',
    ultimaAtualizacao: '2026-10-15',
    fonteOficialValidada: true,
    taxaInscricao: 192.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Redução de 75% da taxa para concluintes do ensino médio da rede pública estadual paulista.',
    calendario: [
      { id: 'unesp-1', evento: 'Inscrições no site da Vunesp', dataInicio: '2026-09-04', dataFim: '2026-10-10', status: 'confirmado' },
      { id: 'unesp-2', evento: '1ª Fase (90 Testes)', dataInicio: '2026-11-15', status: 'confirmado' },
      { id: 'unesp-3', evento: '2ª Fase (2 Dias)', dataInicio: '2026-12-08', dataFim: '2026-12-09', status: 'confirmado' }
    ],
    materiaisOficiais: [
      { titulo: 'Prova Objetiva Unesp', ano: 2024, tipo: 'prova', urlDownload: 'https://www.vunesp.com.br/provas/unesp2024.pdf' }
    ],
    planoEstudo: {
      ativo: true,
      visaoGeral: 'Método Vunesp Direto: Clareza textual, precisão conceitual e redação dissertativa impecável.',
      metodologia: 'Foco nos temas de atualidades brasileiras e resolução das questões discursivas das edições anteriores da Vunesp.',
      ciclosEstudo: [
        {
          semana: 1,
          focoPrincipal: 'Geografia do Brasil e Questões Ambientais da Vunesp',
          estrategiaFixacao: 'Caderno de resumos conceituais e treino de dissertação com temas filosóficos da Vunesp.',
          conteudosChave: ['Urbanização brasileira', 'Geometria espacial', 'Leis de Newton']
        }
      ],
      dicasPraticasInovadoras: [
        'A redação da Unesp costuma apresentar perguntas como tema (ex: "A tecnologia aproxima ou afasta as pessoas?"). Seu posicionamento deve ser claro logo na introdução.'
      ]
    }
  },

  // 5. UERJ
  {
    id: 'uerj',
    slug: 'uerj',
    nomeOficial: 'Vestibular Estadual da UERJ',
    apelido: 'UERJ',
    sigla: 'UERJ',
    instituicao: 'Departamento de Seleção Acadêmica da UERJ (DSEA)',
    categoria: 'tradicional',
    estado: 'RJ',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 6200,
    resumoFuncionamento: 'Modelo único de dois Exames de Qualificação (EQ) objetivos ao longo do ano com sistema de conceitos (A, B, C, D) e um Exame Discursivo final com redação sobre um livro específico e duas matérias específicas.',
    siteOficial: 'https://www.vestibular.uerj.br',
    editalAtualUrl: 'https://www.vestibular.uerj.br/edital',
    editalAnteriorUrl: 'https://www.vestibular.uerj.br/anteriores',
    ultimaAtualizacao: '2026-10-10',
    fonteOficialValidada: true,
    taxaInscricao: 90.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Isenção concedida para candidatos hipossuficientes com cadastro no CadÚnico.',
    calendario: [
      { id: 'uerj-1', evento: '1º Exame de Qualificação', dataInicio: '2026-06-09', status: 'confirmado' },
      { id: 'uerj-2', evento: '2º Exame de Qualificação', dataInicio: '2026-09-08', status: 'confirmado' },
      { id: 'uerj-3', evento: 'Exame Discursivo Final', dataInicio: '2026-12-01', status: 'confirmado' }
    ],
    materiaisOficiais: [
      { titulo: 'Prova do 1º EQ UERJ', ano: 2024, tipo: 'prova', urlDownload: 'https://www.vestibular.uerj.br/docs/2024_1EQ.pdf' }
    ],
    planoEstudo: {
      ativo: true,
      visaoGeral: 'Conceito A nos Qualificatórios e Domínio do Romance da Redação.',
      metodologia: 'Garantir 20 pontos de bônus obtendo conceito A no 1º ou 2º EQ para competir na frente no Exame Discursivo.',
      ciclosEstudo: [
        {
          semana: 1,
          focoPrincipal: 'Treino de Velocidade para o Exame de Qualificação (60 questões)',
          estrategiaFixacao: 'Resolução cronometrada e fichamento do romance indicado para o EQ.',
          conteudosChave: ['Interpretação UERJ', 'Química ambiental e Termoquímica']
        }
      ],
      dicasPraticasInovadoras: [
        'A redação da UERJ gira 100% em torno de dilemas éticos e morais do livro obrigatório selecionado no ano.'
      ]
    }
  },

  // 6. MILITARES: ITA / IME
  {
    id: 'ita-ime',
    slug: 'ita-ime',
    nomeOficial: 'Concursos Militares de Engenharia (ITA e IME)',
    apelido: 'ITA / IME',
    sigla: 'ITA/IME',
    instituicao: 'Instituto Tecnológico de Aeronáutica / Instituto Militar de Engenharia',
    categoria: 'militar',
    estado: 'Nacional',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 250,
    resumoFuncionamento: 'Os vestibulares de exatas mais exigentes e concorridos da América Latina. Exigem domínio avançado de Matemática, Física e Química em nível de graduação inicial, além de redação e inglês.',
    siteOficial: 'http://www.vestibular.ita.br',
    editalAtualUrl: 'http://www.vestibular.ita.br/editais',
    editalAnteriorUrl: 'http://www.vestibular.ita.br/provas_anteriores',
    ultimaAtualizacao: '2026-10-30',
    fonteOficialValidada: true,
    taxaInscricao: 195.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Inscritos no CadÚnico ou doadores de medula óssea.',
    calendario: [
      { id: 'ita-1', evento: 'Inscrições ITA/IME', dataInicio: '2026-06-01', dataFim: '2026-07-15', status: 'confirmado' },
      { id: 'ita-2', evento: '1ª Fase ITA (Objetiva)', dataInicio: '2026-10-13', status: 'confirmado' },
      { id: 'ita-3', evento: '2ª Fase ITA (Discursiva 2 Dias)', dataInicio: '2026-11-05', dataFim: '2026-11-06', status: 'confirmado' }
    ],
    materiaisOficiais: [
      { titulo: 'Caderno de Prova 1ª Fase ITA', ano: 2024, tipo: 'prova', urlDownload: 'http://www.vestibular.ita.br/provas/ita2024_fase1.pdf' },
      { titulo: 'Soluções Oficiais ITA', ano: 2024, tipo: 'gabarito', urlDownload: 'http://www.vestibular.ita.br/provas/ita2024_solucoes.pdf' }
    ],
    planoEstudo: {
      ativo: true,
      visaoGeral: 'Protocolo de Alta Densidade: Demonstração Formal e Cálculo Avançado.',
      metodologia: 'Resolução diária de problemas clássicos dos livros Peruanos e Irodov, com demonstrações formais de geometria analítica, cálculo de limites e equilíbrio químico avançado.',
      ciclosEstudo: [
        {
          semana: 1,
          focoPrincipal: 'Álgebra Linear, Números Complexos e Termodinâmica Não-Ideal',
          estrategiaFixacao: 'Demonstrações de fórmulas do zero sem consulta.',
          conteudosChave: ['Polinômios e Raízes Complexas', 'Eletrostática avançada', 'Cinética química e equilíbrio iônico']
        }
      ],
      dicasPraticasInovadoras: [
        'A banca do ITA e do IME pontua passos intermediários das resoluções. Escreva a física por trás antes da manipulação algébrica pura.'
      ]
    }
  },

  // 7. SUL: UFRGS / UFPR
  {
    id: 'ufrgs-ufpr',
    slug: 'ufrgs-ufpr',
    nomeOficial: 'Vestibulares Tradicionais da Região Sul (UFRGS e UFPR)',
    apelido: 'UFRGS / UFPR',
    sigla: 'UFRGS/UFPR',
    instituicao: 'Universidade Federal do Rio Grande do Sul & Universidade Federal do Paraná',
    categoria: 'tradicional',
    estado: 'RS / PR',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 9500,
    resumoFuncionamento: 'Os dois maiores vestibulares próprios do Sul do país. Contam com listas regionais profundas de literatura, provas extensas de história e geografia regional, além de gramática normativa.',
    siteOficial: 'https://www.ufrgs.br/coperse',
    editalAtualUrl: 'https://www.ufrgs.br/coperse/vestibular',
    editalAnteriorUrl: 'https://www.ufrgs.br/coperse/anteriores',
    ultimaAtualizacao: '2026-10-18',
    fonteOficialValidada: true,
    taxaInscricao: 180.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Estudantes que cursaram todo o ensino médio em escola pública com comprovação de renda.',
    calendario: [
      { id: 'sul-1', evento: 'Vestibular UFRGS (2 Dias de Prova)', dataInicio: '2026-11-23', dataFim: '2026-11-24', status: 'confirmado' },
      { id: 'sul-2', evento: '1ª Fase UFPR', dataInicio: '2026-10-22', status: 'confirmado' },
      { id: 'sul-3', evento: '2ª Fase UFPR (Compreensão e Redação)', dataInicio: '2026-12-03', status: 'confirmado' }
    ],
    materiaisOficiais: [
      { titulo: 'Prova UFRGS Caderno de Aplicação', ano: 2024, tipo: 'prova', urlDownload: 'https://www.ufrgs.br/coperse/provas/2024.pdf' }
    ],
    planoEstudo: {
      ativo: true,
      visaoGeral: 'Método Sul Regional: Obras Literárias Obrigatórias e História Sul-Rio-Grandense e Paranaense.',
      metodologia: 'Ciclos de leitura guiada dos livros exigidos e fichamento de geografia física e econômica do Paraná e Rio Grande do Sul.',
      ciclosEstudo: [
        {
          semana: 1,
          focoPrincipal: 'Literatura Gaúcha/Paranaense & História Regional',
          estrategiaFixacao: 'Comparações entre o Romantismo pampeano e a urbanização de Curitiba e Porto Alegre.',
          conteudosChave: ['Revolução Farroupilha', 'Contestado', 'Gramática e análise sintática aprofundada']
        }
      ],
      dicasPraticasInovadoras: [
        'A UFPR exige um formato de resumo de texto bastante particular na 2ª fase: treine manter o limite estrito de linhas sem introduzir opiniões próprias.'
      ]
    }
  },

  // DEMAIS PROVAS RELEVANTES (COM TODAS AS INFORMAÇÕES COMPLETAS, MAS SEM PLANO ESPECÍFICO)
  {
    id: 'sisu',
    slug: 'sisu',
    nomeOficial: 'Sistema de Seleção Unificada',
    apelido: 'SiSU',
    sigla: 'SiSU',
    instituicao: 'MEC',
    categoria: 'nacional',
    estado: 'Nacional',
    tipoProva: 'objetiva',
    quantidadeFases: 1,
    vagasAproximadas: 260000,
    resumoFuncionamento: 'Plataforma oficial informatizada do MEC onde instituições públicas ofertam vagas para quem fez a edição mais recente do ENEM, sem prova própria.',
    siteOficial: 'https://acessounico.mec.gov.br/sisu',
    editalAtualUrl: 'https://acessounico.mec.gov.br/sisu/edital',
    editalAnteriorUrl: 'https://acessounico.mec.gov.br',
    ultimaAtualizacao: '2026-11-01',
    fonteOficialValidada: true,
    taxaInscricao: 0,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Inscrição 100% gratuita para participantes do ENEM.',
    calendario: [
      { id: 'sisu-1', evento: 'Abertura do Período de Inscrição', dataInicio: '2027-01-22', dataFim: '2027-01-25', status: 'previsto' },
      { id: 'sisu-2', evento: 'Divulgação das Notas de Corte Diárias', dataInicio: '2027-01-23', status: 'previsto' },
      { id: 'sisu-3', evento: 'Resultado da Chamada Regular', dataInicio: '2027-01-30', status: 'previsto' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'prouni',
    slug: 'prouni',
    nomeOficial: 'Programa Universidade para Todos',
    apelido: 'ProUni',
    sigla: 'ProUni',
    instituicao: 'MEC',
    categoria: 'nacional',
    estado: 'Nacional',
    tipoProva: 'objetiva',
    quantidadeFases: 1,
    vagasAproximadas: 280000,
    resumoFuncionamento: 'Concede bolsas de estudo integrais (100%) e parciais (50%) em cursos de graduação de faculdades privadas brasileiras a partir da nota do ENEM.',
    siteOficial: 'https://acessounico.mec.gov.br/prouni',
    editalAtualUrl: 'https://acessounico.mec.gov.br/prouni/edital',
    editalAnteriorUrl: 'https://acessounico.mec.gov.br',
    ultimaAtualizacao: '2026-11-01',
    fonteOficialValidada: true,
    taxaInscricao: 0,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Gratuito. Exige pontuação mínima de 450 pontos na média do ENEM e não ter zerado a redação.',
    calendario: [
      { id: 'prouni-1', evento: 'Inscrições ProUni', dataInicio: '2027-01-29', dataFim: '2027-02-01', status: 'previsto' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'fies',
    slug: 'fies',
    nomeOficial: 'Fundo de Financiamento Estudantil',
    apelido: 'FIES',
    sigla: 'FIES',
    instituicao: 'MEC / FNDE',
    categoria: 'nacional',
    estado: 'Nacional',
    tipoProva: 'objetiva',
    quantidadeFases: 1,
    vagasAproximadas: 110000,
    resumoFuncionamento: 'Programa do MEC destinado a financiar a graduação no ensino superior de estudantes matriculados em cursos com avaliação positiva no Sinaes.',
    siteOficial: 'https://acessounico.mec.gov.br/fies',
    editalAtualUrl: 'https://acessounico.mec.gov.br/fies/edital',
    editalAnteriorUrl: 'https://acessounico.mec.gov.br',
    ultimaAtualizacao: '2026-11-01',
    fonteOficialValidada: true,
    taxaInscricao: 0,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Gratuito para participantes do ENEM a partir da edição de 2010.',
    calendario: [
      { id: 'fies-1', evento: 'Inscrições FIES', dataInicio: '2027-02-06', dataFim: '2027-02-09', status: 'previsto' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'fatec-sp',
    slug: 'fatec-sp',
    nomeOficial: 'Vestibular das Faculdades de Tecnologia de São Paulo',
    apelido: 'FATEC (SP)',
    sigla: 'FATEC',
    instituicao: 'Centro Paula Souza (CPS)',
    categoria: 'outras',
    estado: 'SP',
    tipoProva: 'mista',
    quantidadeFases: 1,
    vagasAproximadas: 18000,
    resumoFuncionamento: 'Cursos superiores tecnológicos públicos e gratuitos de alta empregabilidade no estado de SP. Prova de fase única com 54 testes e redação.',
    siteOficial: 'https://www.vestibularfatec.com.br',
    editalAtualUrl: 'https://www.vestibularfatec.com.br/edital',
    editalAnteriorUrl: 'https://www.vestibularfatec.com.br',
    ultimaAtualizacao: '2026-10-12',
    fonteOficialValidada: true,
    taxaInscricao: 84.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Isenção total ou redução de 50% para estudantes de baixa renda matriculados na rede pública.',
    calendario: [
      { id: 'fat-1', evento: 'Inscrições do Vestibular Fatec', dataInicio: '2026-10-15', dataFim: '2026-12-12', status: 'confirmado' },
      { id: 'fat-2', evento: 'Exame Presencial', dataInicio: '2027-01-12', status: 'confirmado' }
    ],
    materiaisOficiais: [
      { titulo: 'Prova FATEC Oficial', ano: 2024, tipo: 'prova', urlDownload: 'https://www.vestibularfatec.com.br/provas/2024_1.pdf' }
    ]
  },
  {
    id: 'afa',
    slug: 'afa',
    nomeOficial: 'Exame de Admissão da Academia da Força Aérea',
    apelido: 'AFA',
    sigla: 'AFA',
    instituicao: 'Força Aérea Brasileira (FAB)',
    categoria: 'militar',
    estado: 'Nacional',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 140,
    resumoFuncionamento: 'Formação de Oficiais Aviadores, Intendentes e de Infantaria. Exige prova de Língua Portuguesa, Física, Matemática, Língua Inglesa e Redação, além de teste de aptidão física e inspeção de saúde rigorosa.',
    siteOficial: 'https://ingresso.fab.mil.br',
    editalAtualUrl: 'https://ingresso.fab.mil.br/afa/edital',
    editalAnteriorUrl: 'https://ingresso.fab.mil.br',
    ultimaAtualizacao: '2026-10-05',
    fonteOficialValidada: true,
    taxaInscricao: 90.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Inscritos no CadÚnico ou doadores de medula.',
    calendario: [
      { id: 'afa-1', evento: 'Inscrições AFA', dataInicio: '2026-03-05', dataFim: '2026-03-27', status: 'confirmado' },
      { id: 'afa-2', evento: 'Aplicação das Provas Escritas', dataInicio: '2026-06-23', status: 'confirmado' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'escola-naval',
    slug: 'escola-naval',
    nomeOficial: 'Concurso Público de Admissão à Escola Naval',
    apelido: 'Escola Naval',
    sigla: 'EN',
    instituicao: 'Marinha do Brasil',
    categoria: 'militar',
    estado: 'Nacional',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 70,
    resumoFuncionamento: 'Formação de Oficiais para os Corpos da Armada, Fuzileiros Navais e Intendentes da Marinha.',
    siteOficial: 'https://www.ingressonamarinha.mar.mil.br',
    editalAtualUrl: 'https://www.ingressonamarinha.mar.mil.br/edital',
    editalAnteriorUrl: 'https://www.ingressonamarinha.mar.mil.br',
    ultimaAtualizacao: '2026-09-20',
    fonteOficialValidada: true,
    taxaInscricao: 100.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Membros de família de baixa renda inscritos no CadÚnico.',
    calendario: [
      { id: 'en-1', evento: 'Provas Escritas da Escola Naval', dataInicio: '2026-08-18', status: 'confirmado' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'espcex',
    slug: 'espcex',
    nomeOficial: 'Escola Preparatória de Cadetes do Exército',
    apelido: 'EsPCEx',
    sigla: 'EsPCEx',
    instituicao: 'Exército Brasileiro',
    categoria: 'militar',
    estado: 'Nacional',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 440,
    resumoFuncionamento: 'Porta de entrada para a Academia Militar das Agulhas Negras (AMAN), formando os oficiais combatentes do Exército.',
    siteOficial: 'https://www.espcex.eb.mil.br',
    editalAtualUrl: 'https://www.espcex.eb.mil.br/edital',
    editalAnteriorUrl: 'https://www.espcex.eb.mil.br',
    ultimaAtualizacao: '2026-10-02',
    fonteOficialValidada: true,
    taxaInscricao: 100.00,
    permiteIsencao: true,
    regrasIsencaoResumo: 'Inscritos no CadÚnico ou filhos de combatentes falecidos em serviço.',
    calendario: [
      { id: 'esp-1', evento: 'Exame Intelectual (2 Dias)', dataInicio: '2026-09-21', dataFim: '2026-09-22', status: 'confirmado' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'insper',
    slug: 'insper',
    nomeOficial: 'Vestibular Insper',
    apelido: 'Insper',
    sigla: 'INSPER',
    instituicao: 'Instituto de Ensino e Pesquisa (Insper)',
    categoria: 'outras',
    estado: 'SP',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 650,
    resumoFuncionamento: 'Processo seletivo inovador focado em Economia, Administração, Direito e Engenharias, com 1ª fase de testes analíticos e 2ª fase de dinâmica em grupo e arguição oral.',
    siteOficial: 'https://www.insper.edu.br',
    editalAtualUrl: 'https://www.insper.edu.br/vestibular',
    editalAnteriorUrl: 'https://www.insper.edu.br',
    ultimaAtualizacao: '2026-10-19',
    fonteOficialValidada: true,
    taxaInscricao: 280.00,
    permiteIsencao: false,
    regrasIsencaoResumo: 'Candidatos com perfil para bolsas integrais de estudo têm isenção mediante inscrição prévia no programa de bolsas.',
    calendario: [
      { id: 'insp-1', evento: 'Prova da 1ª Fase Insper', dataInicio: '2026-11-20', status: 'confirmado' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'fgv',
    slug: 'fgv',
    nomeOficial: 'Vestibular Fundação Getulio Vargas',
    apelido: 'FGV (SP / RJ)',
    sigla: 'FGV',
    instituicao: 'Fundação Getulio Vargas',
    categoria: 'outras',
    estado: 'SP / RJ',
    tipoProva: 'mista',
    quantidadeFases: 2,
    vagasAproximadas: 800,
    resumoFuncionamento: 'Vestibular reconhecido internacionalmente para Administração, Economia, Direito e Ciências de Dados. Provas com matemática aplicada rigorosa, atualidades e exame oral.',
    siteOficial: 'https://vestibular.fgv.br',
    editalAtualUrl: 'https://vestibular.fgv.br/edital',
    editalAnteriorUrl: 'https://vestibular.fgv.br',
    ultimaAtualizacao: '2026-10-22',
    fonteOficialValidada: true,
    taxaInscricao: 200.00,
    permiteIsencao: false,
    regrasIsencaoResumo: 'Desconto de até 100% para alunos de destaque de escolas públicas que participam do vestibular social.',
    calendario: [
      { id: 'fgv-1', evento: 'Aplicação das Provas FGV', dataInicio: '2026-11-16', status: 'confirmado' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'mackenzie',
    slug: 'mackenzie',
    nomeOficial: 'Vestibular Universidade Presbiteriana Mackenzie',
    apelido: 'Mackenzie',
    sigla: 'MACKENZIE',
    instituicao: 'Instituto Presbiteriano Mackenzie',
    categoria: 'outras',
    estado: 'SP',
    tipoProva: 'mista',
    quantidadeFases: 1,
    vagasAproximadas: 4000,
    resumoFuncionamento: 'Vestibular tradicional de fase única em SP com 60 questões de múltipla escolha e redação.',
    siteOficial: 'https://www.mackenzie.br/vestibular',
    editalAtualUrl: 'https://www.mackenzie.br/edital',
    editalAnteriorUrl: 'https://www.mackenzie.br',
    ultimaAtualizacao: '2026-10-15',
    fonteOficialValidada: true,
    taxaInscricao: 160.00,
    permiteIsencao: false,
    regrasIsencaoResumo: 'Sem isenção geral, mas aceita uso de nota do ENEM com desconto na taxa de inscrição.',
    calendario: [
      { id: 'mack-1', evento: 'Prova Presencial Mackenzie', dataInicio: '2026-12-05', status: 'confirmado' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'puc-sp-campinas-rio',
    slug: 'puc',
    nomeOficial: 'Vestibulares Pontifícia Universidade Católica (PUC-SP, PUC-Campinas, PUC-Rio)',
    apelido: 'PUC (várias)',
    sigla: 'PUC',
    instituicao: 'Rede PUC',
    categoria: 'outras',
    estado: 'SP / RJ / MG / PR / RS',
    tipoProva: 'mista',
    quantidadeFases: 1,
    vagasAproximadas: 12000,
    resumoFuncionamento: 'Processos seletivos semestrais das principais unidades da PUC no país, com opção de prova tradicional ou aproveitamento do ENEM.',
    siteOficial: 'https://www.pucsp.br/vestibular',
    editalAtualUrl: 'https://www.pucsp.br/edital',
    editalAnteriorUrl: 'https://www.pucsp.br',
    ultimaAtualizacao: '2026-10-10',
    fonteOficialValidada: true,
    taxaInscricao: 150.00,
    permiteIsencao: false,
    regrasIsencaoResumo: 'Desconto promocional para inscrições antecipadas.',
    calendario: [
      { id: 'puc-1', evento: 'Vestibular de Verão Unificado PUC', dataInicio: '2026-12-01', status: 'confirmado' }
    ],
    materiaisOficiais: []
  },
  {
    id: 'espm',
    slug: 'espm',
    nomeOficial: 'Processo Seletivo ESPM',
    apelido: 'ESPM',
    sigla: 'ESPM',
    instituicao: 'Escola Superior de Propaganda e Marketing',
    categoria: 'outras',
    estado: 'SP / RJ / RS',
    tipoProva: 'mista',
    quantidadeFases: 1,
    vagasAproximadas: 1800,
    resumoFuncionamento: 'Focado em Publicidade, Comunicação, Marketing e Relações Internacionais com prova discursiva de redação e testes de raciocínio analítico.',
    siteOficial: 'https://www.espm.br/vestibular',
    editalAtualUrl: 'https://www.espm.br/edital',
    editalAnteriorUrl: 'https://www.espm.br',
    ultimaAtualizacao: '2026-10-11',
    fonteOficialValidada: true,
    taxaInscricao: 170.00,
    permiteIsencao: false,
    regrasIsencaoResumo: 'Sem isenção geral.',
    calendario: [
      { id: 'espm-1', evento: 'Aplicação do Exame ESPM', dataInicio: '2026-11-24', status: 'confirmado' }
    ],
    materiaisOficiais: []
  }
];
