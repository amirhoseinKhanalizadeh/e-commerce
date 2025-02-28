import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ShoppingCart } from "lucide-react";

const Shopicon = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="relative">
      <ShoppingCart className="text-gray-700 w-6 h-6 cursor-pointer" />

      {cart.products.length > 0 ? (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {cart.products.length}
        </span>
      ) : null}
    </div>
  );
};

export default Shopicon;
