import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);

  

  const handleCreateLogin = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('user logged in successfully')

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message)
        setError(error);
      });
  };
  

  return (
    <div>
      <div>
        <form
          onSubmit={handleCreateLogin}
          className="flex flex-col justify-center items-center bg-blue-100 w-96 pt-20 pb-10 mx-auto rounded-lg"
        >
          <h1 className="text-3xl font-semibold mb-8 mr-16">Please Login</h1>
          <input
            className=" px-3 py-2 w-60 rounded-lg mb-3 text-sm font-semibold"
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            id=""
          />
          <input
            className=" px-3 py-2 w-60 rounded-lg mb-1 text-sm font-semibold"
            type="password"
            name="password"
            required
            placeholder="Password"
            id=""
          />
          <div className="flex mb-4 mr-32 gap-2">
            <input type="checkbox" name="" id="" />
            <span className="text-sm font-medium"> Remember me </span>
          </div>
          <button type="submit" className="px-3 py-1 w-60 rounded-lg bg-blue-800 text-white font-semibold mb-2">
            LogIn
          </button>
          <p className="text-xs font-medium mb-4">Forgot Password?</p>
          <span className="text-sm font-bold mb-4">Or</span>
          <div>
            <SocialLogin></SocialLogin>
          </div>
          <div className="text-sm font-semibold underline">{error}</div>
          <p className="text-sm font-semibold underline">
            Do not have an account?{" "}
            <Link className="text-blue-800 font-bold text-base" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
