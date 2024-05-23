import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../Product_Data.json";
import SearchBar from "./SearchBar";
import "./styles.css";

/*  -> Product page that is showing product to user
    -> Data coming from Product_Data.json file

*/
export default function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 12;

  useEffect(() => {
    // Set products state with data from JSON file
    setProducts(productsData.products);
  }, []);

  // Calculate the indices of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const currentFilteredProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <SearchBar onSearch={handleSearch} />

        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentFilteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/ProductDetails/${product.id}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 product-image-container">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-xl text-white">{product.name}</h3>
              <div className="mt-1 text-2xl font-medium text-white">
                {product.originalPrice && (
                  <div className="flex items-center">
                    <span className="text-sm text-red-900 line-through mr-2">
                      {product.originalPrice}
                    </span>
                    <span>{product.price}</span>
                  </div>
                )}
                {!product.originalPrice && <span>{product.price}</span>}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center text-black">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`mr-4 px-4 py-2 bg-gray-200 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-gray-200 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
