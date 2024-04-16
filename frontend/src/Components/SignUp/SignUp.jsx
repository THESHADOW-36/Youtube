import React, { useState } from "react";
import "./SignUp.css"
import { useNavigate } from "react-router-dom"
import googleLogo from "./../../Images/Google.png"
import toast from "react-hot-toast"
import { API } from "../Constant/Network";
import { Url } from "../Constant/Url";

const SignUp = () => {
  const [userData, setUserData] = useState({ firstname: "", surname: "", day: "", month: "", year: "", gender: "", email: "", password: "", confirmPassword: "" });
  console.log(userData)

  const router = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const regSubmit = async (event) => {
    event.preventDefault();
    if (userData.firstname && userData.surname && userData.day && userData.month && userData.year && userData.gender && userData.email && userData.password && userData.confirmPassword) {
      if (userData.password === userData.confirmPassword) {
        API.post(Url.register, userData).subscribe({
          async next(response) {
            console.log(response.token)
            await localStorage.setItem("my-token", response.token);
            if (response.success) {
              alert("Registration Successfull")
              router("/sign-in")
            } else {
              throw new Error("Something went wrong...")
            }
          },
          error(error) {
            toast.error(error.error);
          },
          complete() {
            console.log("complete");
          }
        })
      } else {
        toast.error("Password is incorrect")
      }
    } else {
      toast.error("All fields are mandatory")
    }
  }


  return (
    <div className="sign-up">
      <div className="sign-up-layout">
        <div className="su-google-img"><img src={googleLogo} alt="" /></div>
        <p className="su-text">Sign up</p>
        <p className="su-create-google-account">Create a Google Account</p>

        <p className="su-input-titles">Enter your name</p>
        <div className="su-input">
          <input type="text" name="firstname" onChange={handleChange} required />
          <label>First name</label>
        </div>
        <div className="su-input">
          <input type="text" name="surname" onChange={handleChange} required />
          <label>Surname (optional)</label>
        </div>

        <p className="su-input-titles">Enter your birthday and gender</p>
        <div className="su-dob-layout">
          <div className="su-dob-input">
            <input type="number" name="day" onChange={handleChange} required />
            <label>Day</label>
          </div>
          <div className="su-dob-input">
            <input type="number" name="month" onChange={handleChange} required />
            <label>Month</label>
          </div>
          <div className="su-dob-input">
            <input type="number" name="year" onChange={handleChange} required />
            <label>Year</label>
          </div>
        </div>

        <div className="su-input">
          <input type="text" name="gender" onChange={handleChange} required />
          <label>Gender</label>
        </div>

        <p className="su-input-titles">Create your own Gmail Address</p>
        <div className="su-input">
          <input type="text" name="email" onChange={handleChange} required />
          <label>Create a Gmail address</label>
        </div>

        <p className="su-input-titles">Create a strong password</p>
        <div className="su-input">
          <input type="text" name="password" onChange={handleChange} required />
          <label>Password</label>
        </div>
        <div className="su-input">
          <input type="text" name="confirmPassword" onChange={handleChange} required />
          <label>Confirm Password</label>
        </div>

        <div className="su-show-pass">
          <div className="su-sp-checkbox"><input type="checkbox" name="checkbox" /></div>
          <p>Show password</p>
        </div>

        <div className="su-privacy-terms">
          <div className="su-privacy">
            <div className="su-p-checkbox"><input type="checkbox" name="adsfdsf" defaultChecked /></div>
            <p>Privacy and Terms</p>
          </div>
          <div className="su-privacy-details">
            <p>To create a Google Account, you'll need to agree to the <span>Terms of Services</span> below.</p>
            <p>You are also agreeing to the <span>Google Play Terms of Service</span> to enable discovery and management fo apps.</p>
            <p>In addition, when you create an account, we process your information as described in our <span>Privacy Policy</span>.</p>
          </div>
        </div>
        <div className="su-create-one-next">
          <button className="su-next-button" onClick={regSubmit}>Next</button>
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
export default SignUp;