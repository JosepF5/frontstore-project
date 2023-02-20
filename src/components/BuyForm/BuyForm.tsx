import React,{useEffect, useState} from "react";
import { createBuy, getBuys } from "../../services/buys_service";
import moment from 'moment';
import BuyListContainer from '../BuyListContainer/BuyListContainer';
import BuyList from "../BuyList/BuyList";

interface ProductToBuy {
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

const BuyForm: React.FC = () => {
  const [buys,setBuys]=useState<Buy[]>([]);
  const [formState, setFormState] = useState<Buy>({
    id: Math.floor(Math.random() *100000+999999).toString(),
    date: "",
    idType: "",
    clientName: "",
    products: [],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({...formState,["date"]:moment().format('YYYY-MM-DD HH:mm:ss')});
    createBuy(formState)
      .then((createdBuy) => {
        console.log("Buy created:", createdBuy);
        setFormState({
          id: Math.floor(Math.random() *100000+999999).toString(),
          date: "",
          idType: "",
          clientName: "",
          products: [],
        });
      })
      .catch((e) => console.log(e));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  useEffect(() => {
    getBuys().then((buyers) => {
      setBuys(buyers);
    });
  }, [buys]);

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div>
        <label htmlFor="idType">IdType:</label>
        <input
          type="text"
          name="idType"
          value={formState.idType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="clientName">clientName:</label>
      <input
        type="text"
        name="clientName"
        value={formState.clientName}
        onChange={handleChange}
      />
      </div>
      <button type="submit">Submit</button>
    </form>
    <BuyList buys={buys}/>
    </>
  );
};

export default BuyForm;
