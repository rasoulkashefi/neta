'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpenIndex?: number;
}

export function Accordion({
  items,
  className,
  defaultOpenIndex = 0,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    if (defaultOpenIndex >= 0 && defaultOpenIndex < items.length) {
      return [items[defaultOpenIndex].id];
    }
    return [];
  });

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={cn('divide-y divide-[#26364D]/80 border-y border-[#26364D]', className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="py-4 md:py-5">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between text-start gap-4 text-base md:text-lg font-semibold text-[#E6EDF7] hover:text-[#38D9F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38D9F5] rounded-lg p-1.5"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#38D9F5]/70 w-5">
                    0{index + 1}
                  </span>
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-[#A9B7CB] shrink-0 transition-transform duration-200',
                    isOpen && 'rotate-180 text-[#38D9F5]'
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                'pt-3 ps-8 pe-4 text-sm md:text-base text-[#A9B7CB] leading-[1.8] transition-all',
                !isOpen && 'hidden'
              )}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
