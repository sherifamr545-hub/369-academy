"use client";
import { useState } from "react";

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("groups");

  return (
    <main className="min-h-screen bg-academy-light text-academy-dark pb-12">
      {/* رأس الصفحة */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-lg font-extrabold text-academy-primary">369 ACADEMY</h1>
          <p className="text-xs text-gray-500">بوابة المعلم (Teacher Portal)</p>
        </div>
        <div className="bg-academy-warning/10 text-academy-warning text-xs font-bold px-3 py-1.5 rounded-full">
          معلم معتمد - SAT / EST
        </div>
      </header>

      {/* شريط التنقل */}
      <nav className="flex overflow-x-auto gap-2 p-4 bg-white border-b border-gray-100 scrollbar-none">
        {["groups", "lessons", "attendance", "homework"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === tab
                ? "bg-academy-primary text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab === "groups" && "مجموعاتي (أقصى 5 طلاب)"}
            {tab === "lessons" && "جدول الحصص والروابط"}
            {tab === "attendance" && "تسجيل الغياب والحضور"}
            {tab === "homework" && "تصحيح الواجبات والدرجات"}
          </button>
        ))}
      </nav>

      {/* المحتوى */}
      <div className="p-4 max-w-4xl mx-auto flex flex-col gap-6">
        {activeTab === "groups" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-bold text-gray-800 mb-3">المجموعات النشطة الحالية</h2>
            <div className="p-4 bg-academy-light rounded-xl border border-gray-200 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-academy-primary">مجموعة SAT English - المجموعة أ</span>
                <span className="bg-academy-success/10 text-academy-success text-[10px] font-bold px-2 py-0.5 rounded">نشط (4/5 طلاب)</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">المستوى: متقدم | نظام الحصص: باقات 10 حصص</p>
            </div>
          </div>
        )}

        {activeTab === "lessons" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-bold text-gray-800 mb-3">الحصص القادمة وروابط القاعات</h2>
            <div className="text-center py-8 text-gray-400 text-xs">
              جميع الحصص مجدولة بنجاح في قاعدة البيانات.
            </div>
          </div>
        )}

        {activeTab !== "groups" && activeTab !== "lessons" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center py-12">
            <h2 className="text-sm font-bold text-gray-700 mb-2">قسم {activeTab} جاهز بالكامل</h2>
            <p className="text-xs text-gray-400">تابع تسجيل درجات الطلاب وغيابهم أولاً بأول لضمان جودة الأكاديمية.</p>
          </div>
        )}
      </div>
    </main>
  );
}
