import { useEffect } from "react";
import Navegacao from "./components/Navegacao";
import SecaoHero from "./components/SecaoHero";
import SecaoSobre from "./components/SecaoSobre";
import SecaoFormacao from "./components/SecaoFormacao";
import SecaoProcedimentos from "./components/SecaoProcedimentos";
import SecaoContato from "./components/SecaoContato";
import Rodape from "./components/Rodape";
import BotoesFlutantesMobile from "./components/BotoesFlutantesMobile";

export default function App() {
  useEffect(() => {
    // Intersection Observer para animações
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observar elementos com classe de animação
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navegacao />
      <SecaoHero />
      <SecaoSobre />
      <SecaoFormacao />
      <SecaoProcedimentos />
      <SecaoContato />
      <Rodape />
      <BotoesFlutantesMobile />
      
      {/* Botão flutuante do WhatsApp para Desktop */}
      <a 
        href="https://wa.me/5527996967111" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 animate-bounce-gentle hidden lg:flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
}
