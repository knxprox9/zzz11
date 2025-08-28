import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
 CheckCircle,
 Shield,
 BadgeCheck,
 Sparkles,
 Rocket,
 Users,
 Globe,
 CreditCard,
 Zap,
 Lock,
 Cpu,
 Brain,
 Wallet,
 Coins,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
 hidden: { opacity: 0, y: 24 },
 show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
 hidden: {},
 show: { transition: { staggerChildren: 0.125 } },
};

const IconBubble = ({ Icon, className = '' }) => (
 <div
 className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white grid place-items-center shadow ${className}`}
 aria-hidden
 >
 <Icon className="w-6 h-6" />
 </div>
);

const Bullet = ({ children }) => (
 <motion.li variants={fadeUp} className="flex items-start gap-3 text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
 <span>{children}</span>
 </motion.li>
);

const ValueCard = ({ Icon, title, desc }) => (
 <motion.div
 variants={fadeUp}
 whileHover={{ y: -6, scale: 1.01 }}
 className="bg-white rounded-2xl p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition-all"
 >
 <IconBubble Icon={Icon} className="mb-4" />
 <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
 <p className="text-gray-600 leading-relaxed">{desc}</p>
 </motion.div>
);

const StatPill = ({ Icon, number, label }) => (
 <motion.div variants={fadeUp} className="flex items-center gap-3 bg-white/70 backdrop-blur px-4 py-3 rounded-2xl border">
 <Icon className="w-5 h-5 text-yellow-600" />
 <div>
 <div className="text-lg font-extrabold text-gray-900" dir="ltr">{number}</div>
 <div className="text-gray-600 text-sm">{label}</div>
 </div>
 </motion.div>
);

const AboutPage = () => {
 return (
 <div className="min-h-screen">
 <Header />

 {/* Hero */}
 <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAF8F5 0%, #FFF 100%)' }}>
 <div className="absolute -top-16 -left-16 w-64 h-64 bg-yellow-200/30 blur-3xl rounded-full" aria-hidden></div>
 <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-orange-200/30 blur-3xl rounded-full" aria-hidden></div>

 <div className="container mx-auto px-4 py-20">
 <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-5xl mx-auto text-center">
 <motion.div variants={fadeUp} className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow">
 <Sparkles className="w-5 h-5 text-yellow-600" />
 <span className="text-sm font-medium text-gray-700">منصة رائدة في الدفع الإلكتروني والخدمات الرقمية</span>
 </motion.div>
 <motion.h1 variants={fadeUp} className="text-4xl sm:text-[2.5rem] font-extrabold text-gray-900 mt-5">
 من نحن
 </motion.h1>
 <motion.p variants={fadeUp} className="text-xl sm:text-[1.35rem] text-gray-700 leading-relaxed mt-5">
 يُعد الأسطورة أونلاين منصة رائدة في مجال الدفع الإلكتروني والخدمات الرقمية، تأسست برؤية طموحة لتلبية الاحتياجات المتزايدة في السوق اليمني والإقليمي، من خلال حلول رقمية مبتكرة تُسهم في تسهيل حياة الأفراد والشركات على حد سواء.
 نحن نعمل على بناء منظومة متكاملة تجمع بين التكنولوجيا المتقدمة والخدمات المتنوعة، لتقديم تجربة دفع إلكتروني آمنة، سريعة، وموثوقة تتماشى مع أعلى المعايير العالمية.
 </motion.p>

 <motion.div variants={stagger} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 justify-items-center">
 <StatPill Icon={Zap} number="+120K" label="عملية شحن" />
 <StatPill Icon={CreditCard} number="+2K" label="بطاقات/رموز" />
 <StatPill Icon={Shield} number="99.9%" label="وقت تشغيل" />
 <StatPill Icon={Users} number="+1K" label="عميل راضٍ" />
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* قيم وهوية */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={stagger} className="max-w-6xl mx-auto">
 <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-10">هويتنا</motion.h2>
 <div className="grid grid-cols-1 gap-6">
 <ValueCard Icon={Sparkles} title="الابتكار" desc="تطوير حلول رقمية ذكية تعكس أحدث التوجهات التقنية." />
 <ValueCard Icon={Rocket} title="الريادة" desc="تعزيز مكانتنا كمنصة الدفع الإلكتروني الأولى في اليمن." />
 <ValueCard Icon={Shield} title="الثقة" desc="ضمان أعلى مستويات الأمان والشفافية في كل خدمة نقدمها." />
 <ValueCard Icon={BadgeCheck} title="التميز" desc="تجربة مستخدم استثنائية تتجاوز توقعات العملاء." />
 </div>
 </motion.div>
 </div>
 </section>

 {/* خدماتنا */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={stagger} className="max-w-6xl mx-auto">
 <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-6">خدماتنا</motion.h2>
 <motion.p variants={fadeUp} className="text-gray-700 mb-6">نقدم عبر الأسطورة أونلاين مجموعة شاملة من الخدمات الرقمية التي تلبي احتياجات السوق المحلي والإقليمي، وتشمل:</motion.p>
 <motion.ul variants={stagger} className="space-y-3">
 <Bullet>خدمات الاتصالات: دفع الرصيد والباقات والفواتير لكافة شبكات الاتصالات اليمنية.</Bullet>
 <Bullet>خدمات الإنترنت: تسديد اشتراكات الإنترنت المحلية بمرونة وسرعة.</Bullet>
 <Bullet>الألعاب الإلكترونية: شحن أشهر الألعاب العالمية مباشرة عبر التطبيق.</Bullet>
 <Bullet>البطاقات الرقمية: بطاقات مسبقة الدفع لتطبيقات ومنصات عالمية (تيك توك، نيتفلكس، جوجل بلاي، آيتونز، سبوتيفاي وغيرها).</Bullet>
 <Bullet>العملات الرقمية: شحن وتداول العملات الرقمية بأمان موثوق.</Bullet>
 <Bullet>الخدمات المتجددة: توسع مستمر لتغطية احتياجات جديدة في السوق الرقمي.</Bullet>
 </motion.ul>

 {/* شريط مزايا مصغّر */}
 <motion.div variants={stagger} className="mt-8 grid grid-cols-2 gap-4">
 <ValueCard Icon={Lock} title="أمان متقدم" desc="تشفير ومعايير حماية متعددة الطبقات." />
 <ValueCard Icon={Zap} title="تنفيذ فوري" desc="عمليات سريعة مع تتبع لحظي." />
 <ValueCard Icon={Wallet} title="وسائل دفع متعددة" desc="مرونة في طرق الدفع والدعم." />
 <ValueCard Icon={Coins} title="أسعار تنافسية" desc="أفضل عروض وقيمة مقابل السعر." />
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* الرؤية والرسالة */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={stagger} className="max-w-6xl mx-auto grid gap-10">
 <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 border shadow-sm">
 <IconBubble Icon={Globe} />
 <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">رؤيتنا</h3>
 <p className="text-gray-700 leading-relaxed">
 أن نصبح المنصة الأكثر تأثيرًا وموثوقية في مجال الدفع الإلكتروني والخدمات الرقمية في اليمن والمنطقة، عبر تقديم خدمات مبتكرة وبنية تحتية قوية تعزز التحول الرقمي المستدام.
 </p>
 </motion.div>
 <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 border shadow-sm">
 <IconBubble Icon={Cpu} />
 <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">رسالتنا</h3>
 <p className="text-gray-700 leading-relaxed">
 تمكين الأفراد والشركات من الوصول إلى خدمات دفع رقمية متكاملة، سريعة، وآمنة، تواكب التطورات العالمية وتُسهم في بناء مجتمع رقمي متطور.
 </p>
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* قيمنا الأساسية */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={stagger} className="max-w-6xl mx-auto">
 <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-6">قيمنا الأساسية</motion.h2>
 <motion.ul variants={stagger} className="grid grid-cols-1 gap-4">
 <Bullet>الأمان: حماية بيانات ومعاملات العملاء وفق أحدث أنظمة الأمان الرقمي.</Bullet>
 <Bullet>الشفافية: الالتزام بالوضوح والنزاهة في جميع التعاملات.</Bullet>
 <Bullet>الكفاءة: تقديم خدمات ذات جودة عالية وبأعلى درجات الاحترافية.</Bullet>
 <Bullet>الابتكار المستمر: تطوير وتحديث مستمر لتلبية احتياجات العملاء.</Bullet>
 <Bullet>خدمة العملاء: الاستجابة السريعة والدعم المستمر لتعزيز رضا المستخدمين.</Bullet>
 </motion.ul>
 </motion.div>
 </div>
 </section>

 {/* التزامنا */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={stagger} className="max-w-6xl mx-auto">
 <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-6">التزامنا</motion.h2>
 <motion.ul variants={stagger} className="space-y-3">
 <Bullet>توفير بيئة رقمية آمنة وموثوقة.</Bullet>
 <Bullet>تقديم أسعار تنافسية دون المساس بجودة الخدمة.</Bullet>
 <Bullet>الاستثمار في البنية التحتية التقنية لمواكبة النمو الرقمي.</Bullet>
 <Bullet>بناء شراكات استراتيجية لدعم توسع الخدمات.</Bullet>
 <Bullet>تحسين تجربة المستخدم عبر التحديثات المستمرة.</Bullet>
 </motion.ul>
 </motion.div>
 </div>
 </section>

 {/* لماذا نحن */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={stagger} className="max-w-6xl mx-auto grid gap-6">
 <ValueCard Icon={Wallet} title="شمولية الخدمات" desc="جميع الحلول الرقمية في تطبيق واحد." />
 <ValueCard Icon={Shield} title="معايير عالمية" desc="جودة عالية وأمان متكامل." />
 <ValueCard Icon={Users} title="سهولة الاستخدام" desc="واجهة بسيطة تناسب جميع الفئات." />
 <ValueCard Icon={BadgeCheck} title="دعم مستمر" desc="خدمة عملاء على مدار الساعة." />
 </motion.div>
 </div>
 </section>

 {/* الرؤية المستقبلية + الشراكات */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={stagger} className="max-w-6xl mx-auto grid gap-10">
 <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 border shadow-sm">
 <IconBubble Icon={Rocket} />
 <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">رؤيتنا المستقبلية</h3>
 <p className="text-gray-700 mb-4">
 نحن نطمح إلى توسيع نطاق خدماتنا بما يتجاوز السوق المحلي، لنكون علامة رائدة في الدفع الرقمي إقليميًا ودوليًا. تركز استراتيجيتنا المستقبلية على:
 </p>
 <ul className="space-y-3">
 <Bullet>توسيع قاعدة الخدمات: إضافة حلول جديدة مثل المحافظ الإلكترونية، بوابات الدفع للتجارة الإلكترونية، والخدمات المالية المتقدمة.</Bullet>
 <Bullet>التكامل مع القطاعات المختلفة: دعم المؤسسات التعليمية، التجارية، والخدمية عبر حلول دفع ذكية.</Bullet>
 <Bullet>اعتماد أحدث التقنيات: كالذكاء الاصطناعي والبلوكشين لتعزيز الكفاءة والأمان.</Bullet>
 <Bullet>المساهمة في الاقتصاد الرقمي: لعب دور محوري في دعم التحول الرقمي على المستوى الوطني والإقليمي.</Bullet>
 </ul>
 </motion.div>
 <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 border shadow-sm">
 <IconBubble Icon={Globe} />
 <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">التوسع والشراكات</h3>
 <p className="text-gray-700 mb-4">ندرك أن النجاح لا يُبنى بمعزل عن الآخرين، لذلك نولي أهمية كبرى لبناء شراكات استراتيجية مع:</p>
 <ul className="space-y-3">
 <Bullet>شركات الاتصالات المحلية والإقليمية.</Bullet>
 <Bullet>مزوّدي خدمات الإنترنت.</Bullet>
 <Bullet>منصات الألعاب العالمية.</Bullet>
 <Bullet>الشركات التقنية والمالية (FinTech).</Bullet>
 <Bullet>المؤسسات التجارية والخدمية.</Bullet>
 </ul>
 <p className="text-gray-700 mt-4">
 من خلال هذه الشراكات، نسعى لتوسيع شبكة خدماتنا وتعزيز مكانتنا كمنصة موثوقة تُلبي احتياجات المستخدمين وتفتح آفاقًا جديدة للنمو المستدام.
 </p>
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
 <div className="container mx-auto px-4 text-center">
 <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-4">جاهز للتعاون معنا؟</motion.h3>
 <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-white/90 max-w-3xl mx-auto mb-6">
 تواصل معنا لنتحدث عن الشراكات، أو لمعرفة كيف يمكننا تلبية احتياجاتك في الدفع الإلكتروني.
 </motion.p>
 <motion.a
 whileHover={{ scale: 1.03 }}
 whileTap={{ scale: 0.98 }}
 href="/contact"
 className="inline-block bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow"
 >
 تواصل معنا
 </motion.a>
 </div>
 </section>

 <Footer />
 </div>
 );
};

export default AboutPage;