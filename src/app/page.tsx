import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-academy-light text-academy-dark flex flex-col">
      {/* شريط التنقل العلوي */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <h1 className="text-base font-extrabold text-academy-primary tracking-wider">369 ACADEMY</h1>
        <Link 
          href="/login" 
          className="bg-academy-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow hover:bg-opacity-90 transition"
        >
          تسجيل الدخول
        </Link>
      </header>

      {/* قسم البطل (Hero Section) */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 max-w-2xl mx-auto">
        <span className="bg-academy-primary/10 text-academy-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          نظام تعليمي متكامل لـ SAT & EST
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
          طريقك الاحترافي للوصول لأعلى الدرجات في اختبارات القبول الجامعي
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-8 leading-relaxed">
          نقدم تعليماً مركزاً في مجموعات مصغرة (أقصى 5 طلاب) لضمان المتابعة الفردية، التفاعل الفعال، والتقييم المستمر لمستواك.
        </p>
        <div className="flex gap-3 w-full max-w-xs">
          <Link 
            href="/login"
            className="flex-1 bg-academy-primary text-white py-3 rounded-xl text-xs font-bold shadow-md hover:bg-opacity-90 transition text-center"
          >
            ابدأ رحلتك الآن
          </Link>
        </div>
      </section>

      {/* مميزات الأكاديمية */}
      <section className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-academy-light rounded-2xl border border-gray-100">
            <h3 className="text-sm font-bold text-academy-primary mb-2">مجموعات مصغرة</h3>
            <p className="text-xs text-gray-500">أقصى 5 طلاب في المجموعة لضمان التركيز التام والشرح المخصص.</p>
          </div>
          <div className="p-4 bg-academy-light rounded-2xl border border-gray-100">
            <h3 className="text-sm font-bold text-academy-primary mb-2">أنظمة SAT & EST</h3>
            <p className="text-xs text-gray-500">مناهج متخصصة وأحدث تدريبات الامتحانات لضمان التفوق.</p>
          </div>
          <div className="p-4 bg-academy-light rounded-2xl border border-gray-100">
            <h3 className="text-sm font-bold text-academy-primary mb-2">متابعة ولي الأمر</h3>
            <p className="text-xs text-gray-500">لوحات تحكم ذكية لتتبع الحضور، الغياب، والتقدم أولاً بأول.</p>
          </div>
        </div>
      </section>

      {/* التذييل */}
      <footer className="bg-gray-50 border-t border-gray-200 py-4 text-center text-[10px] text-gray-400">
        جميع الحقوق محفوظة © 2026 - 369 Academy
      </footer>
    </main>
  );
}
