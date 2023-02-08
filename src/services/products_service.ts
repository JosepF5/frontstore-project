import axios from "axios";

const baseURL = "https://tourapplication-tz-production.up.railway.app/get/products";

interface Product {
  id: string;
  name: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
}

export const getProducts = (): Promise<Product[]> => {
  return axios.get<Product[]>(baseURL).then((response) => response.data);
};

export const createProduct = (Product: Product): Promise<Product> => {
  return axios.post<Product>("https://tourapplication-tz-production.up.railway.app/create/product", Product).then((response) => response.data);
};

export const deleteProduct = (id: number): Promise<Product> => {
  return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
};