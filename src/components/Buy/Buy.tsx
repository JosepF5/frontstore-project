import React from "react";
import { deleteBuy } from "../../services/buys_service";

interface ProductToBuy {
  idProduct: string;
  quantity: string;
}

type Buy = {
  id: string;
  date: string;
  idType: string;
  clientName: string;
  products: ProductToBuy[];
};

interface Props {
  buy: Buy;
}

const Buy: React.FC<Props> = ({ buy }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    deleteBuy(buy.id)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div key={buy.id}>
      {buy.idType} ({buy.clientName})
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Buy;
