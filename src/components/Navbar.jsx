import { Link, NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoClose } from "react-icons/io5"; // Cross Icon
import { FcAbout } from "react-icons/fc";
import { CgDetailsMore } from "react-icons/cg";
import { BiSolidContact, BiSolidMessageDetail } from "react-icons/bi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false); // Scroll down → Navbar hide
      } else {
        setIsNavbarVisible(true); // Scroll up → Navbar show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`navbar bg-black text-white bg-opacity-30 fixed w-full z-[100] transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="navbar-start">
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="btn btn-ghost text-xl lg:text-2xl"
          >
            {isSidebarOpen ? <IoClose /> : <CgDetailsMore />}
          </button>
          <a className="lg:relative lg:left-[520px] text-2xl font-bold flex items-center gap-0">
            <span>Buy</span>
            <span className="text-blue-500">Hub</span>
          </a>
        </div>

        <div className="navbar-end gap-3">
          <Link to="/dashboard/cart" className="relative bg-none lg:mr-5">
            <FaSearch />
          </Link>
          <Link to="/dashboard/cart" className="relative bg-none lg:mr-5">
            <FaLocationDot />
          </Link>
          <Link to="/dashboard/cart" className="relative bg-none lg:mr-5">
            <HiMiniShoppingCart />
            {/* <div className="badge badge-secondary absolute top-0 left-5">
              +{cart.length}
            </div> */}
          </Link>

          {/* {user && user?.email ? (
            <button onClick={logOut} className="hover:text-yellow-400 font-semibold">
              Log Out
            </button>
          ) : (
            <NavLink to="/login" className="hover:text-yellow-400 font-semibold pr-5">
              Login
            </NavLink>
          )} */}

          {/* <div>
            {user && user?.email ? (
              <div className="group relative lg:hidden">
                <img className="size-12 rounded-full border-2 to-blue-900" src={user?.photoURL} alt="" />
                <span className="absolute bottom-0 left-0 right-0 font-semibold bg-gray-100 text-black text-center opacity-0 group-hover:opacity-100">
                  {user?.displayName}
                </span>
              </div>
            ) : (
              <img className="size-10" src={userIcon} />
            )}
          </div> */}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-500 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[100]`}
      >
        {/* Sidebar Header */}
        <div className="p-5 flex justify-between items-center border-b border-white">
          {/* Sidebar Logo */}
          <a className="text-2xl font-bold flex items-center gap-0">
            <span>Buy</span>
            <span className="text-black">Hub</span>
          </a>

          {/* Close Icon */}
          <button onClick={toggleSidebar} className="text-3xl">
            <IoClose />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 mt-5 px-5">
          <NavLink
            className="flex items-center gap-1 hover:text-yellow-400 font-semibold"
            to="/"
            onClick={toggleSidebar} // Sidebar Hide on Click
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            className="flex items-center gap-1 hover:text-yellow-400 font-semibold"
            to="/products"
            onClick={toggleSidebar} // Sidebar Hide on Click
          >
            <MdOutlineProductionQuantityLimits /> PRODUCTS
          </NavLink>

          <NavLink
            className="hover:text-yellow-400 font-semibold"
            to="/dashboard"
            onClick={toggleSidebar} // Sidebar Hide on Click
          >
            DASHBOARD
          </NavLink>

          <NavLink
            className="flex items-center gap-1 hover:text-yellow-400 font-semibold"
            to="/about"
            onClick={toggleSidebar} // Sidebar Hide on Click
          >
            <BiSolidMessageDetail /> About Us
          </NavLink>

          <NavLink
            className="flex items-center gap-1 hover:text-yellow-400 font-semibold"
            to="/contact"
            onClick={toggleSidebar} // Sidebar Hide on Click
          >
            <BiSolidContact /> CONTACT us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
