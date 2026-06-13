import { ProductsService } from "../../services/products-services";
import AddToCartButton from "../../components/cartButton/CartButton";



export async function generateMetadata(props: any) {
  const params = await props.params;

  const productId = Number(params.productId);

  if (productId) {
    const product =
      await ProductsService.getProductById(productId);

    return {
      title: product.title,
    };
  }


  return{
     title: "product detail page",
  };
}

export default async function ProductDetail(
  props: any
) {
  const params = await props.params;
  const productId = params.productId;

  let product;

  if (productId) {
    product =
      await ProductsService.getProductById(productId);
  }

  return (
    <div className="container py-5">
      <div className="row">
        {/* Product Image */}
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

        {/* Product Details */}
        <div className="col-md-7">
          <h2 className="mb-3">
            {product.title}
          </h2>

          <h3 className="text-success mb-4">
            ${product.price}
          </h3>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
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