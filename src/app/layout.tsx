import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Vestibulares.BR — Hub de Provas, Calendários e Planos de Estudo do Brasil',
  description: 'Guia completo de todos os vestibulares e exames do Brasil (ENEM, Fuvest, Unicamp, ITA, IME, UERJ, Militares). Planos de estudo práticos, calendários unificados, editais e manuais.',
  keywords: [
    'vestibular 2026', 'vestibulares brasil', 'enem', 'fuvest', 'unicamp', 
    'unesp', 'ita', 'ime', 'uerj', 'ufrgs', 'ufpr', 'plano de estudo', 
    'calendário vestibular', 'obras literarias', 'notas de corte'
  ],
  authors: [{ name: 'Vestibulares.BR' }],
  openGraph: {
    title: 'Vestibulares.BR — Guia Completo e Planos de Estudo',
    description: 'Informações detalhadas, editais, calendários e planos de estudo práticos e inovadores para as principais provas do país.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-[#f8f9fa] text-black">
        {/* Schema.org semântico para IAs e Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Vestibulares.BR',
              description: 'Portal de apoio com dados de vestibulares, editais oficiais e planos de estudo do Brasil.',
              url: 'https://vestibulares.br',
            }),
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
