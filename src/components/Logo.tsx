import React, { useState } from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = false
}) => {
  const [hasError, setHasError] = useState(false);
  const isLight = variant === 'light';
  const baseUrl = import.meta.env.BASE_URL;

  // Official logo asset selection:
  // variant='light' is used on dark backgrounds (e.g. Footer)
  // variant='dark' is used on light backgrounds (e.g. Navbar)
  const logoSrc = isLight
    ? `${baseUrl}logo/pathtodev-logo-horizontal-dark.png`
    : `${baseUrl}logo/pathtodev-logo-horizontal.png`;

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      {!hasError ? (
        <div className="flex flex-col items-start">
          <img
            src={logoSrc}
            alt="PathToDev - Find Your Path in Tech"
            onError={() => setHasError(true)}
            className="h-7 sm:h-8 md:h-8.5 w-auto max-w-[175px] sm:max-w-[210px] md:max-w-[230px] object-contain transition-opacity duration-200"
          />
          {showTagline && (
            <span
              className={`text-[11px] font-medium tracking-wide mt-1.5 ${
                isLight ? 'text-slate-300' : 'text-brand-muted'
              }`}
            >
              Find Your Path in Tech.
            </span>
          )}
        </div>
      ) : (
        /* Fallback rendering official monogram icon and typography */
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img
              src={isLight ? `${baseUrl}brand/icons/pathtodev-icon-white.png` : `${baseUrl}brand/icons/pathtodev-icon.png`}
              alt="PathToDev Monogram"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
            />
            <span
              className={`text-lg sm:text-xl font-extrabold tracking-tight font-sans leading-none ${
                isLight ? 'text-white' : 'text-brand-navy'
              }`}
            >
              Path<span className="text-brand-blue">To</span>Dev
            </span>
          </div>
          {showTagline && (
            <span
              className={`text-[11px] font-medium tracking-wide mt-1.5 ${
                isLight ? 'text-slate-300' : 'text-brand-muted'
              }`}
            >
              Find Your Path in Tech.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
