/* eslint-disable no-confusing-arrow */
import { useEffect, useState } from 'react';

export default function useMobile() {
  const [mobileView, setMobileView] = useState(false);
  const [tabletView, setTabletView] = useState(false);

  useEffect(() => {
    const setResponsivenessMobile = () => window.innerWidth <= 600
      ? setMobileView(true)
      : setMobileView(false);

    const setResponsivenessTablet = () => window.innerWidth > 601 && window.innerWidth <= 1024
      ? setTabletView(true)
      : setTabletView(false);

    setResponsivenessMobile();

    window.addEventListener('resize', () => {
      setResponsivenessMobile();
      setResponsivenessTablet();
    });
  }, []);

  return { mobileView, tabletView };
}
