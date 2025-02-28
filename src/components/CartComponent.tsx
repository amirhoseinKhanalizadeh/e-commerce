import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const CartComponent = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.products.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cart.products.map(({ id, title, thumbnail, category, brand }) => (
            <div
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4"
              key={id}
            >
              <img
                className="w-full h-40 object-cover rounded-md"
                src={thumbnail}
                alt={title}
              />
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500">{category}</p>

                <p className="text-sm text-gray-600">{brand}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
