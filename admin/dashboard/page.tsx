"use client";
import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-academy-light text-academy-dark pb-12">
      {/* رأس لوحة التحكم */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-lg font-extrabold text-academy-primary">369 ACADEMY</h1>
          <p className="text-xs text-gray-500">لوحة تحكم المشرف العام (Admin Dashboard)</p>
        </div>
        <div className="bg-academy-primary/10 text-academy-primary text-xs font-bold px-3 py-1.5 rounded-full">
          SUPER ADMIN
        </div>
      </header>

      {/* شريط التنقل السريع (Tabs) */}
      <nav className="flex overflow-x-auto gap-2 p-4 bg-white border-b border-gray-100 scrollbar-none">
        {["overview", "students", "payments", "groups", "settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === tab
                ? "bg-academy-primary text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab === "overview" && "الرئيسية"}
            {tab === "students" && "الطلاب"}
            {tab === "payments" && "المدفوعات والمراجعة"}
            {tab === "groups" && "المجموعات والحصص"}
            {tab === "settings" && "الإعدادات المركزية"}
          </button>
        ))}
      </nav>

      {/* محتوى لوحة التحكم */}
      <div className="p-4 max-w-4xl mx-auto flex flex-col gap-6">
        {activeTab === "overview" && (
          <>
            {/* بطاقات الإحصائيات السريعة */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-xs text-gray-400 block mb-1">الطلاب النشطون</span>
                <span className="text-2xl font-extrabold text-academy-dark">24</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-xs text-gray-400 block mb-1">مدفوعات قيد المراجعة</span>
                <span className="text-2xl font-extrabold text-academy-warning">3</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-xs text-gray-400 block mb-1">حصص اليوم</span>
                <span className="text-2xl font-extrabold text-academy-primary">5</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-xs text-gray-400 block mb-1">طلبات الاعتذار</span>
                <span className="text-2xl font-extrabold text-academy-danger">1</span>
              </div>
            </div>

            {/* قسم تنبيهات الإدارة */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-sm font-bold text-gray-800 mb-3">التنبيهات العاجلة</h2>
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-academy-warning/10 border border-academy-warning/20 rounded-xl flex justify-between items-center text-xs">
                  <span className="text-gray-700 font-medium">تم رفع إيصال دفع جديد من الطالب: أحمد محمد (بانتظار المراجعة)</span>
                  <button className="bg-academy-primary text-white px-3 py-1.5 rounded-lg font-bold">مراجعة</button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "payments" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-bold text-gray-800 mb-4">إيصالات الدفع والاشتراكات (InstaPay / Vodafone Cash)</h2>
            <div className="text-center py-8 text-gray-400 text-xs">
              لا توجد مدفوعات معلقة حالياً. يتم جلب البيانات مباشرة من قاعدة البيانات.
            </div>
          </div>
        )}

        {activeTab !== "overview" && activeTab !== "payments" && (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center py-12">
            <h2 className="text-sm font-bold text-gray-700 mb-2">قسم {activeTab} قيد التشغيل</h2>
            <p className="text-xs text-gray-400">يمكنك تعديل قواعد العمل والبيانات مباشرة من هذه اللوحة.</p>
          </div>
        )}
      </div>
    </main>
  );
}
