import fotoDrRodrigo from '@assets/1584653662254.jfif';

export default function SecaoHero() {
  return (
    <section id="inicio" className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Elementos decorativos premium */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gold/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Conteúdo textual */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <div className="inline-block mb-6">
                <span className="text-gold font-accent text-sm tracking-widest uppercase bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                  Cirurgião Dentista
                </span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 leading-tight">
                <span className="block text-shadow">Dr. Rodrigo</span>
                <span className="block logo-signature text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Vieira Pacheco
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-body">
                Excelência em odontologia com atendimento personalizado e tecnologia de ponta em Vitória-ES
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/5527996967111" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg animate-glow"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  Agendar Consulta
                </a>
                <a 
                  href="#sobre" 
                  className="btn-primary text-lg"
                >
                  <i className="fas fa-user-md mr-2"></i>
                  Conheça o Doutor
                </a>
              </div>
            </div>
          </div>
          
          {/* Foto profissional premium */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] relative">
                {/* Círculo decorativo de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-royal-blue/20 rounded-full blur-xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-gold/30 to-white/10 rounded-full"></div>
                
                {/* Container da foto */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gold/50 shadow-2xl bg-white">
                  <img 
                    src={fotoDrRodrigo}
                    alt="Dr. Rodrigo Vieira Pacheco - Cirurgião Dentista em Vitória ES" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de scroll premium */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white/60 text-sm font-accent mb-2 tracking-wider">Explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
