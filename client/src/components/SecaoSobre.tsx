export default function SecaoSobre() {
  return (
    <section id="sobre" className="py-16 lg:py-20 bg-warm-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block mb-6">
              <span className="text-royal-blue font-accent text-sm tracking-widest uppercase bg-royal-blue/10 px-4 py-2 rounded-full border border-royal-blue/20">
                Conheça o Profissional
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-navy mb-6">
              Sobre o <span className="text-gold">Dr. Rodrigo</span>
            </h2>
            <div className="section-divider w-32 mx-auto mb-8"></div>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto font-body">
              Dedicação, excelência e cuidado humanizado em cada sorriso
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagem do consultório */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="premium-card p-6 floating-card">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Consultório odontológico Dr. Rodrigo Vieira Pacheco - Ambiente moderno e acolhedor em Vitória ES" 
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
                {/* Badge flutuante */}
                <div className="absolute -bottom-6 -right-6 bg-gold text-navy px-6 py-3 rounded-xl shadow-xl animate-float">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold">15+</div>
                    <div className="text-sm font-medium">Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conteúdo textual */}
            <div className="animate-on-scroll space-y-8">
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-medium text-navy mb-6">
                  Excelência em <span className="text-royal-blue">Odontologia</span>
                </h3>
                
                <p className="text-charcoal/80 text-lg leading-relaxed mb-6 font-body">
                  Com mais de uma década de experiência e dedicação à odontologia, o Dr. Rodrigo Vieira Pacheco oferece tratamentos personalizados e de alta qualidade para toda a família em Vitória-ES.
                </p>
                
                <p className="text-charcoal/80 text-lg leading-relaxed mb-8 font-body">
                  Nossa missão é proporcionar um atendimento humanizado, utilizando as mais modernas técnicas e tecnologias disponíveis na odontologia, sempre priorizando o conforto e bem-estar dos nossos pacientes.
                </p>
              </div>
              
              {/* Diferenciais premium */}
              <div className="grid gap-6">
                <div className="premium-card p-6 floating-card border-l-4 border-gold">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user-md text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-medium text-navy mb-2">Atendimento Personalizado</h4>
                      <p className="text-charcoal/70 font-body">Cada paciente recebe um plano de tratamento único, desenvolvido especificamente para suas necessidades.</p>
                    </div>
                  </div>
                </div>
                
                <div className="premium-card p-6 floating-card border-l-4 border-royal-blue">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-microscope text-royal-blue text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-medium text-navy mb-2">Tecnologia de Ponta</h4>
                      <p className="text-charcoal/70 font-body">Equipamentos modernos e técnicas avançadas para tratamentos mais precisos e confortáveis.</p>
                    </div>
                  </div>
                </div>
                
                <div className="premium-card p-6 floating-card border-l-4 border-gold">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-heart text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-medium text-navy mb-2">Ambiente Acolhedor</h4>
                      <p className="text-charcoal/70 font-body">Consultório pensado para proporcionar tranquilidade e conforto durante todo o tratamento.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
