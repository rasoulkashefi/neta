import React from 'react';
import { AppNav } from '@/components/navigation/AppNav';

export const metadata = {
  title: 'پنل مدیریت نتا — Neta.land',
  description: 'داشبورد کاربری مدیریت اتصال، دی‌ان‌اس و بهینه‌سازی شبکه نتا.',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppNav>{children}</AppNav>;
}
