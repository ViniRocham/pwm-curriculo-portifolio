export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300">
              Currículo / Portfólio
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Vinicius Rocha Maciel
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Desenvolvedor focado em automação, dados e desenvolvimento web,
              com interesse em criar soluções úteis, bem estruturadas e com boa
              experiência visual.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-200 border border-slate-700">
                React
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-200 border border-slate-700">
                Next.js
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-200 border border-slate-700">
                Python
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-200 border border-slate-700">
                SQL
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-200 border border-slate-700">
                Selenium
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/forca"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-600 hover:-translate-y-0.5"
              >
                Ver Projeto: Jogo da Forca
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                Ver mais
              </a>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Sobre mim</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tenho interesse em desenvolvimento de software, automação e criação
              de aplicações que resolvam problemas do dia a dia com praticidade.
              Busco unir lógica, organização e design para entregar projetos
              funcionais e agradáveis de usar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-800/70 border border-slate-700 p-4">
                <h3 className="font-semibold text-emerald-300 mb-2">
                  Projeto em destaque
                </h3>
                <p className="text-sm text-gray-300">
                  Jogo da Forca desenvolvido em Next.js com interface estilizada,
                  controle de tentativas, reinício de partida e feedback visual.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800/70 border border-slate-700 p-4">
                <h3 className="font-semibold text-emerald-300 mb-2">
                  Objetivo
                </h3>
                <p className="text-sm text-gray-300">
                  Demonstrar conhecimento em React / Next.js, lógica de
                  programação, organização de interface e capricho no CSS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="sobre"
          className="mt-10 grid md:grid-cols-3 gap-4 border-t border-white/10 pt-8"
        >
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
            <h3 className="font-bold text-lg mb-2">Tecnologias</h3>
            <p className="text-sm text-gray-300">
              Experiência com ferramentas de front-end, automação e manipulação
              de dados para construção de soluções web e scripts.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
            <h3 className="font-bold text-lg mb-2">Estilo de trabalho</h3>
            <p className="text-sm text-gray-300">
              Gosto de interfaces limpas, código organizado e funcionalidades
              claras, priorizando usabilidade e apresentação visual.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
            <h3 className="font-bold text-lg mb-2">Destaque desta entrega</h3>
            <p className="text-sm text-gray-300">
              Além do portfólio, o projeto contém uma página extra com um jogo da
              forca completo, interativo e visualmente trabalhado.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}