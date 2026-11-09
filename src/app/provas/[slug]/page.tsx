import React from 'react';
import { notFound } from 'next/navigation';
import { PROVAS_DATA } from '@/lib/provas-data';
import { ProfessorSlot } from '@/components/mascote/ProfessorSlot';
import {
  Calendar, FileText, Download, CheckCircle, ExternalLink,
  BookOpen, Clock, ShieldCheck, AlertCircle, Sparkles, Award,
  Layers, Users, ChevronRight
} from 'lucide-react';
import NextLink from 'next/link';

interface ProvaPageProps {
  params: {
    slug: string;
  };
}

// Geração estática ultra-rápida (SSG) de todas as rotas de provas
export async function generateStaticParams() {
  return PROVAS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProvaDetalhePage({ params }: ProvaPageProps) {
  const prova = PROVAS_DATA.find((p) => p.slug === params.slug || p.id === params.slug);

  if (!prova) {
    notFound();
  }

  const temPlano = Boolean(prova.planoEstudo?.ativo);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* 1. TOPO & INFORMAÇÕES GERAIS */}
      <section className="bg-white border-4 border-black rounded-3xl p-6 md:p-10 shadow-[6px_6px_0_#000] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#fc6a60] border-2 border-black rounded-lg text-xs font-black text-black uppercase">
                {prova.sigla}
              </span>
              <span className="px-3 py-1 bg-[#fac70f] border-2 border-black rounded-lg text-xs font-black text-black">
                {prova.estado}
              </span>
              <span className="px-3 py-1 bg-gray-100 border-2 border-black rounded-lg text-xs font-black text-black capitalize">
                {prova.tipoProva} • {prova.quantidadeFases} {prova.quantidadeFases === 1 ? 'Fase Única' : 'Fases'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
              {prova.apelido}
            </h1>
            <h2 className="text-base sm:text-lg font-black text-[#5834f8]">
              {prova.nomeOficial} — {prova.instituicao}
            </h2>

            <p className="text-sm sm:text-base font-bold text-gray-800 leading-relaxed">
              {prova.resumoFuncionamento}
            </p>

            {/* Links Oficiais e Editais */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={prova.siteOficial}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand-yellow px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2"
              >
                <span>Portal Oficial da Banca</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={prova.editalAtualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand-coral px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Edital Vigente (PDF)</span>
              </a>

              {prova.editalAnteriorUrl && (
                <a
                  href={prova.editalAnteriorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 border-2 border-black rounded-xl text-xs sm:text-sm font-black hover:bg-gray-200 transition-colors"
                >
                  Edital Anterior
                </a>
              )}
            </div>
          </div>

          <div className="shrink-0 flex justify-center w-full lg:w-auto">
            <ProfessorSlot
              pose={temPlano ? 'comemorando' : 'apontando-esquerda'}
              fala={temPlano ? 'Essa prova tem nosso Plano Inovador!' : 'Confira os prazos do edital!'}
              ladoFala="cima"
              alturaPx={210}
            />
          </div>
        </div>
      </section>

      {/* 2. CALENDÁRIO COMPLETO & HORÁRIOS DOS PORTÕES */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-[#5834f8] stroke-[3]" />
          <h3 className="text-2xl font-black text-black">Calendário Oficial & Portões</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prova.calendario.map((evento) => (
            <div key={evento.id} className="interactive-card bg-white rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-black px-2 py-0.5 bg-gray-100 border border-black rounded">
                    {evento.status}
                  </span>
                  {evento.horarioFechamentoPortoes && (
                    <span className="text-[10px] font-black bg-[#fac70f] px-2 py-0.5 border border-black rounded flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#5834f8]" />
                      Fecha {evento.horarioFechamentoPortoes}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-black text-black mb-2">{evento.evento}</h4>

                <div className="text-xs font-black text-[#5834f8] mb-1">
                  Data: {new Date(evento.dataInicio + 'T12:00:00').toLocaleDateString('pt-BR')}
                  {evento.dataFim && ` até ${new Date(evento.dataFim + 'T12:00:00').toLocaleDateString('pt-BR')}`}
                </div>

                {evento.duracaoHoras && (
                  <div className="text-[11px] font-bold text-gray-700">
                    Duração: {evento.duracaoHoras} horas de prova.
                  </div>
                )}
              </div>

              {evento.observacao && (
                <div className="mt-3 text-[11px] font-bold text-gray-600 border-t border-gray-200 pt-2">
                  {evento.observacao}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3 & 7. ESTRUTURA DA PROVA, VAGAS E INSCRIÇÃO */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#fac70f] border-3 border-black rounded-3xl shadow-[4px_4px_0_#000] space-y-2">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-black stroke-[3]" />
            <h4 className="text-base font-black text-black uppercase">Estrutura & Fases</h4>
          </div>
          <p className="text-xs font-bold text-black leading-relaxed">
            Prova com <strong>{prova.quantidadeFases} fase(s)</strong> de caráter classificatório e eliminatório. Aplicação de questões do tipo <strong>{prova.tipoProva}</strong>.
          </p>
          <div className="text-xs font-black text-black pt-1">
            Vagas ofertadas: ~{prova.vagasAproximadas.toLocaleString('pt-BR')}
          </div>
        </div>

        <div className="p-6 bg-[#fc6a60] border-3 border-black rounded-3xl shadow-[4px_4px_0_#000] space-y-2">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-black stroke-[3]" />
            <h4 className="text-base font-black text-black uppercase">Taxa & Inscrição</h4>
          </div>
          <div className="text-2xl font-black text-black">
            {prova.taxaInscricao === 0 ? 'Gratuito' : `R$ ${prova.taxaInscricao.toFixed(2)}`}
          </div>
          <p className="text-xs font-bold text-black leading-relaxed">
            {prova.permiteIsencao ? 'Permite pedido de isenção ou redução de taxa socioeconômica.' : 'Não possui isenção direta geral.'}
          </p>
        </div>

        <div className="p-6 bg-[#5834f8] text-white border-3 border-black rounded-3xl shadow-[4px_4px_0_#000] space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#fac70f] stroke-[3]" />
            <h4 className="text-base font-black text-[#fac70f] uppercase">Regras de Isenção</h4>
          </div>
          <p className="text-xs font-bold text-gray-100 leading-relaxed">
            {prova.regrasIsencaoResumo}
          </p>
        </div>
      </section>

      {/* 4. CONTEÚDO PROGRAMÁTICO & OBRAS LITERÁRIAS OBRIGATÓRIAS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Assuntos Mais Cobrados */}
        {prova.assuntosMaisCobrados && prova.assuntosMaisCobrados.length > 0 && (
          <div className="bg-white border-3 border-black rounded-3xl p-6 shadow-[4px_4px_0_#000] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-black flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#5834f8]" />
                Assuntos Mais Cobrados (%)
              </h3>
              <span className="text-xs font-black text-[#fc6a60]">Histórico de Provas</span>
            </div>

            <div className="space-y-3">
              {prova.assuntosMaisCobrados.map((assunto, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-black text-black">
                    <span>{assunto.disciplina}: {assunto.assunto}</span>
                    <span>{assunto.porcentagem}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full border border-black overflow-hidden">
                    <div
                      className="bg-[#5834f8] h-full"
                      style={{ width: `${assunto.porcentagem * 2.5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Obras Literárias Obrigatórias */}
        {prova.obrasLiterarias && prova.obrasLiterarias.length > 0 && (
          <div className="bg-white border-3 border-black rounded-3xl p-6 shadow-[4px_4px_0_#000] space-y-4">
            <h3 className="text-xl font-black text-black flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#fac70f]" />
              Leituras Obrigatórias Oficiais
            </h3>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {prova.obrasLiterarias.map((obra, idx) => (
                <div key={idx} className="p-3 bg-gray-50 border-2 border-black rounded-2xl space-y-1">
                  <div className="text-sm font-black text-black">
                    {obra.titulo} <span className="text-xs text-[#5834f8]">({obra.autor})</span>
                  </div>
                  {obra.analiseResumida && (
                    <p className="text-xs font-bold text-gray-700 leading-relaxed">
                      {obra.analiseResumida}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 5. MATERIAL DE ESTUDO OFICIAL (PROVAS ANTERIORES E GABARITOS) */}
      {prova.materiaisOficiais && prova.materiaisOficiais.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Download className="w-6 h-6 text-[#fc6a60] stroke-[3]" />
            <h3 className="text-2xl font-black text-black">Provas Anteriores & Manuais (PDF)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prova.materiaisOficiais.map((mat, idx) => (
              <div key={idx} className="interactive-card bg-white rounded-2xl p-4 flex items-center justify-between border-2 border-black">
                <div>
                  <span className="text-[10px] font-black uppercase text-gray-500 block">
                    {mat.tipo} • {mat.ano}
                  </span>
                  <h4 className="text-sm font-black text-black">{mat.titulo}</h4>
                </div>
                <a
                  href={mat.urlDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand-yellow p-2 rounded-xl"
                  title="Baixar PDF Oficial"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. DADOS POR CURSO (PESOS, NOTAS DE CORTE & CONCORRÊNCIA) */}
      {prova.cursosDestaque && prova.cursosDestaque.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-[#5834f8] stroke-[3]" />
            <h3 className="text-2xl font-black text-black">Cortes & Concorrência por Curso</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {prova.cursosDestaque.map((curso, idx) => (
              <div key={idx} className="interactive-card bg-white rounded-2xl p-5 border-2 border-black space-y-3">
                <h4 className="text-base font-black text-black border-b-2 border-black pb-2">
                  {curso.nome}
                </h4>

                <div className="grid grid-cols-2 gap-2 text-xs font-black">
                  <div className="p-2 bg-gray-50 border border-black rounded-lg">
                    <span className="block text-[10px] text-gray-500">Corte Ampla:</span>
                    <span className="text-[#5834f8] text-sm">{curso.notaCorteAmplaUltimoAno} pts</span>
                  </div>
                  <div className="p-2 bg-gray-50 border border-black rounded-lg">
                    <span className="block text-[10px] text-gray-500">Concorrência:</span>
                    <span className="text-black text-sm">{curso.concorrenciaCandidatoVaga} c/v</span>
                  </div>
                </div>

                <div className="text-[11px] font-bold text-gray-700">
                  Pesos: {Object.entries(curso.pesos).map(([m, p]) => `${m} (${p})`).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEÇÃO ESPECIAL: PLANO DE ESTUDO EXCLUSIVO (SE DISPONÍVEL) */}
      {temPlano && prova.planoEstudo && (
        <section id="plano-estudo" className="bg-[#fac70f] border-4 border-black rounded-3xl p-6 md:p-10 shadow-[6px_6px_0_#000] space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-white border-2 border-black rounded-lg text-xs font-black mb-1">
                METODOLOGIA PRÁTICA E INOVADORA
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black">
                Plano de Estudo Focado: {prova.apelido}
              </h3>
              <p className="text-sm font-bold text-black mt-1">
                {prova.planoEstudo.visaoGeral}
              </p>
            </div>

            <ProfessorSlot
              pose="explicando"
              fala="Estude com este ciclo semanal para fixar o dobro do conteúdo!"
              ladoFala="esquerda"
              alturaPx={150}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prova.planoEstudo.ciclosEstudo.map((ciclo) => (
              <div key={ciclo.semana} className="p-5 bg-white border-3 border-black rounded-2xl shadow-[3px_3px_0_#000] space-y-3">
                <span className="px-2.5 py-0.5 bg-[#5834f8] text-white text-xs font-black rounded border border-black">
                  Semana {ciclo.semana}
                </span>
                <h4 className="text-base font-black text-black">{ciclo.focoPrincipal}</h4>
                <p className="text-xs font-bold text-gray-800 leading-relaxed">
                  <strong>Estratégia de Fixação:</strong> {ciclo.estrategiaFixacao}
                </p>
                <div className="text-xs font-black text-black">
                  Tópicos-Chave: {ciclo.conteudosChave.join(' • ')}
                </div>
              </div>
            ))}
          </div>

          {/* Dicas Práticas Inovadoras */}
          <div className="p-4 bg-white border-3 border-black rounded-2xl space-y-2">
            <h4 className="text-sm font-black text-black uppercase">
              💡 Dicas Práticas Inovadoras para essa Banca:
            </h4>
            <ul className="space-y-1.5 text-xs font-bold text-gray-800 list-disc list-inside">
              {prova.planoEstudo.dicasPraticasInovadoras.map((dica, i) => (
                <li key={i}>{dica}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 10. TRANSPARÊNCIA E VALIDAÇÃO OFICIAL */}
      <section className="p-4 bg-gray-100 border-2 border-black rounded-2xl flex flex-col sm:flex-row items-center justify-between text-xs font-black text-black gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#5834f8]" />
          <span>Informações validadas diretamente nos editais e manuais dos órgãos competentes.</span>
        </div>
        <div>
          Última atualização deste vestibular: <span className="text-[#fc6a60]">{prova.ultimaAtualizacao}</span>
        </div>
      </section>
    </div>
  );
}
