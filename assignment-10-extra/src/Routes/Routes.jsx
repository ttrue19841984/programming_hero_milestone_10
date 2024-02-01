import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../components/AddProduct/AddProduct";
import Carts from "../components/ProductDetails/ProductDetails";
import Details from "../components/Details/Details";
import MyCarts from "../MyCarts/MyCarts";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/carts/:brand",
        element: (
          <PrivateRoute>
            <Carts></Carts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://doploy-10-bqam80m6u-mahmudunnabis-projects.vercel.app/products/${params.brand}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCarts></MyCarts>
          </PrivateRoute>
        ),
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("https://doploy-10-bqam80m6u-mahmudunnabis-projects.vercel.app/products"),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`https://doploy-10-bqam80m6u-mahmudunnabis-projects.vercel.app/products/${params.id}`);
        },
      },
      {
        path: "/products",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
