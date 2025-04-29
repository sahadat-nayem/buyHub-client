import React from 'react';

const About = () => {
    return (
        <section className="container mx-auto px-6 lg:px-20 py-12">
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-center mt-20 mb-8">
                BuyHub is a global destination for products. We sell cutting-edge products and offer a wide variety of fashion-related items.
            </h2>

            {/* Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                        src="https://i.ibb.co/NgJQmYj0/Alliage-Amb-2023-2.jpg" 
                        alt="Our Stores" 
                        className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                        src="https://i.ibb.co/R4S0XfjN/64c92dd829617f4388720d59-c95e04f6.jpg" 
                        alt="Our Mission" 
                        className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                    <h3 className="text-xl font-semibold mb-3">OUR STORES</h3>
                    <p className="text-gray-600">
                        BuyHub has a strong presence across multiple locations, offering a diverse range of high-quality products. Our stores provide a seamless shopping experience with the latest collections in fashion, home essentials, and lifestyle products. Whether online or in-store, we ensure top-notch service and customer satisfaction.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3">OUR MISSION</h3>
                    <p className="text-gray-600">
                        Our mission is to provide high-quality, trendy, and innovative products to our customers while ensuring a seamless shopping experience. We aim to inspire confidence and style by offering a diverse range of fashion-forward and essential items. Customer satisfaction is our top priority, and we are committed to delivering excellence in every purchase.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
