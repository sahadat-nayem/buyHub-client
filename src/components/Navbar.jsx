import { Link, NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import userIcon from "../assets/user-removebg-preview.png";
import { useContext, useEffect, useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { BiSolidContact, BiSolidMessageDetail } from "react-icons/bi";
import { AuthContext } from "../provider/AuthProvider";
import CartSidebar from "../pages/CartSidebar";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      if (user?.email) {
        fetch(`http://localhost:5000/cart?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => setCartCount(data.length));
      }
    };
    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);
    return () => window.removeEventListener("cart-updated", updateCartCount);
  }, [user]);

  const handleLogOut = () => {
    signOutUser().catch(console.log);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`navbar bg-black text-white bg-opacity-30 fixed w-full z-[100] transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="navbar-start">
          <button onClick={toggleSidebar} className="btn btn-ghost text-xl">
            {isSidebarOpen ? <IoClose /> : <CgDetailsMore />}
          </button>
          <Link
            to="/"
            className="lg:relative lg:left-[520px] text-2xl font-bold flex items-center gap-0"
          >
            <span>Buy</span>
            <span className="text-blue-500">Hub</span>
          </Link>
        </div>

        <div className="navbar-end gap-8 ">
          <div className="flex gap-3">
            <Link to="/dashboard/cart">
              <FaSearch />
            </Link>
            <Link to="/location">
              <FaLocationDot />
            </Link>

            {user?.email && (
              <div
                onClick={() => setShowCart(true)}
                className="relative cursor-pointer"
              >
                <HiMiniShoppingCart className="text-xl" />
                <div className="badge badge-secondary absolute -top-2 left-3 text-xs">
                  +{cartCount}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {user ? (
              <button
                onClick={handleLogOut}
                className="hover:text-white font-semibold"
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="/login"
                className="hover:text-white font-semibold pr-5"
              >
                Login
              </NavLink>
            )}

            <div>
              {user?.photoURL ? (
                <div className="group relative">
                  <img
                    className="size-12 rounded-full border-2 hover:border-blue-900 transition-all duration-300"
                    src={user.photoURL}
                  />
                  <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded text-indigo-500 font-bold text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
                    {user.displayName}
                  </span>
                </div>
              ) : (
                <img className="size-10" src={userIcon} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-500 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[100]`}
      >
        <div className="p-5 flex justify-between items-center border-b border-white">
          <a className="text-2xl font-bold">
            <span>Buy</span>
            <span className="text-black">Hub</span>
          </a>
          <button onClick={toggleSidebar} className="text-3xl">
            <IoClose />
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-5 px-5 font-semibold">
          <NavLink
            to="/"
            onClick={toggleSidebar}
            className="flex gap-1 items-center hover:text-black"
          >
            <FaHome /> Home
          </NavLink>
          <NavLink
            to="/product"
            onClick={toggleSidebar}
            className="flex gap-1 items-center hover:text-black"
          >
            <MdOutlineProductionQuantityLimits /> Products
          </NavLink>
          <NavLink
            to="/dashboard"
            onClick={toggleSidebar}
            className="flex gap-1 items-center hover:text-black"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleSidebar}
            className="flex gap-1 items-center hover:text-black"
          >
            <BiSolidMessageDetail /> About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleSidebar}
            className="flex gap-1 items-center hover:text-black"
          >
            <BiSolidContact /> Contact
          </NavLink>
        </div>
      </div>

      {showCart && (
        <CartSidebar
          userEmail={user.email}
          visible={showCart}
          onClose={() => setShowCart(false)}
        />
      )}
    </>
  );
};

export default Navbar;
