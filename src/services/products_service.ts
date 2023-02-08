import axios from "axios";

const baseURL = "https://tourapplication-tz-production.up.railway.app";

interface Product {
  id: string;
  name: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${baseURL}/get/products`);
  return response.data;
};

export const createProduct = async (Product: Product): Promise<Product> => {
  const response = await axios.post<Product>(`${baseURL}/create/product`, Product);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<Product> => {
  const response = await axios.delete(`${baseURL}/delete/product/${id}`);
  return response.data;
};