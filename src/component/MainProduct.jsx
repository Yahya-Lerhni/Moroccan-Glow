import React, { useState } from "react";
import data from "../json/file.json";
import images from "../constant/images";
import { FiShoppingCart } from "react-icons/fi";
import MainDetails from "./MainDetails";

const MainProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#f5e9dc] to-[#e8d5c1] py-10 px-2 sm:py-16 sm:px-4 md:py-20 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* عنوان وتعريف */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 border-[#d4af37] pb-2 md:pb-3 inline-block"
            style={{ fontFamily: "arabic" }}
          >
            منتجاتنا الطبيعية
          </h2>
          <p
            className="mt-3 sm:mt-4 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-[#3e2e15] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "arabic" }}
          >
            نقدم لكم مجموعة منتقاة من أجود المنتجات المغربية الطبيعية، المستوحاة من وصفات الجدات والتراث الأصيل، للعناية ببشرتكم وشعركم بأفضل الطرق التقليدية والفعالة.
          </p>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-center">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col justify-between items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={images[product.image]}
                alt={product.name}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-lg mb-4 sm:mb-6 shadow-md"
              />
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-[#3e2e15]"
                style={{ fontFamily: "arabic" }}
              >
                {product.name}
              </h3>
              <h4
                className="text-sm sm:text-md text-[#7c4a03] mb-2 sm:mb-4"
                style={{ fontFamily: "arabic" }}
              >
                {product.name_fr}
              </h4>
              <p
                className="text-[#5a4a0c] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6"
                style={{ fontFamily: "arabic" }}
              >
                {product.description}
              </p>

              <button
                onClick={() => setSelectedProduct(product)}
                className="flex items-center cursor-pointer gap-2 bg-[#d4af37] hover:bg-[#c19c2e] text-white px-4 sm:px-6 py-2 rounded-full font-semibold shadow-md transition-colors duration-300 text-sm sm:text-base"
                style={{ fontFamily: "arabic" }}
              >
                <FiShoppingCart size={20} />
                تفاصيل المنتج
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* تفاصيل المنتج */}
      {selectedProduct && (
        <MainDetails
          product={selectedProduct}
          image={images[selectedProduct.image]}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default MainProduct;