import logo from "../../assets/logo.jpg"
import { ImGoogle2, ImGithub } from 'react-icons/im';

const Footer = () => {
  return (
    <footer className="footer footer-center p-5 bg-blue-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4 font-semibold">
    <a className="link link-hover">Services</a> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Contact Us</a> 
    <a className="link link-hover">Features</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4 items-center">
        <ImGoogle2 className="text-3xl"></ImGoogle2>
      <img className="w-12 rounded" src={logo} alt="" />
      <ImGithub className="text-3xl"></ImGithub>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - mahmudunnabishohel@gmail.com</p>
  </aside>
</footer>
  )
}

export default Footer
