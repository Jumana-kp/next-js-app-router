// import { ServiceBase } from "./service-base";

// export class ProductsService extends ServiceBase {
//   static async getProducts() {
//     const response = await fetch(
//       this.getUrl("/products"),
//       {
//         cache: "no-store",
//         headers: {
//           Accept: "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(
//         `Products API Error: ${response.status}`
//       );
//     }

//     return response.json();
//   }

//   static async getProductById(id: number) {
//     const response = await fetch(
//       this.getUrl(`/products/${id}`),
//       {
//         headers: {
//           Accept: "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(
//         `Product API Error: ${response.status}`
//       );
//     }

//     return response.json();
//   }
// }


import { ServiceBase } from "./service-base"

export class ProductsService extends ServiceBase{
    static getProducts = async () => {
        var productsResp = await fetch (this.getUrl(`/products`),{
        cache:'no-store'
        }
      );
         

  var products = await productsResp.json();
  return products;

    }

     static getProductById =async (id:number) => {
       var productResp = await fetch (this.getUrl(`/products/` + id));
  var product = await productResp.json();
  return product;

     }
    }