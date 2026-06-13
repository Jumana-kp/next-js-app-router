import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {
  static async getProducts() {
    const response = await fetch(this.getUrl("/products"), {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    return response.json();
  }

  static async getProductById(id: number) {
    const response = await fetch(this.getUrl(`/products/${id}`));

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`);
    }

    return response.json();
  }
}