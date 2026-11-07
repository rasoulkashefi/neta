'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'access' | 'gaming';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 min-h-[44px] min-w-[44px] whitespace-nowrap';

    const variants = {
      primary:
        'bg-[#38D9F5] text-[#0B1220] hover:bg-[#5be0f7] shadow-[0_0_20px_rgba(56,217,245,0.25)] focus-visible:ring-[#38D9F5] font-semibold',
      secondary:
        'bg-[#18263B] text-[#E6EDF7] hover:bg-[#20314a] border border-[#26364D] hover:border-[#38D9F5]/40 focus-visible:ring-[#38D9F5]',
      outline:
        'bg-transparent text-[#E6EDF7] border border-[#26364D] hover:border-[#38D9F5] hover:bg-[#38D9F5]/5 focus-visible:ring-[#38D9F5]',
      ghost:
        'bg-transparent text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/60 focus-visible:ring-[#38D9F5]',
      access:
        'bg-[#8B7CFF] text-white hover:bg-[#9e92ff] shadow-[0_0_20px_rgba(139,124,255,0.25)] focus-visible:ring-[#8B7CFF] font-semibold',
      gaming:
        'bg-[#F5A65B] text-[#0B1220] hover:bg-[#f7b578] shadow-[0_0_20px_rgba(245,166,91,0.25)] focus-visible:ring-[#F5A65B] font-semibold',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-2 gap-1.5 h-9',
      md: 'text-sm px-5 py-2.5 gap-2 h-11',
      lg: 'text-base px-6 py-3.5 gap-2.5 h-13',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin ms-1" />
        ) : (
          rightIcon && <span className="shrink-0">{rightIcon}</span>
        )}
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">{children}</span>
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
