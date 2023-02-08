import React, { useEffect, useState } from "react";
import { createProduct, getProducts } from "../../services/products_service";
import ProductList from "../ProductList/ProductList";

interface Producto {
  id: string;
  name: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
}

const ProductForm: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [product, setProduct] = useState<Producto>({
    id: Math.floor(Math.random() *100000+999999).toString(),
    name: "",
    inInventory: 0,
    enabled: false,
    min: 0,
    max: 0,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProduct(product)
      .then((createdProduct) => {
        console.log("User created:", createdProduct);
        setProduct({
          id: Math.floor(Math.random() *100000+999999).toString(),
          name: "",
          inInventory: 0,
          enabled: false,
          min: 0,
          max: 0,
        });
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getProducts().then((products) => {
      setProductos(products);
    });
  }, [productos]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inInventory">In Inventory:</label>
          <input
            type="text"
            id="inInventory"
            name="inInventory"
            value={product.inInventory}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="enabled">Enabled:</label>
          <input
            type="checkbox"
            id="enabled"
            name="enabled"
            checked={product.enabled}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="min">Minimum:</label>
          <input
            type="text"
            id="min"
            name="min"
            value={product.min}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="max">Maximum:</label>
          <input
            type="text"
            id="max"
            name="max"
            value={product.max}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ProductList products={productos} />
    </>
  );
};

export default ProductForm;
