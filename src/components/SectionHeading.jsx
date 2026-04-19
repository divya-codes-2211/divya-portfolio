import React from 'react';

const SectionHeading = ({ subtitle, title }) => {
  return (
    <div className="mb-16">
      <span className="text-xs font-bold tracking-[0.4em] text-purple-600 uppercase mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
