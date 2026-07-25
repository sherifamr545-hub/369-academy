"use client";
import { useState } from "react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("schedule");

  return (
    <main className="min-h-screen bg-academy-light text-academy-dark pb-12">
      {/* شريط العنوان */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-lg font-extrabold text-academy-primary">369 ACADEMY</h1>
          <p className="text-xs text-gray-500">بوابة الطالب (Student Portal)</p>
        </div>
        <div className="bg-academy-success/10 text-academy-success text-xs font-bold px-3 py-1.5 rounded-full">
          نشط - SAT / EST
        </div>
      </header>

      {/* التبويبات */}
      <nav className="flex overflow-x-auto gap-2 p-4 bg-white border-b border-gray-100 scrollbar-none">
        {["schedule", "packages", "homework", "assessment"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === tab
                ? "bg-academy-primary text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab === "schedule" && "الحصص والمواعيد"}
            {tab === "packages" && "الباقات المتبقية"}
            {tab === "homework" && "الواجبات والتقييمات"}
            {tab === "assessment" && "اختبار التحديد"}
          </button>
        ))}
      </nav>

      {/* المحتوى */}
      <div className="p-4 max-w-4xl mx-auto flex flex-col gap-6">
        {activeTab === "schedule" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-bold text-gray-800 mb-3">الحصص القادمة (مجموعات صغيرة - أقصى 5 طلاب)</h2>
            <div className="p-4 bg-academy-light rounded-xl border border-gray-200 flex flex-col gap-2">
              <span className="text-xs font-bold text-academy-primary">حصص لغة إنجليزية - SAT</span>
              <p className="text-xs text-gray-600">الموعد: الإثنين، 07:00 مساءً</p>
              <a 
                href="#" 
                className="mt-2 bg-academy-primary text-white text-center py-2 rounded-lg text-xs font-bold shadow"
              >
                دخول قاعة الدرس أونلاين
              </a>
            </div>
          </div>
        )}

        {activeTab === "packages" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-bold text-gray-800 mb-3">حالة الباقة الحالية</h2>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-academy-light p-4 rounded-xl">
                <span className="text-xs text-gray-400 block mb-1">الحصص المستهلكة</span>
                <span className="text-xl font-extrabold text-academy-dark">3 / 10</span>
              </div>
              <div className="bg-academy-light p-4 rounded-xl">
                <span className="text-xs text-gray-400 block mb-1">الحصص المتبقية</span>
                <span className="text-xl font-extrabold text-academy-success">7</span>
              </div>
            </div>
          </div>
        )}

        {activeTab !== "schedule" && activeTab !== "packages" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center py-12">
            <h2 className="text-sm font-bold text-gray-700 mb-2">قسم {activeTab} جاهز للربط</h2>
            <p className="text-xs text-gray-400">تابع مع المعلم بانتظام لضمان أعلى معدل تقدم في الاختبارات.</p>
          </div>
        )}
      </div>
    </main>
  );
}
