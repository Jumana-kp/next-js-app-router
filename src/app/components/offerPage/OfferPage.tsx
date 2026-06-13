"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OfferPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4)))
      .catch(() => setProducts([]));
  }, []);

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2>🔥 Special Offers</h2>
      </div>

      <div className="row g-4">
        {products.map((product: any) => (
          <div key={product.id} className="col-12 col-sm-6 col-lg-3">
            <div className="card p-3 text-center">
              <img
                src={product.image}
                alt={product.title}
                style={{ height: 120, objectFit: "contain" }}
              />

              <h6 className="mt-2">{product.title}</h6>
              <p className="text-success">${product.price}</p>

              <Link
                href={`/products/${product.id}`}
                className="btn btn-primary"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}