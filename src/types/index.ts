export type CategoriaProva = 'nacional' | 'tradicional' | 'militar' | 'outras';

export interface DataCalendario {
  id: string;
  evento: string;
  dataInicio: string;
  dataFim?: string;
  horarioAberturaPortoes?: string;
  horarioFechamentoPortoes?: string;
  duracaoHoras?: number;
  status: 'confirmado' | 'previsto' | 'encerrado';
  observacao?: string;
}

export interface ObraLiteraria {
  titulo: string;
  autor: string;
  anoOuContexto?: string;
  analiseResumida?: string;
}

export interface AssuntoFrequente {
  disciplina: string;
  assunto: string;
  porcentagem: number;
}

export interface MaterialEstudoOficial {
  titulo: string;
  ano: number;
  fase?: string;
  tipo: 'prova' | 'gabarito' | 'manual' | 'redacoes_nota_maxima';
  urlDownload: string;
}

export interface DadosCurso {
  nome: string;
  pesos: Record<string, number>;
  notaCorteAmplaUltimoAno: number;
  notaCorteCotasUltimoAno?: number;
  concorrenciaCandidatoVaga: number;
  vagasTotais: number;
}

export interface PlanoEstudoDiferenciado {
  ativo: boolean;
  visaoGeral: string;
  metodologia: string;
  ciclosEstudo: {
    semana: number;
    focoPrincipal: string;
    estrategiaFixacao: string;
    conteudosChave: string[];
  }[];
  dicasPraticasInovadoras: string[];
}

export interface ProvaCompleta {
  id: string;
  slug: string;
  nomeOficial: string;
  apelido: string;
  sigla: string;
  instituicao: string;
  categoria: CategoriaProva;
  estado: string; // Ex: "SP", "RJ", "Nacional"
  tipoProva: 'objetiva' | 'discursiva' | 'mista';
  quantidadeFases: number;
  vagasAproximadas: number;
  resumoFuncionamento: string;
  siteOficial: string;
  editalAtualUrl: string;
  editalAnteriorUrl: string;
  ultimaAtualizacao: string;
  fonteOficialValidada: boolean;
  
  // Detalhes da estrutura
  taxaInscricao: number;
  permiteIsencao: boolean;
  regrasIsencaoResumo: string;
  
  calendario: DataCalendario[];
  obrasLiterarias?: ObraLiteraria[];
  assuntosMaisCobrados?: AssuntoFrequente[];
  materiaisOficiais: MaterialEstudoOficial[];
  cursosDestaque?: DadosCurso[];
  
  // Plano de estudo exclusivo (para os 7 grupos definidos)
  planoEstudo?: PlanoEstudoDiferenciado;
}
