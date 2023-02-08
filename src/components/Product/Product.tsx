import React from "react";
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
  return (
    <div key={product.id}>
      {product.name} ({product.inInventory})
    </div>
  );
};

export default Producto;
