import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "نتا — اینترنتت، برای کاری که می‌خوای | Neta.land",
  description: "دسترسی راحت‌تر به سرویس‌های پشتیبانی‌شده، DNS سریع و پایدار، و اتصال بهینه‌تر برای بازی؛ همه در یک تجربه ساده و شفاف.",
  metadataBase: new URL("https://neta.land"),
  openGraph: {
    title: "نتا — پلتفرم بهینه‌سازی و اتصال هوشمند اینترنت",
    description: "دسترسی به سرویس‌ها، DNS سریع و بهینه‌سازی اتصال بازی",
    url: "https://neta.land",
    siteName: "Neta.land",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} dark`}>
      <body className="min-h-screen bg-[#0B1220] text-[#E6EDF7] font-[family-name:var(--font-vazirmatn)] antialiased selection:bg-[#38D9F5]/20 selection:text-[#38D9F5] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
