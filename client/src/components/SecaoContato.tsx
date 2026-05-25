export default function SecaoContato() {
  return (
    <section id="contato" className="py-16 lg:py-20 gradient-bg relative overflow-hidden">
      {/* Elementos decorativos premium */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block mb-6">
              <span className="text-gold font-accent text-sm tracking-widest uppercase bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                Fale Conosco
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              Entre em <span className="text-gold">Contato</span>
            </h2>
            <div className="section-divider w-32 mx-auto mb-8"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-body">
              Agende sua consulta e transforme seu sorriso com nosso atendimento especializado
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Informações de contato premium */}
            <div className="animate-on-scroll">
              <div className="glass-effect rounded-2xl p-8 floating-card">
                <h3 className="font-heading text-3xl font-medium text-white mb-10">Informações de Contato</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-navy text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-xl font-medium text-white mb-3">Endereço</h4>
                      <p className="text-white/80 leading-relaxed font-body">
                        ED. River Center<br />
                        R. Cândido Portinari, 27 - SL 605<br />
                        Santa Luíza, Vitória - ES<br />
                        CEP: 29045-415
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-navy text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-xl font-medium text-white mb-3">Telefone</h4>
                      <p className="text-white/80 font-body text-lg">(27) 99696-7111</p>
                      <p className="text-white/60 text-sm font-body mt-1">WhatsApp disponível</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-navy text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-xl font-medium text-white mb-3">Horário de Atendimento</h4>
                      <div className="space-y-2 font-body">
                        <div className="flex justify-between items-center text-white/80">
                          <span>Segunda a Sexta</span>
                          <span className="text-gold font-medium">08h às 17h</span>
                        </div>
                        <div className="flex justify-between items-center text-white/60">
                          <span>Sábados</span>
                          <span>Sob agendamento</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Botão de ação premium */}
                <div className="mt-10">
                  <a 
                    href="https://wa.me/5527996967111" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-whatsapp py-4 px-6 text-lg animate-glow text-center block"
                  >
                    <i className="fab fa-whatsapp text-2xl mr-3"></i>
                    Agendar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mapa premium */}
            <div className="animate-on-scroll">
              <div className="glass-effect rounded-2xl p-8 floating-card">
                <h3 className="font-heading text-3xl font-medium text-white mb-8">Nossa Localização</h3>
                
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.9858624!2d-40.3052844!3d-20.310618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+C%C3%A2ndido+Portinari%2C+27+-+Santa+Lu%C3%ADza%2C+Vit%C3%B3ria+-+ES%2C+29045-415!5e0!3m2!1spt-BR!2sbr!4v1"
                      width="100%" 
                      height="350" 
                      style={{ 
                        border: 0,
                        filter: 'hue-rotate(200deg) saturate(60%) brightness(95%) contrast(120%)'
                      }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do consultório Dr. Rodrigo Vieira Pacheco - R. Cândido Portinari, 27 - Santa Luíza, Vitória ES"
                    />
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a 
                    href="https://maps.google.com/?q=R.+Cândido+Portinari,+27+-+Santa+Luíza,+Vitória+-+ES,+29045-415"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors duration-300 font-medium font-body"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}
