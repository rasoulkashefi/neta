import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/marketing/Hero';
import { ConnectionTest } from '@/components/marketing/ConnectionTest';
import { CapabilityCards } from '@/components/marketing/CapabilityCards';
import { ServiceDirectoryPreview } from '@/components/marketing/ServiceDirectoryPreview';
import { GamingSection } from '@/components/marketing/GamingSection';
import { SetupWizardSection } from '@/components/marketing/SetupWizardSection';
import { PricingSection } from '@/components/marketing/PricingSection';
import { TrustSection } from '@/components/marketing/TrustSection';
import { FAQSection } from '@/components/marketing/FAQSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1220] text-[#E6EDF7]">
      {/* Shared Public Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: Connection Test */}
        <ConnectionTest />

        {/* Section 03: Three Capabilities (Access, DNS, Gaming) */}
        <CapabilityCards />

        {/* Section 04: Supported Services */}
        <ServiceDirectoryPreview />

        {/* Section 05: Gaming */}
        <GamingSection />

        {/* Section 06: Setup Wizard */}
        <SetupWizardSection />

        {/* Section 07: Pricing */}
        <PricingSection />

        {/* Section 08: Trust and Transparency */}
        <TrustSection />

        {/* Section 09: FAQ and Final CTA */}
        <FAQSection />
      </main>

      {/* Shared Public Footer */}
      <Footer />
    </div>
  );
}
