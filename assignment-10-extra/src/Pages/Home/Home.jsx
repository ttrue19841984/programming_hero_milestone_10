
import { useLoaderData } from "react-router-dom"
import Brands from "../../components/Navbar/Brands/Brands"
import Banner from "./Banner"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Popular from "../../components/Popular/Popular";



const Home = () => {
  const brands = useLoaderData();
  console.log(brands)
  return (
    <div>
      <Banner></Banner>
      <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-4xl font-bold">Our <span className="text-blue-800">Brands</span></h2>
        <p className="text-lg font-medium mt-3">you have plan and we have the solutions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
        
          {
         
              brands.map(brandn => <Brands key={brandn.id} brandn={brandn}></Brands>)
   
          }
          
       
      </div>
      </div>
      <div className="my-10">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div>
        <Popular></Popular>
      </div>
    </div>
  )
}

export default Home