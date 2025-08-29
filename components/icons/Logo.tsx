
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto text-primary" }) => (
  <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 30C14.4772 30 10 25.5228 10 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <text x="40" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">Connecta</text>
  </svg>
);

export default Logo;
