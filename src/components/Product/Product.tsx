import React from "react";
import { deleteProduct } from "../../services/products_service";
type Product = {
  id: string;
  name: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
};

interface Props {
  product: Product;
}

const Producto: React.FC<Props> = ({ product }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    deleteProduct(product.id)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div key={product.id}>
      {product.name} ({product.inInventory})
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Producto;
