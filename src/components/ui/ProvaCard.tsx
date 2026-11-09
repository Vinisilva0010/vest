import React from 'react';
import NextLink from 'next/link';
import { ProvaCompleta } from '@/types';
import { Calendar, FileText, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface ProvaCardProps {
  prova: ProvaCompleta;
}

export const ProvaCard: React.FC<ProvaCardProps> = ({ prova }) => {
  const temPlano = Boolean(prova.planoEstudo?.ativo);
  const proximaData = prova.calendario.find((c) => c.status === 'confirmado');

  return (
    <div className={`interactive-card rounded-2xl p-5 flex flex-col justify-between bg-white relative overflow-hidden ${
      temPlano ? 'border-[#5834f8]' : 'border-black'
    }`}>
      {/* Faixa superior com Destaque de Plano Inovador */}
      {temPlano && (
        <div className="absolute top-0 right-0 bg-[#fac70f] border-b-2 border-l-2 border-black px-3 py-1 text-xs font-black flex items-center gap-1 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#5834f8]" />
          <span>PLANO PRÁTICO INOVADOR</span>
        </div>
      )}

      <div>
        {/* Cabeçalho do Card */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-[#fc6a60] text-black border border-black uppercase tracking-wider">
            {prova.sigla}
          </span>
          <span className="flex items-center gap-1 text-xs font-black text-black">
            <MapPin className="w-3.5 h-3.5 text-[#5834f8]" />
            {prova.estado}
          </span>
        </div>

        <h3 className="text-xl font-black text-black leading-tight mb-2">
          {prova.apelido}
        </h3>
        
        <p className="text-xs font-bold text-gray-800 line-clamp-2 mb-4 leading-relaxed">
          {prova.resumoFuncionamento}
        </p>

        {/* Informações Rápidas */}
        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 bg-gray-50 border-2 border-black rounded-xl text-xs font-black">
          <div>
            <span className="block text-[10px] text-gray-600 uppercase">Fases</span>
            <span className="text-black">{prova.quantidadeFases} {prova.quantidadeFases === 1 ? 'Fase Única' : 'Fases'}</span>
          </div>
          <div>
            <span className="block text-[10px] text-gray-600 uppercase">Vagas Aprox.</span>
            <span className="text-[#5834f8]">~{prova.vagasAproximadas.toLocaleString('pt-BR')}</span>
          </div>
        </div>

        {/* Próxima Data Marcada */}
        {proximaData && (
          <div className="mb-4 flex items-center gap-2 p-2 bg-[#fac70f]/30 border border-black rounded-lg text-xs font-black text-black">
            <Calendar className="w-4 h-4 text-[#5834f8] shrink-0" />
            <span className="truncate">
              {proximaData.evento}: {new Date(proximaData.dataInicio).toLocaleDateString('pt-BR')}
            </span>
          </div>
        )}
      </div>

      {/* Botões de Ação */}
      <div className="pt-2 flex flex-col sm:flex-row gap-2">
        <NextLink
          href={`/provas/${prova.slug}`}
          className="flex-1 btn-brand-coral py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 text-center"
        >
          <span>Ficha Completa</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NextLink>

        {temPlano && (
          <NextLink
            href={`/provas/${prova.slug}#plano-estudo`}
            className="btn-brand-purple py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1 text-center"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#fac70f]" />
            <span>Ver Plano</span>
          </NextLink>
        )}
      </div>
    </div>
  );
};
