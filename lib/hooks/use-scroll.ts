import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', () => {
      if (mounted) {
        setScrollY(window.pageYOffset);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return {
    scrollY,
  };
}
