import { ProductsService } from "../../services/products-services";
import AddToCartButton from "../../components/cartButton/CartButton";

type Props = {
  params: {
    productId: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const productId = Number(params.productId);

  if (!productId) {
    return {
      title: "Product detail page",
    };
  }

  try {
    const product =
      await ProductsService.getProductById(productId);

    return {
      title: product.title,
    };
  } catch {
    return {
      title: "Product not found",
    };
  }
}

export default async function ProductDetail({ params }: Props) {
  const productId = Number(params.productId);

  const product =
    await ProductsService.getProductById(productId);

  if (!product) {
    return (
      <div className="container py-5">
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