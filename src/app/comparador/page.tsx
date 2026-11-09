'use client';

import React, { useState } from 'react';
import { PROVAS_DATA } from '@/lib/provas-data';
import { ProfessorSlot } from '@/components/mascote/ProfessorSlot';
import { Calculator, Scale, Check, AlertCircle, ArrowRight } from 'lucide-react';

export default function ComparadorPage() {
  const [provaAId, setProvaAId] = useState<string>('enem');
  const [provaBId, setProvaBId] = useState<string>('fuvest');

  // Estado da Calculadora de Média Ponderada
  const [notaMatematica, setNotaMatematica] = useState<number>(750);
  const [pesoMatematica, setPesoMatematica] = useState<number>(3);

  const [notaNatureza, setNotaNatureza] = useState<number>(680);
  const [pesoNatureza, setPesoNatureza] = useState<number>(3);

  const [notaLinguagens, setNotaLinguagens] = useState<number>(640);
  const [pesoLinguagens, setPesoLinguagens] = useState<number>(2);

  const [notaHumanas, setNotaHumanas] = useState<number>(690);
  const [pesoHumanas, setPesoHumanas] = useState<number>(1);

  const [notaRedacao, setNotaRedacao] = useState<number>(920);
  const [pesoRedacao, setPesoRedacao] = useState<number>(3);

  const provaA = PROVAS_DATA.find((p) => p.id === provaAId) || PROVAS_DATA[0];
  const provaB = PROVAS_DATA.find((p) => p.id === provaBId) || PROVAS_DATA[1];

  // Cálculo da média ponderada em tempo real
  const somaPesos =
    Number(pesoMatematica) +
    Number(pesoNatureza) +
    Number(pesoLinguagens) +
    Number(pesoHumanas) +
    Number(pesoRedacao);

  const mediaFinal = somaPesos > 0
    ? (
        notaMatematica * pesoMatematica +
        notaNatureza * pesoNatureza +
        notaLinguagens * pesoLinguagens +
        notaHumanas * pesoHumanas +
        notaRedacao * pesoRedacao
      ) / somaPesos
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* SEÇÃO 1: COMPARADOR LADO A LADO */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-4 border-black pb-4">
          <div>
            <div className="inline-block px-3 py-1 bg-[#fac70f] border-2 border-black rounded-lg text-xs font-black mb-1">
              DECISÃO ESTRATÉGICA
            </div>
            <h1 className="text-3xl font-black text-black">
              Comparador Lado a Lado de Provas
            </h1>
            <p className="text-sm font-bold text-gray-700">
              Compare estilo de cobrança, número de fases, taxa e formato entre quaisquer dois exames do Brasil.
            </p>
          </div>

          <ProfessorSlot
            pose="apontando-direita"
            fala="Veja as diferenças antes de escolher onde focar!"
            ladoFala="esquerda"
            alturaPx={130}
          />
        </div>

        {/* Seletores das Provas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#fc6a60] border-3 border-black rounded-2xl shadow-[4px_4px_0_#000]">
            <label className="block text-xs font-black text-black uppercase mb-1">Escolha a Prova 1:</label>
            <select
              value={provaAId}
              onChange={(e) => setProvaAId(e.target.value)}
              className="w-full p-2.5 bg-white text-black font-black border-2 border-black rounded-xl"
            >
              {PROVAS_DATA.map((p) => (
                <option key={p.id} value={p.id}>{p.apelido} ({p.sigla})</option>
              ))}
            </select>
          </div>

          <div className="p-4 bg-[#5834f8] border-3 border-black rounded-2xl shadow-[4px_4px_0_#000]">
            <label className="block text-xs font-black text-white uppercase mb-1">Escolha a Prova 2:</label>
            <select
              value={provaBId}
              onChange={(e) => setProvaBId(e.target.value)}
              className="w-full p-2.5 bg-white text-black font-black border-2 border-black rounded-xl"
            >
              {PROVAS_DATA.map((p) => (
                <option key={p.id} value={p.id}>{p.apelido} ({p.sigla})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabela de Comparação */}
        <div className="overflow-x-auto border-3 border-black rounded-2xl bg-white shadow-[4px_4px_0_#000]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#fac70f] border-b-3 border-black text-black font-black">
              <tr>
                <th className="p-4 w-1/3">Critério Avaliado</th>
                <th className="p-4 w-1/3 border-l-2 border-black">{provaA.apelido}</th>
                <th className="p-4 w-1/3 border-l-2 border-black">{provaB.apelido}</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-black font-bold">
              <tr>
                <td className="p-4 bg-gray-50 font-black">Instituição / Banca</td>
                <td className="p-4 border-l-2 border-black">{provaA.instituicao}</td>
                <td className="p-4 border-l-2 border-black">{provaB.instituicao}</td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 font-black">Abrangência & Estado</td>
                <td className="p-4 border-l-2 border-black">{provaA.estado}</td>
                <td className="p-4 border-l-2 border-black">{provaB.estado}</td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 font-black">Tipo de Prova</td>
                <td className="p-4 border-l-2 border-black capitalize">{provaA.tipoProva} ({provaA.quantidadeFases} Fases)</td>
                <td className="p-4 border-l-2 border-black capitalize">{provaB.tipoProva} ({provaB.quantidadeFases} Fases)</td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 font-black">Taxa de Inscrição</td>
                <td className="p-4 border-l-2 border-black">
                  {provaA.taxaInscricao === 0 ? 'Gratuito (SiSU/ProUni)' : `R$ ${provaA.taxaInscricao.toFixed(2)}`}
                </td>
                <td className="p-4 border-l-2 border-black">
                  {provaB.taxaInscricao === 0 ? 'Gratuito (SiSU/ProUni)' : `R$ ${provaB.taxaInscricao.toFixed(2)}`}
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 font-black">Plano de Estudo Exclusivo</td>
                <td className="p-4 border-l-2 border-black">
                  {provaA.planoEstudo?.ativo ? (
                    <span className="inline-flex items-center gap-1 text-[#5834f8] font-black">
                      <Check className="w-4 h-4 stroke-[3]" /> Sim, metodologia própria
                    </span>
                  ) : (
                    <span className="text-gray-500">Apenas informações gerais</span>
                  )}
                </td>
                <td className="p-4 border-l-2 border-black">
                  {provaB.planoEstudo?.ativo ? (
                    <span className="inline-flex items-center gap-1 text-[#5834f8] font-black">
                      <Check className="w-4 h-4 stroke-[3]" /> Sim, metodologia própria
                    </span>
                  ) : (
                    <span className="text-gray-500">Apenas informações gerais</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 font-black">Acesso à Ficha</td>
                <td className="p-4 border-l-2 border-black">
                  <a href={`/provas/${provaA.slug}`} className="btn-brand-coral px-3 py-1 rounded-lg text-xs inline-flex items-center gap-1">
                    <span>Ver Ficha {provaA.sigla}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 border-l-2 border-black">
                  <a href={`/provas/${provaB.slug}`} className="btn-brand-coral px-3 py-1 rounded-lg text-xs inline-flex items-center gap-1">
                    <span>Ver Ficha {provaB.sigla}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 2: CALCULADORA DE MÉDIA PONDERADA (SISU & FUVEST) */}
      <section className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-[6px_6px_0_#000] space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fac70f] border-2 border-black rounded-xl text-black font-black text-xs uppercase">
              <Calculator className="w-4 h-4 stroke-[3]" />
              <span>Simulador em Tempo Real</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              Calculadora de Média Ponderada
            </h2>
            <p className="text-sm font-bold text-gray-700">
              Altere as notas e pesos do curso desejado para ver a média final calculada instantaneamente.
            </p>
          </div>

          <ProfessorSlot
            pose="sentado"
            fala="Cuidado com os pesos: uma matéria com peso 3 vale o triplo da de peso 1!"
            ladoFala="cima"
            alturaPx={140}
          />
        </div>

        {/* Inputs de Disciplinas, Notas e Pesos */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { nome: 'Matemática', nota: notaMatematica, setNota: setNotaMatematica, peso: pesoMatematica, setPeso: setPesoMatematica },
            { nome: 'Ciências Natureza', nota: notaNatureza, setNota: setNotaNatureza, peso: pesoNatureza, setPeso: setPesoNatureza },
            { nome: 'Linguagens', nota: notaLinguagens, setNota: setNotaLinguagens, peso: pesoLinguagens, setPeso: setPesoLinguagens },
            { nome: 'Humanas', nota: notaHumanas, setNota: setNotaHumanas, peso: pesoHumanas, setPeso: setPesoHumanas },
            { nome: 'Redação', nota: notaRedacao, setNota: setNotaRedacao, peso: pesoRedacao, setPeso: setPesoRedacao },
          ].map((item) => (
            <div key={item.nome} className="p-3 bg-gray-50 border-2 border-black rounded-2xl space-y-2">
              <span className="block text-xs font-black text-black">{item.nome}</span>
              <div>
                <label className="block text-[10px] text-gray-600 font-bold">Nota (0 a 1000):</label>
                <input
                  type="number"
                  value={item.nota}
                  onChange={(e) => item.setNota(Number(e.target.value))}
                  className="w-full p-1.5 bg-white text-black font-black text-sm border-2 border-black rounded-lg"
                />
              </div>
              <div>
                <label className="block text-[10px] text-gray-600 font-bold">Peso do Curso:</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={item.peso}
                  onChange={(e) => item.setPeso(Number(e.target.value))}
                  className="w-full p-1.5 bg-white text-black font-black text-sm border-2 border-black rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Placar de Média Final */}
        <div className="p-5 bg-[#fac70f] border-3 border-black rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[4px_4px_0_#000]">
          <div>
            <span className="text-xs font-black uppercase text-black">Média Ponderada Calculada:</span>
            <div className="text-4xl sm:text-5xl font-black text-black leading-none mt-1">
              {mediaFinal.toFixed(2)} <span className="text-lg text-gray-800">pts</span>
            </div>
          </div>

          <div className="text-right sm:text-left">
            <span className="text-xs font-bold text-black block">
              Soma total de pesos aplicados: <strong>{somaPesos}</strong>
            </span>
            <span className="text-xs text-gray-800 font-bold block">
              Use esse valor para comparar com a nota de corte do SiSU ou 2ª Fase.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
