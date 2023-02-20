import axios from "axios";

const baseURL = "https://tourapplication-tz-production.up.railway.app";

interface ProductToBuy{
    idProduct: string;
    quantity: string;
}

interface Buy {
  id: string;
  date: string;
  idType: string;
  clientName: string;
  products: ProductToBuy[];
}

export const getBuys = async (): Promise<Buy[]> => {
  const response = await axios.get<Buy[]>(`${baseURL}/get/buys`);
  return response.data;
};

export const createBuy = async (Buy: Buy): Promise<Buy> => {
  const response = await axios.post<Buy>(`${baseURL}/create/buy`, Buy);
  return response.data;
};

export const deleteBuy = async (id: string): Promise<Buy> => {
  const response = await axios.delete(`${baseURL}/delete/buy/${id}`);
  return response.data;
};