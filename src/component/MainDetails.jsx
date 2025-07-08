// MainDetails.jsx
import React from "react";
import images from "../constant/images";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";

const MainDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-50 px-2 sm:px-4">
      <div className="bg-white w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 sm:top-4 sm:right-4 text-[#7c4a03] text-2xl sm:text-xl font-bold"
        >
          ×
        </button>

        {/* Image */}
        <img
          src={images[product.image]}
          alt={product.name}
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover mx-auto rounded-xl shadow-lg mb-4 sm:mb-6"
        />

        {/* Product Info */}
        <h2
          className="text-2xl sm:text-3xl font-bold text-center text-[#3e2e15]"
          style={{ fontFamily: "arabic" }}
        >
          {product.name}
        </h2>
        <h3
          className="text-sm sm:text-md text-center text-[#7c4a03] mb-2 sm:mb-4"
          style={{ fontFamily: "arabic" }}
        >
          {product.name_fr}
        </h3>

        <p
          className="text-[#3e2e15] text-sm sm:text-md leading-relaxed mb-2 sm:mb-4"
          style={{ fontFamily: "arabic" }}
        >
          {product.description}
        </p>

        {/* Price */}
        <p
          className="text-[#5a4a0c] text-base sm:text-lg font-semibold mb-2 sm:mb-4"
          style={{ fontFamily: "arabic" }}
        >
          السعر: {product.kwdPrice} دينار كويتي
        </p>

        {/* Benefits */}
        <div className="mb-2 sm:mb-4">
          <h4
            className="font-bold text-[#7c4a03] mb-1 sm:mb-2"
            style={{ fontFamily: "arabic" }}
          >
            الفوائد:
          </h4>
          <ul className="list-disc pl-5 sm:pl-6 text-[#3e2e15]">
            {product.benefits?.map((item, idx) => (
              <li key={idx} style={{ fontFamily: "arabic" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Usage */}
        <div className="mb-4 sm:mb-6">
          <h4
            className="font-bold text-[#7c4a03] mb-1 sm:mb-2"
            style={{ fontFamily: "arabic" }}
          >
            طريقة الاستخدام:
          </h4>
          <p className="text-[#3e2e15]" style={{ fontFamily: "arabic" }}>
            {product.usage}
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="mt-4 sm:mt-6 flex gap-4 sm:gap-6 justify-center">
          <div className="mt-6 sm:mt-8 text-center">
            <p
              className="text-[#3e2e15] text-base sm:text-lg font-semibold mb-2 sm:mb-4"
              style={{ fontFamily: "arabic" }}
            >
              :لطلب المنتج تواصل معنا على
            </p>
            <div className="flex gap-4 sm:gap-6 justify-center">
              <a
              onClick={() => (window.location.href = "https://wa.me/96550350879")}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center hover:bg-[#c19c2e]"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelephone className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/moroccan_glowy"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center hover:bg-[#c19c2e]"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@moroccannaturall"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d4af37] rounded-full flex items-center justify-center hover:bg-[#c19c2e]"
                target="_blank"
                rel="noreferrer"
              >
                <RiTiktokLine className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;