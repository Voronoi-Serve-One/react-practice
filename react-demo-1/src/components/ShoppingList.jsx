import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const [form, setForm] = useState({
    productname: "",
    quantity: 0,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddCart = () => {
    if (!form.productname || !form.quantity) return;
    setCart((prev) => [...prev, form]);
  };
  return (
    <div>
      <h1>SHOPPING LIST</h1>
      {cart.length === 0 ? (
        <p>No Current List</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.productname}>
              Name: {item.productname} Qty: {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <form action="">
        <input
          onChange={handleInput}
          name="productname"
          value={form.productname}
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={handleInput}
          name="quantity"
          value={form.quantity}
          type="text"
          placeholder="Quantity"
        />
        <button type="button" onClick={handleAddCart}>
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default ShoppingList;
