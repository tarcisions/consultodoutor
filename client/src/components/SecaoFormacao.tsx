export default function SecaoFormacao() {
  const formacoes = [
    {
      icone: "fas fa-graduation-cap",
      titulo: "Graduação em Odontologia",
      instituicao: "Universidade Federal do Espírito Santo - UFES",
      ano: "2005-2009",
      descricao: "Formação completa em odontologia com ênfase em técnicas modernas e atendimento humanizado, incluindo estágios em clínicas especializadas."
    },
    {
      icone: "fas fa-user-md",
      titulo: "Especialização em Implantodontia",
      instituicao: "Instituto de Especialização em Odontologia",
      ano: "2010-2012",
      descricao: "Especialização focada em reabilitação oral com implantes dentários e próteses modernas, com certificação em técnicas cirúrgicas avançadas."
    },
    {
      icone: "fas fa-microscope",
      titulo: "Pós-Graduação em Periodontia",
      instituicao: "Associação Brasileira de Odontologia - ABO",
      ano: "2013-2014",
      descricao: "Aprofundamento em tratamentos periodontais e cirurgias gengivais com foco em estética e funcionalidade."
    },
    {
      icone: "fas fa-award",
      titulo: "Atualização Contínua",
      instituicao: "Cursos e Congressos Nacionais e Internacionais",
      ano: "2015-2026",
      descricao: "Participação regular em eventos científicos para manter-se atualizado com as mais recentes técnicas e tecnologias em odontologia."
    }
  ];

  return (
    <section id="formacao" className="py-16 lg:py-20 gradient-bg relative overflow-hidden">
      {/* Elementos decorativos premium */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block mb-6">
              <span className="text-gold font-accent text-sm tracking-widest uppercase bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                Qualificação Profissional
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              Formação <span className="text-gold">Acadêmica</span>
            </h2>
            <div className="section-divider w-32 mx-auto mb-8"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-body">
              Excelência educacional e atualização constante para oferecer os melhores tratamentos
            </p>
          </div>
          
          {/* Timeline de formação */}
          <div className="space-y-8">
            {formacoes.map((formacao, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-8 animate-on-scroll floating-card group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Ícone e ano */}
                  <div className="flex items-center gap-6 lg:flex-col lg:text-center lg:min-w-[120px]">
                    <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className={`${formacao.icone} text-navy text-2xl`}></i>
                    </div>
                    <div className="text-gold font-accent font-medium text-sm tracking-wider">
                      {formacao.ano}
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl font-medium text-white mb-2 group-hover:text-gold transition-colors duration-300">
                        {formacao.titulo}
                      </h3>
                      <p className="text-gold font-medium text-lg font-accent">{formacao.instituicao}</p>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed font-body">
                      {formacao.descricao}
                    </p>
                  </div>
                  
                  {/* Badge de destaque */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-3 h-3 bg-gold rounded-full animate-glow"></div>
                  </div>
                </div>
                
                {/* Linha conectora (exceto no último item) */}
                {index < formacoes.length - 1 && (
                  <div className="hidden lg:block mt-8 ml-8">
                    <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="inline-flex items-center gap-4 glass-effect px-8 py-4 rounded-2xl">
              <i className="fas fa-certificate text-gold text-xl"></i>
              <span className="text-white font-medium font-body">
                Registro CRO-ES em dia • Formação continuada ativa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
