
import React from 'react';

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.92a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 2.25-2.25h12.15c1.24 0 2.25 1.01 2.25 2.25Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V15M12 9.75V7.5M15 12.75V15M15 9.75V7.5M9 12.75V15M9 9.75V7.5M20.25 9.75A2.25 2.25 0 0 0 18 7.5H6A2.25 2.25 0 0 0 3.75 9.75v.41A2.25 2.25 0 0 0 6 12.42h12.15a2.25 2.25 0 0 0 2.25-2.25v-.41Z" />
  </svg>
);

export default BriefcaseIcon;
