import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'muted' | 'interactive' | 'glow-cyan' | 'glow-violet' | 'glow-amber';
}

export function Card({
  className,
  variant = 'default',
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-[#121D30] border-[#26364D]',
    muted: 'bg-[#18263B] border-[#26364D]',
    interactive:
      'bg-[#121D30] border-[#26364D] hover:border-[#38D9F5]/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]',
    'glow-cyan':
      'bg-[#121D30] border-[#38D9F5]/30 shadow-[0_0_35px_-10px_rgba(56,217,245,0.2)]',
    'glow-violet':
      'bg-[#121D30] border-[#8B7CFF]/30 shadow-[0_0_35px_-10px_rgba(139,124,255,0.2)]',
    'glow-amber':
      'bg-[#121D30] border-[#F5A65B]/30 shadow-[0_0_35px_-10px_rgba(245,166,91,0.2)]',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border p-5 md:p-6 transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col gap-1.5 mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-lg md:text-xl font-bold text-[#E6EDF7] tracking-tight leading-[1.35]',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-sm text-[#A9B7CB] leading-[1.7]', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-6 pt-4 border-t border-[#26364D]/60 flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
}
