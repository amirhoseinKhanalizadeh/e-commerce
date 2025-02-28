import { Product } from "./getProducts";

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};
