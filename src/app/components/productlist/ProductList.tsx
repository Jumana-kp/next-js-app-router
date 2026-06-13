import React from 'react'
import { ProductsService } from '../../services/products-services'
import ProductCard from '../productcard/ProductCard'

export default  async function ProductList() {
    var products = await ProductsService.getProducts();
     
  return (
    <div>
             
      <div className="row g-4">
        { products.map((product: any) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-lg-3"
          >
            <ProductCard product={product} />
         </div>
        ))}
      </div>
           </div>
  )
}
