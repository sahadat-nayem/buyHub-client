import { Link } from "react-router-dom";


const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[37rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center lg:w-[800px]'>
                    <h1 className='text-3xl font-semibold text-white lg:text-5xl'>
                        {text}
                    </h1>
                    <br />
                    <Link to="/product">
                        <button className='px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-400'>
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;