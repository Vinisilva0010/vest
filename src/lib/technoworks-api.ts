/**
 * Conector REST para o NoSQL Technoworks
 * Referência: technoworks.com.br/apidoc
 * Suporte a:
 * - api (funções estruturadas: titulo, descricao, preco, etc.)
 * - rest (coleção livre em NoSQL)
 * - easy (rest modificado aceitando envio via GET)
 */

const TECHNOWORKS_BASE_URL = process.env.NEXT_PUBLIC_TECHNOWORKS_URL || 'https://technoworks.com.br';

export interface TechnoworksResponse<T = any> {
  success: boolean;
  id?: string | number;
  data?: T;
  mensagem?: string;
  error?: string;
}

export class TechnoworksNoSQLClient {
  private baseUrl: string;

  constructor(baseUrl: string = TECHNOWORKS_BASE_URL) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  /**
   * Coleção Livre (REST padrão - POST/GET/PUT/DELETE com JSON)
   */
  async salvarColecaoLivre<T extends { id?: string | number }>(
    colecao: string,
    documento: T
  ): Promise<TechnoworksResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}/rest/${colecao}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(documento),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP Technoworks: ${response.status}`);
      }

      return await response.json();
    } catch (err: any) {
      console.warn(`[Technoworks NoSQL] Falha ao sincronizar online (${colecao}):`, err.message);
      return { success: false, error: err.message };
    }
  }

  async obterColecaoLivre<T = any>(colecao: string, id?: string | number): Promise<T | null> {
    try {
      const url = id 
        ? `${this.baseUrl}/rest/${colecao}/${id}`
        : `${this.baseUrl}/rest/${colecao}`;

      const response = await fetch(url, {
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 300 }, // Cache inteligente de 5 min para altíssima performance
      });

      if (!response.ok) return null;
      return await response.json();
    } catch (err: any) {
      console.warn(`[Technoworks NoSQL] Erro na leitura (${colecao}):`, err.message);
      return null;
    }
  }

  /**
   * Endpoint Easy: Envio simplificado via GET com query params
   */
  async enviarEasy(colecao: string, dados: Record<string, any>): Promise<any> {
    try {
      const queryParams = new URLSearchParams();
      Object.entries(dados).forEach(([key, val]) => {
        queryParams.append(key, typeof val === 'object' ? JSON.stringify(val) : String(val));
      });

      const response = await fetch(`${this.baseUrl}/easy/${colecao}?${queryParams.toString()}`, {
        method: 'GET',
      });
      return await response.json();
    } catch (err: any) {
      console.warn('[Technoworks Easy API] Erro no envio:', err.message);
      return null;
    }
  }
}

export const technoworks = new TechnoworksNoSQLClient();
