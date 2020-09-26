import { useLocation } from 'gatsby';
import { useEffect } from 'react';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') return;

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
