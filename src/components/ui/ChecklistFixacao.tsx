'use client';

import React, { useState } from 'react';
import { CheckSquare, Square, Sparkles, Trophy } from 'lucide-react';

interface CicloProps {
  semana: number;
  focoPrincipal: string;
  estrategiaFixacao: string;
  conteudosChave: string[];
}

export const ChecklistFixacao: React.FC<{ ciclos: CicloProps[] }> = ({ ciclos }) => {
  const [completos, setCompletos] = useState<Record<number, boolean>>({});

  const alternarCiclo = (semana: number) => {
    setCompletos((prev) => ({
      ...prev,
      [semana]: !prev[semana],
    }));
  };

  const totalConcluido = Object.values(completos).filter(Boolean).length;
  const porcentagem = Math.round((totalConcluido / ciclos.length) * 100);

  return (
    <div className="space-y-6">
      {/* Barra de Progresso do Estudante */}
      <div className="p-4 bg-white border-3 border-black rounded-2xl shadow-[3px_3px_0_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#fac70f] border-2 border-black flex items-center justify-center text-black font-black">
            <Trophy className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="text-xs font-black uppercase text-gray-600 block">Progresso do Ciclo</span>
            <span className="text-lg font-black text-black">
              {totalConcluido} de {ciclos.length} Semanas Concluídas ({porcentagem}%)
            </span>
          </div>
        </div>

        <div className="w-full sm:w-48 bg-gray-200 h-4 rounded-full border-2 border-black overflow-hidden">
          <div
            className="bg-[#5834f8] h-full transition-all duration-500"
            style={{ width: `${porcentagem}%` }}
          />
        </div>
      </div>

      {/* Cartões Interativos das Semanas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ciclos.map((ciclo) => {
          const concluido = Boolean(completos[ciclo.semana]);
          return (
            <div
              key={ciclo.semana}
              onClick={() => alternarCiclo(ciclo.semana)}
              className={`cursor-pointer interactive-card rounded-2xl p-5 border-3 border-black transition-all ${
                concluido ? 'bg-[#fac70f]/30' : 'bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-[#5834f8] text-white text-xs font-black rounded-lg border border-black">
                  Semana {ciclo.semana}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-black text-black">
                  {concluido ? (
                    <CheckSquare className="w-5 h-5 text-[#5834f8] stroke-[3]" />
                  ) : (
                    <Square className="w-5 h-5 text-gray-500 stroke-[2]" />
                  )}
                  <span>{concluido ? 'Concluído!' : 'Marcar Feito'}</span>
                </div>
              </div>

              <h4 className="text-base font-black text-black leading-snug mb-2">
                {ciclo.focoPrincipal}
              </h4>

              <div className="p-2.5 bg-gray-50 border-2 border-black rounded-xl text-xs font-bold text-gray-800 mb-3">
                <strong className="text-black block mb-0.5">🧠 Estratégia de Fixação Ativa:</strong>
                {ciclo.estrategiaFixacao}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-black text-gray-600 block">Tópicos para Dominar:</span>
                <div className="flex flex-wrap gap-1.5">
                  {ciclo.conteudosChave.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-white border border-black rounded text-[11px] font-black text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
