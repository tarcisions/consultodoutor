export default function SecaoProcedimentos() {
  const procedimentos = [
    {
      icone: "fas fa-tooth",
      titulo: "Profilaxia e Prevenção",
      descricao: "Limpeza profissional completa, aplicação de flúor e orientações para manutenção da saúde bucal.",
      destaque: false
    },
    {
      icone: "fas fa-sparkles",
      titulo: "Clareamento Dental",
      descricao: "Técnicas modernas de clareamento para um sorriso mais branco e radiante com total segurança.",
      destaque: false
    },
    {
      icone: "fas fa-cog",
      titulo: "Implantes Dentários",
      descricao: "Reabilitação oral completa com implantes de titânio e próteses de alta qualidade.",
      destaque: true
    },
    {
      icone: "fas fa-gem",
      titulo: "Restaurações Estéticas",
      descricao: "Restaurações com materiais de última geração para resultados naturais e duradouros.",
      destaque: false
    },
    {
      icone: "fas fa-child",
      titulo: "Odontopediatria",
      descricao: "Cuidado especializado e humanizado para a saúde bucal das crianças.",
      destaque: false
    },
    {
      icone: "fas fa-align-center",
      titulo: "Ortodontia",
      descricao: "Correção do posicionamento dos dentes com aparelhos modernos e discretos.",
      destaque: true
    },
    {
      icone: "fas fa-cut",
      titulo: "Cirurgias Orais",
      descricao: "Extrações, cirurgias periodontais e outros procedimentos cirúrgicos especializados.",
      destaque: false
    },
    {
      icone: "fas fa-crown",
      titulo: "Próteses Dentárias",
      descricao: "Próteses fixas, removíveis e sobre implantes para completa reabilitação oral.",
      destaque: false
    },
    {
      icone: "fas fa-hand-holding-heart",
      titulo: "Harmonização Facial",
      descricao: "Procedimentos estéticos faciais para harmonizar o sorriso com as características do rosto.",
      destaque: true
    }
  ];

  return (
    <section id="procedimentos" className="py-16 lg:py-20 bg-platinum relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-royal-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block mb-6">
              <span className="text-royal-blue font-accent text-sm tracking-widest uppercase bg-royal-blue/10 px-4 py-2 rounded-full border border-royal-blue/20">
                Nossos Serviços
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-navy mb-6">
              Tratamentos <span className="text-gold">Especializados</span>
            </h2>
            <div className="section-divider w-32 mx-auto mb-8"></div>
            <p className="text-charcoal/70 text-lg max-w-3xl mx-auto font-body">
              Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta e atendimento personalizado
            </p>
          </div>
          
          {/* Grid de procedimentos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedimentos.map((procedimento, index) => (
              <div 
                key={index}
                className={`premium-card p-8 floating-card group relative overflow-hidden ${
                  procedimento.destaque ? 'ring-2 ring-gold/20' : ''
                }`}
              >
                {/* Badge de destaque */}
                {procedimento.destaque && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                      DESTAQUE
                    </div>
                  </div>
                )}
                
                {/* Ícone */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  procedimento.destaque ? 'bg-gold' : 'bg-royal-blue'
                }`}>
                  <i className={`${procedimento.icone} text-2xl ${
                    procedimento.destaque ? 'text-navy' : 'text-gold'
                  }`}></i>
                </div>
                
                {/* Conteúdo */}
                <div className="text-center space-y-4">
                  <h3 className="font-heading text-xl md:text-2xl font-medium text-navy mb-4 group-hover:text-royal-blue transition-colors duration-300">
                    {procedimento.titulo}
                  </h3>
                  
                  <p className="text-charcoal/70 leading-relaxed font-body">
                    {procedimento.descricao}
                  </p>
                </div>
                
                {/* Efeito hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="premium-card p-8 max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-medium text-navy mb-4">
                Precisa de um Orçamento Personalizado?
              </h3>
              <p className="text-charcoal/70 mb-6 font-body">
                Entre em contato conosco para uma consulta detalhada e orçamento sem compromisso
              </p>
              <a 
                href="https://wa.me/5527996967111" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
