import { useEffect } from 'react';

export function useScrollSuave() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          const navHeight = 80; // Altura da navegação fixa
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Adicionar listener para todos os links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  // Função para destacar navegação ativa
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');

    const highlightNavigation = () => {
      let current = '';
      const scrollPosition = window.pageYOffset + 100;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      navItems.forEach(item => {
        item.classList.remove('text-gold');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('text-gold');
        }
      });
    };

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Executar na inicialização

    return () => window.removeEventListener('scroll', highlightNavigation);
  }, []);
}
