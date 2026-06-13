"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AddToCartButton from "../../components/cartButton/CartButton";

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params?.productId);

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-5">
        Product not found
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "450px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-7">
          <h2 className="mb-3">{product.title}</h2>

          <h3 className="text-success mb-4">
            ${product.price}
          </h3>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <hr />

          <p className="text-muted">
            {product.description}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}