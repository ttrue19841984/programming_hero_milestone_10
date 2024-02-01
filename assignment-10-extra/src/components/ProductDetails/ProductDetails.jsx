
import { useLoaderData } from "react-router-dom";
import ProductDetail from './../ProductDetail/ProductDetail';


const ProductDetails = () => {
    const carts = useLoaderData();
    console.log(carts)

    
  return (
    <div className="w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {
        carts.map(cart => <ProductDetail key={cart._id} cart={cart}></ProductDetail>)
      }
    </div>
  )
}

export default ProductDetails
