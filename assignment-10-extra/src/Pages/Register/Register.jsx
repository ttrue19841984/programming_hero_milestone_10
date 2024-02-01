import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from 'react-hot-toast';
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleCreateRegister = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, image, email, password);

    if (!/^(?=.*[A-Z])(?=.*[\W_])(?=.{6,})/.test(password)) {
      toast.error("Minimun six characters, at least one Uppercase letter and one special character");
    } 

    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      toast.success("user registered in successfully");
      navigate('/login')
    })
    .catch((error) => {
      console.log(error)
    });
    
  };

  return (
    <div>
      <form
        onSubmit={handleCreateRegister}
        className="flex flex-col justify-center items-center bg-blue-100 w-96 pt-20 pb-10 mx-auto rounded-lg"
      >
        <h1 className="text-3xl font-semibold mb-8 ml-8">Create New Account</h1>
        <input
          className=" px-3 py-2 w-60 rounded-lg mb-3 text-sm font-semibold"
          type="text"
          name="name"
          required
          placeholder="Name"
          id=""
        />
        <input
          className=" px-3 py-2 w-60 rounded-lg mb-3 text-sm font-semibold"
          type="text"
          name="image"
          required
          placeholder="Image URL"
          id=""
        />
        <input
          className=" px-3 py-2 w-60 rounded-lg mb-3 text-sm font-semibold"
          type="email"
          name="email"
          required
          placeholder="Enter Your Email"
          id=""
        />
        <input
          className=" px-3 py-2 w-60 rounded-lg mb-2 text-sm font-semibold"
          type="password"
          name="password"
          required
          placeholder="Password"
          id=""
        />
        <div className="flex mb-5 gap-2">
          <input type="checkbox" name="" id="" />
          <span className="text-sm font-medium">
            {" "}
            I agree with <span className="text-sm font-semibold underline">Terms & Conditions</span>{" "}
          </span>
        </div>
        <button type="submit" className="px-3 py-1 w-60 rounded-lg bg-blue-800 text-white font-semibold mb-4">
          Register
        </button>
        <SocialLogin></SocialLogin>
        <p className="text-sm font-semibold underline">
          Already have an account?{" "}
          <Link className="text-blue-800 font-bold text-base" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
