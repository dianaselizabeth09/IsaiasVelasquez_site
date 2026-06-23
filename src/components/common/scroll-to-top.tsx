import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');

      window.requestAnimationFrame(() => {
        const element = document.getElementById(elementId);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};