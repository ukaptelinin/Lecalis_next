import { useEffect } from 'react';
import { useRouter } from 'next/compat/router';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    if (router && typeof window !== 'undefined') {
      const hash = router.asPath.split('#')[1];
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [router]);

  return null;
};

export default ScrollToTop;
