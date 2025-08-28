import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 CheckCircle, 
 X, 
 Star, 
 ArrowLeft,
 Smartphone,
 Globe,
 Shield,
 Zap,
 Crown
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage = () => {
 const [isAnnual, setIsAnnual] = useState(false);

 // باقات مناسبة لمنصة دفع إلكتروني (حسابات/عمولات) بدل باقات "تطوير تطبيقات"
 const pricingPlans = [
 {
 name: 'الحزمة الأساسية (أفراد)',
 icon: Zap,
 price: isAnnual ? '0' : '0',
 period: isAnnual ? 'سنوياً' : 'شهرياً',
 originalPrice: '',
 description: 'مثالية للمستخدمين الأفراد لشحن الرصيد والبطاقات الرقمية',
 popular: false,
 features: [
 'شحن الاتصالات يمن موبايل / YOU',
 'شحن الألعاب الشهيرة',
 'بطاقات رقمية أساسية',
 'تأكيد فوري للطلب',
 'دعم أساسي'
 ],
 notIncluded: [
 'نسب عمولة للوكلاء',
 'لوحة تقارير متقدمة'
 ],
 color: 'from-gray-400 to-gray-600'
 },
 {
 name: 'حساب تاجر',
 icon: Crown,
 price: isAnnual ? '20000' : '2500',
 period: isAnnual ? 'سنوياً' : 'شهرياً',
 originalPrice: isAnnual ? '30000' : '3500',
 description: 'الأنسب للمتاجر والوكلاء الصغار مع مزايا تشغيلية وعمولات أفضل',
 popular: true,
 features: [
 'لوحة تاجر لإدارة الطلبات',
 'تقارير عمليات ومبيعات',
 'نسب عمولة تفضيلية',
 'دعم فني 24/7',
 'حدود أعلى للشحن',
 'عروض وخصومات دورية',
 'تنبيهات حالة الطلب',
 'إضافة مزوّدين متعددين'
 ],
 notIncluded: [
 'علامة بيضاء متقدمة'
 ],
 color: 'from-yellow-400 to-orange-500'
 },
 {
 name: 'حساب وكيل',
 icon: Shield,
 price: isAnnual ? '40000' : '5000',
 period: isAnnual ? 'سنوياً' : 'شهرياً',
 originalPrice: isAnnual ? '60000' : '7000',
 description: 'للوكلاء المعتمدين وحجم عمليات كبير مع أولوية تنفيذ ودعم موسّع',
 popular: false,
 features: [
 'أولوية في التنفيذ',
 'نسب عمولة أعلى',
 'حدود تشغيل موسّعة',
 'تقارير تفصيلية متقدمة',
 'مدير حساب مخصص',
 'تكامل API (قريباً)'
 ],
 notIncluded: [],
 color: 'from-orange-400 to-orange-600'
 }
 ];

 const addOnServices = [
 {
 icon: Smartphone,
 name: 'تفعيل مزوّدين إضافيين',
 price: 'حسب الاتفاق',
 description: 'إضافة باقات/مزودين جدد إلى حسابك'
 },
 {
 icon: Globe,
 name: 'إعداد قنوات دفع',
 price: 'حسب الاتفاق',
 description: 'تجهيز بوابات الدفع والربط البنكي'
 },
 {
 icon: Shield,
 name: 'علامة تجارية بيضاء',
 price: 'حسب الاتفاق',
 description: 'واجهة مخصصة وهوية خاصة لنشاطك'
 },
 {
 icon: Zap,
 name: 'تدريب الفريق',
 price: 'حسب الاتفاق',
 description: 'جلسات تدريب على لوحة التحكم والعمليات'
 }
 ];

 const faqs = [
 {
 question: 'ما الفرق بين الحساب الشخصي وحساب التاجر؟',
 answer: 'الحساب الشخصي مناسب للاستخدام الفردي، بينما حساب التاجر يوفر أدوات إدارة وعمولات وميزات تشغيلية للتجار والوكلاء.'
 },
 {
 question: 'هل توجد عمولات على عمليات الشحن؟',
 answer: 'قد تُطبق عمولات بسيطة حسب المزوّد وطريقة الدفع، وتظهر بوضوح قبل تأكيد الطلب.'
 },
 {
 question: 'هل يمكن ترقية الخطة لاحقاً؟',
 answer: 'نعم، يمكنك الترقية في أي وقت وسيتم احتساب الفرق تلقائياً.'
 },
 {
 question: 'ما طرق الدفع المتاحة؟',
 answer: 'ندعم طرقاً متعددة تشمل البطاقات والمحافظ والتحويلات البنكية وفق المنطقة.'
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
 باقات <span className="text-yellow-600">الحسابات والاشتراكات</span>
 </h1>
 <p className="text-xl sm:text-[1.35rem] text-gray-600 mb-8 leading-relaxed">
 اختر الباقة الأنسب لاستخدامك واستمتع بخدمات الشحن والبطاقات الرقمية بسهولة وأمان
 </p>
 
 {/* Toggle Annual/Monthly */}
 <div className="flex items-center justify-center gap-4 mb-8">
 <span className={`text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
 شهرياً
 </span>
 <button
 onClick={() => setIsAnnual(!isAnnual)}
 className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
 isAnnual ? 'bg-yellow-500' : 'bg-gray-300'
 }`}
 >
 <div
 className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
 isAnnual ? 'translate-x-8' : 'translate-x-1'
 }`}
 />
 </button>
 <span className={`text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
 سنوياً
 </span>
 {isAnnual && (
 <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
 وفر حتى 20%
 </span>
 )}
 </div>
 </div>
 </div>
 </section>

 {/* Pricing Cards */}
 <section className="py-20">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 gap-8">
 {pricingPlans.map((plan, index) => (
 <div
 key={index}
 className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
 plan.popular ? 'ring-4 ring-yellow-400 scale-105' : ''
 }`}
 >
 {plan.popular && (
 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
 <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
 الأكثر شعبية
 </div>
 </div>
 )}

 <div className="p-8">
 <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
 <plan.icon className="w-8 h-8 text-white" />
 </div>

 <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
 <p className="text-gray-600 mb-6">{plan.description}</p>

 <div className="mb-6">
 <div className="flex items-baseline gap-2">
 <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
 {plan.price && plan.price !== '0' ? <span className="text-lg text-gray-600">ريال</span> : null}
 <span className="text-gray-500">/ {plan.period}</span>
 </div>
 {plan.originalPrice ? (
 <div className="text-sm text-gray-500 line-through">
 بدلاً من {plan.originalPrice} ريال
 </div>
 ) : null}
 </div>

 <ul className="space-y-4 mb-8">
 {plan.features.map((feature, idx) => (
 <li key={idx} className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">{feature}</span>
 </li>
 ))}
 {plan.notIncluded.map((feature, idx) => (
 <li key={idx} className="flex items-start gap-3 opacity-50">
 <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
 <span className="text-gray-500">{feature}</span>
 </li>
 ))}
 </ul>

 <Link
 to="/contact"
 className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 block ${
 plan.popular
 ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
 : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
 }`}
 >
 ابدأ الآن
 </Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Add-on Services */}
 <section className="py-20 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-4xl font-bold text-gray-900 mb-6">خدمات إضافية</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 عزز حسابك بخدمات إضافية متخصصة لتحصل على حل شامل ومتكامل
 </p>
 </div>

 <div className="grid grid-cols-1 gap-8">
 {addOnServices.map((service, index) => (
 <div
 key={index}
 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
 >
 <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
 <service.icon className="w-6 h-6 text-white" />
 </div>
 
 <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
 <p className="text-gray-600 text-sm mb-4">{service.description}</p>
 
 <div className="text-lg font-bold text-yellow-600 mb-4">
 {service.price}
 </div>
 
 <button className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
 تواصل معنا
 </button>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-20">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-4xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 إجابات على أكثر الأسئلة شيوعاً حول حساباتنا وباقاتنا
 </p>
 </div>

 <div className="max-w-4xl mx-auto">
 {faqs.map((faq, index) => (
 <div
 key={index}
 className="bg-white rounded-2xl p-6 mb-4 shadow-lg"
 >
 <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
 <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-4xl font-bold mb-6">جاهز للبدء؟</h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 احصل على استشارة مجانية لاختيار الخطة المناسبة لك
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/contact"
 className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
 >
 استشارة مجانية
 <ArrowLeft className="w-5 h-5" />
 </Link>
 
 <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
 تحدث مع مختص
 </button>
 </div>

 <div className="mt-8 flex items-center justify-center gap-1">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
 ))}
 <span className="mr-2 opacity-90">تقييم 5.0 من عملائنا</span>
 </div>
 </div>
 </section>

 <Footer />
 </div>
 );
};

export default PricingPage;