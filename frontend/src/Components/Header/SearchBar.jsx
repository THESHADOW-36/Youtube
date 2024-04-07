import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css"
import youtubeLogo from "./../../Images/YoutubeLogoWhite.png"
import create from "./../../Images/Create.png"
import notification from "./../../Images/Notification.png"
import { AuthContext } from "../Context/AuthContext";
// import profile from "./../../Images/Profile.png"

const SearchBar = () => {
  const router = useNavigate();

  const { state, Logout } = useContext(AuthContext)

  function signInSite() {
    router("/sign-in")
  }
  // eslint-disable-next-line
  const SignInProfile = (props) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
        stroke="#3ea6ff"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
        stroke="#3ea6ff"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#3ea6ff"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  // eslint-disable-next-line
  const EllipsisVertical = (props) => (
    <svg
      fill="#ffffff"
      width="16px"
      height="16px"
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"ellipsis-vertical-line"}</title>
      <circle
        cx={18}
        cy={4.9}
        r={2.9}
        className="clr-i-outline clr-i-outline-path-1"
      />
      <circle
        cx={18}
        cy={18}
        r={2.9}
        className="clr-i-outline clr-i-outline-path-2"
      />
      <circle
        cx={18}
        cy={31.1}
        r={2.9}
        className="clr-i-outline clr-i-outline-path-3"
      />
      <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </svg>
  );
  return (
    <>
      <div className="search-bar-bg">
        <div className="search-bar">
          <div className="sb-yt-menu-logo">
            <div className="sb-menu">
              <i class="fa-solid fa-bars fa-lg"></i>
            </div>
            <div className="sb-yt-logo">
              <img src={youtubeLogo} alt="" />
            </div>
          </div>

          <div className="search-bar-box">
            <div className="search-bar-layout">
              <div className="search-bar-input"><input type="text" placeholder="Search" /></div>
              <div className="search-bar-logo"><i class="fa-solid fa-magnifying-glass fa-lg"></i></div>
            </div>

            <div className="sb-voice-search">
              <i class="fa-solid fa-microphone"></i>
            </div>
          </div>

          <div >
            {state?.user?.id ?
              <div className="sb-create-notify-signin">
                <div className="sb-create">
                  <img src={create} alt="" />
                </div>
                <div className="sb-notify">
                  <img src={notification} alt="" />
                </div>
                <div className="sb-profile" onClick={Logout}>
                  <img src="https://w0.peakpx.com/wallpaper/774/368/HD-wallpaper-omen-valorant-key-art.jpg" alt="" />
                </div>
              </div>
              :
              <div className="sb-create-notify-signin">
                <div className="sb-setting-menu">
                  <EllipsisVertical />
                </div>
                <div className="sb-sign-in-layout" onClick={signInSite}>
                  <div className="sb-sign-in-logo fa-lg"><SignInProfile /></div>
                  <div className="sb-sign-in-text">Sign in</div>
                </div>
              </div>
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default SearchBar;