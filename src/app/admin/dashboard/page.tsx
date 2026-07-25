"use client";
import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-academy-light text-academy-dark pb-12">
      {/* رأس الصفحة */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-lg font-extrabold text-academy-primary">369 ACADEMY</h1>
          <p className="text-xs text-gray-500">لوحة تحكم الأدمن المركزية</p>
        </div>
        <div className="bg-academy-primary/10 text-academy-primary text-xs font-bold px-3 py-1.5 rounded-full">
          مدير النظام (Admin)
        </div>
      </header>

      {/* شريط التنقل السريع */}
      <nav className="flex overflow-x-auto gap-2 p-4 bg-white border-b border-gray-100 scrollbar-none">
        {["overview", "groups", "students", "teachers", "finances"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === tab
                ? "bg-academy-primary text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab === "overview" && "الرئيسية والإحصائيات"}
            {tab === "groups" && "إدارة المجموعات (5 طلاب كحد أقصى)"}
            {tab === "students" && "حسابات الطلاب"}
            {tab === "teachers" && "حسابات المعلمين"}
            {tab === "finances" && "المالية والاشتراكات"}
          </button>
        ))}
      </nav>

      {/* المحتوى حسب التبويب */}
      <div className="p-4 max-w-4xl mx-auto flex flex-col gap-6">
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                <span className="text-xs text-gray-400 block mb-1">إجمالي الطلاب</span>
                <span className="text-lg font-extrabold text-academy-primary">24</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                <span className="text-xs text-gray-400 block mb-1">المجموعات النشطة</span>
                <span className="text-lg font-extrabold text-academy-success">5</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                <span className="text-xs text-gray-400 block mb-1">المعلمون</span>
                <span className="text-lg font-extrabold text-academy-warning">3</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                <span className="text-xs text-gray-400 block mb-1">حصص اليوم</span>
                <span className="text-lg font-extrabold text-gray-800">8</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-sm font-bold text-gray-800 mb-3">حالة المجموعات ونظام الـ 5 طلاب</h2>
              <div className="p-3 bg-academy-light rounded-xl border border-gray-200 text-xs text-gray-600">
                جميع المجموعات ملتزمة بالحد الأقصى (5 طلاب) لضمان أعلى جودة تفاعل في حصص SAT و EST.
              </div>
            </div>
          </>
        )}

        {activeTab !== "overview" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center py-12">
            <h2 className="text-sm font-bold text-gray-700 mb-2">قسم {activeTab} قيد التشغيل</h2>
            <p className="text-xs text-gray-400">هنا سيتم عرض وتعديل كافة بيانات هذا القسم بمرونة تامة.</p>
          </div>
        )}
      </div>
    </main>
  );
}
