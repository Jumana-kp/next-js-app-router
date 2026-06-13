import Link from "next/link";
import { ProductsService } from "../../services/products-services";

export default async function OfferPage() {
  const products = await ProductsService.getProducts();

  const offerProducts = products.slice(0, 4);

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2>🔥 Special Offers</h2>
        <p className="text-muted">
          Limited time deals on selected products
        </p>
      </div>

      <div className="row g-4">
        {offerProducts.map((product: any) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-lg-3"
          >
            <div className="card h-100 shadow-sm">
              <div
                className="d-flex justify-content-center align-items-center p-3"
                style={{ height: "200px" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{
                    maxHeight: "150px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="card-body text-center">
                <Link
                  href={`/products/${product.id}`}
                  className="text-decoration-none text-primary"
                >
                  <h6>{product.title}</h6>
                </Link>

                <h5 className="text-success">
                  ${product.price}
                </h5>

                <span className="badge bg-danger">
                  20% OFF
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}