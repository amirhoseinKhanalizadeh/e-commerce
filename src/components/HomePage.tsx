import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../ReactQuery/getProducts";
import ProductCard from "./ProductCart";
import { useQueryState } from "nuqs";
import Button from "./Button";

const HomePage = () => {
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useQueryState("search");
  const safeSearch = search ?? "";
  const { data, error } = useSuspenseQuery({
    queryKey: ["products", skip, search],
    queryFn: () => getProducts(skip, safeSearch),
  });

  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes((search ?? "").toLowerCase())
  );

  if (error) return <p>{error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <input
          type="text"
          value={safeSearch}
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <Button
          onClick={() => setSkip((prev) => prev + 20)}
          text="Next"
          disabled={safeSearch.length > 0}
        />
        <Button
          onClick={() => setSkip((prev) => Math.max(prev - 20, 0))}
          text="Prev"
          disabled={safeSearch.length > 0}
        />
      </div>
    </div>
  );
};

export default HomePage;
