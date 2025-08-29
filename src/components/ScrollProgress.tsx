import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress =
        window.pageYOffset /
        (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(currentProgress * 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        transform: `scaleX(${scrollProgress / 100})`,
      }}
    />
  );
};