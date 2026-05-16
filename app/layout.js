import './globals.css';

export const metadata = {
  title: 'WG Car Multimarcas | Mecânica, Elétrica e Injeção Eletrônica',
  description:
    'WG Car Multimarcas: oficina especializada em mecânica, elétrica e injeção eletrônica. Atendimento com qualidade, confiança e experiência.',
  keywords: [
    'WG Car Multimarcas',
    'oficina mecânica',
    'mecânica automotiva',
    'elétrica automotiva',
    'injeção eletrônica',
    'auto elétrica',
    'revisão de carro',
    'oficina multimarcas',
  ],
  authors: [{ name: 'WG Car Multimarcas' }],
  creator: 'Kinkajou Dev',
  openGraph: {
    title: 'WG Car Multimarcas | Oficina Especializada',
    description:
      'Mecânica, elétrica e injeção eletrônica com atendimento de confiança.',
    url: 'https://wgcar.com.br',
    siteName: 'WG Car Multimarcas',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#080808" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = window.tailwind || {};
              window.tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      wgRed: '#E10600',
                      wgGold: '#D7A536',
                      wgDark: '#080808',
                      wgCard: '#111111',
                      wgSoft: '#1A1A1A'
                    },
                    boxShadow: {
                      glowRed: '0 0 45px rgba(225, 6, 0, .28)',
                      glowGold: '0 0 35px rgba(215, 165, 54, .22)'
                    }
                  }
                }
              }
            `,
          }}
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
