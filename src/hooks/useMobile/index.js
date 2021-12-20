/* eslint-disable no-confusing-arrow */
import { useEffect, useState } from 'react';

export default function useMobile() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => window.innerWidth < 1024
      ? setMobileView(true)
      : setMobileView(false);

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return { mobileView };
}
