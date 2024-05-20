import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Mock data - you can replace this with an actual API call
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    price: '$48',
    originalPrice: '$60',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#FF0000', '#0000FF', '#008000'], // Example hex color values
    description: 'This is a beautiful earthen bottle made from high-quality materials.',
    highlights: ['Handmade', 'Eco-friendly', 'Unique design'],
    details: 'Dimensions: 10 x 10 x 20 cm. Weight: 1 kg. Material: Porcelain.',
  },
  {
    id: 2,
    name: 'Ceramic Mug',
    price: '$20',
    originalPrice: '$25',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'Ceramic mug with natural clay textured body and cork stopper.',
    sizes: ['One size'],
    colors: ['#FFFFFF', '#000000'], // Example hex color values
    description: 'A stylish ceramic mug perfect for your morning coffee.',
    highlights: ['Dishwasher safe', 'Microwave safe', 'Modern design'],
    details: 'Dimensions: 8 x 8 x 10 cm. Weight: 0.5 kg. Material: Ceramic.',
  },
  // Other products...
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToBag = () => {
    // Add product to shopping cart logic here
    console.log(`${product.name} added to bag`);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-2">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
              <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
              )}
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Description</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Sizes</h2>
                <ul className="text-sm text-gray-600">
                  {product.sizes.map((size) => (
                    <li key={size}>{size}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Colors</h2>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Highlights</h2>
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
              <div className="mt-4">
                <button
                  onClick={handleAddToBag}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Add to Bag
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
