"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "admin") router.push("/admin/dashboard");
    else if (role === "teacher") router.push("/teacher/dashboard");
    else router.push("/student/dashboard");
  };

  return (
    <main className="min-h-screen bg-academy-light flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-xl font-extrabold text-academy-primary">369 ACADEMY</h1>
          <p className="text-xs text-gray-400 mt-1">تسجيل الدخول إلى المنصة التعليمية</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1.5">اختر صففتك في النظام</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-academy-light border border-gray-200 rounded-xl p-3 text-xs text-gray-800 font-medium focus:outline-none focus:border-academy-primary"
            >
              <option value="student">طالب (SAT / EST)</option>
              <option value="teacher">معلم</option>
              <option value="admin">مشرف عام (Admin)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1.5">البريد الإلكتروني أو رقم الهاتف</label>
            <input 
              type="text" 
              placeholder="name@example.com"
              className="w-full bg-academy-light border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:border-academy-primary"
              required 
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1.5">كلمة المرور</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-academy-light border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:border-academy-primary"
              required 
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-academy-primary text-white py-3 rounded-xl text-xs font-bold shadow-md hover:bg-opacity-90 transition mt-2"
          >
            دخول مباشر
          </button>
        </form>
      </div>
    </main>
  );
}
