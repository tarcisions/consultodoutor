import { useState, useEffect } from 'react';
import { useScrollSuave } from '../hooks/useScrollSuave';
import logoTransparente from '@assets/rodrigo_vieira_pacheco_logo_transparente.png';

export default function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);
  useScrollSuave();

  useEffect(() => {
    const handleScroll = () => {
      // Detectar se estamos em uma seção com fundo claro - incluindo procedimentos
      const lightSections = ['sobre', 'formacao', 'procedimentos'];
      let onLightSection = false;
      
      for (const sectionId of lightSections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Se a seção está ocupando a área da navegação (mais sensível)
          if (rect.top <= 80 && rect.bottom >= 50) {
            onLightSection = true;
            break; // Sair do loop quando encontrar
          }
        }
      }

      setIsOnLightSection(onLightSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Verificar posição inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isOnLightSection 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-navy/90 backdrop-blur-lg border-b border-white/20'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Brand */}
          <div className="flex items-center">
            <div className="block">
              <div className="logo-signature text-xl lg:text-2xl font-medium transition-colors duration-300 text-gold">
                Dr. Rodrigo Vieira Pacheco
              </div>
              <div className={`text-sm font-accent transition-colors duration-300 ${
                isOnLightSection ? 'text-navy' : 'text-white/80'
              }`}>Cirurgião Dentista</div>
            </div>
          </div>
          
          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className={`hover:text-gold transition-all duration-300 font-medium font-accent text-sm tracking-wide uppercase ${
              isOnLightSection ? 'text-navy/90' : 'text-white/90'
            }`}>
              Início
            </a>
            <a href="#sobre" className={`hover:text-gold transition-all duration-300 font-medium font-accent text-sm tracking-wide uppercase ${
              isOnLightSection ? 'text-navy/90' : 'text-white/90'
            }`}>
              Sobre
            </a>
            <a href="#formacao" className={`hover:text-gold transition-all duration-300 font-medium font-accent text-sm tracking-wide uppercase ${
              isOnLightSection ? 'text-navy/90' : 'text-white/90'
            }`}>
              Formação
            </a>
            <a href="#procedimentos" className={`hover:text-gold transition-all duration-300 font-medium font-accent text-sm tracking-wide uppercase ${
              isOnLightSection ? 'text-navy/90' : 'text-white/90'
            }`}>
              Tratamentos
            </a>
            <a href="#contato" className="btn-whatsapp text-sm py-2 px-4">
              <i className="fab fa-whatsapp text-lg"></i>
              Agendar
            </a>
          </div>
          
          {/* Botão do Menu Mobile */}
          <button 
            onClick={toggleMenu}
            className={`lg:hidden hover:text-gold p-2 transition-colors duration-300 ${
              isOnLightSection ? 'text-navy/90' : 'text-white/90'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuAberto ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Navegação Mobile */}
        {menuAberto && (
          <div className={`lg:hidden rounded-2xl mt-4 mb-4 overflow-hidden shadow-lg ${
            isOnLightSection 
              ? 'bg-white border border-gray-200' 
              : 'glass-effect border border-white/10'
          }`}>
            <div className="flex flex-col">
              <a 
                href="#inicio" 
                onClick={fecharMenu}
                className={`hover:text-gold transition-all duration-300 font-medium py-4 px-6 border-b ${
                  isOnLightSection 
                    ? 'text-navy/90 hover:bg-gray-50 border-gray-200' 
                    : 'text-white/90 hover:bg-white/5 border-white/10'
                }`}
              >
                Início
              </a>
              <a 
                href="#sobre" 
                onClick={fecharMenu}
                className={`hover:text-gold transition-all duration-300 font-medium py-4 px-6 border-b ${
                  isOnLightSection 
                    ? 'text-navy/90 hover:bg-gray-50 border-gray-200' 
                    : 'text-white/90 hover:bg-white/5 border-white/10'
                }`}
              >
                Sobre
              </a>
              <a 
                href="#formacao" 
                onClick={fecharMenu}
                className={`hover:text-gold transition-all duration-300 font-medium py-4 px-6 border-b ${
                  isOnLightSection 
                    ? 'text-navy/90 hover:bg-gray-50 border-gray-200' 
                    : 'text-white/90 hover:bg-white/5 border-white/10'
                }`}
              >
                Formação
              </a>
              <a 
                href="#procedimentos" 
                onClick={fecharMenu}
                className={`hover:text-gold transition-all duration-300 font-medium py-4 px-6 border-b ${
                  isOnLightSection 
                    ? 'text-navy/90 hover:bg-gray-50 border-gray-200' 
                    : 'text-white/90 hover:bg-white/5 border-white/10'
                }`}
              >
                Tratamentos
              </a>
              <a 
                href="https://wa.me/5527996967111" 
                onClick={fecharMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mx-6 my-4"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}