import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

const MainContact= () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f5e9dc] to-[#e8d5c1] py-10 px-2 sm:py-16 sm:px-4 md:py-20 md:px-8">
      {/* معلومات التواصل */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12 text-[#3e2e15]">
        <div className="flex flex-col gap-5 w-full md:w-1/2 items-center md:items-start text-center md:text-right mb-8 md:mb-0">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 border-[#d4af37] pb-2 md:pb-3"
            style={{ fontFamily: "arabic" }}
          >
            تواصل معنا
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ fontFamily: "arabic" }}>
            نحن دائمًا سعداء بالتواصل معكم، سواء للاستفسار أو الشراكة أو أي ملاحظات. لا تترددوا في التواصل معنا عبر الوسائل التالية:
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 sm:gap-10 text-[#7c4a03] w-full md:w-1/2">
          <div
            onClick={() =>
              window.open("https://www.instagram.com/moroccan_glowy", "_blank")
            }
            className="flex items-center gap-4 cursor-pointer hover:text-[#d4af37] transition"
          >
            <FaInstagram size={22} />
            <span style={{ fontFamily: "arabic" }}>صفحتنا على إنستغرام</span>
          </div>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/moroccan_naturall", "_blank")
            }
            className="flex items-center gap-4 cursor-pointer hover:text-[#d4af37] transition"
          >
            <FaInstagram size={22} />
            <span style={{ fontFamily: "arabic" }}>صفحتنا الثانية على إنستغرام</span>
          </div>
          <div
            onClick={() =>
              window.open("https://www.tiktok.com/@moroccannaturall1", "_blank")
            }
            className="flex items-center gap-4 cursor-pointer hover:text-[#d4af37] transition"
          >
            <RiTiktokLine size={22} />
            <span style={{ fontFamily: "arabic" }}>تيك توك الأول</span>
          </div>
          <div
            onClick={() =>
              window.open("https://www.tiktok.com/@moroccannaturall", "_blank")
            }
            className="flex items-center gap-4 cursor-pointer hover:text-[#d4af37] transition"
          >
            <RiTiktokLine size={22} />
            <span style={{ fontFamily: "arabic" }}>تيك توك الثاني</span>
          </div>
          <div
            onClick={() => (window.location.href = "tel:+96550350879")}
            className="flex items-center gap-4 cursor-pointer hover:text-[#d4af37] transition"
          >
            <BsTelephone size={22} />
            <span style={{ fontFamily: "arabic" }}>+965 50 350 879</span>
          </div>
          <div
            onClick={() => (window.location.href = "mailto:contact@moroccanglow.com")}
            className="flex items-center gap-4 cursor-pointer hover:text-[#d4af37] transition"
          >
            <BsEnvelope size={22} />
            <span style={{ fontFamily: "arabic" }}>labadhind@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContact;