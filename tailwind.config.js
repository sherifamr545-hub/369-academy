/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        academy: {
          dark: "#0F172A",    // أزرق داكن فخم
          primary: "#2563EB",  // أزرق أساسي
          accent: "#38BDF8",   // سماوي مضيء
          light: "#F8FAFC",    // خلفية فاتحة نظيفة
          success: "#10B981",  // أخضر للنجاح والقبول
          warning: "#F59E0B",  // برتقالي للتنبيهات
          danger: "#EF4444",   // أحمر للرفض
        }
      },
    },
  },
  plugins: [],
};
