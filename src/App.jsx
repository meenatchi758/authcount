import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping Cart</h1>
      <div style={{ display: "flex", gap: "40px" }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
