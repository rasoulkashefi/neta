import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { PlatformHero } from '@/components/marketing/PlatformHero';
import { ProductSpectrum } from '@/components/marketing/ProductSpectrum';
import { ConnectionTest } from '@/components/marketing/ConnectionTest';
import { DeveloperGateway } from '@/components/marketing/DeveloperGateway';
import { GamingSection } from '@/components/marketing/GamingSection';
import { MarketplaceBanner } from '@/components/marketing/MarketplaceBanner';
import { SetupWizardSection } from '@/components/marketing/SetupWizardSection';
import { PricingSection } from '@/components/marketing/PricingSection';
import { TrustSection } from '@/components/marketing/TrustSection';
import { FAQSection } from '@/components/marketing/FAQSection';

export const metadata = {
  title: 'نتا — پلتفرم یکپارچه محصولات دیجیتال، هوش مصنوعی و اتصال | Neta.land',
  description: 'یک بستر متمرکز برای دسترسی به مدل‌های هوش مصنوعی (Unified AI API)، بهینه‌سازی اتصال و پینگ بازی، DNS سریع Anycast و زیرساخت‌های ابری.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220] text-[#E6EDF7]">
      {/* Shared Public Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Section 01: Multi-Product Platform Hero */}
        <PlatformHero />

        {/* Section 02: The Three Product Domains (Connectivity, AI, Cloud/Marketplace) */}
        <ProductSpectrum />

        {/* Section 03: Live Connection & DNS Diagnostics */}
        <div id="test">
          <ConnectionTest />
        </div>

        {/* Section 04: Developer Gateway (Unified AI API & Code Snippets) */}
        <DeveloperGateway />

        {/* Section 05: Gaming & Low-Latency Relays */}
        <GamingSection />

        {/* Section 06: Marketplace & Partners Announcement */}
        <MarketplaceBanner />

        {/* Section 07: Device Setup Wizard */}
        <SetupWizardSection />

        {/* Section 08: Pricing & Plans */}
        <PricingSection />

        {/* Section 09: Transparency & Trust */}
        <TrustSection />

        {/* Section 10: FAQ */}
        <FAQSection />
      </main>

      {/* Shared Public Footer */}
      <Footer />
    </div>
  );
}
