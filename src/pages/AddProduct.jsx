import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: formData.name,
      image: formData.image,
      category: formData.category,
      price: parseFloat(formData.price),
    };

    const res = await fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: "Your product was successfully added to the store.",
        timer: 2000,
        showConfirmButton: false,
      });

      // Dispatch event to inform AllProduct component to re-fetch
      const event = new CustomEvent("product-added");
      window.dispatchEvent(event);
      setFormData({ name: "", image: "", category: "", price: "" });
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-50 rounded-xl pt-32">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-7">
        <input
          className="w-full p-2 border rounded"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          className="w-full p-2 border rounded"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          className="w-full p-2 border rounded"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          className="w-full p-2 border rounded"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
