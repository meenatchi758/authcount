import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  return (
    <div>
      <h1>Redux Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
}
