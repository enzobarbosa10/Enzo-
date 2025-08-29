
import React from 'react';

const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-1.5c1.373-1.373 1.5-3.51.126-4.884a4.505 4.505 0 0 0-6.262 0c-1.374 1.374-1.247 3.51.126 4.884A6.01 6.01 0 0 0 12 12.75Zm0 0-1.5-1.5m1.5 1.5v5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21a3 3 0 0 1 6 0" />
  </svg>
);

export default LightbulbIcon;
