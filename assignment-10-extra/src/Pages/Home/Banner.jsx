/* eslint-disable react/no-unescaped-entities */
import banner from "../../assets/banner.jpg"

const Banner = () => {
    return (
      <div className="hero  bg-blue-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="h-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Best valued deals <br /> you will ever find !!!</h1>
      <p className="py-6">find your product from our categories and 
providing power so you can go higher</p>
      <button className="px-5 py-3 rounded-lg bg-blue-800 uppercase text-sm font-bold text-white">Get Started</button>
    </div>
  </div>
</div>
    )
  }
  
  export default Banner
  