import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
 Phone,
 Mail,
 MapPin,
 Facebook,
 Twitter,
 Instagram,
 Youtube,
 ShieldCheck,
 Activity,
 Zap,
 MessageCircle,
 ArrowRight,
} from 'lucide-react';
import { footerConfig } from '../config/footer.config';

const ActionStrip = () => {
 const { actionStrip } = footerConfig;
 return (
 <div className="bg-gray-50 border-b border-gray-200" role="region" aria-label="شريط الإجراءات للتواصل السريع">
 <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
 <div className="flex items-center gap-4 text-gray-700">
 <a href={actionStrip.phoneHref} className="flex items-center gap-2 hover:text-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded">
 <Phone className="w-4 h-4" />
 <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'embed' }}>77 999 5884</span>
 </a>
 <span className="hidden sm:inline text-gray-300" aria-hidden>│</span>
 <a href={actionStrip.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded">
 <MessageCircle className="w-4 h-4" />
 واتساب
 </a>
 <span className="hidden sm:inline text-gray-300" aria-hidden>│</span>
 <a href={actionStrip.emailHref} className="flex items-center gap-2 hover:text-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded">
 <Mail className="w-4 h-4" />
 بريد
 </a>
 </div>
 <div className="flex items-center gap-3 text-gray-600">
 <span className="hidden sm:inline" aria-label="ساعات العمل">{actionStrip.hours}</span>
 <Link
 to={actionStrip.quickCta.to}
 className="inline-flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
 >
 {actionStrip.quickCta.label}
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>
 </div>
 );
};

const Newsletter = () => {
 const { newsletter } = footerConfig;
 const [email, setEmail] = useState('');
 const [status, setStatus] = useState(null); // 'ok' | 'error'
 const isValid = useMemo(() => /.+@.+\..+/.test(email), [email]);

 const onSubmit = (e) => {
 e.preventDefault();
 if (!isValid) { setStatus('error'); return; }
 setStatus('ok');
 setTimeout(() => setStatus(null), 2500);
 };

 return (
 <div className="bg-gradient-to-r from-yellow-600 to-orange-600 py-12" role="region" aria-label="النشرة البريدية">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-2xl font-bold mb-2 text-white">{newsletter.title}</h2>
 <p className="text-white/90 mb-6">{newsletter.description}</p>
 <form onSubmit={onSubmit} className="max-w-md mx-auto flex gap-3" noValidate>
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="أدخل بريدك الإلكتروني"
 className={`flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 ${status === 'error' ? 'ring-2 ring-red-300' : ''}`}
 aria-invalid={status === 'error'}
 aria-describedby="newsletter-help"
 aria-label="البريد الإلكتروني"
 />
 <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="اشتراك في النشرة">
 اشتراك
 </button>
 </form>
 <p id="newsletter-help" className="mt-2 text-white/80 text-xs">
 {newsletter.privacyNote}
 </p>
 <p className="sr-only" aria-live="polite">{status === 'ok' ? 'تم الاشتراك بنجاح' : status === 'error' ? 'الرجاء إدخال بريد صحيح' : ''}</p>
 {status === 'ok' && (
 <p className="text-white mt-2 text-sm">تم استلام بريدك بنجاح.</p>
 )}
 {status === 'error' && (
 <p className="text-red-100 mt-2 text-sm">الرجاء إدخال بريد صحيح.</p>
 )}
 </div>
 </div>
 );
};

const TrustBar = () => {
 const { trust } = footerConfig;
 return (
 <div className="bg-gray-100 py-8" role="region" aria-label="شعارات الثقة والحماية">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 gap-6 text-center">
 <div className="flex items-center justify-center gap-3">
 <ShieldCheck className="w-6 h-6 text-green-600" aria-hidden />
 <span className="text-gray-800 font-medium">{trust.badges.find(b => b.key === 'ssl')?.label}</span>
 </div>
 <div className="flex items-center justify-center gap-3">
 <Activity className="w-6 h-6 text-yellow-600" aria-hidden />
 <span className="text-gray-800 font-medium">{trust.badges.find(b => b.key === 'uptime')?.label}</span>
 </div>
 <div className="flex items-center justify-center gap-3">
 <Zap className="w-6 h-6 text-orange-500" aria-hidden />
 <span className="text-gray-800 font-medium">{trust.badges.find(b => b.key === 'instant')?.label}</span>
 </div>
 </div>
 <p className="text-center text-gray-600 mt-3 text-sm">{trust.antiFraud}</p>
 </div>
 </div>
 );
};

const ColumnsGrid = () => {
 const { links, brand, social } = footerConfig;
 const socials = [Facebook, Twitter, Instagram, Youtube];

 return (
 <div className="py-14" role="navigation" aria-label="روابط التذييل">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 gap-8 text-center">
 {/* Brand */}
 <div className="text-center">
 <div className="flex items-center gap-3 mb-6 justify-center">
 <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
 <span className="text-white font-bold text-xl">أ</span>
 </div>
 <div>
 <h2 className="text-xl font-bold">{brand.name}</h2>
 <p className="text-gray-400 text-sm">{brand.tagline}</p>
 </div>
 </div>
 <p className="text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto">
 {brand.description}
 </p>
 <div className="space-y-2 justify-center items-center inline-flex flex-col">
 <div className="flex items-center gap-3">
 <Phone className="w-5 h-5 text-yellow-500" />
 <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'embed' }}>{brand.phones[0]}</span>
 </div>
 <div className="flex items-center gap-3">
 <Mail className="w-5 h-5 text-yellow-500" />
 <span className="text-gray-300">{brand.emails[0]}</span>
 </div>
 <div className="flex items-center gap-3">
 <MapPin className="w-5 h-5 text-yellow-500" />
 <span className="text-gray-300">{brand.address}</span>
 </div>
 </div>
 <div className="flex gap-4 mt-6 justify-center">
 {social.map((s, i) => {
 const Icon = socials[i] || Facebook;
 return (
 <a
 key={s.name}
 href={s.url}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={s.name}
 className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500`}
 >
 <Icon className="w-5 h-5" />
 </a>
 );
 })}
 </div>
 </div>

 {/* Columns */}
 {[links.services, links.accounts, links.support].map((col) => (
 <nav key={col.title} aria-label={col.title}>
 <h3 className="text-lg font-semibold mb-6 text-yellow-500">{col.title}</h3>
 <ul className="space-y-3">
 {col.items.map((link) => (
 <li key={link.name}>
 <Link to={link.path} className="text-gray-300 hover:text-yellow-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded">
 {link.name}
 </Link>
 </li>
 ))}
 </ul>
 </nav>
 ))}

 {/* Legal */}
 <nav aria-label={links.legal.title}>
 <h3 className="text-lg font-semibold mb-6 text-yellow-500">{links.legal.title}</h3>
 <ul className="space-y-3">
 {links.legal.items.map((link) => (
 <li key={link.name}>
 <Link to={link.path} className="text-gray-300 hover:text-yellow-500 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded">
 {link.name}
 </Link>
 </li>
 ))}
 </ul>
 </nav>
 </div>
 </div>
 </div>
 );
};

const QuickLinks = () => {
 const { quickLinks } = footerConfig;
 return (
 <div className="bg-gray-800/70 py-4" role="navigation" aria-label="روابط سريعة">
 <div className="container mx-auto px-4">
 <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
 {quickLinks.map((q) => (
 <Link key={q.name} to={q.path} className="text-gray-200 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded">
 {q.name}
 </Link>
 ))}
 </div>
 </div>
 </div>
 );
};

const BottomBar = () => {
 const year = new Date().getFullYear();
 return (
 <div className="border-t border-gray-800 py-6">
 <div className="container mx-auto px-4">
 <div className="flex flex-col items-center justify-center gap-4">
 <p className="text-gray-400 text-center">© {year} الأسطورة أونلاين. جميع الحقوق محفوظة.</p>
 <div className="text-gray-400 text-sm">صُنع بـ ❤️ في اليمن - حضرموت - الوديعة</div>
 </div>
 </div>
 </div>
 );
};

const Footer = () => {
 return (
 <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="تذييل الموقع">
 <ActionStrip />
 <Newsletter />
 <TrustBar />
 <ColumnsGrid />
 <QuickLinks />
 <BottomBar />
 </footer>
 );
};

export default Footer;