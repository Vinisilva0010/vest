'use client';

import React from 'react';
import Link from 'next/navigation';
import NextLink from 'next/link';
import { Calendar, Compass, BookOpen, Calculator, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#fac70f] border-b-4 border-black px-4 py-3 shadow-[0_4px_0_#000000]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logotipo com Tipografia Grossa e Cores Vivas */}
        <NextLink href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#5834f8] border-2 border-black flex items-center justify-center text-white font-black text-2xl shadow-[2px_2px_0_#000] group-hover:rotate-6 transition-transform">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-black font-black text-2xl leading-none tracking-tight">
              VESTIBULARES<span className="text-[#5834f8]">.BR</span>
            </span>
            <span className="text-black text-xs font-black tracking-widest uppercase">
              O Portal Definitivo de Provas
            </span>
          </div>
        </NextLink>

        {/* Menu de Navegação com Microinterações e Letras Pretas */}
        <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <NextLink
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-2 border-black text-black font-black text-sm shadow-[2px_2px_0_#000] hover:bg-[#fc6a60] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <Compass className="w-4 h-4 stroke-[3]" />
            <span>Todas as Provas</span>
          </NextLink>

          <NextLink
            href="/#planos-exclusivos"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fc6a60] border-2 border-black text-black font-black text-sm shadow-[2px_2px_0_#000] hover:bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <Sparkles className="w-4 h-4 stroke-[3] text-[#5834f8]" />
            <span>Planos de Estudo (7)</span>
          </NextLink>

          <NextLink
            href="/calendario"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-2 border-black text-black font-black text-sm shadow-[2px_2px_0_#000] hover:bg-[#fc6a60] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <Calendar className="w-4 h-4 stroke-[3]" />
            <span>Calendário Geral</span>
          </NextLink>

          <NextLink
            href="/comparador"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-2 border-black text-black font-black text-sm shadow-[2px_2px_0_#000] hover:bg-[#fc6a60] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <Calculator className="w-4 h-4 stroke-[3]" />
            <span>Comparador & Médias</span>
          </NextLink>

          {/* Badge Animado de Inscrições Ativas */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-[#5834f8] text-white border-2 border-black rounded-lg text-xs font-black animate-pulseAlert">
            <span className="w-2 h-2 rounded-full bg-[#fac70f] animate-ping" />
            <span>Inscrições Abertas</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
