import { useDispatch } from "react-redux";
import { Product } from "../ReactQuery/getProducts";
import { AppDispatch } from "../Redux/store";
import { addTocard } from "../Redux/slices/addToCart";
import { Link } from "react-router";

type ProductType = {
  product: Product;
};

const ProductCart = ({ product }: ProductType) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
      <Link className="block" to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.title}
          </h3>

          <p className="text-sm text-gray-600">{product.category}</p>
        </div>
        <button
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          onClick={() => dispatch(addTocard(product))}
        >
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCart;
