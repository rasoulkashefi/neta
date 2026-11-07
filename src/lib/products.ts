export type ProductCategory = 'connectivity' | 'ai' | 'cloud' | 'marketplace' | 'developer';

export type ProductStatus = 'available' | 'beta' | 'coming_soon' | 'partner';

export type TargetAudience = 'all' | 'developers' | 'gamers' | 'business';

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  persianTitle: string;
  category: ProductCategory;
  categoryLabel: string;
  status: ProductStatus;
  statusLabel: string;
  targetAudience: TargetAudience;
  audienceLabel: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
  features: string[];
  specs?: { label: string; value: string }[];
  pricingHint?: string;
  badge?: string;
  href: string;
  docsHref?: string;
  ctaText: string;
  isFeatured?: boolean;
  provider?: {
    name: string;
    type: 'core' | 'partner';
  };
}

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'همه محصولات' },
  { id: 'connectivity', label: 'اتصال و شبکه' },
  { id: 'ai', label: 'پلتفرم هوش مصنوعی' },
  { id: 'cloud', label: 'زیرساخت ابری' },
  { id: 'marketplace', label: 'سرویس‌های شرکا' },
] as const;

export const AUDIENCE_FILTERS = [
  { id: 'all', label: 'همه کاربران' },
  { id: 'developers', label: 'توسعه‌دهندگان و شرکت‌ها' },
  { id: 'gamers', label: 'گیمرها و استریمرها' },
  { id: 'business', label: 'کسب‌وکارها' },
] as const;

export const PRODUCTS_CATALOG: ProductItem[] = [
  // --- 1. CONNECTIVITY PRODUCTS (AVAILABLE TODAY) ---
  {
    id: 'smart-dns',
    slug: 'smart-dns',
    title: 'Neta Smart DNS',
    persianTitle: 'سامانه DNS هوشمند و Anycast',
    category: 'connectivity',
    categoryLabel: 'اتصال و شبکه',
    status: 'available',
    statusLabel: 'عملیاتی و فعال',
    targetAudience: 'all',
    audienceLabel: 'عمومی و تخصصی',
    tagline: 'تفکیک سریع نام دامنه‌ها بر بستر پروتکل‌های رمزنگاری‌شده مدرن',
    shortDescription: 'پاسخ‌دهی زیر ۱۰ میلی‌ثانیه به کوئری‌ها با رمزنگاری DoH و DoT و بدون ذخیره تاریخچه مرورگر.',
    fullDescription: 'زیرساخت Anycast اختصاصی نتا با توزیع درخواست‌ها میان نودهای داخلی و لبه‌های بین‌المللی، تضمین می‌کند که تفکیک نام دامنه‌ها در سریع‌ترین زمان ممکن انجام شده و از مسموم‌سازی کش DNS جلوگیری شود.',
    keyBenefits: [
      'کاهش زمان Resolve دامنه‌ها به کمتر از ۱۰ میلی‌ثانیه',
      'پشتیبانی کامل از DNS over HTTPS (DoH) و DoT',
      'مسدودسازی خودکار دامنه‌های فیشینگ و بدافزارها',
      'سازگار با تمام سیستم‌عامل‌ها و مودم‌های خانگی'
    ],
    features: [
      'Anycast Routing چند منطقه‌ای',
      'رمزنگاری ترافیک DNS با TLS 1.3',
      'حفاظت در برابر نشت آدرس‌های IPv6',
      'ویزارد خودکار تنظیم روی گوشی و ویندوز'
    ],
    specs: [
      { label: 'پروتکل‌ها', value: 'DoH, DoT, UDP/53' },
      { label: 'میانگین تاخیر', value: '۷ میلی‌ثانیه' },
      { label: 'سیاست لاگ', value: 'Zero-Logging تاییدشده' }
    ],
    pricingHint: 'شامل پلن رایگان + پلن حرفه‌ای',
    badge: 'DNS امن',
    href: '/dns',
    docsHref: '/help/getting-started-dns',
    ctaText: 'مشاهده و تنظیم DNS',
    isFeatured: true,
    provider: { name: 'زیرساخت مرکزی نتا', type: 'core' }
  },
  {
    id: 'gaming-relay',
    slug: 'gaming-relay',
    title: 'Neta Game Ping Relay',
    persianTitle: 'بهینه‌ساز مسیر و پینگ بازی‌های آنلاین',
    category: 'connectivity',
    categoryLabel: 'اتصال و شبکه',
    status: 'available',
    statusLabel: 'عملیاتی و فعال',
    targetAudience: 'gamers',
    audienceLabel: 'گیمرها',
    tagline: 'تثبیت ساب‌تیک و حذف پرش‌های ناگهانی پکت در شوترهای رقابتی',
    shortDescription: 'هدایت مستقیم بسته‌های UDP به سرورهای رسمی بازی‌ها در اروپا و خاورمیانه جهت جلوگیری از پکت‌لاس.',
    fullDescription: 'این سیستم با پایش مداوم گیت‌وی‌های بین‌المللی، کوتاه‌ترین و کم‌نوسان‌ترین مسیر تبادل پکت‌ها را برای سرورهای ولورانت، کانتر ۲، دوتا و رینبو سیکس انتخاب می‌کند.',
    keyBenefits: [
      'پایداری خط پینگ و کاهش محسوس جیتر (Jitter)',
      'پیشگیری از نوسان پکت و کاهش پکت‌لاس به نزدیک صفر',
      'تست و اندازه‌گیری زنده قبل از ورود به مسابقه',
      'بدون نیاز به نرم‌افزارهای سنگین یا تغییرات پرریسک سیستم'
    ],
    features: [
      'مسیرهای مستقیم و اختصاصی ترکیه، آلمان و امارات',
      'پایش ساب‌تیک برای بازی‌های رقابتی مدرن',
      'کنسول وضعیت لحظه‌ای سلامت رله‌ها',
      'سازگاری با رایانه شخصی، پلی‌استیشن و ایکس‌باکس'
    ],
    specs: [
      { label: 'بهینه‌سازی', value: 'UDP & Sub-tick' },
      { label: 'ریجن‌های پشتیبانی', value: 'EU, ME, TR' },
      { label: 'ترافیک بازی', value: 'ترافیک تفکیک‌شده' }
    ],
    pricingHint: 'شامل در پلن Pro و Gamer',
    badge: 'گیمینگ',
    href: '/gaming',
    docsHref: '/help/troubleshooting-gaming-jitter',
    ctaText: 'بررسی بازی‌ها و ریجن‌ها',
    isFeatured: true,
    provider: { name: 'زیرساخت مرکزی نتا', type: 'core' }
  },
  {
    id: 'service-gateway',
    slug: 'service-gateway',
    title: 'Neta Service Gateway',
    persianTitle: 'درگاه دسترسی پایدار به سرویس‌های تخصصی',
    category: 'connectivity',
    categoryLabel: 'اتصال و شبکه',
    status: 'available',
    statusLabel: 'عملیاتی و فعال',
    targetAudience: 'developers',
    audienceLabel: 'توسعه‌دهندگان و متخصصین',
    tagline: 'عبور بدون وقفه از محدودیت‌های منطقه‌ای بیش از ۵۰ سرویس توسعه و طراحی',
    shortDescription: 'پروکسی معکوس لایه ۷ برای رفع خطاهای ۴۰۳ در فیگما، داکر هاب، کلاودفلر و مخازن کدنویسی.',
    fullDescription: 'دسترسی مهندسان و تیم‌های فنی به ابزارهای بین‌المللی بدون نیاز به ابزارهای ناامن، با تفکیک هوشمند هاست‌ها و هدایت ایمن به لبه‌های فرانکفورت.',
    keyBenefits: [
      'دسترسی بی‌وقفه به مخازن Docker, NPM, Gradle, GitHub',
      'تایید اصالت گواهی‌های SSL سرویس مقصد بدون جعل',
      'سرعت دانلود حداکثری بدون گلوگاه پهنای باند',
      'داشبورد اختصاصی برای فعال‌سازی گزینشی هر ابزار'
    ],
    features: [
      'Reverse Proxy در لایه هفت شبکه',
      'بازنویسی هدرهای مکانی بدون دستکاری بدنه دیتا',
      'بیش از ۵۰ سرویس تست‌شده و تاییدشده',
      'مانیتورینگ سلامت وضعیت هر سرویس'
    ],
    specs: [
      { label: 'تعداد سرویس‌ها', value: '۵۰+ سرویس فعال' },
      { label: 'لایه شبکه', value: 'Layer 7 Smart Reverse Proxy' },
      { label: 'مکان لبه‌ها', value: 'فرانکفورت، آمستردام' }
    ],
    pricingHint: 'پلن پایه و پیشرفته',
    badge: 'دسترسی لایه ۷',
    href: '/services',
    docsHref: '/help/ai-tools-access-troubleshooting',
    ctaText: 'کاتالوگ سرویس‌های فعال',
    isFeatured: true,
    provider: { name: 'زیرساخت مرکزی نتا', type: 'core' }
  },

  // --- 2. AI PLATFORM PRODUCTS (BETA & SCALABLE) ---
  {
    id: 'unified-ai-api',
    slug: 'unified-ai-api',
    title: 'Neta Unified AI API',
    persianTitle: 'درگاه یکپارچه دسترسی به مدل‌های هوش مصنوعی',
    category: 'ai',
    categoryLabel: 'پلتفرم هوش مصنوعی',
    status: 'beta',
    statusLabel: 'نسخه بتا (دسترسی زودهنگام)',
    targetAudience: 'developers',
    audienceLabel: 'توسعه‌دهندگان و شرکت‌ها',
    tagline: 'یک API Key واحد برای اتصال به Claude 3.5، GPT-4o، DeepSeek و Gemini',
    shortDescription: 'حذف دردسر تهیه کارت‌های اعتباری بین‌المللی و مدیریت ده‌ها کلید پراکنده با رابط سازگار با استاندارد OpenAI.',
    fullDescription: 'با درگاه یکپارچه نتا، توسعه‌دهندگان می‌توانند تنها با تغییر Base URL در کدهای پایتون یا تایپ‌اسکریپت خود، به برترین مدل‌های پیشرو جهان شامل Anthropic Claude 3.5، OpenAI GPT-4o، DeepSeek V3/R1 و Google Gemini متصل شوند. صورت‌حساب ریالی شفاف بر مبنای توکن مصرفی واقعی.',
    keyBenefits: [
      'یک کلید API واحد (Single API Key) برای ده‌ها ارائه‌دهنده',
      'پشتیبانی ۱۰۰٪ از فرمت و کلاینت‌های استاندارد OpenAI SDK',
      'شارژ ریالی بدون نیاز به حساب‌های ارزی خارجی یا واسطه‌ها',
      'پایداری تضمین‌شده با لایه کشینگ و سوییچ خودکار در زمان اختلال'
    ],
    features: [
      'سازگاری کامل با کتابخانه‌های رسمی OpenAI در Python و Node.js',
      'استریم سریع پاسخ‌ها با Server-Sent Events (SSE)',
      'سیستم نظارت بر مصرف توکن در سطح پروژه و کلید',
      'محدودیت هزینه (Spend Limits) برای جلوگیری از هزینه‌های ناخواسته'
    ],
    specs: [
      { label: 'مدل‌های آماده', value: 'Claude 3.5, GPT-4o, DeepSeek, Gemini' },
      { label: 'فرمت فراخوانی', value: 'OpenAI Compliant (/v1/chat/completions)' },
      { label: 'تسویه‌حساب', value: 'ریالی دقیق بر اساس ۱ میلیون توکن' }
    ],
    pricingHint: 'محاسبه توکنی ریالی + بدون حق اشتراک پایه',
    badge: 'هوش مصنوعی',
    href: '/ai',
    docsHref: '/ai#docs',
    ctaText: 'آشنایی با درگاه هوش مصنوعی',
    isFeatured: true,
    provider: { name: 'تیم هوش مصنوعی نتا', type: 'core' }
  },
  {
    id: 'ai-smart-router',
    slug: 'ai-smart-router',
    title: 'Neta AI Smart Fallback Router',
    persianTitle: 'مسیریاب هوشمند و کاهنده هزینه هوش مصنوعی',
    category: 'ai',
    categoryLabel: 'پلتفرم هوش مصنوعی',
    status: 'beta',
    statusLabel: 'نسخه بتا',
    targetAudience: 'developers',
    audienceLabel: 'توسعه‌دهندگان و شرکت‌ها',
    tagline: 'هدایت هوشمند درخواست‌ها میان مدل‌های سبک و سنگین جهت کاهش ۶۰٪ هزینه‌ها',
    shortDescription: 'شناسایی پیچیدگی پرامپت و هدایت کوئری‌های ساده به مدل‌های کم‌هزینه و کوئری‌های پیچیده به مدل‌های پرچمدار.',
    fullDescription: 'مسیریاب هوشمند نتا با تحلیل اولیه ساختار درخواست ورودی، کوئری‌های طبقه‌بندی و خلاصه‌سازی را با سرعت بسیار بالا به مدل‌های اقتصادی ارزان هدایت کرده و فقط مسائل استدلالی پیچیده را به مدل‌های گران ارسال می‌کند.',
    keyBenefits: [
      'کاهش هزینه‌های ماهانه تا ۶۰٪ بدون افت محسوس کیفیت پاسخ',
      'سوییچ خودکار در صورت وقوع Rate-Limit یا قطعی یک ارائه‌دهنده',
      'کشینگ معنایی (Semantic Cache) برای کوئری‌های تکراری',
      'گزارش‌گیری مقایسه‌ای کیفیت و هزینه در داشبورد'
    ],
    features: [
      'Semantic Router داخلی',
      'Fallback خودکار روی ارائه‌دهنده پشتیبان',
      'تنظیم آستانه کیفیت پاسخ توسط کاربر',
      'مانیتورینگ تاخیر توکن به تفکیک مدل'
    ],
    specs: [
      { label: 'کاهش هزینه', value: 'تا ۶۰ درصد' },
      { label: 'زمان تاخیر تصمیم', value: '< ۵ میلی‌ثانیه' },
      { label: 'پشتیبان خودکار', value: 'Multi-Provider Failover' }
    ],
    pricingHint: 'به صورت ماژول در کنار Unified AI API',
    badge: 'بهینه‌ساز هزینه',
    href: '/ai#router',
    docsHref: '/ai#docs',
    ctaText: 'بررسی نحوه کارکرد مسیریاب',
    isFeatured: false,
    provider: { name: 'تیم هوش مصنوعی نتا', type: 'core' }
  },

  // --- 3. CLOUD & INFRASTRUCTURE (FUTURE & ROADMAP) ---
  {
    id: 'cloud-edge-compute',
    slug: 'cloud-edge-compute',
    title: 'Neta Edge Compute',
    persianTitle: 'سرورهای ابری لبه و کانتینرهای بدون سرور',
    category: 'cloud',
    categoryLabel: 'زیرساخت ابری',
    status: 'coming_soon',
    statusLabel: 'در حال آماده‌سازی (نقشه راه)',
    targetAudience: 'developers',
    audienceLabel: 'توسعه‌دهندگان و زیرساخت',
    tagline: 'اجرای کانتینرها در نزدیک‌ترین نود جغرافیایی به کاربران با دیسک‌های NVMe Gen4',
    shortDescription: 'میزبانی میکروسرویس‌ها و APIهای حساس به تاخیر بر روی سرورهای مدرن با شبکه پایدار.',
    fullDescription: 'زیرساخت ابری آینده نتا برای تیم‌هایی طراحی می‌شود که نیازمند اجرای کانتینرهای داکر بدون درگیری با پیچیدگی‌های نگهداری سرور فیزیکی هستند.',
    keyBenefits: [
      'دسترسی با کمترین پینگ از سراسر منطقه',
      'راه‌اندازی فوری کانتینرها در کمتر از ۵ ثانیه',
      'شبکه خصوصی امن میان سرویس‌ها',
      'محاسبه دقیق ساعتی و ثانیه‌ای منابع'
    ],
    features: [
      'استقرار مستقیم از Docker Image',
      'توزیع بار خودکار (Auto Load Balancing)',
      'فایروال پیشرفته در سطح لایه ۳ و ۴',
      'مانیتورینگ مصرف رم و پردازنده'
    ],
    specs: [
      { label: 'نوع ذخیره‌سازی', value: 'NVMe Gen4 Enterprise' },
      { label: 'شبکه', value: '۱۰ گیگابیت فیبر نوری اختصاصی' },
      { label: 'وضعیت کنونی', value: 'توسعه زیرساخت سخت‌افزاری' }
    ],
    pricingHint: 'به زودی اعلام خواهد شد',
    badge: 'ابری',
    href: '/cloud#compute',
    ctaText: 'عضویت در لیست انتظار',
    isFeatured: false,
    provider: { name: 'زیرساخت ابری نتا', type: 'core' }
  },
  {
    id: 'cloud-object-storage',
    slug: 'cloud-object-storage',
    title: 'Neta S3 Object Storage',
    persianTitle: 'ذخیره‌سازی ابری اشیا سازگار با پروتکل S3',
    category: 'cloud',
    categoryLabel: 'زیرساخت ابری',
    status: 'coming_soon',
    statusLabel: 'در حال آماده‌سازی (نقشه راه)',
    targetAudience: 'business',
    audienceLabel: 'کسب‌وکارها و توسعه‌دهندگان',
    tagline: 'ذخیره‌سازی مقیاس‌پذیر و ارزان تصاویر، بکاپ‌ها و فایل‌های استاتیک با ماندگاری ۹۹.۹۹۹٪',
    shortDescription: 'فضای ذخیره‌سازی ابری با دسترسی فوق‌العاده سریع، ترافیک بدون هزینه اضافه و سازگاری با کلیه ابزارهای اکوسیستم S3.',
    fullDescription: 'فضای ذخیره‌سازی اشیای نتا با تمرکز بر حفظ پایداری و سهولت یکپارچه‌سازی، امکان نگهداری حجم‌های ترابایتی داده را با هزینه‌ای مقرون‌به‌صرفه و ساختار قیمت‌گذاری ریالی شفاف فراهم می‌آورد.',
    keyBenefits: [
      'سازگاری ۱۰۰٪ با کلاینت‌ها و کتابخانه‌های AWS S3',
      'ترافیک خروجی (Egress) بدون جریمه هزینه‌های نامتعارف',
      'رمزنگاری داده‌ها در حال انتقال و در زمان ذخیره‌سازی (At-Rest)',
      'سرعت بالای دانلود از داخل کشور'
    ],
    features: [
      'مدیریت باکت‌ها از طریق داشبورد وب و CLI',
      'تنظیم انقضا و دسترسی موقت با Signed URLs',
      'یکپارچگی مستقیم با CDN توزیع محتوا',
      'نسخه‌بندی فایل‌ها (Versioning)'
    ],
    specs: [
      { label: 'پروتکل', value: 'S3 API Compatible' },
      { label: 'ضریب پایداری', value: '99.9999999%' },
      { label: 'وضعیت', value: 'ارزیابی نهایی سناریوهای ذخیره‌سازی' }
    ],
    pricingHint: 'محاسبه بر اساس گیگابایت در ماه',
    badge: 'فضای ابری',
    href: '/cloud#storage',
    ctaText: 'مشاهده مشخصات فنی',
    isFeatured: false,
    provider: { name: 'زیرساخت ابری نتا', type: 'core' }
  },

  // --- 4. MARKETPLACE & PARTNER ECOSYSTEM ---
  {
    id: 'partner-marketplace',
    slug: 'partner-marketplace',
    title: 'Neta Service Marketplace',
    persianTitle: 'مارکت‌پلیس و بستر عرضه خدمات شرکا',
    category: 'marketplace',
    categoryLabel: 'سرویس‌های شرکا',
    status: 'partner',
    statusLabel: 'برنامه همکاران و توسعه‌دهندگان',
    targetAudience: 'business',
    audienceLabel: 'شرکت‌ها و سرویس‌دهندگان',
    tagline: 'ارائه سرویس‌ها، مدل‌های هوش مصنوعی و خدمات دیجیتال شما روی زیرساخت متمرکز نتا',
    shortDescription: 'پلتفرمی باز برای ارائه‌دهندگان ابزارهای دیجیتال، دیتابیس‌ها و ابزارهای توسعه جهت دسترسی مستقیم به کاربران نتا.',
    fullDescription: 'چشم‌انداز نتا ایجاد بستری امن و یکپارچه است که در آن اشخاص ثالث و شرکت‌های نرم‌افزاری می‌توانند خدمات دیجیتال و APIهای تخصصی خود را مستقیماً به جامعه کاربران عرضه کرده و تسویه‌حساب متمرکز، احراز هویت و مانیتورینگ را به نتا بسپارند.',
    keyBenefits: [
      'دسترسی به شبکه گسترده کاربران فعال نتا',
      'احراز هویت و مدیریت دسترسی متمرکز (SSO و API Keys)',
      'تسویه‌حساب خودکار و سیستم گزارش‌گیری شفاف مالی',
      'ارائه روی زیرساخت Anycast و پایدار نتا'
    ],
    features: [
      'کنسول اختصاصی ارائه‌دهنده سرویس (Provider Dashboard)',
      'سیاست‌گذاری سهم درآمد شفاف و منصفانه',
      'مستندات استاندارد برای اتصال API به کاتالوگ نتا',
      'پشتیبانی تیم فنی نتا در تمامی مراحل انتشار'
    ],
    specs: [
      { label: 'مدل همکاری', value: 'Revenue Share منصفانه' },
      { label: 'نوع خدمات', value: 'APIs, AI Models, SaaS, Microservices' },
      { label: 'نحوه شروع', value: 'ثبت درخواست اولیه شریک تجاری' }
    ],
    pricingHint: 'توافق بر اساس مدل همکاری',
    badge: 'مارکت‌پلیس',
    href: '/cloud#marketplace',
    ctaText: 'همکاری و عرضه سرویس',
    isFeatured: true,
    provider: { name: 'اکوسیستم همکاران نتا', type: 'partner' }
  }
];

export const AI_MODELS_LIST = [
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    category: 'Reasoning & Coding',
    contextWindow: '200K Tokens',
    inputCost: '۳ دلار / ۱M توکن',
    outputCost: '۱۵ دلار / ۱M توکن',
    latency: 'بسیار سریع (~۲۵ توکن/ثانیه)',
    status: 'فعال در بتا',
    bestFor: 'برنامه‌نویسی پیشرفته، استدلال تحلیلی، معماری سیستم'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o (Omni)',
    provider: 'OpenAI',
    category: 'Multimodal Flagship',
    contextWindow: '128K Tokens',
    inputCost: '۲.۵ دلار / ۱M توکن',
    outputCost: '۱۰ دلار / ۱M توکن',
    latency: 'فوق سریع (~۳۵ توکن/ثانیه)',
    status: 'فعال در بتا',
    bestFor: 'چندحالته (متن و تصویر)، ترجمه روان، کارهای روزمره'
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3 / R1',
    provider: 'DeepSeek',
    category: 'Deep Reasoning & Math',
    contextWindow: '64K Tokens',
    inputCost: '۰.۵۵ دلار / ۱M توکن',
    outputCost: '۲.۱۹ دلار / ۱M توکن',
    latency: 'مقرون‌به‌صرفه و سریع',
    status: 'فعال در بتا',
    bestFor: 'استدلال زنجیره‌ای تفکر (CoT)، ریاضیات، حل مسائل پیچیده با هزینه ناچیز'
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    provider: 'Google DeepMind',
    category: 'Extreme Context',
    contextWindow: '2M Tokens (رکورد جهانی)',
    inputCost: '۳.۵ دلار / ۱M توکن',
    outputCost: '۱۰.۵ دلار / ۱M توکن',
    latency: 'متوسط و دقیق',
    status: 'فعال در بتا',
    bestFor: 'تحلیل کتاب‌ها، ویدیوهای طولانی، کل پایگاه کدهای بزرگ'
  },
  {
    id: 'llama-3-3-70b',
    name: 'Llama 3.3 70B Instruct',
    provider: 'Meta (Open Weights)',
    category: 'Open Source Powerhouse',
    contextWindow: '128K Tokens',
    inputCost: '۰.۸ دلار / ۱M توکن',
    outputCost: '۰.۸ دلار / ۱M توکن',
    latency: 'بسیار سریع',
    status: 'به‌زودی',
    bestFor: 'وظایف متنی استاندارد، امنیت بالا بدون قفل ارائه‌دهنده تجاری'
  }
];
