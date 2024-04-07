import React from "react";
import "./SideNavBar.css"
import homeLogo from "./../../Images/Home.png"
import shortsLogo from "./../../Images/Shorts.png"
import subLogo from "./../../Images/Subscriptions.png"
import yourChannelLogo from "./../../Images/YourChannel.png"
import historyLogo from "./../../Images/History.png"
import yourVideosLogo from "./../../Images/YourVideos.png"
import watchLaterLogo from "./../../Images/WatchLater.png"
import tredingLogo from "./../../Images/Trending.png"
import shoppingLogo from "./../../Images/Shopping.png"
import musicLogo from "./../../Images/Music.png"
import moviesLogo from "./../../Images/Movies.png"
import liveLogo from "./../../Images/Live.png"
import gamingLogo from "./../../Images/Gaming.png"
import newsLogo from "./../../Images/News.png"
import sportsLogo from "./../../Images/Sports.png"
import learningLogo from "./../../Images/Learning.png"
import fashionBeautyLogo from "./../../Images/Fashion-Beauty.png"
import podcastsLogo from "./../../Images/Podcasts.png"
import ytPremiumLogo from "./../../Images/YouTubePremium.png"
import ytStudioLogo from "./../../Images/YoutubeStudio.png"
import ytMusicLogo from "./../../Images/YoutubeMusic.png"
import yrKidsLogo from "./../../Images/YoutubeKids.png"
import settingLogo from "./../../Images/Settings.png"
import reportHistoryLogo from "./../../Images/ReportHistory.png"
import helpLogo from "./../../Images/Help.png"
import sendFeedbackLogo from "./../../Images/SendFeedback.png"
import { useNavigate } from "react-router-dom";

const SideNavBar = () => {
  const router = useNavigate();

  function homepg() {
    router("/")
  }

  function youPg() {
    router("/you")
  }

  function historypg() {
    router("/history")
  }

  return (
    <div className="menu-category">
      <div className="menu-category-layout">
        <div className="mc-box" onClick={homepg}>
          <div className="mcb-logo"><img src={homeLogo} alt="" /></div>
          <div className="mcb-text">Home</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={shortsLogo} alt="" /></div>
          <div className="mcb-text">Shorts</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={subLogo} alt="" /></div>
          <div className="mcb-text">Subscriptions</div>
        </div>

        <div className="mc-horizontal-line"></div>

        <div className="mc-box" onClick={youPg}>
          {/* <div className="mcb-logo">O</div> */}
          <div className="mcb-text-2">You</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={yourChannelLogo} alt="" /></div>
          <div className="mcb-text">Your channel</div>
        </div>
        <div className="mc-box" onClick={historypg}>
          <div className="mcb-logo"><img src={historyLogo} alt="" /></div>
          <div className="mcb-text">History</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={yourVideosLogo} alt="" /></div>
          <div className="mcb-text">Your videos</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={watchLaterLogo} alt="" /></div>
          <div className="mcb-text">Watch later</div>
        </div>
      </div>

      <div className="mc-horizontal-line"></div>

      <div className="menu-category-layout">
        <div className="mc-box">
          {/* <div className="mcb-logo">O</div> */}
          <div className="mcb-text-2">Explore</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={tredingLogo} alt="" /></div>
          <div className="mcb-text">Trending</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={shoppingLogo} alt="" /></div>
          <div className="mcb-text">Shopping</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={musicLogo} alt="" /></div>
          <div className="mcb-text">Music</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={moviesLogo} alt="" /></div>
          <div className="mcb-text">Movies</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={liveLogo} alt="" /></div>
          <div className="mcb-text">Live</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={gamingLogo} alt="" /></div>
          <div className="mcb-text">Gaming</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={newsLogo} alt="" /></div>
          <div className="mcb-text">News</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={sportsLogo} alt="" /></div>
          <div className="mcb-text">Sports</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={learningLogo} alt="" /></div>
          <div className="mcb-text">Learning</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={fashionBeautyLogo} alt="" /></div>
          <div className="mcb-text">Fashion & Beauty</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={podcastsLogo} alt="" /></div>
          <div className="mcb-text">Podcasts</div>
        </div>
      </div>

      <div className="mc-horizontal-line"></div>

      <div className="menu-category-layout">
        <div className="mc-box">
          {/* <div className="mcb-logo">O</div> */}
          <div className="mcb-text-2">More from YouTube</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={ytPremiumLogo} alt="" /></div>
          <div className="mcb-text">YouTube Premium</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={ytStudioLogo} alt="" /></div>
          <div className="mcb-text">YouTube Studio</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={ytMusicLogo} alt="" /></div>
          <div className="mcb-text">YouTube Music</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={yrKidsLogo} alt="" /></div>
          <div className="mcb-text">YouTube Kids</div>
        </div>
      </div>

      <div className="mc-horizontal-line"></div>

      <div className="menu-category-layout">
        <div className="mc-box">
          <div className="mcb-logo"><img src={settingLogo} alt="" /></div>
          <div className="mcb-text">Setting</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={reportHistoryLogo} alt="" /></div>
          <div className="mcb-text">Report history</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={helpLogo} alt="" /></div>
          <div className="mcb-text">Help</div>
        </div>
        <div className="mc-box">
          <div className="mcb-logo"><img src={sendFeedbackLogo} alt="" /></div>
          <div className="mcb-text">Send feedback</div>
        </div>
      </div>

      <div className="mc-horizontal-line"></div>

      <div className="guide-links-primary">
        <p>About</p>
        <p>Press</p>
        <p>Copyright</p>
        <p>Contact us</p>
        <p>Creators</p>
        <p>Advertise</p>
        <p>Developers</p>
      </div>
      <div className="guide-links-secondary">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Policy & Safety</p>
        <p>How YouTube works</p>
        <p>Test new features</p>
      </div>
      <p className="google-llc">© 2023 Google LLC</p>
    </div>
  )
}

export default SideNavBar;