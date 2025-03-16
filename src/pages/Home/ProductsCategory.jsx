const ProductsCategory = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-5">
        {[
          { name: "Hand Clock", src: "https://i.ibb.co/DfMtnWHN/w5-Xczu-Hqe6sa-F26o-V7-Qdb-Viub-Qp-T4-Jh-Y8qz-DSC2-A-removebg-preview.png" },
          { name: "Shirt", src: "https://i.ibb.co/7db1SDBT/41iliag1-Dk-L-AC-QL92-SH45-UL240-SR240-220.jpg" },
          { name: "Pant", src: "https://i.ibb.co/bgjd0FLy/Gavardine-pant-1.jpg" },
          { name: "Table", src: "https://i.ibb.co/GvzZ6tP9/images-1-removebg-preview.png" },
          { name: "Table Fan", src: "https://i.ibb.co/vxcgqTmW/jifulife-f7bclip-fan-4000mah-battery-4-speed-table-fan-1.jpg" },
          { name: "Earbuds", src: "https://i.ibb.co/20t2K5NN/1-6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a-250x.jpg" }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-black p-5 m-5 rounded-full w-40 h-40 transition-all duration-500 ease-in-out 
            hover:border-dotted hover:rotate-6 hover:border-blue-500"
          >
            <img className="size-14 rounded-md" src={item.src} alt={item.name} />
            <h3 className="text-sm text-center font-semibold mt-2">{item.name}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductsCategory;
  