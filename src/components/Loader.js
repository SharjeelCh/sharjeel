'use client';

import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        <div className="loader-ball"></div>
        <div className="loader-ball"></div>
        <div className="loader-ball"></div>
        <div className="loader-ball"></div>
      </div>
    </div>
  );
};

export default Loader; 