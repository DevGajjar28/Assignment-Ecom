import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '',
      price: '$48',
      originalPrice: '$60', // Add original price
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },  {
        id: 1,
        name: 'Earthen Bottle',
        href: '',
        price: '$48',
        originalPrice: '$60', // Add original price
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
    // Other products...
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={`/ProductDetails/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <div className="mt-1 text-lg font-medium text-gray-900">
                {product.originalPrice && (
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 line-through mr-2">{product.originalPrice}</span>
                    <span>{product.price}</span>
                  </div>
                )}
                {!product.originalPrice && (
                  <span>{product.price}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
