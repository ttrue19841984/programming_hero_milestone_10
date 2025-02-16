import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {



    const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const navLinks = (
    <>
      <li className="font-bold text-xs">
        <NavLink
          to="/"
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-blue-300" : "")}
        >
          HOME
        </NavLink>
      </li>
      <li className="font-bold text-xs">
        <NavLink
          to="/products"
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-blue-300" : "")}
        >
          ADD PRODUCT
        </NavLink>
      </li>
      <li className="font-bold text-xs">
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-blue-300" : "")}
        >
          MY CART
        </NavLink>
      </li>
      <li className="font-bold text-xs">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-blue-300" : "")}
        >
          REGISTER
        </NavLink>
      </li>
    </>
  );


  return (
    <div>
      <div className="navbar h-20 bg-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <img className="w-16 rounded" src={logo} alt="" />
          </div>
          <a className="btn btn-ghost text-xl text-blue-800 font-bold uppercase">Technology & Electronics</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* avatar */}
          {user?
          <div className="flex items-center justify-center gap-2">
            
          <p className="text-sm font-semibold">{user.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </label>
             
            <button onClick={handleSignOut}  className=" text-xs bg-blue-800 px-4 py-2 rounded-lg text-white font-bold" type="submit">LOGOUT</button>
          </div>
            : 
            <Link to="/login">
            <button  className=" text-xs bg-blue-800 px-4 py-2 rounded-lg text-white font-bold" type="submit">LOGIN</button>
        </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
