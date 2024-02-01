import icon1 from "../../assets/dollar.png"
import icon2 from "../../assets/robotic-hand.png"
import icon3 from "../../assets/screen.png"

const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
      <h2 className="text-4xl font-bold">why <span className="text-blue-800">choose us</span></h2>
      <p className="text-lg font-medium mt-3">Discover the best deals you will ever find with our unbeatable offers.</p>
      </div>
      <div className="hero  bg-blue-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <p>why choose us</p>
      <h1 className="text-5xl font-bold">Best valued deals you will ever find</h1>
      <p className="py-6">Discover the best deals you will ever find with our unbdatable offers. We are dedicated to providing you with the best value for  your money. So you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience. So do not miss out on your change to save big</p>
      <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-xl h-80 items-center justify-center pl-10 shadow-2xl bg-blue-300">
      <div className="flex gap-5 justify-center items-center">
        <img className="h-12 w-12" src={icon1} alt="" />
        <div>
          <h3 className="text-xl font-semibold">No Hidden Charges</h3>
          <p className="text-sm">Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing</p>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <img className="h-12 w-12" src={icon2} alt="" />
        <div>
          <h3 className="text-xl font-semibold">All Inclusive Pricing</h3>
          <p className="text-sm">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy</p>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <img className="h-12 w-12" src={icon3} alt="" />
        <div>
          <h3 className="text-xl font-semibold">Client Testimonials </h3>
          <p className="text-sm">Discover the positive impact we have made on the our clients by reading through their testimonials.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default WhyChooseUs
