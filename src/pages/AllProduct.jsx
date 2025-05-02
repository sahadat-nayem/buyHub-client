import { useContext, useEffect, useState } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AllProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const cartItem = {
      productId: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
      userEmail: user?.email,
    };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added!",
            showConfirmButton: false,
            timer: 1500,
          });
          const event = new CustomEvent("cart-updated");
          window.dispatchEvent(event);
        }
      });
  };

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="group bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:bg-slate-100"
        >
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xl font-bold text-green-600">
                ${product.price}
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="px-3 py-1 rounded-full text-white bg-blue-500 flex items-center gap-1"
              >
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
