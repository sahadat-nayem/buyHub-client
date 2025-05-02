import { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

const CartSidebar = ({ userEmail, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items
  useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:5000/cart?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }
  }, [userEmail]);

  // Handle delete with confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Should you not take the product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );

              // Remove from UI
              setCartItems((prevItems) =>
                prevItems.filter((item) => item._id !== id)
              );

              // Trigger cart count update in Navbar
              const event = new CustomEvent("cart-updated");
              window.dispatchEvent(event);
            }
          });
      }
    });
  };

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-[200] overflow-y-auto transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold">Cart</h2>
        <GiCrossMark className="text-2xl cursor-pointer" onClick={onClose} />
      </div>

      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="flex gap-3 border-b py-4">
              <img
                src={item.image}
                className="w-20 h-20 object-cover rounded"
                alt={item.name}
              />
              <div className="flex-1 flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-orange-600 font-bold">${item.price}</p>
                </div>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 mt-1 flex items-center gap-1 text-xl"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="p-4 font-bold text-xl flex justify-between text-green-600">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
