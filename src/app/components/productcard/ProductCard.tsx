"use client";

import Link from "next/link";
import AddToCartButton from "../cartButton/CartButton";

export default function ProductCard({
  product,
}: any) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div
        className="d-flex justify-content-center align-items-center p-3"
        style={{ height: "220px" }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{
            maxHeight: "180px",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <Link
          href={`/products/${product.id}`}
          className="text-primary text-decoration-underline"
        >
          <h6 className="text-center">
            {product.title}
          </h6>
        </Link>

        <h5 className="text-success text-center">
          ${product.price}
        </h5>

        <div className="mt-auto">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}