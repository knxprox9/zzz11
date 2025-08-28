import React from 'react';
import { Link } from 'react-router-dom';
import { 
 Zap, 
 Shield, 
 Award, 
 Users, 
 Globe, 
 BarChart3,
 Smartphone,
 ArrowLeft,
 CheckCircle,
 Star,
 Clock,
 Heart
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeaturesPage = () => {
 // مزايا مرتبطة بخدمات الدفع الإلكتروني بدل "تطوير التطبيقات"
 const mainFeatures = [
 {
 icon: Zap,
 title: 'شحن فوري وآلي',
 description: 'تنفيذ عمليات الشحن والدفع خلال ثوانٍ مع تتبع لحظي لحالة الطلب',
 details: [
 'سرعة تنفيذ عالية',
 'إشعارات فورية بحالة الطلب',
 'إدارة طلبات سهلة',
 'سجل عمليات مفصل'
 ]
 },
 {
 icon: Shield,
 title: 'أمان المدفوعات',
 description: 'حماية متعددة الطبقات وتشفير كامل لبيانات المعاملات',
 details: [
 'تشفير وحماية للبيانات',
 'مكافحة الاحتيال والتحقق الذكي',
 'مراجعات وتنبيهات أمان',
 'نسخ احتياطية دورية'
 ]
 },
 {
 icon: Award,
 title: 'موثوقية عالية',
 description: 'وقت تشغيل مرتفع 99.9% مع استقرار في الخدمة وتجربة سلسة',
 details: [
 'جاهزية دائمة للخدمة',
 'تحمل ضغط الطلبات العالية',
 'دعم احترافي وسريع',
 'جودة خدمة مضمونة'
 ]
 },
 {
 icon: Users,
 title: 'دعم فني على مدار الساعة',
 description: 'فريق مختص للرد على الاستفسارات ومتابعة الطلبات 24/7',
 details: [
 'قنوات تواصل متعددة',
 'سرعة استجابة',
 'متابعة الطلبات',
 'حلول فورية'
 ]
 },
 {
 icon: Globe,
 title: 'تغطية مزوّدين واسعة',
 description: 'دعم يمن موبايل، YOU، الإنترنت، إضافة إلى الألعاب والبطاقات الرقمية',
 details: [
 'يمن موبايل وباقات الإنترنت',
 'YOU شحن الرصيد والباقات',
 'خدمات الألعاب والبرامج',
 'بطاقات رقمية متعددة'
 ]
 },
 {
 icon: BarChart3,
 title: 'تقارير وشفافية أسعار',
 description: 'عروض وخصومات دورية مع تقارير أداء ومبيعات مفصلة',
 details: [
 'تقارير عمليات وشحن',
 'لوحة متابعة سهلة',
 'أسعار تنافسية',
 'عروض وكوبونات'
 ]
 }
 ];

 // فئات تقنية موجهة للخدمات التي تقدمها المنصة
 const technicalFeatures = [
 {
 category: 'الاتصالات والباقات',
 features: [
 { name: 'يمن موبايل', desc: 'شحن الرصيد والباقات وتأكيد فوري' },
 { name: 'YOU', desc: 'شحن رصيد وباقات الإنترنت' },
 { name: 'الإنترنت', desc: 'باقات ودفع فواتير/اشتراكات' },
 { name: 'سجل عمليات', desc: 'توثيق كامل لكل عملية شحن' }
 ]
 },
 {
 category: 'الألعاب والبرامج',
 features: [
 { name: 'شحن الألعاب', desc: 'PUBG, Free Fire, PlayStation وغيرها' },
 { name: 'منصات رقمية', desc: 'TikTok, Lamma Party Stars وغيرها' },
 { name: 'أكواد تفعيل', desc: 'تسليم فوري وآمن للأكواد' },
 { name: 'تنبيهات حالة', desc: 'إشعارات بكل تحديث على الطلب' }
 ]
 },
 {
 category: 'البطاقات الرقمية',
 features: [
 { name: 'متاجر التطبيقات', desc: 'Google Play, App Store' },
 { name: 'منصات الترفيه', desc: 'PlayStation, Xbox, Steam' },
 { name: 'خدمات اشتراك', desc: 'Netflix, Spotify, VPN... إلخ' },
 { name: 'تسليم فوري', desc: 'أكواد مضمونة تصل مباشرة' }
 ]
 }
 ];

 const stats = [
 { icon: Zap, number: '120K+', label: 'عملية شحن ناجحة', color: 'from-yellow-400 to-orange-500' },
 { icon: Smartphone, number: '2K+', label: 'بطاقات ورموز متاحة', color: 'from-orange-400 to-orange-600' },
 { icon: Award, number: '300+', label: 'شريك ومزوّد', color: 'from-yellow-500 to-yellow-700' },
 { icon: Clock, number: '99.9%', label: 'وقت تشغيل', color: 'from-gray-400 to-gray-600' }
 ];

 return (
 <div className="min-h-screen">
 <Header />
 
 {/* Hero Section */}
 <section className="py-20" style={{backgroundColor: '#FAF8F5'}}>
 <div className="container mx-auto px-4">
 <div className="text-center max-w-4xl mx-auto">
 <h1 className="text-4xl sm:text-[2.5rem] font-bold text-gray-900 mb-6">
 مزايا <span className="text-yellow-600">منصة الدفع الإلكتروني</span>
 </h1>
 <p className="text-xl sm:text-[1.35rem] text-gray-600 mb-8 leading-relaxed">
 اكتشف نقاط القوة التي تجعلنا الخيار الأول لشحن الرصيد والباقات والألعاب والبطاقات الرقمية بسرعة وأمان
 </p>
 </div>
 </div>
 </section>

 {/* Main Features Grid */}
 <section className="py-20">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 gap-8">
 {mainFeatures.map((feature, index) => (
 <div
 key={index}
 className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
 >
 <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
 <feature.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
 </div>
 
 <h3 className="text-2xl sm:text-[1.45rem] font-bold text-gray-900 mb-4">{feature.title}</h3>
 <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
 
 <ul className="space-y-3">
 {feature.details.map((detail, idx) => (
 <li key={idx} className="flex items-center gap-3">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
 <span className="text-gray-700">{detail}</span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Technical Features */}
 <section className="py-20 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-4xl sm:text-[2.5rem] font-bold text-gray-900 mb-6">الخدمات التي ندعمها</h2>
 <p className="text-xl sm:text-[1.35rem] text-gray-600 max-w-3xl mx-auto">
 دعم شامل لمزوّدي الاتصالات والألعاب والمنصات الرقمية مع تسليم فوري وآمن
 </p>
 </div>

 <div className="grid grid-cols-1 gap-8">
 {technicalFeatures.map((category, index) => (
 <div
 key={index}
 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
 >
 <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
 
 <div className="space-y-6">
 {category.features.map((feature, idx) => (
 <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
 <h4 className="font-semibold text-gray-900 mb-2">{feature.name}</h4>
 <p className="text-gray-600 text-sm">{feature.desc}</p>
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Stats Section */}
 <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-4xl font-bold mb-6">أرقام تعكس ثقة عملائنا</h2>
 <p className="text-xl text-gray-300 max-w-3xl mx-auto">
 عمليات شحن ناجحة وتغطية واسعة مع استمرارية عالية في الخدمة
 </p>
 </div>

 <div className="grid grid-cols-2 gap-8">
 {stats.map((stat, index) => (
 <div key={index} className="text-center">
 <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mb-6`}>
 <stat.icon className="w-10 h-10 text-white" />
 </div>
 <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
 <div className="text-gray-300">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why Choose Us */}
 <section className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-4xl font-bold text-gray-900 mb-6">لماذا تختارنا؟</h2>
 <p className="text-xl sm:text-[1.35rem] text-gray-600 max-w-3xl mx-auto">
 لسنا مجرد موقع شحن، بل شريك موثوق لتلبية كل احتياجاتك في الدفع الإلكتروني
 </p>
 </div>

 <div className="grid grid-cols-1 gap-12 items-center">
 <div>
 <div className="space-y-8">
 {[
 {
 icon: Heart,
 title: 'التزام بالسرعة والجودة',
 description: 'ننفذ عملياتك بسرعة قياسية مع ضمان أعلى درجات الجودة'
 },
 {
 icon: Users,
 title: 'فريق دعم متخصص',
 description: 'خبراء جاهزون للرد ومساعدتك على مدار الساعة'
 },
 {
 icon: Star,
 title: 'ثقة العملاء',
 description: 'سجل حافل من الطلبات الناجحة وتقييمات إيجابية'
 }
 ].map((reason, index) => (
 <div key={index} className="flex items-start gap-4">
 <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
 <reason.icon className="w-6 h-6 text-white" />
 </div>
 <div>
 <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
 <p className="text-gray-600 leading-relaxed">{reason.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="text-center">
 <div className="rounded-3xl p-8" style={{background: 'linear-gradient(to bottom right, #FAF8F5, #F5F0E8)'}}>
 <div className="text-6xl mb-4">🏆</div>
 <h3 className="text-2xl font-bold text-gray-900 mb-4">تميز في الخدمة</h3>
 <p className="text-gray-600 leading-relaxed mb-6">
 نضمن لك تجربة دفع إلكتروني آمنة وسريعة مع متابعة دقيقة لكل عملية شحن.
 </p>
 <div className="flex justify-center items-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
 ))}
 <span className="mr-2 text-gray-700 font-medium">5.0 تقييم العملاء</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20 text-white" style={{background: 'linear-gradient(to right, #D6B661, #E8A317)'}}>
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-4xl font-bold mb-6">ابدأ الشحن الآن</h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 انضم إلى آلاف المستخدمين الذين اختاروا الأسطورة أونلاين لشحن الرصيد والبطاقات الرقمية
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/contact"
 className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
 >
 ابدأ الآن
 <ArrowLeft className="w-5 h-5" />
 </Link>
 
 <Link
 to="/services"
 className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
 >
 استكشف خدماتنا
 </Link>
 </div>
 </div>
 </section>

 <Footer />
 </div>
 );
};

export default FeaturesPage;