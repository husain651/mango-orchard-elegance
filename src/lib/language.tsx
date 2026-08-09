import React, { useCallback, createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ur" | "ar";

interface LanguageValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.corporate": "Corporate Orders",
    "nav.shipping": "International Delivery",
    "nav.farms": "Our Farms",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.search": "Search varieties",
    "hero.title": "Pakistan's Finest Mangoes, Delivered Worldwide.",
    "hero.subtitle": "Premium export-quality Pakistani mangoes sourced directly from trusted farms and delivered fresh across the globe.",
    "hero.shop": "Shop Now",
    "hero.quote": "Request Bulk Quote",
  },
  ur: {
    "nav.home": "ہوم",
    "nav.about": "ہمارے بارے میں",
    "nav.products": "پرڈکٹس",
    "nav.corporate": "کارپوریٹ آرڈرز",
    "nav.shipping": "بین الاقوامی ڈیلیوری",
    "nav.farms": "ہماری کھیتیں",
    "nav.blog": "بلاگ",
    "nav.contact": "رابطہ کریں",
    "nav.search": "قسمیں تلاش کریں",
    "hero.title": "پاکستان کے بہترین آم، پوری دنیا میں بھیجے جاتے ہیں۔",
    "hero.subtitle": "پریمیم ایکسپورٹ کوالٹی پاکستانی آم معروف فارمز سے براہ راست حاصل کر کے تازہ حالت میں پوری دنیا میں بھیجے جاتے ہیں۔",
    "hero.shop": "ابھی خریدیں",
    "hero.quote": "بڑی آرڈر کے لیے کوٹیشن",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.products": "المنتجات",
    "nav.corporate": "الطلبات المؤسسية",
    "nav.shipping": "التوصيل الدولي",
    "nav.farms": "مزارعنا",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "nav.search": "بحث عن الأصناف",
    "hero.title": "أفضل المانجو الباكستاني، يتم تسليمه في جميع أنحاء العالم.",
    "hero.subtitle": "مانجو باكستاني عالي الجودة للتصدير يتم الحصول عليه مباشرة من المزارع الموثوقة وتسليمه طازجًا في جميع أنحاء العالم.",
    "hero.shop": "تسوق الآن",
    "hero.quote": "طلب عرض سعر بالجملة",
  },
};

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = read<Language | null>("mp-language", null);
    if (stored) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("mp-language", JSON.stringify(lang));
  }, []);

  const t = useCallback((key: string) => {
    return translations[language][key] || translations.en[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
