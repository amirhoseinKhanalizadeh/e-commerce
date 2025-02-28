import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductById } from "../ReactQuery/getProductById";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { addTocard } from "../Redux/slices/addToCart";

const ProductPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { productId } = useParams<{ productId: string }>();

  const { data: product } = useSuspenseQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => getProductById(productId!),
  });

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      {product ? (
        <article
          className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto"
          key={product.id}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <img
                className="w-full h-auto rounded-lg shadow-md"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Category:</span>{" "}
                    {product.category}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Brand:</span>{" "}
                    {product.brand}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Stock:</span>{" "}
                    {product.stock}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                    {product.rating}
                  </span>
                  <span className="text-red-500 font-semibold">
                    -{product.discountPercentage}% OFF
                  </span>
                </div>
              </div>

              <div className="">
                <button
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                  onClick={() => dispatch(addTocard(product))}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      )}
    </section>
  );
};

export default ProductPage;
