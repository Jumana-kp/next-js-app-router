"use client";

import { useEffect, useState } from "react";
import ProductCard from "../productcard/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h5 className="text-center">Loading products...</h5>;
  }

  return (
    <div className="row g-4">
      {products.map((product: any) => (
        <div key={product.id} className="col-12 col-sm-6 col-lg-3">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}