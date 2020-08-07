import { useState, useEffect } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
