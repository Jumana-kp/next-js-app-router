import ProductList from "../components/productlist/ProductList";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Products list",
   description: "Browse our products",
};

export default async function Products() {
  

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">
        Our Products
      </h2>
      <ProductList/>
    </div>
  );
}