import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br flex flex-col items-center from-[#f5e9dc] to-[#e8d5c1] text-[#3e2e15] relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 py-8 px-2 sm:px-4 md:px-8 lg:px-16 w-full">
        <div className="max-w-7xl flex flex-col items-center mx-auto w-full">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start mb-10 w-full">
            {/* Logo & Slogan */}
            <div className="flex flex-col items-center gap-6">
              <img className="w-32 sm:w-36 md:w-40" src={logo} alt="logo" />
              <div className="space-y-2 text-center">
                <h1
                  className="text-xl sm:text-2xl font-bold leading-relaxed"
                  style={{ fontFamily: "arabic" }}
                >
                  جمالك سرّه وصفات جداتنا
                </h1>
                <p
                  className="text-[#7c4a03] text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: "arabic" }}
                >
                  نحن نقدم لك أفضل المنتجات الطبيعية المستوحاة من التراث المغربي الأصيل
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-6 items-center sm:items-start">
              <h1
                className="text-lg sm:text-xl font-bold border-b-2 border-[#d4af37] pb-2 inline-block"
                style={{ fontFamily: "arabic" }}
              >
                خدماتنا
              </h1>
              <div className="space-y-3 w-full">
                <Link
                  to="/"
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer w-full"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold">
                    🏠
                  </div>
                  <p className="font-medium text-[#3e2e15] text-sm sm:text-base">الصفحة الرئيسية</p>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer w-full"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold">
                    👤
                  </div>
                  <p className="font-medium text-[#3e2e15] text-sm sm:text-base">من نحن</p>
                </Link>
                <Link
                  to="/product"
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer w-full"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold">
                    🛍️
                  </div>
                  <p className="font-medium text-[#3e2e15] text-sm sm:text-base">المنتجات</p>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer w-full"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold">
                    📞
                  </div>
                  <p className="font-medium text-[#3e2e15] text-sm sm:text-base">تواصل معنا</p>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 items-center sm:items-start">
              <h2
                className="text-lg sm:text-xl font-bold border-b-2 border-[#d4af37] pb-2 inline-block"
                style={{ fontFamily: "arabic" }}
              >
                تواصل معنا
              </h2>
              <div className="space-y-3 w-full">
                <div
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/moroccan_glowy?igsh=ZXhqYnppcnRrdTl0",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <FaInstagram size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#7c4a03]">Instagram</p>
                    <p className="font-medium text-sm sm:text-base">صفحتنا الأولى</p>
                  </div>
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/moroccan_naturall?igsh=cjZ1cWw4eWFtYnll",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <FaInstagram size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#7c4a03]">Instagram</p>
                    <p className="font-medium text-sm sm:text-base">صفحتنا الثانية</p>
                  </div>
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.tiktok.com/@moroccannaturall1?_t=ZS-8xnvrVD0OjQ&_r=1",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <RiTiktokLine size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#7c4a03]">TikTok</p>
                    <p className="font-medium text-sm sm:text-base">حسابنا الأول</p>
                  </div>
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.tiktok.com/@moroccannaturall?_t=ZM-8xnvwuShtyw&_r=1",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <RiTiktokLine size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#7c4a03]">TikTok</p>
                    <p className="font-medium text-sm sm:text-base">حسابنا الثاني</p>
                  </div>
                </div>
                <div
                onClick={() => (window.location.href = "https://wa.me/96550350879")}
                  className="flex items-center gap-3 p-2 sm:p-3 bg-white/30 rounded-lg hover:bg-white/50 transition duration-300 cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <BsTelephone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#7c4a03]">هاتف</p>
                    <p className="font-medium text-sm sm:text-base">+965 50 350 879</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#d4af37]/30 pt-8 w-full text-center mt-6">
            <p
              className="text-[#7c4a03] font-bold text-base sm:text-lg"
              style={{ fontFamily: "arabic" }}
            >
              © {new Date().getFullYear()} Moroccan Glow. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;