import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider"
import toast from "react-hot-toast"
import { ImGoogle2 } from "react-icons/im";


const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const {googleLogin} = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
        .then(result => {
            console.log(result)
            toast.success("User logged in Successfully");
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            toast.error(error.message)
        })
    }


  return (
    <div>
      <button
              onClick={() => handleSocialLogin(googleLogin)}
              className="px-3 py-1 w-60 rounded-lg bg-white text-sm font-semibold mb-3 flex items-center gap-2"
            >
              <ImGoogle2></ImGoogle2>Continue With Google
            </button>
    </div>
  )
}

export default SocialLogin
