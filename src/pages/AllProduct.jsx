import { useEffect, useState } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="group bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:bg-slate-100"
        >
          {/* Image */}
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <div className="p-4">
            {/* Product Name */}
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            {/* Category */}
            <p className="text-sm text-gray-500">{product.category}</p>
            <div className="flex justify-between items-center mt-3">
              {/* Price */}
              <span className="text-xl font-bold text-green-600">${product.price}</span>
              {/* Buy Button */}
              <button className="px-3 py-1 bg-blue-500 text-white rounded-full shadow-md hover:text-blue-500 hover:bg-slate-100 hover:border border-blue-500 transition-all duration-300 gap-2 flex items-center font-semibold">
               <HiMiniShoppingCart /> Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
