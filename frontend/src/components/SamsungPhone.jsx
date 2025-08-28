import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// شاشة هاتف سامسونج تفاعلية واقعية داخل الإطار نفسه دون أي تغيير على الهيكل أو التصميم الخارجي
// - تحافظ على صورة الخلفية/الوول بيبر كما هي
// - تضيف تفاعل داخل الشاشة فقط (Dock + لوحات تطبيقات واقعية)
// - لا تؤثر على صفحة الموقع خارج المكوّن

const IconLabel = ({ label }) => (
 <span className="block mt-1 text-[10px] leading-none text-white/90 drop-shadow" style={{fontWeight:600}}>{label}</span>
);

const AppIcon = ({ className = '', children, onClick, label, ariaLabel }) => {
 return (
 <button
 type="button"
 className={`app-icon ${className} phone-ui-btn`}
 aria-label={ariaLabel || label}
 onClick={onClick}
 >
 {children}
 {label ? <IconLabel label={label} /> : null}
 </button>
 );
};

const DrawerHandle = () => (
 <div className="absolute left-1/2 -translate-x-1/2 top-2 w-10 h-1.5 rounded-full bg-white/70" />
);

const AppsGrid = ({ onOpenApp }) => {
 const items = useMemo(() => ([
 { key: 'phone', label: 'الهاتف', kind: 'phone', icon: (
 <svg viewBox="0 0 36 36" className="w-[62%] h-[62%]" fill="#fff" aria-hidden>
 <path d="M11.2 15.9c2 3.7 5 6.6 8.7 8.7l2.8-2.8c.5-.5 1.1-.6 1.8-.4l4.8 1.6c.8.3 1.3 1 .1.7v4.2c0 1.1-.9 2-2 2C14.4 30 6 21.6 6 11.9c0-1.1.9-2 2-2h4.2c.7 0 1.4.4 1.6 1.1l1.6 4.8c.2.7.1 1.3-.4 1.8l-1.8 2.3z"/>
 </svg>
 )},
 { key: 'messages', label: 'الرسائل', kind: 'messages', icon: (
 <svg viewBox="0 0 36 36" className="w-[60%] h-[60%]" fill="#fff" aria-hidden>
 <path d="M7 9h22c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H14l-6 4.5V26H7c-1.7 0-3-1.3-3-3V12c0-1.7 1.3-3 3-3z"/>
 </svg>
 )},
 { key: 'contacts', label: 'الأسماء', kind: 'contacts', icon: (
 <svg viewBox="0 0 36 36" className="w-[60%] h-[60%]" fill="#fff" aria-hidden>
 <path d="M18 18c3.6 0 6.5-2.9 6.5-6.5S21.6 5 18 5s-6.5 2.9-6.5 6.5S14.4 18 18 18zm0 3c-5.3 0-9.8 3.4-9.8 7.7 0 1.1.9 2 2 2h15.6c1.1 0 2-.9 2-2 0-4.3-4.5-7.7-9.8-7.7z"/>
 </svg>
 )},
 ]), []);

 return (
 <div className="grid grid-cols-4 gap-4 px-4 pt-7 pb-4 select-none">
 {items.map((it) => (
 <div key={it.key} className="flex flex-col items-center">
 <button type="button" className="app-icon app-icon--apps phone-ui-btn" onClick={() => onOpenApp(it.kind)} aria-label={it.label}>
 {it.icon}
 </button>
 <span className="mt-1 text-[11px] text-white/95 drop-shadow" style={{fontWeight:600}}>{it.label}</span>
 </div>
 ))}
 </div>
 );
};

const PhonePanel = () => {
 const digits = ['1','2','3','4','5','6','7','8','9','*','0','#'];
 return (
 <div className="p-4 pt-6 h-full flex flex-col">
 <div className="grid grid-cols-3 gap-2 text-white/95">
 {digits.map((d) => (
 <div key={d} className="h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-lg font-bold phone-ui-btn" aria-label={`key ${d}`}>{d}</div>
 ))}
 </div>
 <div className="mt-auto flex justify-center">
 <button className="mt-4 h-12 w-12 rounded-full bg-[#11C15A] shadow-lg phone-ui-btn" aria-label="اتصال" />
 </div>
 </div>
 );
};

const MessagesPanel = () => (
 <div className="p-4 pt-6 h-full overflow-auto">
 {[1,2,3,4,5].map((i) => (
 <div key={i} className="mb-3 rounded-2xl p-3 bg-white/12 text-white/95 backdrop-blur-sm">
 رسالة تجريبية رقم {i}
 </div>
 ))}
 </div>
);

const ContactsPanel = () => (
 <div className="p-4 pt-6 h-full overflow-auto">
 {["أحمد","فاطمة","خالد","سارة","محمد"].map((n, idx) => (
 <div key={idx} className="mb-3 rounded-2xl p-3 bg-white/12 text-white/95 backdrop-blur-sm flex items-center gap-3">
 <div className="w-8 h-8 rounded-full bg-white/80 text-[#2F2F2F] font-bold grid place-items-center">{n[0]}</div>
 <div>{n}</div>
 </div>
 ))}
 </div>
);

const PanelHost = ({ active, onClose, onOpenApp }) => {
 const ref = useRef(null);
 useEffect(() => {
 const onKey = (e) => { if (e.key === 'Escape') onClose(); };
 window.addEventListener('keydown', onKey);
 return () => window.removeEventListener('keydown', onKey);
 }, [onClose]);

 const content = useMemo(() => {
 if (active === 'phone') return <PhonePanel/>;
 if (active === 'messages') return <MessagesPanel/>;
 if (active === 'contacts') return <ContactsPanel/>;
 if (active === 'apps') return <AppsGrid onOpenApp={onOpenApp}/>;
 return null;
 }, [active, onOpenApp]);

 return (
 <div className={`phone-ui-layer ${active ? 'open' : ''}`} ref={ref} aria-hidden={!active}>
 {/* خلفية رقيقة جداً لإبراز الطبقة دون تغيير التصميم العام */}
 <div className={`phone-ui-backdrop ${active ? 'visible' : ''}`} onClick={onClose} />
 <div className={`phone-ui-panel ${active ? 'open' : ''}`} role="dialog" aria-modal="true">
 <DrawerHandle/>
 {content}
 </div>
 </div>
 );
};

const SamsungPhone = ({ className = '', children, screenImageSrc = '', screenImageAlt = 'صورة داخل شاشة الهاتف', imageFit = 'cover', imagePosition = 'center center', tight = true }) => {
 const [active, setActive] = useState(null); // 'phone' | 'messages' | 'contacts' | 'apps' | null

 const open = useCallback((k) => setActive(k), []);
 const close = useCallback(() => setActive(null), []);

 return (
 <div className={`relative phone-frame ${className}`} aria-label="هاتف سامسونج">
 <picture>
 <source srcSet="/images/s24.webp" type="image/webp" />
 <img
 src="/images/s24.png"
 alt="Samsung Galaxy S24 Ultra"
 className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-20"
 fetchPriority="high"
 decoding="async"
 width={320}
 height={640}
 sizes="(min-width:1280px) 360px, 320px"
 />
 </picture>

 {/* منطقة الشاشة */}
 <div
 className={`absolute rounded-none overflow-hidden phone-screen`}
 role="region"
 aria-label="شاشة الهاتف"
 tabIndex={0}
 style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
 >
 {/* خلفية الشاشة / الوول بيبر */}
 <div className="w-full h-full overflow-hidden select-none">
 {screenImageSrc ? (
 <div
 className="w-full h-full"
 style={{
 backgroundImage: screenImageSrc ? `url(${screenImageSrc})` : 'none',
 backgroundSize: imageFit === 'contain' ? 'contain' : 'cover',
 backgroundRepeat: 'no-repeat',
 backgroundPosition: imagePosition || 'center center',
 backgroundColor: 'transparent'
 }}
 aria-label={screenImageAlt}
 role="img"
 />
 ) : (
 children
 )}
 </div>

 {/* طبقة التفاعل (اللوحات) */}
 <PanelHost active={active} onClose={close} onOpenApp={open} />

 {/* Dock سفلي تفاعلي بدون شريط خلفية */}
 <div className="phone-dock" aria-hidden={false}>
 <div className="phone-dock-inner">
 <AppIcon className="app-icon--phone" ariaLabel="الهاتف" onClick={() => open('phone')}>
 <svg viewBox="0 0 36 36" className="w-[70%] h-[70%]" fill="#ffffff" aria-hidden>
 <path d="M11.2 15.9c2 3.7 5 6.6 8.7 8.7l2.8-2.8c.5-.5 1.1-.6 1.8-.4l4.8 1.6c.8.3 1.3 1 .1.7v4.2c0 1.1-.9 2-2 2C14.4 30 6 21.6 6 11.9c0-1.1.9-2 2-2h4.2c.7 0 1.4.4 1.6 1.1l1.6 4.8c.2.7.1 1.3-.4 1.8l-1.8 2.3z"/>
 </svg>
 </AppIcon>
 <AppIcon className="app-icon--messages" ariaLabel="الرسائل" onClick={() => open('messages')}>
 <svg viewBox="0 0 36 36" className="w-[66%] h-[66%]" fill="#ffffff" aria-hidden>
 <path d="M7 9h22c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H14l-6 4.5V26H7c-1.7 0-3-1.3-3-3V12c0-1.7 1.3-3 3-3z"/>
 </svg>
 </AppIcon>
 <AppIcon className="app-icon--contacts" ariaLabel="الأسماء" onClick={() => open('contacts')}>
 <svg viewBox="0 0 36 36" className="w-[66%] h-[66%]" fill="#ffffff" aria-hidden>
 <path d="M18 18c3.6 0 6.5-2.9 6.5-6.5S21.6 5 18 5s-6.5 2.9-6.5 6.5S14.4 18 18 18zm0 3c-5.3 0-9.8 3.4-9.8 7.7 0 1.1.9 2 2 2h15.6c1.1 0 2-.9 2-2 0-4.3-4.5-7.7-9.8-7.7z"/>
 </svg>
 </AppIcon>
 <AppIcon className="app-icon--apps" ariaLabel="القائمة" onClick={() => open('apps')}>
 <svg viewBox="0 0 36 36" className="w-[66%] h-[66%]" fill="#9CA3AF" aria-hidden>
 <circle cx="9" cy="9" r="2.4"/>
 <circle cx="18" cy="9" r="2.4"/>
 <circle cx="27" cy="9" r="2.4"/>
 <circle cx="9" cy="18" r="2.4"/>
 <circle cx="18" cy="18" r="2.4"/>
 <circle cx="27" cy="18" r="2.4"/>
 <circle cx="9" cy="27" r="2.4"/>
 <circle cx="18" cy="27" r="2.4"/>
 <circle cx="27" cy="27" r="2.4"/>
 </svg>
 </AppIcon>
 </div>
 </div>
 </div>
 </div>
 );
};

export default SamsungPhone;