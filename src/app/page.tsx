export default function LandingPage() {
  return (
    <main className="min-h-screen bg-academy-light text-academy-dark flex flex-col">
      {/* شريط التنقل العلوي */}
      <nav className="w-full p-4 bg-white shadow-sm flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-academy-primary">369 ACADEMY</h1>
        <a 
          href="#assessment" 
          className="bg-academy-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow"
        >
          ابدأ التقييم
        </a>
      </nav>

      {/* القسم الرئيسي (Hero Section) */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12">
        <span className="bg-academy-accent/20 text-academy-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
          التعليم عبر الإنترنت بجودة استثنائية (مجموعات صغيرة - أقصى 5 طلاب)
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          طريقك التفصيلي للتفوق في <span className="text-academy-primary">SAT & EST</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-md mb-8">
          انضم لأفضل المجموعات التعليمية أونلاين مع نخبة من أفضل المعلمين. يُرجى العلم أن التسجيل يتطلب إتمام اختبار التقييم أولاً.
        </p>
        
        <div className="w-full flex flex-col gap-3 max-w-xs">
          <a 
            href="#assessment" 
            className="w-full bg-academy-primary text-white py-3 rounded-xl font-bold shadow-lg text-center"
          >
            ابدأ التقييم الآن
          </a>
          <a 
            href="#courses" 
            className="w-full bg-white border border-gray-300 py-3 rounded-xl font-semibold text-center text-gray-700"
          >
            استعرض الدورات
          </a>
        </div>
      </section>
    </main>
  );
}
