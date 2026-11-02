'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();

    return (
      <div className="w-full space-y-1.5 text-start">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-[#A9B7CB] tracking-wide"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {rightIcon && (
            <div className="absolute end-3.5 text-[#A9B7CB] pointer-events-none flex items-center">
              {rightIcon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={cn(
              'w-full bg-[#121D30] border border-[#26364D] rounded-xl px-4 py-2.5 text-sm text-[#E6EDF7] placeholder-[#64748B] transition-colors',
              'focus:outline-none focus:border-[#38D9F5] focus:ring-1 focus:ring-[#38D9F5]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              rightIcon && 'pe-10',
              leftIcon && 'ps-10',
              error && 'border-[#F16D7A] focus:border-[#F16D7A] focus:ring-[#F16D7A]',
              className
            )}
            {...props}
          />
          {leftIcon && (
            <div className="absolute start-3.5 text-[#A9B7CB] pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}
        </div>
        {error ? (
          <p className="text-xs text-[#F16D7A] font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-[#A9B7CB]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
