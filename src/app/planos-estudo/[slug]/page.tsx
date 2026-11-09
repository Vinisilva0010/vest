import React from 'react';
import { notFound } from 'next/navigation';
import { PROVAS_DATA } from '@/lib/provas-data';
import { ProfessorSlot } from '@/components/mascote/ProfessorSlot';
import { ChecklistFixacao } from '@/components/ui/ChecklistFixacao';
import { Sparkles, CheckCircle, ArrowLeft, Lightbulb, Target } from 'lucide-react';
import NextLink from 'next/link';

interface PlanoPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROVAS_DATA
    .filter((p) => p.planoEstudo?.ativo)
    .map((p) => ({ slug: p.slug }));
}

export default function PlanoEstudoDiferenciadoPage({ params }: PlanoPageProps) {
  const prova = PROVAS_DATA.find((p) => p.slug === params.slug && p.planoEstudo?.ativo);

  if (!prova || !prova.planoEstudo) {
    notFound();
  }

  const plano = prova.planoEstudo;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      {/* NAVEGAÇÃO DE VOLTA */}
      <NextLink
        href={`/provas/${prova.slug}`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black rounded-xl text-xs font-black shadow-[2px_2px_0_#000] hover:bg-[#fac70f] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar para a Ficha da {prova.apelido}</span>
      </NextLink>

      {/* HEADER DO PLANO INOVADOR */}
      <section className="bg-[#fc6a60] border-4 border-black rounded-3xl p-6 md:p-10 shadow-[6px_6px_0_#000] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black rounded-xl text-xs font-black text-black">
              <Sparkles className="w-4 h-4 text-[#5834f8]" />
              <span>MÉTODO DE FIXAÇÃO ACELERADA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
              Plano de Estudo: {prova.apelido}
            </h1>

            <p className="text-base sm:text-lg font-black text-black">
              {plano.visaoGeral}
            </p>

            <div className="p-4 bg-white border-3 border-black rounded-2xl text-xs sm:text-sm font-bold text-gray-900 leading-relaxed">
              <strong className="text-black block mb-1">🎯 Filosofia de Preparação da Banca:</strong>
              {plano.metodologia}
            </div>
          </div>

          <div className="shrink-0">
            <ProfessorSlot
              pose="explicando"
              fala="Siga cada ciclo marcando o que já fixou na memória!"
              ladoFala="esquerda"
              alturaPx={210}
            />
          </div>
        </div>
      </section>

      {/* CHECKLIST E CRONOGRAMA INTERATIVO */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6 text-[#5834f8] stroke-[3]" />
          <h2 className="text-2xl font-black text-black">
            Ciclos de Estudo Semanal & Metas de Fixação
          </h2>
        </div>

        <ChecklistFixacao ciclos={plano.ciclosEstudo} />
      </section>

      {/* DICAS DE OURO E MACETES DA BANCA */}
      <section className="p-6 md:p-8 bg-[#fac70f] border-4 border-black rounded-3xl shadow-[5px_5px_0_#000] space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-black stroke-[3]" />
          <h3 className="text-xl sm:text-2xl font-black text-black">
            Macetes Práticos & Armadilhas Frequentes da Banca
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plano.dicasPraticasInovadoras.map((dica, idx) => (
            <div key={idx} className="p-4 bg-white border-2 border-black rounded-2xl flex items-start gap-3 shadow-[2px_2px_0_#000]">
              <span className="w-6 h-6 rounded-full bg-[#5834f8] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm font-bold text-black leading-relaxed">
                {dica}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
