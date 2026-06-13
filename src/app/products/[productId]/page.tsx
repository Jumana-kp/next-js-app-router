import { ProductsService } from "../../services/products-services";
import AddToCartButton from "../../components/cartButton/CartButton";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductDetail({ params }: Props) {
  
  const { productId } = await params;

  const id = Number(productId);

  if (!id) {
    return (
      <div className="container py-5 text-center">
        <h3>Invalid Product ID</h3>
      </div>
    );
  }

  let product = null;

  try {
    product = await ProductsService.getProductById(id);
  } catch (error) {
    console.log("Error loading product:", error);
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3>Product not found</h3>
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
            style={{
              maxHeight: "450px",
              objectFit: "contain",
            }}
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

          <h5>Description</h5>

          <p className="text-muted">
            {product.description}
          </p>

          <AddToCartButton product={product} />
        </div>

      </div>
    </div>
  );
}