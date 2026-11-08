import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-soft text-brand-blue border border-brand-blue/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
