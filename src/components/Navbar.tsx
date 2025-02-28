import { Link } from "react-router";
import Shopicon from "./Shopicon";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/">MyShop</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/cart" className="hover:text-gray-400 transition">
            Cart
          </Link>
          <Shopicon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
