import React from "react";
import Product from "../Product/Product";

interface Producto {
  id: string;
  name: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
}
interface Props {
  products: Producto[];
}
const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
