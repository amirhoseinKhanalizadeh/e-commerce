export type Product = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  brand: string;
  rating: number;
  stock: number;
  discountPercentage: number;
  returnPolicy: string;
};

export type Products = {
  products: Product[];
};

export const getProducts = async (
  skip: number,
  search?: string
): Promise<Products> => {
  const baseUrl = `https://dummyjson.com/products?limit=20&skip=${skip}`;

  const url = search ? "https://dummyjson.com/products?limit=194" : baseUrl;
  const response = await fetch(url);
  return response.json();
};
