import { useEffect } from 'react';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // For smooth scroll to top on every route change
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};
