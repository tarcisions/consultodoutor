import logoTransparente from '@assets/rodrigo_vieira_pacheco_logo_transparente.png';

export default function Rodape() {
  return (
    <footer className="bg-navy text-white py-8 relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-10 w-24 h-24 bg-gold/3 rounded-full blur-xl"></div>
        <div className="absolute bottom-5 right-10 w-32 h-32 bg-royal-blue/3 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            {/* Logo assinatura como destaque */}
            <div className="mb-4">
              <img 
                src={logoTransparente} 
                alt="Dr. Rodrigo Vieira Pacheco - Assinatura" 
                className="h-16 mx-auto filter drop-shadow-lg"
              />
            </div>
            <p className="text-white/70 font-accent mb-4">Cirurgião Dentista - CRO-ES</p>
            
            {/* Informações de contato compactas */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white/60 text-sm mb-6">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-gold"></i>
                <span className="font-body">Santa Luíza, Vitória - ES</span>
              </div>
              <div className="hidden sm:block text-white/30">•</div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-gold"></i>
                <span className="font-body">(27) 99696-7111</span>
              </div>
            </div>
            
            {/* Redes sociais compactas */}
            <div className="flex justify-center space-x-4 mb-6">
              <a 
                href="https://wa.me/5527996967111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-white"></i>
              </a>
            </div>
          </div>
          
          {/* Linha final compacta */}
          <div className="border-t border-white/10 pt-4">
            <div className="text-center text-white/50 text-xs font-body">
              © 2024 Dr. Rodrigo Vieira Pacheco • Todos os direitos reservados • CRO-ES Ativo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
