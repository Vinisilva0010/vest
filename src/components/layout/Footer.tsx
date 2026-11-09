import React from 'react';
import { ShieldCheck, Database, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-black mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Coluna 1: Sobre */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#fc6a60] border-2 border-white flex items-center justify-center text-black font-black">
                V
              </div>
              <span className="text-xl font-black text-[#fac70f]">VESTIBULARES.BR</span>
            </div>
            <p className="text-sm font-bold text-gray-200 leading-relaxed">
              Plataforma independente de apoio ao estudante brasileiro com informações oficiais, editais, calendários unificados e planos de estudo práticos.
            </p>
          </div>

          {/* Coluna 2: Provas com Plano Exclusivo */}
          <div>
            <h4 className="text-base font-black text-[#fac70f] uppercase tracking-wider mb-3">
              Planos Inovadores
            </h4>
            <ul className="space-y-1.5 text-sm font-bold text-gray-300">
              <li><a href="/provas/enem" className="hover:text-[#fc6a60] transition-colors">→ ENEM (TRI & Redação)</a></li>
              <li><a href="/provas/fuvest" className="hover:text-[#fc6a60] transition-colors">→ Fuvest (USP)</a></li>
              <li><a href="/provas/unicamp" className="hover:text-[#fc6a60] transition-colors">→ Unicamp (Gêneros Textuais)</a></li>
              <li><a href="/provas/unesp" className="hover:text-[#fc6a60] transition-colors">→ Unesp (Vunesp)</a></li>
              <li><a href="/provas/uerj" className="hover:text-[#fc6a60] transition-colors">→ UERJ (Conceito A)</a></li>
              <li><a href="/provas/ita-ime" className="hover:text-[#fc6a60] transition-colors">→ Militares (ITA / IME)</a></li>
              <li><a href="/provas/ufrgs-ufpr" className="hover:text-[#fc6a60] transition-colors">→ Região Sul (UFRGS / UFPR)</a></li>
            </ul>
          </div>

          {/* Coluna 3: Web Service & Dados */}
          <div>
            <h4 className="text-base font-black text-[#fac70f] uppercase tracking-wider mb-3">
              Web Service & API
            </h4>
            <div className="p-3 bg-gray-900 border-2 border-[#5834f8] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-[#fac70f]">
                <Database className="w-4 h-4" />
                <span>Technoworks NoSQL REST</span>
              </div>
              <p className="text-xs text-gray-300 font-bold">
                Endpoints REST públicos em JSON disponíveis para qualquer sistema operacional e cliente web.
              </p>
              <a
                href="/api/provas"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-[#fc6a60] font-black hover:underline"
              >
                <span>Acessar /api/provas</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Coluna 4: Transparência */}
          <div className="space-y-3">
            <h4 className="text-base font-black text-[#fac70f] uppercase tracking-wider mb-3">
              Compromisso Oficial
            </h4>
            <div className="flex items-start gap-2 text-xs text-gray-300 font-bold">
              <ShieldCheck className="w-5 h-5 text-[#fac70f] shrink-0 mt-0.5" />
              <span>Todos os editais e manuais contam com links diretos aos portais oficiais dos órgãos responsáveis.</span>
            </div>
            <div className="text-xs text-gray-400 font-bold">
              Última checagem geral de editais: <span className="text-[#fac70f]">Novembro/2026</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-bold gap-3">
          <span>© 2026 Vestibulares.BR — Construído com foco em alto desempenho, SEO e acessibilidade.</span>
          <span className="text-[#fac70f] font-black">Desenvolvido em Web Service RESTful</span>
        </div>
      </div>
    </footer>
  );
};
