import apple1 from "../../assets/applem.jpg"
import google from "../../assets/google4.jpg"
import microsoft from "../../assets/microsoft3.jpg"
import samsung from "../../assets/samsung4.jpg"
import panasonic from "../../assets/panasonic1.jpg"
import sony1 from "../../assets/sony1.jpg"
import apple2 from "../../assets/apple.jpg"
import sony2 from "../../assets/sony5.jpg"

const Popular = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-4xl font-bold">
          Popular <span className="text-blue-800">Products</span>
        </h2>
        <p className="text-lg font-medium mt-3">Impressive selection of any products and excellent services.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        <img className="h-48 w-64" src={apple1} alt="Shoes" />
        <img className="h-48 w-64" src={google} alt="Shoes" />
        <img className="h-48 w-64" src={microsoft} alt="Shoes" />
        <img className="h-48 w-64" src={samsung} alt="Shoes" />
        <img className="h-48 w-64" src={panasonic} alt="Shoes" />
        <img className="h-48 w-64" src={sony1} alt="Shoes" />
        <img className="h-48 w-64" src={apple2} alt="Shoes" />
        <img className="h-48 w-64" src={sony2} alt="Shoes" />
      </div>
    </div>
  )
}

export default Popular
