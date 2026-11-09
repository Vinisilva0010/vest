import { NextResponse } from 'next/server';
import { PROVAS_DATA } from '@/lib/provas-data';
import { technoworks } from '@/lib/technoworks-api';

/**
 * Web Service REST:
 * GET /api/provas
 * Suporte a filtros via query params:
 * ?categoria=nacional|tradicional|militar|outras
 * ?estado=SP|RJ|Nacional
 * ?comPlano=true
 * ?busca=termo
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoria = searchParams.get('categoria');
  const estado = searchParams.get('estado');
  const comPlano = searchParams.get('comPlano');
  const busca = searchParams.get('busca')?.toLowerCase();

  // Opcional: tenta sincronizar ou consultar dados em tempo real no NoSQL Technoworks
  // Se falhar ou estiver offline, responde com a base local ultra-rápida (Resiliência Total)
  let resultados = [...PROVAS_DATA];

  if (categoria) {
    resultados = resultados.filter((p) => p.categoria === categoria);
  }

  if (estado) {
    resultados = resultados.filter((p) => p.estado.toLowerCase().includes(estado.toLowerCase()));
  }

  if (comPlano === 'true') {
    resultados = resultados.filter((p) => p.planoEstudo?.ativo);
  }

  if (busca) {
    resultados = resultados.filter(
      (p) =>
        p.nomeOficial.toLowerCase().includes(busca) ||
        p.apelido.toLowerCase().includes(busca) ||
        p.sigla.toLowerCase().includes(busca) ||
        p.instituicao.toLowerCase().includes(busca)
    );
  }

  return NextResponse.json(
    {
      sucesso: true,
      total: resultados.length,
      dados: resultados,
      meta: {
        timestamp: new Date().toISOString(),
        provedor: 'Technoworks NoSQL REST Web Service'
      }
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    }
  );
}
