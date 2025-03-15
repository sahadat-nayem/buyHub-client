import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Email Subscription Section */}
        <div className=" mb-12">
        <a className="text-4xl font-bold flex items-center gap-0">
            <span>Buy</span>
            <span className="text-blue-500">Hub</span>
          </a>
          
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">SHOP</h3>
            <ul className="text-sm">
              <li>Coffees & Creamers</li>
              <li>Proteins</li>
              <li>Supplements</li>
              <li>Shop All</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">LEARN</h3>
            <ul className="text-sm">
              <li>Product Quality</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <ul className="text-sm">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Account</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">INQUIRIES</h3>
            <ul className="text-sm">
              <li>Partners Zone</li>
              <li>Affiliate Program</li>
              <li>Wholesale</li>
              <li>Store Locator</li>
              <li>Refer a Friend</li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Media Section */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-8">
          <div className="text-sm mx-auto">
            &copy; 2025 BuyHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;