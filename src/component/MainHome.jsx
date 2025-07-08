import React from "react";
import bg from "../assets/Images/6.png";
import Logo from "../assets/Images/logo2.png";
import img1 from '../assets/Images/téléchargement-removebg-preview.png'
import img2 from '../assets/Images/téléchargement1-removebg-preview.png'
import img3 from '../assets/Images/téléchargement2-removebg-preview.png'
import img4 from '../assets/Images/téléchargement3-removebg-preview.png'
import { useNavigate } from "react-router-dom";
useNavigate
const MainHome = () => {
  const navigate = useNavigate();
  return (
    <main className="relative flex flex-col items-center">
      {/* القسم العلوي */}
      <div
        className="bg-cover bg-center w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8 px-2 sm:px-4 z-10 animate-fadeIn max-w-xl sm:max-w-2xl">
          <img className="w-28 sm:w-36 md:w-40 drop-shadow-2xl" src={Logo} alt="Logo" />
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#dec28f] font-bold leading-snug drop-shadow-lg"
            style={{ fontFamily: "arabic" }}
          >
            اكتشف سر جمال المغرب الطبيعي
          </h1>
          <button
            className="px-6 sm:px-10 cursor-pointer py-2 sm:py-3 border-2 border-[#dec28f] text-[#dec28f] rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-[#dec28f] hover:text-[#7c4a03] transition-all duration-300 shadow-lg"
            style={{ fontFamily: "arabic" }}
            onClick={()=> navigate("/about")}
          >
            اكتشف الآن
          </button>
        </div>
      </div>

      {/* قسم من نحن */}
      <div className="w-full bg-[#f5e9dc] py-8 sm:py-10 text-center text-[#3e2e15]">
        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: "arabic" }}>
            من نحن
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ fontFamily: "arabic" }}>
            نحن نؤمن بجمال الطبيعة وأصالة التقاليد المغربية. في علامتنا، نقدم
            لكم منتجات طبيعية 100%، مستخلصة من مكونات مغربية خالصة...
          </p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ fontFamily: "arabic" }}>
            جميع منتجاتنا مصنوعة بعناية فائقة...
          </p>
        </div>
      </div>

      {/* قسم المنتجات */}
      <div className="w-full bg-[#aa6e2e] py-10 sm:py-16 px-2 sm:px-4 text-[#dec28f] text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12" style={{ fontFamily: 'arabic' }}>
          المنتجات المميزة
        </h1>
        <div className="max-w-2xl sm:max-w-4xl md:max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {[{ img: img1, title: "الغاسول المغربي" },
            { img: img2, title: "التبريمة المغربية" },
            { img: img3, title: "الطين الأبيض" },
            { img: img4, title: "الصابون البلدي" }].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 sm:gap-4">
              <img className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px]" src={item.img} alt={item.title} />
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ fontFamily: 'arabic' }}>
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainHome;