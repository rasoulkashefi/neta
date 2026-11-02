import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'violet' | 'amber' | 'success' | 'warning' | 'danger' | 'neutral';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export function Badge({
  className,
  variant = 'cyan',
  size = 'md',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    cyan: 'bg-[#38D9F5]/10 text-[#38D9F5] border-[#38D9F5]/30',
    violet: 'bg-[#8B7CFF]/10 text-[#8B7CFF] border-[#8B7CFF]/30',
    amber: 'bg-[#F5A65B]/10 text-[#F5A65B] border-[#F5A65B]/30',
    success: 'bg-[#39C99A]/10 text-[#39C99A] border-[#39C99A]/30',
    warning: 'bg-[#F5B84C]/10 text-[#F5B84C] border-[#F5B84C]/30',
    danger: 'bg-[#F16D7A]/10 text-[#F16D7A] border-[#F16D7A]/30',
    neutral: 'bg-[#18263B] text-[#A9B7CB] border-[#26364D]',
  };

  const dotColors = {
    cyan: 'bg-[#38D9F5]',
    violet: 'bg-[#8B7CFF]',
    amber: 'bg-[#F5A65B]',
    success: 'bg-[#39C99A]',
    warning: 'bg-[#F5B84C]',
    danger: 'bg-[#F16D7A]',
    neutral: 'bg-[#A9B7CB]',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1 font-medium',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border leading-none transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full shrink-0 animate-pulse', dotColors[variant])}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
