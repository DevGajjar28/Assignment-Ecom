import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../Product_Data(1).json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faXTwitter

} from "@fortawesome/free-brands-svg-icons";

/*
      -> main component for product detials
      -> data coming from Product_Data(1).json 
      -> added more images function to make user friendly
      -> add recommendation so user can find what needed, make easy for user
*/

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
    const message = `Hey, I am interested in buying ${product.name} (${selectedSize}) for ${product.price}. Here's the photo: ${mainImage}`;
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const handleShareOnWhatsapp = () => {
    const message = `Check out this product: ${product.name} - ${product.price}. ${mainImage}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleShareOnInstagram = () => {
    const instagramLink = `https://www.instagram.com/?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(instagramLink, "_blank");
  };

  const handleShareOnTwitter = () => {
    const message = `Check out this product: ${product.name} - ${product.price}.`;
    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      message
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(twitterLink, "_blank");
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setMainImage(color.imageSrc);
  };

  const handleAdditionalImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const getRandomProducts = (num) => {
    const shuffled = [...productsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomProducts = getRandomProducts(4); // Get 4 random products

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
              <div className="mt-10 flex space-x-12 h-10">
                <button
                  onClick={handleShareOnWhatsapp}
                  href="https://www.whatsapp.com/"
                  className="flex-grow bg-black text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={handleShareOnInstagram}
                  href="https://www.instagram.com/"
                  className="flex-grow bg-black text-white px-4 py-2 rounded-md hover:bg-pink-700 flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-4 h-4 ml-2"
                  />
                </button>
                <button
                  onClick={handleShareOnTwitter}
                  href="https://twitter.com/?lang=en"
                  className="flex-grow bg-black text-white px-4 py-2 rounded-md hover:bg-gray-400 flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-4 h-4 ml-2"
                  />
                </button>
                
              </div>
            </div>
          </div>
          {/* Additional Images Section */}
          <div className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {product.additionalImages.map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`${product.name} additional ${index + 1}`}
                  className="h-full w-full object-cover object-center rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleAdditionalImageClick(imageSrc)}
                />
              ))}
            </div>
          </div>
          {/* Recommended Products Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Recommended Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {randomProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/ProductDetails/${product.id}`}
                  className="group"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
