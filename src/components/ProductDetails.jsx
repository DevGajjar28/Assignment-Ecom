import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../Product_Data(1).json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === parseInt(productId));

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [mainImage, setMainImage] = useState(product.colors[0].imageSrc);

  if (!product) {
    return (
      <div className="text-center text-xl font-bold mt-10">
        Product not found
      </div>
    );
  }

  const handleAddToBag = () => {
    // Add product to shopping cart logic here
    console.log(`${product.name} added to bag`);
  };

  const handleInquireOnWhatsapp = () => {
    const message = `Hey, I am interested in buying ${product.name} (${selectedSize}, ${selectedColor.color}) for ${product.price}. Here's the photo: ${mainImage}`;
    const whatsappLink = `https://wa.me/918787878787?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setMainImage(color.imageSrc);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-2">
              <img
                src={mainImage}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </p>
              )}
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Description
                </h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Sizes</h2>
                <ul className="text-sm text-gray-600 flex space-x-2">
                  {product.sizes.map((size) => (
                    <li key={size}>
                      <button
                        className={`px-4 py-2 border ${
                          selectedSize === size
                            ? "border-black"
                            : "border-gray-300"
                        } rounded`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-2">
                  <a
                    href={product.sizeChart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Size Chart
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Colors</h2>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.color}
                      className={`border-2 rounded ${
                        selectedColor.color === color.color
                          ? "border-black"
                          : "border-transparent"
                      }`}
                      onClick={() => handleColorClick(color)}
                    >
                      <img
                        src={color.imageSrc}
                        alt={`Color option ${color.color}`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Highlights
                </h2>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Details</h2>
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handleAddToBag}
                  className="flex-grow bg-black text-white px-4 py-2 rounded-md hover:bg-gray-500 hover:text-black"
                >
                  Add to Bag
                </button>
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handleInquireOnWhatsapp}
                  className="flex-grow bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center"
                >
                  Inquire on WhatsApp
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
