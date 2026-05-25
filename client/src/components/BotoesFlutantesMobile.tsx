import { useState, useEffect } from 'react';

export default function BotoesFlutantesMobile() {
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar se estamos em uma seção com fundo claro - incluindo procedimentos
      const lightSections = ['sobre', 'formacao', 'procedimentos'];
      let onLightSection = false;
      
      for (const sectionId of lightSections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Se a seção está ocupando a área inferior da tela (mais responsivo)
          if (rect.bottom >= window.innerHeight - 120 && rect.top <= window.innerHeight - 50) {
            onLightSection = true;
            break;
          }
        }
      }

      setIsOnLightSection(onLightSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Verificar posição inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Container dos botões */}
      <div className={`backdrop-blur-lg shadow-lg transition-all duration-300 ${
        isOnLightSection 
          ? 'bg-white/98 border-t border-gray-300' 
          : 'bg-navy/95 border-t border-white/20'
      }`}>
        <div className="flex items-center justify-around py-3 px-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/dr.rodrigovp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 p-2 group"
            aria-label="Instagram"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              isOnLightSection ? 'text-gray-800' : 'text-white'
            }`}>Instagram</span>
          </a>

          {/* Telefone */}
          <a
            href="tel:+5527996967111"
            className="flex flex-col items-center gap-1 p-2 group"
            aria-label="Telefone"
          >
            <div className="w-12 h-12 bg-royal-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              isOnLightSection ? 'text-gray-800' : 'text-white'
            }`}>Telefone</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5527996967111"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 p-2 group"
            aria-label="WhatsApp"
          >
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse">
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
              </svg>
            </div>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              isOnLightSection ? 'text-gray-800' : 'text-white'
            }`}>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}