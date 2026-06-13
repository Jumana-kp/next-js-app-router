export class ProductsService {

  static async getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store",
      });

      const text = await res.text();
      if (!text) return [];

      return JSON.parse(text);
    } catch (err) {
      console.log("Products error:", err);
      return [];
    }
  }

  static async getProductById(id: number) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${id}`,
        { cache: "no-store" }
      );

      const text = await res.text();
      if (!text) return null;

      return JSON.parse(text);
    } catch (err) {
      console.log("Product error:", err);
      return null;
    }
  }
}