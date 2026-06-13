"use client";

import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(cartItems);
  }, []);

  const handleRemove = (id: number) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h5>Your cart is empty.</h5>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="card mb-3"
          >
            <div className="card-body d-flex align-items-center">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />

              <div className="ms-3 flex-grow-1">
                <h6>{item.title}</h6>

                <p className="mb-1">
                  Quantity: {item.quantity}
                </p>

                <p className="text-success mb-0">
                  ${item.price}
                </p>
              </div>

              <button
                className="btn btn-danger"
                onClick={() =>
                  handleRemove(item.id)
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}