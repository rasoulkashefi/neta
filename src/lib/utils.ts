import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLatency(ms: number | null): string {
  if (ms === null) return "--";
  return `${Math.round(ms)} ms`;
}

export function formatPercent(val: number | null): string {
  if (val === null) return "--";
  return `${val.toFixed(1)}%`;
}
