"use client";

import { useMemo, useState } from "react";

const palavras = [
  "react",
  "javascript",
  "python",
  "node",
  "docker",
  "api",
  "dados",
  "cloud",
  "sql",
  "oracle",
  "flask",
  "django",
  "laravel",
  "vue",
  "next",
  "frontend",
  "backend",
  "fullstack",
  "css",
  "html",
  "git",
  "github",
  "linux",
  "aws",
  "azure",
  "kubernetes",
  "machine",
  "learning",
  "automacao",
  "algoritmo",
  "interface",
  "sistema",
  "programacao",
  "desenvolvimento",
  "web",
];

const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

function sortearPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function ForcaPage() {
  const [palavra, setPalavra] = useState(sortearPalavra());
  const [letrasTentadas, setLetrasTentadas] = useState<string[]>([]);
  const [erros, setErros] = useState(0);

  const maxErros = 6;

  const venceu = useMemo(() => {
    return palavra.split("").every((letra) => letrasTentadas.includes(letra));
  }, [palavra, letrasTentadas]);

  const perdeu = erros >= maxErros;

  const palavraExibida = palavra
    .split("")
    .map((letra) => (letrasTentadas.includes(letra) ? letra : "_"))
    .join(" ");

  const letrasCorretas = letrasTentadas.filter((letra) => palavra.includes(letra));
  const letrasErradas = letrasTentadas.filter((letra) => !palavra.includes(letra));

  const partesBoneco = [
    {
      cabeca: false,
      tronco: false,
      bracoEsquerdo: false,
      bracoDireito: false,
      pernaEsquerda: false,
      pernaDireita: false,
    },
    {
      cabeca: true,
      tronco: false,
      bracoEsquerdo: false,
      bracoDireito: false,
      pernaEsquerda: false,
      pernaDireita: false,
    },
    {
      cabeca: true,
      tronco: true,
      bracoEsquerdo: false,
      bracoDireito: false,
      pernaEsquerda: false,
      pernaDireita: false,
    },
    {
      cabeca: true,
      tronco: true,
      bracoEsquerdo: true,
      bracoDireito: false,
      pernaEsquerda: false,
      pernaDireita: false,
    },
    {
      cabeca: true,
      tronco: true,
      bracoEsquerdo: true,
      bracoDireito: true,
      pernaEsquerda: false,
      pernaDireita: false,
    },
    {
      cabeca: true,
      tronco: true,
      bracoEsquerdo: true,
      bracoDireito: true,
      pernaEsquerda: true,
      pernaDireita: false,
    },
    {
      cabeca: true,
      tronco: true,
      bracoEsquerdo: true,
      bracoDireito: true,
      pernaEsquerda: true,
      pernaDireita: true,
    },
  ];

  const bonecoAtual = partesBoneco[erros];

  function tentarLetra(letra: string) {
    if (venceu || perdeu) return;
    if (letrasTentadas.includes(letra)) return;

    setLetrasTentadas((estadoAnterior) => [...estadoAnterior, letra]);

    if (!palavra.includes(letra)) {
      setErros((valorAnterior) => valorAnterior + 1);
    }
  }

  function reiniciarJogo() {
    setPalavra(sortearPalavra());
    setLetrasTentadas([]);
    setErros(0);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <a
          href="/"
          className="inline-flex mb-8 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
        >
          ← Voltar para o portfólio
        </a>

        <div className="grid lg:grid-cols-2 gap-8">
          <section className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8">
            <h1 className="text-4xl font-extrabold mb-3">Jogo da Forca</h1>
            <p className="text-gray-300 mb-8">
              Descubra a palavra antes que o número máximo de erros seja
              atingido.
            </p>

            <div className="flex justify-center mb-8">
              <div className="relative w-[220px] h-[280px]">
                <div className="absolute bottom-0 left-2 w-32 h-2 bg-slate-300 rounded"></div>
                <div className="absolute bottom-0 left-10 w-2 h-56 bg-slate-300 rounded"></div>
                <div className="absolute top-6 left-10 w-28 h-2 bg-slate-300 rounded"></div>
                <div className="absolute top-6 left-[158px] w-2 h-10 bg-slate-300 rounded"></div>

                {bonecoAtual.cabeca && (
                  <div className="absolute top-16 left-[136px] w-12 h-12 rounded-full border-4 border-red-400"></div>
                )}

                {bonecoAtual.tronco && (
                  <div className="absolute top-[108px] left-[158px] w-1.5 h-20 bg-red-400 rounded"></div>
                )}

                {bonecoAtual.bracoEsquerdo && (
                  <div className="absolute top-[122px] left-[142px] w-20 h-1.5 bg-red-400 rotate-[30deg] origin-right rounded"></div>
                )}

                {bonecoAtual.bracoDireito && (
                  <div className="absolute top-[122px] left-[158px] w-20 h-1.5 bg-red-400 -rotate-[30deg] origin-left rounded"></div>
                )}

                {bonecoAtual.pernaEsquerda && (
                  <div className="absolute top-[187px] left-[143px] w-20 h-1.5 bg-red-400 -rotate-[55deg] origin-right rounded"></div>
                )}

                {bonecoAtual.pernaDireita && (
                  <div className="absolute top-[187px] left-[158px] w-20 h-1.5 bg-red-400 rotate-[55deg] origin-left rounded"></div>
                )}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300 mb-3">
                Palavra
              </p>

              <p className="text-3xl md:text-4xl font-bold tracking-[0.35em] break-words mb-4">
                {palavraExibida}
              </p>

              <p className="text-lg text-gray-200">
                Tentativas erradas:{" "}
                <span className="font-bold text-red-400">
                  {erros} / {maxErros}
                </span>
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-900/70 border border-slate-700 p-5">
                <h2 className="font-bold text-emerald-300 mb-2">Corretas</h2>
                <p className="text-gray-200 break-words min-h-[24px]">
                  {letrasCorretas.length > 0 ? letrasCorretas.join(", ") : "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-slate-700 p-5">
                <h2 className="font-bold text-red-300 mb-2">Erradas</h2>
                <p className="text-gray-200 break-words min-h-[24px]">
                  {letrasErradas.length > 0 ? letrasErradas.join(", ") : "-"}
                </p>
              </div>
            </div>

            <div className="mt-6">
              {venceu && (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-300 font-semibold">
                  Parabéns! Você venceu e descobriu a palavra{" "}
                  <span className="font-extrabold">{palavra}</span>.
                </div>
              )}

              {perdeu && (
                <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-300 font-semibold">
                  Você perdeu. A palavra correta era{" "}
                  <span className="font-extrabold">{palavra}</span>.
                </div>
              )}
            </div>

            <button
              onClick={reiniciarJogo}
              className="mt-6 w-full rounded-2xl bg-amber-400 px-6 py-4 text-lg font-bold text-slate-900 shadow-lg transition hover:bg-amber-300 hover:-translate-y-0.5"
            >
              Reiniciar jogo
            </button>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-2">Escolha uma letra</h2>
            <p className="text-gray-300 mb-6">
              Clique em uma letra do teclado virtual para tentar adivinhar a
              palavra.
            </p>

            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-3">
              {alfabeto.map((letra) => {
                const jaFoiTentada = letrasTentadas.includes(letra);
                const letraCorreta = palavra.includes(letra);

                const classeBotao = jaFoiTentada
                  ? letraCorreta
                    ? "bg-emerald-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600";

                return (
                  <button
                    key={letra}
                    onClick={() => tentarLetra(letra)}
                    disabled={jaFoiTentada || venceu || perdeu}
                    className={`rounded-xl px-4 py-3 font-bold uppercase shadow-md transition ${classeBotao} disabled:cursor-not-allowed disabled:opacity-80`}
                  >
                    {letra}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900/70 border border-slate-700 p-5">
              <h3 className="font-bold text-lg mb-3">Regras desta página</h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>A palavra começa oculta com underlines.</li>
                <li>Cada erro consome uma tentativa.</li>
                <li>As letras corretas e incorretas ficam registradas.</li>
                <li>Ao vencer ou perder, o jogo é encerrado.</li>
                <li>O botão de reinício sorteia uma nova palavra.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}