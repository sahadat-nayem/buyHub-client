import { useEffect, useState } from "react";
import axios from "axios";

const LimitedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/limited-products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="text-gray-500 mt-2">
        We have all kinds of watches, pants, clothes, tables, etc. and various domestic and foreign products available.
  </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product, index) => {
          const {
            _id,
            name,
            price,
            oldPrice,
            image
          } = product;

          return (
            <div key={_id} className="bg-white border rounded-xl shadow-sm p-3 relative group">

              <img
                src={image}
                alt={name}
                className="w-full h-52 object-contain mb-4 transition-transform group-hover:scale-105"
              />


              <h3 className="text-sm text-gray-700 line-clamp-2">{name}</h3>
              <div className="flex items-center gap-2 mt-1">
                {oldPrice && (
                  <span className="line-through text-gray-400 text-sm">${oldPrice}</span>
                )}
                <span className="text-lg font-bold text-gray-800">${price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LimitedProducts;
