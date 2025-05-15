

const OfferCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="relative flex items-center bg-[#f7f7f8] p-6 overflow-hidden rounded-lg">

        <div className="absolute w-24 h-24 bg-gray-300 rounded-full top-8 right-10 opacity-50 z-0"></div>
        <div className="absolute w-40 h-40 bg-gray-300 rounded-full bottom-[-30px] left-10 opacity-50 z-0"></div>

        <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-bold z-10">
          UP TO 50% OFF
        </div>

        <div className="w-1/2 z-10">
          <img
            src="https://i.ibb.co.com/yn1ZwkZ2/istockphoto-1186974930-612x612-removebg-preview.png"
            alt="Sofa"
            className="w-full"
          />
        </div>

        <div className="w-1/2 pl-6 z-10">
          <h2 className="text-2xl font-semibold leading-tight">
            Sale Furniture<br />For Summer
          </h2>
          <p className="text-gray-500 mt-2">Great Discounts Here</p>
        </div>
      </div>


      <div className="relative flex items-center bg-[#f7f7f8] p-6 overflow-hidden rounded-lg">

        <div className="absolute w-24 h-24 bg-gray-300 rounded-full top-8 left-10 opacity-50 z-0"></div>
        <div className="absolute w-36 h-36 bg-gray-300 rounded-full bottom-[-20px] right-12 opacity-50 z-0"></div>

        <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-bold z-10">
          UP TO 50% OFF
        </div>

        <div className="w-1/2 pr-6 z-10">
          <h2 className="text-2xl font-semibold leading-tight">
            Office Chair<br />For Best Offer
          </h2>
          <p className="text-gray-500 mt-2">Great Discounts Here</p>
        </div>

        <div className="w-1/2 z-10">
          <img
            src="https://i.ibb.co.com/wFZcsMHJ/istockphoto-505973586-612x612-removebg-preview.png"
            alt="Chair"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
