import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="font-Exo">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
