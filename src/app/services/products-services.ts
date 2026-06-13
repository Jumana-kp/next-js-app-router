import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {
  static async getProducts() {
    const response = await fetch(
      this.getUrl("/products"),
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Products API Error: ${response.status}`
      );
    }

    return response.json();
  }

  static async getProductById(id: number) {
    const response = await fetch(
      this.getUrl(`/products/${id}`),
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Product API Error: ${response.status}`
      );
    }

    return response.json();
  }
}