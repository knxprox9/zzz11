import React from 'react';
import { Link } from 'react-router-dom';
import {
 CreditCard,
 Gamepad2,
 Download,
 Wallet,
 Shield,
 Users,
 ArrowLeft,
 CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage = () => {
 const services = [
 {
 icon: CreditCard,
 title: 'بطاقات الدفع المسبق',
 description: 'بطاقات المتاجر والمنصات العالمية مع تسليم فوري للأكواد وأسعار تنافسية.',
 features: [
 'بطاقات متجر Google Play / App Store / PlayStation / Xbox',
 'تسليم فوري وآمن للأكواد',
 'أسعار منافسة وعروض مستمرة',
 'دعم فني على مدار الساعة'
 ],
 price: 'حسب المزود',
 duration: 'تسليم فوري'
 },
 {
 icon: Gamepad2,
 title: 'شحن الألعاب والعملات',
 description: 'شحن سريع وآمن لجميع الألعاب والعملات داخل الألعاب مع توثيق للعمليات.',
 features: [
 'دعم أشهر الألعاب والمنصات',
 'شحن عملات رقمية داخل الألعاب',
 'تنفيذ خلال دقائق',
 'إشعارات حالة الطلب'
 ],
 price: 'حسب اللعبة',
 duration: 'دقائق'
 },
 {
 icon: Download,
 title: 'الاشتراكات الرقمية والبرامج',
 description: 'توفير اشتراكات المنصات والبرامج (Netflix, Spotify, Microsoft 365, Adobe, VPN) بأسعار تنافسية.',
 features: [
 'تفعيل فوري للبرامج والخدمات',
 'صلاحيات موثوقة ومضمونة',
 'تجديدات مرنة',
 'دعم متعدد المناطق'
 ],
 price: 'حسب الخدمة',
 duration: 'فوري'
 },
 {
 icon: Wallet,
 title: 'المحافظ الرقمية والعملات',
 description: 'شحن محافظك الرقمية وتحويلات آمنة مع دعم لعدة عملات ومنصات.',
 features: [
 'شحن محافظ رقمية متعددة',
 'تحويلات موثوقة',
 'دعم عملات متعددة',
 'سجل عمليات مفصل'
 ],
 price: 'حسب المنصة',
 duration: 'دقائق'
 },
 {
 icon: Shield,
 title: 'أمان المدفوعات',
 description: 'حماية متقدمة للمعاملات مع مراقبة فورية وتقنيات تشفير حديثة.',
 features: [
 'تشفير وحماية للبيانات',
 'مراقبة مستمرة للمعاملات',
 'تنبيهات ومراجعات أمان',
 'نسخ احتياطية مستمرة'
 ],
 price: '—',
 duration: '—'
 },
 {
 icon: Users,
 title: 'شراكات ووكلاء',
 description: 'برامج شراكة مرنة للوكلاء مع نسب تفضيلية ودعم فني.',
 features: [
 'خصومات للوكلاء',
 'لوحة متابعة للطلبات',
 'دعم فني سريع',
 'تسويات وتقارير شهرية'
 ],
 price: 'حسب الفئة',
 duration: 'مستمر'
 }
 ];

 return (
 <div className="min-h-screen">
 <Header />
 {/* Hero Section */}
 <section className="py-20" style={{backgroundColor: '#FAF8F5'}}>
 <div className="container mx-auto px-4">
 <div className="text-center max-w-4xl mx-auto">
 <h1 className="text-4xl sm:text-[2.5rem] font-bold text-gray-900 mb-6">
 خدمات <span className="text-yellow-600">الدفع الإلكتروني</span>
 </h1>
 <p className="text-xl sm:text-[1.35rem] text-gray-600 mb-8 leading-relaxed">
 حلول متكاملة لشحن الرصيد والألعاب والبرامج والبطاقات الإلكترونية بسرعة وأمان
 </p>
 </div>
 </div>
 </section>

 {/* Services Grid */}
 <section className="py-20">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 gap-12">
 {services.map((service, index) => (
 <div
 key={index}
 className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
 >
 <div className="flex items-start gap-6">
 <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
 <service.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
 </div>
 <div className="flex-1">
 <h3 className="text-2xl sm:text-[1.45rem] font-bold text-gray-900 mb-4">{service.title}</h3>
 <p className="text-gray-600 sm:text-[1.05rem] mb-6 leading-relaxed">{service.description}</p>
 <div className="space-y-3 mb-6">
 {service.features.map((feature, idx) => (
 <div key={idx} className="flex items-center gap-3">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
 <span className="text-gray-700">{feature}</span>
 </div>
 ))}
 </div>
 <div className="flex items-center justify-between pt-6 border-t border-gray-100">
 <div>
 <div className="text-sm text-gray-500">السعر</div>
 <div className="text-lg font-bold text-yellow-600">{service.price}</div>
 </div>
 <div>
 <div className="text-sm text-gray-500">المدة</div>
 <div className="text-lg font-bold text-gray-900">{service.duration}</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20 text-white" style={{background: 'linear-gradient(to right, #D6B661, #E8A317)'}}>
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-4xl sm:text-[2.5rem] font-bold mb-6">جاهز للبدء؟</h2>
 <p className="text-xl sm:text-[1.35rem] mb-8 opacity-90 max-w-2xl mx-auto">
 تواصل معنا الآن للحصول على أفضل العروض لشحن الألعاب والبطاقات والاشتراكات الرقمية
 </p>
 <Link
 to="/contact"
 className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
 >
 تواصل معنا الآن
 <ArrowLeft className="w-5 h-5" />
 </Link>
 </div>
 </section>

 <Footer />
 </div>
 );
};

export default ServicesPage;