import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const CartSidebar = ({ userEmail, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, [userEmail]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() =>
        setCartItems(cartItems.filter((item) => item._id !== id))
      );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-[200] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold">Cart</h2>
        <IoClose
          className="text-2xl cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="p-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex gap-3 border-b py-4">
            <img src={item.image} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.size} / {item.color}</p>
              <p className="text-orange-600 font-bold">${item.price}</p>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="p-4 font-bold text-xl flex justify-between">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
