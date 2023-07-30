import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      if (document.referrer === window.location.href) {
        return;
      }
      window.scrollTo(0, 0);
    };

    const removeListener = () => {
      window.removeEventListener('popstate', handleScrollToTop);
    };

    handleScrollToTop();
    window.addEventListener('popstate', handleScrollToTop);

    return removeListener;
  }, [pathname]);

  return <Outlet />;
};

export default ScrollToTop;
