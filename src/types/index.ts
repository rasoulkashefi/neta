export type ServiceCategory = 'ai' | 'dev' | 'design' | 'streaming' | 'gaming' | 'productivity';

export type ServiceStatus = 'supported' | 'partial' | 'unverified';

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  persianName: string;
  category: ServiceCategory;
  categoryName: string;
  status: ServiceStatus;
  statusLabel: string;
  description: string;
  detailedGuide?: string;
  protocols: string[];
  platforms: string[];
  endpoint: string;
  port: number | string;
  estimatedPingImprovement?: string;
}

export interface GameRegion {
  id: string;
  name: string;
  location: string;
  standardPing: number;
  optimizedPing: number;
  typicalJitter: number;
  packetLoss: number;
  status: 'optimal' | 'stable' | 'limited';
}

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  genre: string;
  icon: string;
  regions: GameRegion[];
  optimizationAvailable: boolean;
  notes: string;
}

export type DevicePlatform = 'windows' | 'android' | 'ios' | 'macos' | 'router' | 'console';

export interface SetupStepData {
  step: number;
  title: string;
  description: string;
  codeSnippet?: string;
}

export interface DeviceSetupGuide {
  platform: DevicePlatform;
  title: string;
  subtitle: string;
  iconName: string;
  difficulty: 'آسان' | 'متوسط' | 'پیشرفته';
  estimatedTime: string;
  steps: SetupStepData[];
  recommendedDns: {
    ipv4Primary: string;
    ipv4Secondary: string;
    ipv6Primary: string;
    ipv6Secondary: string;
    dohUrl: string;
    dotHostname: string;
  };
}

export interface DiagnosticCategoryState {
  id: 'dns' | 'access' | 'gaming';
  title: string;
  persianTitle: string;
  status: 'idle' | 'running' | 'success' | 'partial' | 'error';
  metricValue: string | null;
  metricLabel: string;
  detail: string;
  rawMs?: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  persianName: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  limitations: string[];
  buttonText: string;
  buttonHref: string;
  capabilityTarget: 'general' | 'personal' | 'gaming';
}

export interface PoPNode {
  id: string;
  name: string;
  city: string;
  country: string;
  countryCode: string;
  status: 'operational' | 'degraded' | 'maintenance';
  statusText: string;
  latencyMs: number;
  loadPercentage: number;
  services: {
    dns: boolean;
    access: boolean;
    gamingRelay: boolean;
  };
}

export interface IncidentReport {
  id: string;
  date: string;
  title: string;
  status: 'resolved' | 'investigating' | 'monitoring';
  statusText: string;
  affected: string[];
  impact: string;
  resolutionTime: string;
  description: string;
}

export interface HelpArticle {
  slug: string;
  title: string;
  category: 'onboarding' | 'dns' | 'gaming' | 'access' | 'troubleshooting';
  categoryLabel: string;
  readTime: string;
  excerpt: string;
  content: string;
}
