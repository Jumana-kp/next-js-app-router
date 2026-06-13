"use client";

import { useRouter } from "next/navigation";

export default function AddToCartButton({
  product,
}: any) {
  const router = useRouter();

  const handleAddToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = cart.find(
      (item: any) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    router.push("/cart");
  };

  return (
    <button
      className="btn btn-success w-100"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>
  );
}