import Horizon from "../../img/Horizon.png";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                Bem-vindo ao{" "}
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ">
                  Horizon
                </span>
              </h1>
              <div className="w-16 h-1 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-lg">
              Comece a gerenciar seus projetos de forma eficiente e
              colaborativa, com uma plataforma completa para organizar,
              acompanhar e entregar resultados excepcionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton
                to="/new-project"
                style="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                text="+ Criar Projeto"
              />
              <LinkButton
                to="/contact"
                style="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                text="Saiba Mais"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-700">
              <div>
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-slate-400 text-sm">Seguro & Confiável</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">24h/7d</p>
                <p className="text-slate-400 text-sm">Suporte Disponível</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
            <img
              src={Horizon}
              alt="Horizon"
              className="relative rounded-xl shadow-2xl transition-shadow duration-300 w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
