import { FaWhatsapp, FaInstagram, FaTools, FaBolt, FaCarSide, FaMapMarkerAlt, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';



const whatsapp = 'https://wa.me/5514998841937?text=Ol%C3%A1%2C%20William%21%20Vim%20pelo%20site%20da%20WG%20Car%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.';
const instagram = 'https://www.instagram.com/william_vieira0401/';

const services = [
  ['Mecânica automotiva', 'Manutenção preventiva e corretiva para veículos multimarcas, com avaliação clara e orientação antes do serviço.', FaTools],
  ['Elétrica automotiva', 'Diagnóstico e reparo de falhas elétricas, bateria, alternador, iluminação, sensores e sistemas do veículo.', FaBolt],
  ['Injeção eletrônica', 'Análise técnica para identificar falhas de desempenho, consumo, partida, luz de injeção e funcionamento irregular.', FaCarSide],
  ['Revisão preventiva', 'Inspeção de itens importantes para aumentar a segurança, evitar paradas inesperadas e preservar o veículo.', FaCheckCircle],
  ['Diagnóstico técnico', 'Avaliação antes de executar qualquer serviço, com explicação objetiva sobre o problema encontrado.', FaShieldAlt],
  ['Atendimento multimarcas', 'Estrutura preparada para atender diferentes modelos, sempre com qualidade, confiança e experiência.', FaCarSide],
];

const faq = [
  ['A oficina atende quais serviços?', 'A WG Car Multimarcas trabalha com mecânica, elétrica automotiva, injeção eletrônica, revisões e diagnóstico técnico.'],
  ['Faz orçamento antes do serviço?', 'Sim. O cliente recebe uma avaliação e orientação antes da execução do serviço, com clareza e transparência.'],
  ['Atende veículos de várias marcas?', 'Sim. A WG Car é uma oficina multimarcas, preparada para atender diferentes modelos de veículos.'],
  ['Como faço para agendar?', 'Você pode chamar diretamente no WhatsApp e enviar as informações do veículo para receber o atendimento inicial.'],
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'WG Car Multimarcas',
    description: 'Oficina especializada em mecânica, elétrica e injeção eletrônica.',
    telephone: '+55 14 99884-1937',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av República 4926',
      addressCountry: 'BR',
    },
    sameAs: [instagram],
    makesOffer: services.map(([name, description]) => ({ '@type': 'Offer', name, description })),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-wgDark text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="WG Car Multimarcas">
            <img src="/assets/wg-logo-crop.png" alt="Logo WG Car Multimarcas" className="h-20 w-auto object-contain md:h-24" />
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a href="#servicos" className="transition hover:text-wgGold">Serviços</a>
            <a href="#estrutura" className="transition hover:text-wgGold">Oficina</a>
            <a href="#faq" className="transition hover:text-wgGold">Dúvidas</a>
          </div>

          <div className="flex items-center gap-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp WG Car" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-[0_0_25px_rgba(34,197,94,0.35)] transition hover:-translate-y-1 hover:scale-110">
              <FaWhatsapp className="text-[1.35rem]" />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram WG Car" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white shadow-[0_0_25px_rgba(236,72,153,0.35)] transition hover:-translate-y-1 hover:scale-110">
              <FaInstagram className="text-[1.2rem]" />
            </a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="bg-grid relative px-4 pb-20 pt-36 md:px-6 md:pt-44">
        <div className="absolute right-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-wgRed/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-wgRed/40 bg-wgRed/10 px-4 py-2 text-sm font-black uppercase tracking-[.16em] text-wgGold">
              Mecânica • Elétrica • Injeção eletrônica
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              WG Car Multimarcas: <span className="text-gradient-red">qualidade e confiança</span> para cuidar do seu veículo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Oficina especializada em mecânica automotiva, elétrica e injeção eletrônica. Atendimento direto, diagnóstico claro e experiência para resolver o problema do seu carro com segurança.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-gradient-to-r from-wgRed via-red-600 to-wgGold px-7 py-4 text-center font-black text-white shadow-glowRed transition hover:-translate-y-1">
                Agendar pelo WhatsApp
              </a>
              <a href="#servicos" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10">
                Ver serviços
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-4">
              {['+20 anos de experiência', 'Multimarcas', 'Orçamento claro', 'Av República 4926'].map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[40px] bg-wgRed/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-wgRed/30 bg-black p-3 shadow-glowRed">
              <img src="/assets/wg-promo.png" alt="Promoção WG Car Multimarcas" className="w-full rounded-[26px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative overflow-hidden px-4 py-24 md:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(225,6,0,0.16),transparent_35%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[.3em] text-wgGold">Serviços automotivos</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Oficina multimarcas com diagnóstico técnico e atendimento de confiança.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Da revisão preventiva ao diagnóstico de falhas, a WG Car trabalha com transparência para cuidar do seu veículo do jeito certo.</p>
            </div>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-wgGold/30 bg-wgGold/10 px-6 py-4 text-sm font-black uppercase tracking-wider text-wgGold transition hover:-translate-y-1 hover:bg-wgGold hover:text-black">Solicitar orçamento</a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, desc, Icon], index) => (
              <article key={title} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-wgRed/60 hover:shadow-glowRed">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-wgRed/10 transition group-hover:bg-wgGold/15" />
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-wgGold/20 bg-wgRed/15 text-xl text-wgGold"><Icon /></div>
                <span className="relative text-sm font-black text-wgRed">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="relative mt-2 text-xl font-black text-white">{title}</h3>
                <p className="relative mt-3 leading-7 text-slate-300">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estrutura" className="relative overflow-hidden bg-black px-4 py-24 md:px-6">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-wgRed/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full border border-wgGold/30 bg-wgGold/10 px-4 py-2 text-sm font-black uppercase tracking-[.2em] text-wgGold">Qualidade que você confia</p>
              <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">Atendimento direto com quem entende de carro.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">A WG Car Multimarcas une experiência, estrutura e atendimento próximo para entregar soluções em mecânica, elétrica e injeção eletrônica.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Atendimento que faz a diferença', 'Experiência que garante', 'Compromisso com seu veículo', 'Diagnóstico antes do serviço'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/50 p-5">
                    <FaCheckCircle className="mb-3 text-wgGold" />
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[34px] bg-wgGold/10 blur-3xl" />
              <img src="/assets/wg-flyer.jpg" alt="WG Car Multimarcas oficina especializada" className="relative w-full rounded-[30px] border border-wgRed/30 shadow-glowRed" />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden px-4 py-24 md:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(215,165,54,0.12),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="font-bold uppercase tracking-[.3em] text-wgGold">Dúvidas frequentes</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Antes de levar seu carro para avaliação</h2>
            <p className="mt-5 leading-8 text-slate-300">Veja respostas sobre orçamento, diagnóstico, serviços de mecânica automotiva, elétrica e injeção eletrônica.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-wgRed to-wgGold px-6 py-4 text-sm font-black uppercase tracking-wider text-white shadow-glowRed transition hover:-translate-y-1">Falar no WhatsApp</a>
          </div>
          <div className="space-y-4">
            {faq.map(([question, answer], index) => (
              <details key={question} className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition hover:border-wgGold/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 text-lg font-black text-white">
                  <span className="flex items-center gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-wgRed/15 text-sm font-black text-wgGold">{String(index + 1).padStart(2, '0')}</span>{question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-wgGold/20 text-wgGold transition group-open:rotate-45 group-open:bg-wgGold group-open:text-black">+</span>
                </summary>
                <div className="border-t border-white/10 px-6 pb-6 pt-5"><p className="leading-8 text-slate-300">{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-24 md:px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(225,6,0,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1A1A1A] via-black to-[#080808] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:p-14">
          <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-wgRed/20 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[80px] h-[240px] w-[240px] rounded-full bg-wgGold/10 blur-3xl" />
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-wgGold/20 bg-wgGold/10 px-5 py-2 text-sm font-bold uppercase tracking-[.2em] text-wgGold">Agendamento rápido</span>
            <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">Seu carro precisa de manutenção?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Fale com a WG Car Multimarcas e receba um atendimento direto para mecânica, elétrica e injeção eletrônica.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-2xl bg-gradient-to-r from-wgRed via-red-600 to-wgGold px-8 py-5 font-black text-white shadow-glowRed transition hover:-translate-y-1">Chamar no WhatsApp</a>
          </div>
        </div>
      </section>

      <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a WG Car pelo WhatsApp" className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-[0_0_30px_rgba(34,197,94,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16">
        <FaWhatsapp className="text-[1.8rem] md:text-[2rem]" />
      </a>

      <section className="relative h-[70vh] w-full overflow-hidden border-t border-white/10">
  
  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

  <iframe
    title="Localização WG Car Multimarcas"
    src="https://www.google.com/maps?q=Av%20República%204926&output=embed"
    className="absolute inset-0 h-full w-full"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  <div className="absolute bottom-0 left-0 z-20 w-full p-6 md:p-10">
    <div className="max-w-xl rounded-[28px] border border-white/10 bg-black/70 p-6 backdrop-blur-xl">
      
      <span className="inline-flex rounded-full border border-wgRed/20 bg-wgRed/10 px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-wgRed">
        Localização
      </span>

      <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
        WG Car Multimarcas
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-300">
        Mecânica, elétrica e injeção eletrônica com atendimento especializado e estrutura profissional.
      </p>

      <div className="mt-6 flex flex-col gap-3 text-slate-300">
        
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-xl text-wgRed" />
          <span>Av República 4926</span>
        </div>

        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-xl text-green-400" />
          <span>14 99884-1937</span>
        </div>

      </div>

      <a
        href="https://maps.google.com/?q=Av República 4926"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-8 inline-flex items-center justify-center
          rounded-2xl
          bg-gradient-to-r from-wgRed to-red-500
          px-6 py-4
          text-sm font-black uppercase tracking-wider text-white
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        Abrir no Google Maps
      </a>
    </div>
  </div>
</section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 md:px-6">
        <p>WG Car Multimarcas — Mecânica, elétrica e injeção eletrônica.</p>
        <p className="mt-2"><FaMapMarkerAlt className="mr-1 inline text-wgRed" /> Av República 4926 • WhatsApp: 14 99884-1937</p>
      </footer>
    </main>
  );
}
