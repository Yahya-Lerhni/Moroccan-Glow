import React from "react";
import aboutImage from "../assets/Images/5.png";
import aboutImage1 from "../assets/Images/home1.jpg";
import aboutImage2 from "../assets/Images/home2.jpg";
import aboutImage3 from "../assets/Images/home3.jpg";
import aboutImage4 from "../assets/Images/home4.jpg";
import { useNavigate } from "react-router-dom";
useNavigate;

const MainAbout = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-gradient-to-br from-[#f5e9dc] to-[#e8d5c1] py-10 px-2 sm:py-16 sm:px-4 md:py-20 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-10 md:mb-16">
        {/* الصورة */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={aboutImage}
            alt="من نحن"
            className="w-full rounded-2xl shadow-2xl object-cover max-h-[350px] sm:max-h-[400px] md:max-h-[500px]"
          />
        </div>

        {/* النص */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 text-[#3e2e15]">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 border-[#d4af37] pb-2 md:pb-3"
            style={{ fontFamily: "arabic" }}
          >
            من نحن
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "arabic" }}
          >
            نحن علامة مغربية تهدف إلى إعادة إحياء أسرار الجمال الطبيعي المستوحاة
            من وصفات جداتنا، ونقدم منتجات طبيعية 100% تعكس سحر المكونات المحلية
            مثل الغاسول، الطين الأبيض، زيت الأركان، وزيت الورد.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "arabic" }}
          >
            نستخدم تركيبات أصيلة ومعتمدة على أبحاث علمية، تجمع بين خبرة الأجيال
            والمكونات النباتية الفريدة مثل الزعتر، الخزامة، الشيبة، وإكليل
            الجبل.
          </p>
          <button
            className="mt-4 cursor-pointer w-fit px-6 sm:px-8 py-2.5 sm:py-3 bg-[#d4af37] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-[#c19c2e] transition-all duration-300 shadow-lg"
            style={{ fontFamily: "arabic" }}
            onClick={() => navigate("/product")}
          >
            اكتشف المزيد
          </button>
        </div>
      </div>

      {/* الأعشاب المغربية */}
      <div className="max-w-6xl mx-auto text-center text-[#3e2e15]">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8"
          style={{ fontFamily: "arabic" }}
        >
          أعشاب مغربية وفوائدها
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <img
              src={aboutImage2}
              alt="الطين الأبيض"
              className="rounded-xl    max-w-xs shadow-md  sm:h-56 md:h-64 object-cover"
            />
            <h3
              className="text-lg sm:text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "arabic" }}
            >
              الطين الأبيض
            </h3>
            <p
              className="text-sm sm:text-base"
              style={{ fontFamily: "arabic" }}
            >
              مناسب للبشرة الحساسة يوحد لون البشرة ينظف المسام بعمق
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <img
              src={aboutImage1}
              alt="التبريمة المغربية"
              className="rounded-xl    max-w-xs shadow-md  sm:h-56 md:h-64 object-cover"
            />
            <h3
              className="text-lg sm:text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "arabic" }}
            >
              النيلة المغربية{" "}
            </h3>
            <p
              className="text-sm text-center w-90 sm:text-base"
              style={{ fontFamily: "arabic" }}
            >
              تفتح وتوحد لون البشرة تمنح نعومة فورية تقلل من آثار التصبغات
              والبقع الداكنة مناسبة للمناطق الحساسة
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <img
              src={aboutImage4}
              alt="الصابون البلدي"
              className="rounded-xl   max-w-xs shadow-md  sm:h-56 md:h-64 object-cover"
            />
            <h3
              className="text-lg sm:text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "arabic" }}
            >
              الصابون البلدي
            </h3>
            <p
              className="text-sm sm:text-base"
              style={{ fontFamily: "arabic" }}
            >
              يترك البشرة ناعمة ومرطبة يلين الجلد لتسهيل إزالة الخلايا الميتة
              يرطب وينظف بعمق
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <img
              src={aboutImage3}
              alt="التبريمة المغربية"
              className="rounded-xl    max-w-xs shadow-md sm:h-56 md:h-64 object-cover"
            />
            <h3
              className="text-lg sm:text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "arabic" }}
            >
              التبريمة المغربية
            </h3>
            <p
              className="text-sm sm:text-base"
              style={{ fontFamily: "arabic" }}
            >
              تفتح الجسم وتمنحه إشراقة ترطب وتنعم البشرة تقشر الجلد الميت
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAbout;
