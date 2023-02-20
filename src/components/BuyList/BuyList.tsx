import React from "react";
import Buy from "../Buy/Buy";

interface ProductToBuy {
  idProduct: string;
  quantity: string;
}

interface Buys {
  id: string;
  date: string;
  idType: string;
  clientName: string;
  products: ProductToBuy[];
}

interface Props {
    buys: Buys[];
}
const BuyList: React.FC<Props> = ({buys}) => {
  return <div>
  {buys.map((buy) => (
    <Buy key={buy.id} buy={buy}/>
  ))}
</div>;
};

export default BuyList;
