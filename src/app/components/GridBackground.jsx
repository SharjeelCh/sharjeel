'use client';

import { useEffect } from 'react';

const GridBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      // Update CSS variables
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Modern mesh gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black" />
      
      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(255 255 255 / 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(255 255 255 / 0.15) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
      />

      {/* Interactive grid highlight effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06) 0%, transparent 25%)',
        }}
      />
    </>
  );
};

export default GridBackground; 