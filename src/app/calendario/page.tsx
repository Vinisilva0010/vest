'use client';

import React, { useState, useMemo } from 'react';
import { PROVAS_DATA } from '@/lib/provas-data';
import { ProfessorSlot } from '@/components/mascote/ProfessorSlot';
import { Calendar, Clock, AlertTriangle, Filter, CheckCircle, ExternalLink } from 'lucide-react';

interface EventoUnificado {
  provaId: string;
  provaApelido: string;
  provaSigla: string;
  provaSlug: string;
  evento: string;
  dataInicio: string;
  dataFim?: string;
  horarioAberturaPortoes?: string;
  horarioFechamentoPortoes?: string;
  duracaoHoras?: number;
  status: 'confirmado' | 'previsto' | 'encerrado';
  observacao?: string;
}

export default function CalendarioPage() {
  const [filtroProva, setFiltroProva] = useState<string>('todas');
  const [apenasProximos, setApenasProximos] = useState<boolean>(true);

  // Consolidação de todos os eventos de todas as provas em ordem cronológica
  const todosEventos: EventoUnificado[] = useMemo(() => {
    const lista: EventoUnificado[] = [];
    PROVAS_DATA.forEach((prova) => {
      prova.calendario.forEach((ev) => {
        lista.push({
          provaId: prova.id,
          provaApelido: prova.apelido,
          provaSigla: prova.sigla,
          provaSlug: prova.slug,
          ...ev,
        });
      });
    });

    return lista.sort(
      (a, b) => new Date(a.dataInicio).getTime() - new Date(b.dataInicio).getTime()
    );
  }, []);

  const eventosFiltrados = useMemo(() => {
    return todosEventos.filter((ev) => {
      const matchProva = filtroProva === 'todas' || ev.provaId === filtroProva;
      const matchStatus = !apenasProximos || ev.status !== 'encerrado';
      return matchProva && matchStatus;
    });
  }, [todosEventos, filtroProva, apenasProximos]);

  // Agrupamento por Mês/Ano para visualização fácil e escaneável
  const eventosPorMes = useMemo(() => {
    const agrupado: Record<string, EventoUnificado[]> = {};
    eventosFiltrados.forEach((ev) => {
      const dataObj = new Date(ev.dataInicio + 'T12:00:00');
      const mesAno = dataObj.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
      const chaveFormatada = mesAno.charAt(0).toUpperCase() + mesAno.slice(1);
      if (!agrupado[chaveFormatada]) {
        agrupado[chaveFormatada] = [];
      }
      agrupado[chaveFormatada].push(ev);
    });
    return agrupado;
  }, [eventosFiltrados]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      {/* CABEÇALHO DO CALENDÁRIO COM O PROFESSOR */}
      <section className="bg-[#5834f8] text-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-[6px_6px_0_#000] relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fac70f] border-2 border-black rounded-xl text-black font-black text-xs uppercase">
              <Calendar className="w-4 h-4 stroke-[3]" />
              <span>Visão Unificada do Brasil</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Calendário Nacional de Vestibulares
            </h1>
            <p className="text-sm sm:text-base font-bold text-gray-100">
              Inscrições, pedidos de isenção de taxa, locais de prova e os horários cruciais de abertura e fechamento de portões para você não virar meme!
            </p>
          </div>

          <div className="shrink-0">
            <ProfessorSlot
              pose="cara-de-mal"
              fala="Chegue 1h antes! Portão fechou, já era!"
              ladoFala="esquerda"
              alturaPx={190}
            />
          </div>
        </div>
      </section>

      {/* BARRA DE FILTROS DO CALENDÁRIO */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border-3 border-black rounded-2xl shadow-[4px_4px_0_#000]">
        <div className="flex flex-wrap items-center gap-3">
          <Filter className="w-5 h-5 text-black stroke-[3]" />
          <span className="text-xs font-black uppercase text-black">Filtrar Prova:</span>
          <select
            value={filtroProva}
            onChange={(e) => setFiltroProva(e.target.value)}
            className="px-3 py-2 bg-gray-50 text-black border-2 border-black rounded-xl text-xs font-black focus:outline-none focus:ring-2 focus:ring-[#5834f8]"
          >
            <option value="todas">Todas as Provas</option>
            {PROVAS_DATA.map((p) => (
              <option key={p.id} value={p.id}>
                {p.apelido} ({p.sigla})
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setApenasProximos(!apenasProximos)}
          className={`px-3 py-2 rounded-xl text-xs font-black border-2 border-black transition-all flex items-center gap-1.5 ${
            apenasProximos
              ? 'bg-[#fac70f] text-black shadow-[2px_2px_0_#000]'
              : 'bg-gray-100 text-black shadow-[2px_2px_0_#000]'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          <span>Ocultar Eventos Encerrados</span>
        </button>
      </div>

      {/* LISTAGEM AGRUPADA POR MÊS */}
      {Object.keys(eventosPorMes).length > 0 ? (
        <div className="space-y-8">
          {Object.entries(eventosPorMes).map(([mes, eventos]) => (
            <div key={mes} className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[#fc6a60] border-3 border-black rounded-xl text-sm font-black text-black shadow-[3px_3px_0_#000]">
                📅 {mes}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventos.map((ev) => (
                  <div
                    key={`${ev.provaId}-${ev.id}`}
                    className="interactive-card bg-white rounded-2xl p-4 flex flex-col justify-between border-2 border-black"
                  >
                    <div>
                      {/* Badge da Prova e Status */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-[#5834f8] text-white text-[10px] font-black rounded-md border border-black">
                          {ev.provaSigla}
                        </span>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-black rounded-md border border-black ${
                            ev.status === 'confirmado'
                              ? 'bg-[#fac70f] text-black'
                              : 'bg-gray-200 text-black'
                          }`}
                        >
                          {ev.status === 'confirmado' ? 'Confirmado' : 'Previsto'}
                        </span>
                      </div>

                      <h4 className="text-base font-black text-black leading-snug mb-2">
                        {ev.evento}
                      </h4>

                      {/* Datas */}
                      <div className="p-2.5 bg-gray-50 border-2 border-black rounded-xl mb-3 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-black text-black">
                          <Calendar className="w-4 h-4 text-[#fc6a60]" />
                          <span>
                            {new Date(ev.dataInicio + 'T12:00:00').toLocaleDateString('pt-BR')}
                            {ev.dataFim && ` até ${new Date(ev.dataFim + 'T12:00:00').toLocaleDateString('pt-BR')}`}
                          </span>
                        </div>

                        {/* Alerta de Portão se houver */}
                        {ev.horarioFechamentoPortoes && (
                          <div className="flex items-center gap-2 text-xs font-black text-[#5834f8]">
                            <Clock className="w-4 h-4" />
                            <span>
                              Abre: {ev.horarioAberturaPortoes || '12h'} | Fecha:{' '}
                              <strong className="text-black bg-[#fac70f] px-1 rounded">
                                {ev.horarioFechamentoPortoes}
                              </strong>
                            </span>
                          </div>
                        )}
                      </div>

                      {ev.observacao && (
                        <p className="text-[11px] font-bold text-gray-700 italic mb-2">
                          * {ev.observacao}
                        </p>
                      )}
                    </div>

                    <a
                      href={`/provas/${ev.provaSlug}`}
                      className="btn-brand-yellow py-1.5 px-3 rounded-lg text-xs font-black text-center flex items-center justify-center gap-1"
                    >
                      <span>Ver Detalhes de {ev.provaSigla}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-10 bg-white border-3 border-black rounded-2xl text-center">
          <p className="text-base font-black text-black">Nenhum evento encontrado para este filtro.</p>
        </div>
      )}
    </div>
  );
}
