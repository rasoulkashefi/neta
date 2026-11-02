import {
  ServiceItem,
  GameItem,
  DeviceSetupGuide,
  PricingPlan,
  PoPNode,
  IncidentReport,
  HelpArticle
} from '@/types';

export const SUPPORTED_SERVICES: ServiceItem[] = [
  {
    id: 'claude',
    slug: 'claude-ai',
    name: 'Claude AI',
    persianName: 'کلود آنتروپیک',
    category: 'ai',
    categoryName: 'هوش مصنوعی',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'دسترسی پایدار و مستقیم به وب‌اپلیکیشن، کنسول و API آنتروپیک بدون قطع اتصال یا خطاهای منطقه‌ای.',
    detailedGuide: 'نتا ترافیک کلاینت‌های مجاز را از طریق پروکسی معکوس لایه ۷ و بازنویسی هدرهای جغرافیایی بدون تغییر محتوا به لبه‌های فرانکفورت هدایت می‌کند.',
    protocols: ['HTTPS', 'WebSocket', 'DoH'],
    platforms: ['Windows', 'Android', 'macOS', 'iOS'],
    endpoint: 'api.anthropic.com',
    port: 443,
    estimatedPingImprovement: 'پایداری بدون Drop'
  },
  {
    id: 'chatgpt',
    slug: 'openai-chatgpt',
    name: 'OpenAI & ChatGPT',
    persianName: 'چت‌جی‌پی‌تی و اوپن‌ای‌آی',
    category: 'ai',
    categoryName: 'هوش مصنوعی',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'رفع محدودیت 403 Forbidden و خطاهای Cloudflare Turnstile برای وب‌سایت و API توسعه‌دهندگان.',
    detailedGuide: 'تفکیک خودکار درخواست‌های احراز هویت SSO از استریم پاسخ توکن‌ها با بهینه‌سازی مسیر TCP.',
    protocols: ['HTTP/2', 'DoH', 'TLS 1.3'],
    platforms: ['Windows', 'Android', 'macOS', 'iOS'],
    endpoint: 'chatgpt.com',
    port: 443,
  },
  {
    id: 'figma',
    slug: 'figma',
    name: 'Figma',
    persianName: 'فیگما',
    category: 'design',
    categoryName: 'طراحی و دیزاین',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'بارگذاری سریع فایل‌های طراحی سنگین، فونت‌های پروژه و کلاود وب‌سوکت مالتی‌پلیر بدون لگ نشانگر.',
    protocols: ['WSS', 'HTTPS'],
    platforms: ['Windows', 'macOS', 'Browser'],
    endpoint: 'www.figma.com',
    port: 443,
    estimatedPingImprovement: 'کاهش ۶۰ میلی‌ثانیه‌ای تاخیر لود'
  },
  {
    id: 'docker',
    slug: 'docker-hub',
    name: 'Docker Hub & Registries',
    persianName: 'داکر هاب و رجیستری‌ها',
    category: 'dev',
    categoryName: 'توسعه نرم‌افزار',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'پول (Pull) مستقیم ایمیج‌های کانتینری بدون خطای توزیع جغرافیایی و تحریم رجیستری‌های رسمی.',
    protocols: ['HTTPS', 'Docker v2 API'],
    platforms: ['Linux', 'Windows', 'macOS', 'Server'],
    endpoint: 'registry-1.docker.io',
    port: 443,
    estimatedPingImprovement: 'دانلود پرسرعت تا ۳ برابر'
  },
  {
    id: 'github',
    slug: 'github-copilot',
    name: 'GitHub & Copilot',
    persianName: 'گیت‌هاب و کوپایلوت',
    category: 'dev',
    categoryName: 'توسعه نرم‌افزار',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'رفع اختلال در دریافت اتوکامپلیت هوش مصنوعی در VS Code و JetBrains بدون قطع پایداری Git Push.',
    protocols: ['SSH', 'HTTPS', 'gRPC'],
    platforms: ['Windows', 'macOS', 'Linux'],
    endpoint: 'api.githubcopilot.com',
    port: 443,
  },
  {
    id: 'spotify',
    slug: 'spotify',
    name: 'Spotify',
    persianName: 'اسپاتیفای',
    category: 'streaming',
    categoryName: 'رسانه و استریم',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'استریم بی‌وقفه صدا با بیت‌ریت ۳۲۰ بدون قطعی هر ۱۴ روزه ناشی از عدم تطابق کشور حساب کاربری.',
    protocols: ['Spirc', 'HTTPS', 'UDP'],
    platforms: ['Windows', 'Android', 'macOS', 'iOS'],
    endpoint: 'ap-gew4.spotify.com',
    port: 4070,
  },
  {
    id: 'discord',
    slug: 'discord',
    name: 'Discord Voice & Gateway',
    persianName: 'دیسکورد و ویس چت',
    category: 'gaming',
    categoryName: 'گیمینگ و ارتباطات',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'اتصال پایدار به سرورهای Voice دیسکورد (RTC Connecting) با پکت‌لاس صفر و پینگ پایین در گفتگو.',
    protocols: ['WebRTC', 'UDP Media', 'WSS'],
    platforms: ['Windows', 'Android', 'macOS', 'iOS'],
    endpoint: 'gateway.discord.gg',
    port: 443,
  },
  {
    id: 'midjourney',
    slug: 'midjourney',
    name: 'Midjourney',
    persianName: 'میدجورنی',
    category: 'ai',
    categoryName: 'هوش مصنوعی',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'دسترسی به پلتفرم وب و وب‌اپ تولید تصویر Midjourney بدون فیلترشدن پرامپت‌ها.',
    protocols: ['HTTPS', 'WSS'],
    platforms: ['Browser', 'Windows', 'macOS'],
    endpoint: 'www.midjourney.com',
    port: 443,
  },
  {
    id: 'steam',
    slug: 'steam-community',
    name: 'Steam & Community',
    persianName: 'استیم و کامیونیتی',
    category: 'gaming',
    categoryName: 'گیمینگ و ارتباطات',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'باز شدن صفحات Store، Community، چت استیم و تسریع دریافت آپدیت بازی‌ها از نزدیک‌ترین CDN.',
    protocols: ['Steam TCP/UDP', 'HTTPS'],
    platforms: ['Windows', 'macOS', 'Steam Deck'],
    endpoint: 'steamcommunity.com',
    port: 443,
  },
  {
    id: 'notion',
    slug: 'notion-ai',
    name: 'Notion AI & Workspaces',
    persianName: 'نوشن و هوش مصنوعی',
    category: 'productivity',
    categoryName: 'بهره‌وری و کار',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'سینک آنی تغییرات داکیومنت‌ها و لود بدون تاخیر قابلیت‌های هوش مصنوعی نوشن.',
    protocols: ['HTTPS', 'WSS'],
    platforms: ['Windows', 'macOS', 'iOS', 'Android'],
    endpoint: 'www.notion.so',
    port: 443,
  },
  {
    id: 'cursor',
    slug: 'cursor-ide',
    name: 'Cursor IDE',
    persianName: 'کِرسِر آی‌دی‌ای',
    category: 'dev',
    categoryName: 'توسعه نرم‌افزار',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'ارتباط مستقیم با مدل‌های کلوود ۳.۷ و جی‌پی‌تی ۴ برای کدنویسی Agentic در محیط ادیتور.',
    protocols: ['gRPC', 'HTTP/2'],
    platforms: ['Windows', 'macOS', 'Linux'],
    endpoint: 'api2.cursor.sh',
    port: 443,
  },
  {
    id: 'huggingface',
    slug: 'hugging-face',
    name: 'Hugging Face Hub',
    persianName: 'هاگینگ فیس',
    category: 'ai',
    categoryName: 'هوش مصنوعی',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'دانلود بدون محدودیت وزن‌های مدل‌های هوش مصنوعی (Weights) و دیتاست‌ها با پهنای باند کامل.',
    protocols: ['HTTPS', 'Git LFS'],
    platforms: ['Linux', 'Windows', 'macOS'],
    endpoint: 'huggingface.co',
    port: 443,
  },
  {
    id: 'canva',
    slug: 'canva',
    name: 'Canva Pro',
    persianName: 'کنوا',
    category: 'design',
    categoryName: 'طراحی و دیزاین',
    status: 'supported',
    statusLabel: 'پشتیبانی کامل',
    description: 'رفع خطاهای بارگذاری تمپلت‌ها و رندر بدون وقفه ابزارهای Magic Studio.',
    protocols: ['HTTPS'],
    platforms: ['Browser', 'Windows', 'Mobile'],
    endpoint: 'www.canva.com',
    port: 443,
  },
  {
    id: 'epicgames',
    slug: 'epic-games-store',
    name: 'Epic Games Store',
    persianName: 'اپیک گیمز استور',
    category: 'gaming',
    categoryName: 'گیمینگ و ارتباطات',
    status: 'partial',
    statusLabel: 'پشتیبانی نسبی',
    description: 'ورود به حساب کاربری و دریافت بازی‌های هفتگی؛ در ساعات پیک ممکن است نیازمند انتخاب سرور واسط دوم باشد.',
    protocols: ['HTTPS', 'Epic Launcher Protocol'],
    platforms: ['Windows', 'macOS'],
    endpoint: 'store.epicgames.com',
    port: 443,
  },
  {
    id: 'adobe-creative',
    slug: 'adobe-cloud',
    name: 'Adobe Creative Cloud',
    persianName: 'ادوبی کریتیو کلاد',
    category: 'design',
    categoryName: 'طراحی و دیزاین',
    status: 'unverified',
    statusLabel: 'در حال بررسی',
    description: 'تست‌های اولیه سینک پریمیر و فوتوشاپ کلاد در حال انجام است؛ تاییدیه نهایی پس از پایداری اعلام خواهد شد.',
    protocols: ['HTTPS'],
    platforms: ['Windows', 'macOS'],
    endpoint: 'creativecloud.adobe.com',
    port: 443,
  }
];

export const GAMES_DIRECTORY: GameItem[] = [
  {
    id: 'valorant',
    slug: 'valorant',
    title: 'Valorant',
    genre: 'Tactical FPS',
    icon: 'Crosshair',
    optimizationAvailable: true,
    notes: 'بهینه‌سازی مسیر روتینگ به گیت‌وی استانبول و فرانکفورت برای رفع خطای ریجکت پکت و تکان خوردن (Jitter).',
    regions: [
      {
        id: 'val-tr',
        name: 'استانبول (ترکیه)',
        location: 'Istanbul, TR',
        standardPing: 78,
        optimizedPing: 46,
        typicalJitter: 2.1,
        packetLoss: 0.0,
        status: 'optimal'
      },
      {
        id: 'val-eu',
        name: 'فرانکفورت (اروپا)',
        location: 'Frankfurt, DE',
        standardPing: 108,
        optimizedPing: 72,
        typicalJitter: 3.4,
        packetLoss: 0.1,
        status: 'optimal'
      },
      {
        id: 'val-bhr',
        name: 'بحرین (خاورمیانه)',
        location: 'Manama, BHR',
        standardPing: 65,
        optimizedPing: 34,
        typicalJitter: 1.8,
        packetLoss: 0.0,
        status: 'optimal'
      }
    ]
  },
  {
    id: 'cs2',
    slug: 'counter-strike-2',
    title: 'Counter-Strike 2',
    genre: 'Competitive FPS',
    icon: 'Target',
    optimizationAvailable: true,
    notes: 'پایداری Sub-tick و تثبیت پکت‌های کلاینت به سرورهای رسمی Valve در وین و فرانکفورت.',
    regions: [
      {
        id: 'cs2-vie',
        name: 'وین (اتریش)',
        location: 'Vienna, AT',
        standardPing: 96,
        optimizedPing: 64,
        typicalJitter: 2.8,
        packetLoss: 0.0,
        status: 'optimal'
      },
      {
        id: 'cs2-fra',
        name: 'فرانکفورت (آلمان)',
        location: 'Frankfurt, DE',
        standardPing: 112,
        optimizedPing: 74,
        typicalJitter: 3.2,
        packetLoss: 0.0,
        status: 'optimal'
      },
      {
        id: 'cs2-dxb',
        name: 'دبی (امارات)',
        location: 'Dubai, UAE',
        standardPing: 68,
        optimizedPing: 38,
        typicalJitter: 1.9,
        packetLoss: 0.0,
        status: 'optimal'
      }
    ]
  },
  {
    id: 'dota2',
    slug: 'dota-2',
    title: 'Dota 2',
    genre: 'MOBA',
    icon: 'Shield',
    optimizationAvailable: true,
    notes: 'کاهش زمان واکنش دستورات (Input Response) روی سرورهای Europe West و Dubai.',
    regions: [
      {
        id: 'dota-dxb',
        name: 'دبی (امارات)',
        location: 'Dubai, UAE',
        standardPing: 62,
        optimizedPing: 36,
        typicalJitter: 1.6,
        packetLoss: 0.0,
        status: 'optimal'
      },
      {
        id: 'dota-euw',
        name: 'اروپا غرب (لوکزامبورگ)',
        location: 'Luxembourg, LU',
        standardPing: 115,
        optimizedPing: 76,
        typicalJitter: 2.9,
        packetLoss: 0.1,
        status: 'optimal'
      }
    ]
  },
  {
    id: 'warzone',
    slug: 'call-of-duty-warzone',
    title: 'Call of Duty: Warzone',
    genre: 'Battle Royale',
    icon: 'Radio',
    optimizationAvailable: true,
    notes: 'تثبیت اتصال در مسابقات ۶۰ هرتزی و حذف Packet Burst در هنگام درگیری‌های شلوغ.',
    regions: [
      {
        id: 'wz-me',
        name: 'خاورمیانه (ریاض)',
        location: 'Riyadh, KSA',
        standardPing: 72,
        optimizedPing: 42,
        typicalJitter: 3.8,
        packetLoss: 0.1,
        status: 'optimal'
      },
      {
        id: 'wz-eu',
        name: 'اروپا (آمستردام)',
        location: 'Amsterdam, NL',
        standardPing: 122,
        optimizedPing: 82,
        typicalJitter: 4.5,
        packetLoss: 0.2,
        status: 'stable'
      }
    ]
  },
  {
    id: 'apex',
    slug: 'apex-legends',
    title: 'Apex Legends',
    genre: 'Battle Royale',
    icon: 'Flame',
    optimizationAvailable: true,
    notes: 'رفع علامت قرمز Prediction Error و جلوگیری از تاخیر رجیستر شدن تیرها.',
    regions: [
      {
        id: 'apex-bhr',
        name: 'بحرین',
        location: 'Manama, BHR',
        standardPing: 58,
        optimizedPing: 33,
        typicalJitter: 2.2,
        packetLoss: 0.0,
        status: 'optimal'
      },
      {
        id: 'apex-fra',
        name: 'فرانکفورت ۱ و ۲',
        location: 'Frankfurt, DE',
        standardPing: 118,
        optimizedPing: 75,
        typicalJitter: 3.6,
        packetLoss: 0.1,
        status: 'optimal'
      }
    ]
  },
  {
    id: 'r6s',
    slug: 'rainbow-six-siege',
    title: 'Rainbow Six Siege',
    genre: 'Tactical Shooter',
    icon: 'Compass',
    optimizationAvailable: true,
    notes: 'اتصال به دیتاسنترهای Azure خاورمیانه و غرب اروپا با حفظ یکپارچگی NAT Type Open.',
    regions: [
      {
        id: 'r6-uae',
        name: 'امارات شمالی',
        location: 'Dubai, UAE',
        standardPing: 60,
        optimizedPing: 34,
        typicalJitter: 1.5,
        packetLoss: 0.0,
        status: 'optimal'
      },
      {
        id: 'r6-neu',
        name: 'شمال اروپا',
        location: 'Dublin, IE',
        standardPing: 126,
        optimizedPing: 88,
        typicalJitter: 4.1,
        packetLoss: 0.2,
        status: 'stable'
      }
    ]
  }
];

export const DEVICE_SETUP_GUIDES: Record<string, DeviceSetupGuide> = {
  windows: {
    platform: 'windows',
    title: 'ویندوز ۱۰ و ۱۱',
    subtitle: 'راه‌اندازی اختصاصی DNS امن یا نرم‌افزار نتا برای ویندوز ۶۴ بیتی',
    iconName: 'Laptop',
    difficulty: 'آسان',
    estimatedTime: '۲ دقیقه',
    recommendedDns: {
      ipv4Primary: '10.202.10.10',
      ipv4Secondary: '10.202.10.11',
      ipv6Primary: '2a0b:4e07::10',
      ipv6Secondary: '2a0b:4e07::11',
      dohUrl: 'https://dns.neta.land/dns-query',
      dotHostname: 'dns.neta.land'
    },
    steps: [
      {
        step: 1,
        title: 'باز کردن تنظیمات شبکه و اینترنت',
        description: 'کلید ترکیبی Win + I را بزنید و به مسیر Network & Internet > Ethernet (یا Wi-Fi) بروید.'
      },
      {
        step: 2,
        title: 'ویرایش تخصیص DNS',
        description: 'روی دکمه Edit در بخش DNS Server Assignment کلیک کرده و حالت را از Automatic (DHCP) به Manual تغییر دهید.'
      },
      {
        step: 3,
        title: 'وارد کردن آی‌پی‌های نتا',
        description: 'سوئیچ IPv4 را روشن کرده و در کادر Preferred DNS مقدار 10.202.10.10 و در Alternate مقدار 10.202.10.11 را درج کنید.',
        codeSnippet: '10.202.10.10\n10.202.10.11'
      },
      {
        step: 4,
        title: 'فعال‌سازی رمزنگاری DoH (اختیاری)',
        description: 'در ویندوز ۱۱ می‌توانید منوی کشویی DNS Encryption را روی Encrypted Only (DNS over HTTPS) قرار دهید.'
      },
      {
        step: 5,
        title: 'راستی‌آزمایی اتصال',
        description: 'دکمه Save را بزنید و به ابزار تست اتصال در پایین همین صفحه یا صفحه /test مراجعه کنید.'
      }
    ]
  },
  android: {
    platform: 'android',
    title: 'اندروید ۹ به بالا',
    subtitle: 'پشتیبانی مستقیم از Private DNS (DNS-over-TLS) بدون نیاز به نصب هیچ اپلیکیشن',
    iconName: 'Smartphone',
    difficulty: 'آسان',
    estimatedTime: '۱ دقیقه',
    recommendedDns: {
      ipv4Primary: '10.202.10.10',
      ipv4Secondary: '10.202.10.11',
      ipv6Primary: '2a0b:4e07::10',
      ipv6Secondary: '2a0b:4e07::11',
      dohUrl: 'https://dns.neta.land/dns-query',
      dotHostname: 'dns.neta.land'
    },
    steps: [
      {
        step: 1,
        title: 'ورود به تنظیمات گوشی',
        description: 'وارد Settings شده و بخش Connections یا Network & Internet را انتخاب کنید.'
      },
      {
        step: 2,
        title: 'یافتن گزینه Private DNS',
        description: 'در بخش More connection settings یا جستجوی تنظیمات، عبارت Private DNS را جستجو کنید.'
      },
      {
        step: 3,
        title: 'ثبت آدرس سرور نتا',
        description: 'گزینه Private DNS provider hostname را انتخاب کرده و آدرس زیر را وارد کنید:',
        codeSnippet: 'dns.neta.land'
      },
      {
        step: 4,
        title: 'ذخیره و تست',
        description: 'روی Save کلیک کنید. علامت اتصال به اینترنت باید مجددا برقرار شود و تمام ترافیک امن خواهد بود.'
      }
    ]
  },
  ios: {
    platform: 'ios',
    title: 'آیفون و آیپد (iOS / iPadOS)',
    subtitle: 'نصب پروفایل پیکربندی رسمی Apple Encrypted DNS (DoH/DoT)',
    iconName: 'Tablet',
    difficulty: 'متوسط',
    estimatedTime: '۲ دقیقه',
    recommendedDns: {
      ipv4Primary: '10.202.10.10',
      ipv4Secondary: '10.202.10.11',
      ipv6Primary: '2a0b:4e07::10',
      ipv6Secondary: '2a0b:4e07::11',
      dohUrl: 'https://dns.neta.land/dns-query',
      dotHostname: 'dns.neta.land'
    },
    steps: [
      {
        step: 1,
        title: 'دریافت پروفایل پیکربندی',
        description: 'با مرورگر Safari به آدرس neta.land/mobileconfig بروید و روی دکمه Allow کلیک کنید.'
      },
      {
        step: 2,
        title: 'نصب پروفایل در تنظیمات',
        description: 'وارد Settings > Profile Downloaded شوید و روی دکمه Install در گوشه بالا کلیک کنید.'
      },
      {
        step: 3,
        title: 'تایید رمز عبور گوشی',
        description: 'پس‌کد دستگاه را وارد کرده و فرآیند فعال‌سازی را کامل کنید.'
      }
    ]
  },
  macos: {
    platform: 'macos',
    title: 'مک‌او‌اس (macOS Sonoma / Sequoia)',
    subtitle: 'تنظیمات دستی یا پروفایل سیستمی Network System Settings',
    iconName: 'Monitor',
    difficulty: 'آسان',
    estimatedTime: '۲ دقیقه',
    recommendedDns: {
      ipv4Primary: '10.202.10.10',
      ipv4Secondary: '10.202.10.11',
      ipv6Primary: '2a0b:4e07::10',
      ipv6Secondary: '2a0b:4e07::11',
      dohUrl: 'https://dns.neta.land/dns-query',
      dotHostname: 'dns.neta.land'
    },
    steps: [
      {
        step: 1,
        title: 'تنظیمات سیستم',
        description: 'منوی اپل را باز کرده و به System Settings > Network بروید.'
      },
      {
        step: 2,
        title: 'انتخاب آداپتور فعال',
        description: 'روی شبکه فعال (Wi-Fi یا Ethernet) کلیک کرده و دکمه Details را بزنید.'
      },
      {
        step: 3,
        title: 'افزودن دی‌ان‌اس نتا',
        description: 'به تب DNS رفته، علامت + را زده و 10.202.10.10 و 10.202.10.11 را اضافه کنید.',
        codeSnippet: '10.202.10.10\n10.202.10.11'
      }
    ]
  },
  router: {
    platform: 'router',
    title: 'مودم و روتر (خانگی و اداری)',
    subtitle: 'بهره‌مندی تمام دستگاه‌های متصل به خانه با یک‌بار تنظیم در مودم',
    iconName: 'Wifi',
    difficulty: 'متوسط',
    estimatedTime: '۳ دقیقه',
    recommendedDns: {
      ipv4Primary: '10.202.10.10',
      ipv4Secondary: '10.202.10.11',
      ipv6Primary: '2a0b:4e07::10',
      ipv6Secondary: '2a0b:4e07::11',
      dohUrl: 'https://dns.neta.land/dns-query',
      dotHostname: 'dns.neta.land'
    },
    steps: [
      {
        step: 1,
        title: 'ورود به پنل مودم',
        description: 'در مرورگر به 192.168.1.1 مراجعه کرده و نام کاربری و رمز را وارد نمایید.'
      },
      {
        step: 2,
        title: 'بخش DHCP یا WAN',
        description: 'به بخش Setup > Network یا DHCP Server مراجعه کنید.'
      },
      {
        step: 3,
        title: 'جایگزینی Primary و Secondary DNS',
        description: 'مقادیر DNS پیش‌فرض را با 10.202.10.10 و 10.202.10.11 جایگزین و مودم را ری‌استارت کنید.',
        codeSnippet: 'Primary: 10.202.10.10\nSecondary: 10.202.10.11'
      }
    ]
  },
  console: {
    platform: 'console',
    title: 'کنسول بازی (PS5 / Xbox Series X|S)',
    subtitle: 'کاهش لودینگ استور و تثبیت پینگ آنلاین در لابی بازی‌ها',
    iconName: 'Gamepad',
    difficulty: 'آسان',
    estimatedTime: '۲ دقیقه',
    recommendedDns: {
      ipv4Primary: '10.202.10.10',
      ipv4Secondary: '10.202.10.11',
      ipv6Primary: '2a0b:4e07::10',
      ipv6Secondary: '2a0b:4e07::11',
      dohUrl: 'https://dns.neta.land/dns-query',
      dotHostname: 'dns.neta.land'
    },
    steps: [
      {
        step: 1,
        title: 'ورود به تنظیمات شبکه کنسول',
        description: 'در پلی‌استیشن به Settings > Network > Set Up Internet Connection و در ایکس‌باکس به Settings > General > Network settings بروید.'
      },
      {
        step: 2,
        title: 'انتخاب تنظیمات پیشرفته (Manual DNS)',
        description: 'گزینه DNS Settings را روی Manual قرار دهید.'
      },
      {
        step: 3,
        title: 'وارد کردن آدرس‌های نتا',
        description: 'Primary DNS را روی 10.202.10.10 و Secondary را روی 10.202.10.11 قرار دهید و تست اتصال بگیرید.',
        codeSnippet: '10.202.10.10\n10.202.10.11'
      }
    ]
  }
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter / آزمایشی',
    persianName: 'رایگان و تست',
    monthlyPrice: 'رایگان',
    yearlyPrice: 'رایگان',
    period: 'همیشگی برای شروع',
    description: 'برای کاربرانی که می‌خواهند پایداری DNS و دسترسی به برخی سرویس‌های پایه را محک بزنند.',
    badge: 'بدون نیاز به کارت بانکی',
    isPopular: false,
    capabilityTarget: 'general',
    features: [
      'DNS پرسرعت و پایدار نتا (IPv4 & IPv6)',
      'پشتیبانی استاندارد DoH و DoT با رمزنگاری',
      'تست نامحدود اتصال و تاخیر شبکه در پنل',
      'دسترسی به ۳ سرویس پشتیبانی‌شده در ماه',
      'پشتیبانی از طریق انجمن و مستندات'
    ],
    limitations: [
      'فاقد بهینه‌سازی اختصاصی روتینگ گیمینگ',
      'پشتیبانی تیکتی با اولویت عادی',
      'بدون آی‌پی اختصاصی یا تونل لایه ۴'
    ],
    buttonText: 'شروع رایگان',
    buttonHref: '/signup?plan=starter'
  },
  {
    id: 'personal',
    name: 'Personal Pro',
    persianName: 'حرفه‌ای فردی',
    monthlyPrice: '۱۹۵,۰۰۰',
    yearlyPrice: '۱۵۵,۰۰۰',
    period: 'ماهانه',
    description: 'دسترسی نامحدود و پرسرعت به سرویس‌های هوش مصنوعی، طراحی و توسعه‌دهندگان بدون وقفه.',
    badge: 'پیشنهاد اصلی',
    isPopular: true,
    capabilityTarget: 'personal',
    features: [
      'تمام امکانات پلن آزمایشی بدون محدودیت ترافیک',
      'دسترسی کامل به کاتالوگ ۵۰+ سرویس بین‌المللی',
      'پروکسی لایه ۷ بهینه‌شده برای هوش مصنوعی و داکر',
      'پشتیبانی همزمان تا ۳ دستگاه فعال',
      'حفاظت هوشمند در برابر فیشینگ و تبلیغات مخرب',
      'پشتیبانی چت آنلاین با پاسخگویی زیر ۲۰ دقیقه'
    ],
    limitations: [
      'مسیرهای روتینگ ویژه سرورهای گیمینگ شامل نمی‌شود'
    ],
    buttonText: 'انتخاب اشتراک حرفه‌ای',
    buttonHref: '/signup?plan=personal'
  },
  {
    id: 'gaming',
    name: 'Gaming Ultimate',
    persianName: 'مخصوص گیمینگ و رقابتی',
    monthlyPrice: '۲۹۰,۰۰۰',
    yearlyPrice: '۲۳۵,۰۰۰',
    period: 'ماهانه',
    description: 'مهندسی‌شده برای گیمرهای رقابتی با حداقل جیتر، حذف پکت‌لاس و اتصال مستقیم به رله‌های خاورمیانه و اروپا.',
    badge: 'کمترین پینگ تضمین‌شده',
    isPopular: false,
    capabilityTarget: 'gaming',
    features: [
      'تمام قابلیت‌های پلن حرفه‌ای فردی',
      'مسیرهای مستقیم و اختصاصی BGP به سرورهای والورانت، CS2 و دوتـا',
      'تثبیت Sub-tick و جبران ترافیک UDP',
      'پشتیبانی همزمان تا ۵ دستگاه (کنسول، پی‌سی، موبایل)',
      'مانیتورینگ زنده سلامت اتصال و لاگ پکت‌لاس',
      'سرورهای رله با پهنای باند اختصاصی ۱۰ گیگابیت',
      'پشتیبانی اولویت‌دار ۲۴/۷ اختصاصی گیمرها'
    ],
    limitations: [
      'تغییر پینگ مشروط به کیفیت بستر فیزیکی اپراتور کاربر است'
    ],
    buttonText: 'فعال‌سازی پلن گیمینگ',
    buttonHref: '/signup?plan=gaming'
  }
];

export const POP_NODES: PoPNode[] = [
  {
    id: 'pop-fra',
    name: 'Frankfurt Central 1',
    city: 'فرانکفورت',
    country: 'آلمان',
    countryCode: 'DE',
    status: 'operational',
    statusText: 'عملیاتی و پایدار',
    latencyMs: 64,
    loadPercentage: 42,
    services: { dns: true, access: true, gamingRelay: true }
  },
  {
    id: 'pop-dxb',
    name: 'Dubai Equinix Gateway',
    city: 'دبی',
    country: 'امارات متحده عربی',
    countryCode: 'AE',
    status: 'operational',
    statusText: 'عملیاتی و پایدار',
    latencyMs: 32,
    loadPercentage: 38,
    services: { dns: true, access: true, gamingRelay: true }
  },
  {
    id: 'pop-ist',
    name: 'Istanbul Interxion',
    city: 'استانبول',
    country: 'ترکیه',
    countryCode: 'TR',
    status: 'operational',
    statusText: 'عملیاتی و پایدار',
    latencyMs: 44,
    loadPercentage: 51,
    services: { dns: true, access: true, gamingRelay: true }
  },
  {
    id: 'pop-ams',
    name: 'Amsterdam Science Park',
    city: 'آمستردام',
    country: 'هلند',
    countryCode: 'NL',
    status: 'operational',
    statusText: 'عملیاتی و پایدار',
    latencyMs: 70,
    loadPercentage: 29,
    services: { dns: true, access: true, gamingRelay: false }
  },
  {
    id: 'pop-thr',
    name: 'Tehran Anycast Edge',
    city: 'تهران',
    country: 'ایران',
    countryCode: 'IR',
    status: 'operational',
    statusText: 'پاسخ‌دهی زیر ۸ میلی‌ثانیه',
    latencyMs: 7,
    loadPercentage: 64,
    services: { dns: true, access: false, gamingRelay: false }
  }
];

export const INCIDENT_REPORTS: IncidentReport[] = [
  {
    id: 'inc-01',
    date: '۲۸ مهر ۱۴۰۵',
    title: 'به‌روزرسانی امنیتی روترهای فرانکفورت و کاهش موقت ظرفیت رله',
    status: 'resolved',
    statusText: 'رفع شده',
    affected: ['Gaming Relay Frankfurt', 'DoH Node DE-02'],
    impact: 'افزایش ۱۰ میلی‌ثانیه‌ای پینگ به مدت ۱۸ دقیقه',
    resolutionTime: '۱۸ دقیقه',
    description: 'ترافیک به صورت خودکار به لبه آمستردام هدایت شد و پس از نصب پچ کرنل، تمامی نودها به ظرفیت کامل بازگشتند.'
  },
  {
    id: 'inc-02',
    date: '۱۴ مهر ۱۴۰۵',
    title: 'اختلال در ترانزیت جنوب خلیج فارس از سوی اپراتور بین‌المللی',
    status: 'resolved',
    statusText: 'رفع شده',
    affected: ['Dubai Gateway', 'Bahrain Valve Relay'],
    impact: 'پکت‌لاس ۳ درصدی در ساعات اوج مصرف',
    resolutionTime: '۴۵ دقیقه',
    description: 'با هماهنگی شرکت‌های همکار، مسیر جایگزین از طریق فیبر نوری شمال برقرار گردید.'
  }
];

export const HOMEPAGE_FAQS = [
  {
    question: 'نتا دقیقاً چه کاری انجام می‌دهد؟',
    answer: 'نتا یک پلتفرم هوشمند بهینه‌سازی اتصال است که روی سه نیاز کلیدی تمرکز دارد: ۱) دسترسی سریع و پایدار به سرویس‌های حیاتی بین‌المللی (مانند کلود، هوش مصنوعی، فیگما و داکر) که به دلیل محدودیت‌های منطقه‌ای دچار اختلال هستند؛ ۲) سامانه حل‌کننده DNS فوق‌سریع و ایمن؛ و ۳) بهینه‌سازی و تثبیت مسیر شبکه برای بازی‌های آنلاین رقابتی جهت کاهش جیتر و پکت‌لاس.'
  },
  {
    question: 'آیا برای استفاده به نصب نرم‌افزار نیاز دارم؟',
    answer: 'خیر، الزامی نیست. شما می‌توانید صرفاً با تغییر DNS در دستگاه خود (یا با تنظیم آدرس Private DNS در اندروید و پروفایل در iOS) بدون نصب هیچ نرم‌افزاری از سامانه DNS و دسترسی به بخش عمده‌ای از سرویس‌ها بهره‌مند شوید. با این حال، برای بهینه‌سازی پیشرفته روتینگ گیمینگ و کنترل دقیق سرویس‌ها، اپلیکیشن سبک نتا نیز برای سیستم‌عامل‌های مختلف در دسترس است.'
  },
  {
    question: 'روی چه دستگاه‌هایی کار می‌کند؟',
    answer: 'نتا با کلیه سیستم‌عامل‌های رایج از جمله ویندوز ۱۰ و ۱۱، مک‌او‌اس، اندروید، iOS و iPadOS، سیستم‌های توزیع لینوکس، مودم‌ها و روترهای خانگی و همچنین کنسول‌های بازی PlayStation 5 و Xbox Series X|S سازگاری کامل دارد.'
  },
  {
    question: 'آیا می‌تواند به همه سرویس‌های محدودشده دسترسی بدهد؟',
    answer: 'خیر؛ نتا ادعای غیرواقعی در خصوص رفع محدودیت تمام سایت‌های وب ندارد. ما صرفاً سرویس‌ها و ابزارهای کاری، فنی و بازی‌هایی را که اعتبارسنجی فنی شده و زیرساخت ارتباطی آن در دایرکتوری پشتیبانی ما ثبت شده پوشش می‌دهیم. وضعیت هر سرویس (پشتیبانی کامل، نسبی یا در حال بررسی) به صورت شفاف در کاتالوگ قابل مشاهده است.'
  },
  {
    question: 'آیا DNS سریع‌تر همیشه پینگ را کاهش می‌دهد؟',
    answer: 'خیر. این یک تصور رایج اشتباه است. DNS صرفاً نام دامنه را به نشانی آی‌پی ترجمه می‌کند و سرعت آن فقط زمان لود اولیه سایت یا درخواست‌های مجدد را تسریع می‌بخشد. پینگ داخل یک بازی، وابسته به مسیر فیزیکی بسته‌های اطلاعاتی (Routing) تا سرور بازی است. به همین علت قابلیت بهینه‌سازی گیمینگ نتا، فراتر از DNS بوده و شامل روتینگ مستقیم شبکه است.'
  },
  {
    question: 'اگر بازی یا سرویس من پشتیبانی نشود چه کنم؟',
    answer: 'شما می‌توانید از طریق پنل کاربری یا صفحه درخواست سرویس، نشانی دامنه‌ها و پورت‌های بازی مورد نظر خود را برای تیم مهندسی شبکه نتا ارسال کنید. تیم ما معمولاً ظرف ۴۸ تا ۷۲ ساعت، مسیر آنالیز را ایجاد و در صورت امکان‌پذیری فنی به دایرکتوری اضافه می‌کند.'
  },
  {
    question: 'اطلاعات و فعالیت شبکه من چگونه مدیریت می‌شود؟',
    answer: 'ما به حریم خصوصی شما متعهدیم. در سامانه DNS نتا هیچ‌گونه لاگ یا سابقه‌ای از وب‌سایت‌هایی که باز می‌کنید (Query Logs) ذخیره نمی‌شود. تنها متریک‌های فنی تجمیعی (مانند زمان تاخیر سرورها و درصد سلامت گره‌ها) بدون هیچ شناسه هویتی جهت بهبود پایداری شبکه تحلیل می‌گردند.'
  },
  {
    question: 'چطور اشتراک را لغو کنم؟',
    answer: 'لغو اشتراک در هر لحظه تنها با یک کلیک از بخش «حساب کاربری > مدیریت اشتراک» امکان‌پذیر است. پس از لغو، دسترسی شما تا پایان دوره پرداخت‌شده بدون کسر هزینه تمدید فعال باقی خواهد ماند و هیچ سوال یا مانعی برای لغو وجود ندارد.'
  }
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: 'getting-started-dns',
    title: 'راهنمای جامع راه‌اندازی DNS رمزنگاری‌شده (DoH و DoT)',
    category: 'dns',
    categoryLabel: 'دی‌ان‌اس',
    readTime: '۳ دقیقه مطالعه',
    excerpt: 'تفاوت DNS ساده با پروتکل‌های DoH و DoT چیست و چطور آن را روی مرورگر و سیستم‌عامل تنظیم کنیم؟',
    content: `
# راهنمای جامع راه‌اندازی DNS رمزنگاری‌شده

در حالت پیش‌فرض، درخواست‌های DNS به صورت متن ساده (Plaintext) و روی پورت ۵۳ ارسال می‌شوند. این امر به افراد حاضر در شبکه یا ارائه‌دهندگان اینترنت اجازه می‌دهد تمامی دامنه‌هایی را که درخواست می‌کنید شنود کرده یا پاسخ‌ها را دستکاری نمایند (DNS Hijacking).

## راه‌حل نتا: DoH و DoT

نتا از دو پروتکل بین‌المللی استاندارد استفاده می‌کند:
1. **DNS-over-HTTPS (DoH):** بسته‌های دی‌ان‌اس را در قالب پیام‌های امن HTTPS و از پورت ۴۴۳ ارسال می‌کند.
2. **DNS-over-TLS (DoT):** بسته‌ها را با استاندارد TLS روی پورت ۸۵۳ رمزنگاری می‌نماید.

### آدرس‌های رسمی نتا:
- **DoH Endpoint:** \`https://dns.neta.land/dns-query\`
- **DoT Hostname:** \`dns.neta.land\`
- **IPv4:** \`10.202.10.10\` و \`10.202.10.11\`
- **IPv6:** \`2a0b:4e07::10\` و \`2a0b:4e07::11\`
    `
  },
  {
    slug: 'troubleshooting-gaming-jitter',
    title: 'چگونه جیتر (Jitter) و نوسان پینگ را در بازی‌های آنلاین کاهش دهیم؟',
    category: 'gaming',
    categoryLabel: 'گیمینگ',
    readTime: '۵ دقیقه مطالعه',
    excerpt: 'علل نوسان شدید پینگ در بازی‌ها و نحوه تشخیص گلوگاه بین روتر خانگی، اپراتور و سرور بازی.',
    content: `
# راهنمای کاهش نوسان پینگ و تثبیت اتصال

جیتر (Jitter) به معنای تغییرات ناگهانی در تاخیر دریافت بسته‌های اطلاعاتی است. به عنوان مثال اگر پینگ شما برای ۲ ثانیه ۶۰ میلی‌ثانیه باشد و ناگهان به ۱۲۰ میلی‌ثانیه بپرد، شما دچار جیتر بالا هستید که منجر به تیرهای خطا رفته و تلپورت شدن کاراکتر در بازی می‌شود.

### گام‌های عیب‌یابی:
1. همیشه از کابل LAN به جای Wi-Fi استفاده کنید. امواج وای‌فای خانگی اصلی‌ترین عامل جیتر هستند.
2. روتر خود را روی پروفایل QoS تنظیم کنید تا دانلودهای همزمان اولویت بازی را از بین نبرند.
3. با انتخاب مسیر نتا، از گره‌های میانی شلوغ اپراتور عبور کرده و مستقیم به رله‌های خلوت متصل شوید.
    `
  },
  {
    slug: 'ai-tools-access-troubleshooting',
    title: 'رفع خطاهای ۴۰۳ و Access Denied در ابزارهای هوش مصنوعی',
    category: 'access',
    categoryLabel: 'دسترسی به سرویس‌ها',
    readTime: '۴ دقیقه مطالعه',
    excerpt: 'چرا کلود و چت‌جی‌پی‌تی خطای دسترسی جغرافیایی می‌دهند و معماری نتا چگونه این مشکل را حل می‌کند؟',
    content: `
# حل مشکل خطای 403 Forbidden در هوش مصنوعی

سرویس‌های هوش مصنوعی مانند Anthropic Claude و OpenAI بر اساس بازه‌های آی‌پی کشورهای مجاز دسترسی را کنترل می‌کنند. زمانی که درخواست از یک کشور پشتیبانی‌نشده ارسال شود، کلادفلر بلافاصله با کد خطای ۴۰۳ یا تاییدیه ناموفق مانع ادامه کار می‌گردد.

نتا با ایجاد گیت‌وی‌های بازنویسی بدون ذخیره توکن‌ها، درخواست‌های معتبر کلاینت را به فرانکفورت و هلسینکی فرستاده و پاسخ را به صورت امن و آنی تحویل می‌دهد.
    `
  }
];
