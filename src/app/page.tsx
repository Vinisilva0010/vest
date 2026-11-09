'use client';

import React, { useState, useMemo } from 'react';
import { PROVAS_DATA } from '@/lib/provas-data';
import { ProvaCard } from '@/components/ui/ProvaCard';
import { ProfessorSlot } from '@/components/mascote/ProfessorSlot';
import { Search, Sparkles, Filter, CheckCircle2, BookOpen } from 'lucide-react';

export default function HomePage() {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todas');
  const [apenasComPlano, setApenasComPlano] = useState(false);

  // Provas que têm Plano de Estudo Inovador
  const provasComPlano = useMemo(() => {
    return PROVAS_DATA.filter((p) => p.planoEstudo?.ativo);
  }, []);

  // Provas filtradas para a listagem geral
  const provasFiltradas = useMemo(() => {
    return PROVAS_DATA.filter((prova) => {
      const matchBusca =
        prova.nomeOficial.toLowerCase().includes(busca.toLowerCase()) ||
        prova.apelido.toLowerCase().includes(busca.toLowerCase()) ||
        prova.sigla.toLowerCase().includes(busca.toLowerCase()) ||
        prova.instituicao.toLowerCase().includes(busca.toLowerCase()) ||
        prova.estado.toLowerCase().includes(busca.toLowerCase());

      const matchCategoria =
        categoriaAtiva === 'todas' || prova.categoria === categoriaAtiva;

      const matchPlano = !apenasComPlano || Boolean(prova.planoEstudo?.ativo);

      return matchBusca && matchCategoria && matchPlano;
    });
  }, [busca, categoriaAtiva, apenasComPlano]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* HERO SECTION COM O PROFESSOR APONTANDO */}
      <section className="relative bg-[#fac70f] border-4 border-black rounded-3xl p-6 md:p-10 shadow-[6px_6px_0_#000] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-black text-black">
              <Sparkles className="w-4 h-4 text-[#fc6a60]" />
              <span>EDITAIS OFICIAIS & METODOLOGIA DIRETA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
              Passe na Faculdade dos Seus Sonhos sem Perder Tempo.
            </h1>

            <p className="text-base sm:text-lg font-bold text-black leading-relaxed max-w-2xl">
              Informações completas de todos os vestibulares do Brasil e <span className="bg-[#fc6a60] px-1.5 py-0.5 border border-black rounded">Planos de Estudo Inovadores</span> focados nas 7 maiores bancas avaliadoras.
            </p>

            {/* Barra de Busca com Alto Contraste */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black stroke-[3]" />
              <input
                type="text"
                placeholder="Busque por prova (ex: Fuvest, ENEM, ITA, UFRGS) ou Estado..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white text-black font-black placeholder-gray-600 text-sm md:text-base border-3 border-black rounded-2xl shadow-[4px_4px_0_#000] focus:outline-none focus:ring-4 focus:ring-[#5834f8]"
              />
            </div>
          </div>

          {/* Mascote Professor Apontando para a Busca */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <ProfessorSlot
              pose="apontando-esquerda"
              fala="Comece digitando a sua prova aqui do lado!"
              ladoFala="cima"
              alturaPx={220}
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 1: OS 7 PLANOS DE ESTUDO DIFERENCIADOS */}
      <section id="planos-exclusivos" className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-4 border-black pb-4">
          <div>
            <div className="inline-block px-3 py-1 bg-[#fc6a60] border-2 border-black rounded-lg text-xs font-black mb-1">
              METODOLOGIA EXCLUSIVA
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              Os 7 Planos de Estudo Práticos & Inovadores
            </h2>
            <p className="text-sm font-bold text-gray-700">
              Estruturados sob medida para o perfil de cada banca: sem enrolação, direto ao ponto de corte.
            </p>
          </div>

          <div className="hidden sm:block">
            <ProfessorSlot
              pose="explicando"
              fala="Estudo inteligente é estudar o que a banca mais cobra!"
              ladoFala="esquerda"
              alturaPx={120}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provasComPlano.map((prova) => (
            <ProvaCard key={prova.id} prova={prova} />
          ))}
        </div>
      </section>

      {/* SEÇÃO 2: TODAS AS PROVAS & FILTROS GERAIS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-6 h-6 text-[#5834f8] stroke-[3]" />
            <h2 className="text-2xl font-black text-black">
              Todas as Provas do Brasil ({provasFiltradas.length})
            </h2>
          </div>

          {/* Toggle de Apenas com Plano */}
          <button
            onClick={() => setApenasComPlano(!apenasComPlano)}
            className={`px-3 py-1.5 rounded-xl border-2 border-black text-xs font-black transition-all flex items-center gap-1.5 ${
              apenasComPlano
                ? 'bg-[#5834f8] text-white shadow-[2px_2px_0_#000]'
                : 'bg-white text-black shadow-[2px_2px_0_#000]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Apenas com Plano de Estudo</span>
          </button>
        </div>

        {/* Abas de Categorias */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'todas', label: 'Todas as Provas' },
            { id: 'nacional', label: 'Nacionais (ENEM, SiSU, etc)' },
            { id: 'tradicional', label: 'Grandes Tradicionais' },
            { id: 'militar', label: 'Militares de Alta Concorrência' },
            { id: 'outras', label: 'Outras Relevantes (SP/RJ/etc)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black border-2 border-black transition-all ${
                categoriaAtiva === cat.id
                  ? 'bg-[#fac70f] text-black shadow-[3px_3px_0_#000] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0_#000]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Resultados */}
        {provasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {provasFiltradas.map((prova) => (
              <ProvaCard key={prova.id} prova={prova} />
            ))}
          </div>
        ) : (
          <div className="p-12 bg-white border-3 border-black rounded-3xl text-center space-y-4">
            <ProfessorSlot
              pose="cara-de-mal"
              fala="Não encontrei nada com esses filtros! Tente buscar por outra sigla."
              ladoFala="cima"
              alturaPx={160}
            />
            <p className="text-base font-black text-black">
              Nenhuma prova correspondeu à sua pesquisa "{busca}".
            </p>
            <button
              onClick={() => {
                setBusca('');
                setCategoriaAtiva('todas');
                setApenasComPlano(false);
              }}
              className="btn-brand-yellow px-4 py-2 rounded-xl text-xs font-black"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
