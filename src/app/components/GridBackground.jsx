'use client';

import { useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

const GridBackground = () => {
  const handleMouseMove = useCallback(
    debounce((e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      // Update CSS variables
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    }, 16), // 60fps
    []
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      handleMouseMove.cancel(); // Cancel any pending debounced calls
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* Modern mesh gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black" />
      
      {/* Subtle grid overlay - using transform for better performance */}
      <div 
        className="fixed inset-0 opacity-30 will-change-transform"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(255 255 255 / 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(255 255 255 / 0.15) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
      />

      {/* Interactive grid highlight effect - using transform for better performance */}
      <div 
        className="fixed inset-0 pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06) 0%, transparent 25%)',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
      />
    </>
  );
};

export default GridBackground; 