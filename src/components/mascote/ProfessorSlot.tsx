import React from 'react';

export type PoseProfessor = 
  | 'apontando-direita' 
  | 'apontando-esquerda' 
  | 'sentado' 
  | 'cara-de-mal' 
  | 'comemorando' 
  | 'explicando';

interface ProfessorSlotProps {
  pose: PoseProfessor;
  fala?: string;
  ladoFala?: 'esquerda' | 'direita' | 'cima';
  alturaPx?: number;
  className?: string;
}

export const ProfessorSlot: React.FC<ProfessorSlotProps> = ({
  pose,
  fala,
  ladoFala = 'direita',
  alturaPx = 180,
  className = '',
}) => {
  const caminhoImagem = `/mascote/professor-${pose}.png`;

  return (
    <div className={`relative inline-flex items-center group transition-all duration-300 ${className}`}>
      {/* Balão de fala com borda preta grossa e fundo vibrante */}
      {fala && (
        <div
          className={`absolute z-20 max-w-xs bg-[#fac70f] text-black font-black text-xs md:text-sm p-3 rounded-2xl shadow-lg border-2 border-black animate-float ${
            ladoFala === 'direita'
              ? 'left-full ml-3 top-2'
              : ladoFala === 'esquerda'
              ? 'right-full mr-3 top-2'
              : 'bottom-full mb-3 left-1/2 -translate-x-1/2'
          }`}
        >
          {fala}
          <div
            className={`absolute w-3 h-3 bg-[#fac70f] border-b-2 border-r-2 border-black transform rotate-45 ${
              ladoFala === 'direita'
                ? '-left-2 top-4 -rotate-135'
                : ladoFala === 'esquerda'
                ? '-right-2 top-4 rotate-45'
                : '-bottom-2 left-1/2 -translate-x-1/2'
            }`}
          />
        </div>
      )}

      {/* Espaço da Imagem do Professor */}
      <div 
        className="relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ height: `${alturaPx}px`, minWidth: `${Math.round(alturaPx * 0.8)}px` }}
      >
        <img
          src={caminhoImagem}
          alt={`Professor na pose ${pose}`}
          className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
          onError={(e) => {
            // Placeholder estilizado caso o PNG ainda não tenha sido colocado na pasta
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.fallback-professor')) {
              const div = document.createElement('div');
              div.className = 'fallback-professor p-3 bg-[#5834f8] text-white border-2 border-black rounded-xl text-center font-black text-xs flex flex-col items-center justify-center';
              div.innerHTML = `<span>👨‍🏫 [Mascote: ${pose}]</span><span class="text-[9px] text-[#fac70f]">Coloque professor-${pose}.png em /public/mascote</span>`;
              parent.appendChild(div);
            }
          }}
        />
      </div>
    </div>
  );
};
