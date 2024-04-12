import React, { useContext, useState } from "react";
import "./SignIn.css"
import { useNavigate } from "react-router-dom";
import googleLogo from "./../../Images/Google.png"
import api from "../Helpers/Axios.Config";
import toast from "react-hot-toast"
import { AuthContext } from "../Context/AuthContext";

const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  console.log("userData", userData)

  const { Login } = useContext(AuthContext)

  const router = useNavigate()

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const loginSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      try {
        const response = await api.post("/auth/login", { userData })
        if (response?.data?.success) {
          localStorage.setItem("my-token", JSON.stringify(response.data.token))
          Login(response.data.user)
          // console.log("response data", response?.data.user)
          toast.success("Login Successful")
          router("/")
        } else {
          throw new Error("Something went wrong...")
        }
      } catch (error) {
        toast.error(error?.response.data.message)
      }
    } else {
      toast.error("All Fields are mandatory")
    }
  }

  function signUpSite() {
    router("/sign-up")
  }

  return (
    <div className="sign-in">
      <div className="sign-in-layout">
        <div className="si-google-img"><img src={googleLogo} alt="" /></div>
        <p className="si-text">Sign in</p>
        <p className="si-continue-to-yt">to continue to YouTube</p>
        <div className="si-input">
          <input type="text" name="email" onChange={handleChange} required />
          <label>Email or phone</label>
        </div>
        <div className="si-input">
          <input type="text" name="password" onChange={handleChange} required />
          <label>Enter your password</label>
        </div>
        <div className="si-show-forget-pass">
          <div className="si-show-pass">
            <div className="si-sp-checkbox"><input type="checkbox" name="checkbox" /></div>
            <p>Show password</p>
          </div>
          <p className="si-forget-password">Forget password?</p>
        </div>
        <div className="si-guest-mode-layout">
          <p className="si-guest-mode">Not your computer? Use Guest mode to sign in privately.</p>
          <p className="si-learn-more">Learn more</p>
        </div>
        <div className="si-create-one-next">
          <button className="si-creat-one-button" onClick={signUpSite}>Create account</button>
          <button className="si-next-button" onClick={loginSubmit}>Next</button>
        </div>
      </div>


      <div className="si-country-terms">
        <div className="si-countries">
          <select>
            <option value="India">English (United States)</option>
            <option value="India">English (United Kingdom)</option>
            <option value="India">portuguese (Brasil)</option>
            <option value="India">Tamil</option>
            <option value="India">Hindi</option>
            <option value="India">Marathi</option>
          </select>
        </div>
        <div className="si-help-privacy-terms">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn;