import { useContext, useEffect, useState } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AllProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [disabledProductIds, setDisabledProductIds] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Pagination
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const handleCartUpdated = () => {
      fetch(`http://localhost:5000/cart?email=${user?.email}`)
        .then((res) => res.json())
        .then((cartItems) => {
          const cartIds = cartItems.map((item) => item.productId);
          setDisabledProductIds(cartIds);
        });
    };

    window.addEventListener("cart-updated", handleCartUpdated);
    return () => window.removeEventListener("cart-updated", handleCartUpdated);
  }, [user?.email]);

  // Handle Search
  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(text)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

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
          setDisabledProductIds((prev) => [...prev, product._id]);
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

  // Pagination Logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => setCurrentPage(page);
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="p-5 pt-20">
      {/* Search Bar */}
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((product) => (
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
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xl font-bold text-green-600">
                  ${product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={disabledProductIds.includes(product._id)}
                  className={`px-3 py-1 rounded-full text-white flex items-center gap-1 
                  ${disabledProductIds.includes(product._id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500"
                    }`}
                >
                  <HiMiniShoppingCart /> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-5 flex-wrap">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-blue-500 hover:text-white"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-blue-500 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
