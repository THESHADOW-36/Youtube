import React, { useState } from "react";
import "./YouPg.css";
import SearchBar from "../Header/SearchBar";
import SideNavBar from "../SideNavBar/SideNavBar";
import SwitchAccount from "./../../Images/SwitchAccount.png"
import HistoryLogo from "./../../Images/History.png"
import WatchLaterLogo from "./../../Images/WatchLater.png"
import PlaylistLogo from "./../../Images/Playlist.png"
import YourClipsLogo from "./../../Images/YourClips.png"

const YouPg = () => {
  // eslint-disable-next-line
  const [ypgHistory, setYpgHistory] = useState([
    {
      id: "031",
      img: "https://i.ytimg.com/vi/U3lyojCm6jA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn3OwnDpRZynAS6bMmUSg-A_9lyg",
      title: "Maruvaarthai - Video Song | Enai Noki Paayum Thota | Dhanush | Darbuka Siva | Gautham Menon",
      cName: "Ondraga Entertainment",
      cViews: "29M views",
      posted: "3 years ago",
      duration: "5:58"
    },
    {
      id: "032",
      img: "https://i.ytimg.com/vi/PiL5UTTTrxk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuLDNTwFUdOck6zXkIu73HGLr9fA",
      title: "Thalli Pogathey - Video Song | Achcham Yenbadhu Madamaiyada | A R Rahman | STR | Gautham",
      cName: "Ondraga Entertainment",
      cViews: "71M views",
      posted: "6 years ago",
      duration: "5:04"
    },
    {
      id: "033",
      img: "https://i.ytimg.com/vi/dQWQWfjpYSw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGgIDmLRcd-eoREG33wz-DOd0G5g",
      title: "😱 China 🇨🇳 Enters 🇵🇰 Pakistan! | Madan Gowri | Tamil | MG",
      cName: "Madan Gowri",
      cViews: "415k views",
      posted: "1 day ago",
      duration: "16:36"
    },
    {
      id: "034",
      img: "https://i.ytimg.com/vi/2lrbAHMACrM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBguq2_rMd0wfk8XFxy3TlVz80L8Q",
      title: "Joe - Official Trailer | Rio Raj | Hariharan Ram.S | Siddhu Kumar | Dr.D.Arulanandhu",
      cName: "Think Music India",
      cViews: "1M views",
      posted: "4 days ago",
      duration: "2:02"
    },
    {
      id: "035",
      img: "https://i.ytimg.com/vi/SBmSRK3feww/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6kyw9TNvwWY8AdFYsKYj89fCzaQ",
      title: "JavaScript Full Course (2023) - Beginner to Pro - Part 1",
      cName: "SuperSimpleDev",
      cViews: "2M views",
      posted: "7 months ago",
      duration: "11:57:22"
    }
  ])

  // eslint-disable-next-line
  const [ypgWatchLater, setYpgWatchLater] = useState([
    {
      id: "002",
      img: "https://i.ytimg.com/vi/sMPcumZJZcI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcW1z2UYd805skgCXg49SVzsakoQ",
      cLogo: "https://yt3.ggpht.com/tWGVfHXn5SaAsw-7livA-p-Db6VrWKtLESCqIaR0Gw6cMN47dhUWt3nMPYcoF7ueZBDsUq4atg=s68-c-k-c0x00ffffff-no-rj",
      title: "ARTIST vs PHOTOSHOP AI - Are We Being Replaced?",
      cName: "Benny Productions",
      cViews: "246K views",
      posted: "6 days ago",
      duration: "5:14"
    },
    {
      id: "003",
      img: "https://i.ytimg.com/vi/gavPg0uckAQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhr6uOQliYmgyh-5FSPLmwtlCFJw",
      cLogo: "https://yt3.ggpht.com/ytc/APkrFKZZcnhhCsP6n7ePUBbwW32mebQEmJNTsc3P-Gua=s68-c-k-c0x00ffffff-no-rj",
      title: "4G SIM Uruttu Watch Roast 🔥 - Android Games in China Watch  ⌚  இது Worth-Ah? 🤔",
      cName: "A2D Channel",
      cViews: "456K views",
      posted: "7 days ago",
      duration: "12:21"
    },
    {
      id: "004",
      img: "https://i.ytimg.com/vi/mPvJkhnB4xg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7AaGgoox1Ns2Lcp1b3wSihPexyQ",
      cLogo: "https://yt3.ggpht.com/IQEPDek14iAOcxgIG8QzeToCowLYAZCzZuqD_uH4su-2wrqZgPss2WpytNNMMkst63XTO9aPIA=s68-c-k-c0x00ffffff-no-rj",
      title: "How I Edit Photos in Lightroom 2022 (complete workflow tutorial)",
      cName: "THAT ICELANDIC GUY.",
      cViews: "1M views",
      posted: "2 years ago",
      duration: "26:29"
    },
    {
      id: "006",
      img: "https://i.ytimg.com/vi/a0Wl9TMyMVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsQ6WDx0S7WywttisjisjfEch9PA",
      cLogo: "https://yt3.googleusercontent.com/ytc/APkrFKYyEObPUL2NQmKlNajLaEhCgLGo-MFAgH3FS57O=s176-c-k-c0x00ffffff-no-rj",
      title: "Oddly Satisfying Videos (NEW)",
      cName: "ZORRO",
      cViews: "26K views",
      posted: "1 day ago",
      duration: "9:44"
    },
    {
      id: "018",
      img: "https://i.ytimg.com/vi/dtKciwk_si4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKY5PyZ65gRHr7WlX-sKlRGDuvBg",
      title: "10 JavaScript Projects in 10 Hours - Coding Challenge 🔥 by",
      cName: "Florin Pop",
      cViews: "2M views",
      posted: "3 years ago",
      duration: "9:17:09"
    }
  ])

  // eslint-disable-next-line
  const [ypgPlaylist, setYpgPlaylist] = useState([
    {
      id: "041",
      img: "https://i.ytimg.com/vi/Rw3ePD8qLcc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgAqeX-rGuq1XE3jVAFj_GUScYCQ",
      title: "Mix - Vikram Vedha Songs | Tasakku Tasakku Video Song feat. Vijay Sethupathi | R. Madhavan | Sam C S",
      cName: "M. L. R. Karthikeyan, Dhanush, Samyuktha Menon, Gana Bala, and more",
      duration: "Mix"
    },
    {
      id: "042",
      img: "https://i.ytimg.com/vi/Fa-n8vk30qE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4PcoiDRBGM3huHvsg5F-gs0aVlg",
      title: "Mix - அனேகன் - ஆத்தாடி ஆத்தாடி பாடல்வரிகள் | தனுஷ்",
      cName: "Abhay Jodhpurkar, Sachin–Jigar, Sanju Rathod, and more",
      duration: "Mix"
    }
  ])


  return (
    <>
      <SearchBar />
      <div className="homepage">
        <SideNavBar />

        <div className="youpg-container">
          <div className="ypg-profile-layout">

            <div className="ypg-pro-pic"><img src="https://w0.peakpx.com/wallpaper/774/368/HD-wallpaper-omen-valorant-key-art.jpg" alt="" /></div>

            <div className="ypg-pro-content">
              <div className="ypg-pro-name">TheShadow</div>

              <div className="ypg-pro-acc-lay">
                <div className="ypg-pro-acc-id">@theshadow036</div>
                <div className="ypg-pro-acc-dot"> . </div>
                <div className="ypg-pro-acc-view">View channel</div>
              </div>

              <div className="ypg-pro-acc-switch">
                <div className="ypg-pro-acc-switch-button">
                  <div className="ypg-pro-acc-switch-logo"><img src={SwitchAccount} alt="" /></div>
                  <p>Switch account</p>
                </div>

                <div className="ypg-pro-acc-google-button">
                  <div><i class="fa-brands fa-google"></i></div>
                  <p>Google Account</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ypg-category-title-layout">
            <div className="ypg-category-title">
              <div className="ypg-ct-logo"><img src={HistoryLogo} alt="" /></div>
              <p className="ypg-ct-name">History</p>
            </div>

            <div className="ypg-ct-see-all">
              <p>See all</p>
            </div>
          </div>

          <div className="ypg-content" >
            {ypgHistory.length && ypgHistory.map((content) => (
              <div className="ypg-content-layout">
                <div className="ypg-img-layout">
                  <div className="ypg-img"><img src={content.img} alt="" /></div>
                  <div className="ypg-time-status">{content.duration}</div>
                </div>
                <div className="ypg-details-layout">
                  <div className="ypg-details">
                    <div className="ypg-title">{content.title}</div>
                    <div className="ypg-channel-name">{content.cName}</div>
                    <div className="ypg-channel-view-posted">
                      <div className="ypg-channel-views">{content.cViews}</div>
                      <div className="ypg-cirle-gap"><i class="fa-solid fa-circle"></i></div>
                      <div className="ypg-channel-posted">{content.posted}</div>
                    </div>
                  </div>
                  <div className="ypg-more-details-box">
                    <div className="ypg-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ypg-content-horizontal-line"></div>

          <div className="ypg-category-title-layout">
            <div className="ypg-category-title">
              <div className="ypg-ct-logo"><img src={WatchLaterLogo} alt="" /></div>
              <p className="ypg-ct-name">Watch later</p>
            </div>

            <div className="ypg-ct-see-all">
              <p>See all</p>
            </div>
          </div>

          <div className="ypg-content" >
            {ypgWatchLater.length && ypgWatchLater.map((content) => (
              <div className="ypg-content-layout">
                <div className="ypg-img-layout">
                  <div className="ypg-img"><img src={content.img} alt="" /></div>
                  <div className="ypg-time-status">{content.duration}</div>
                </div>
                <div className="ypg-details-layout">
                  <div className="ypg-details">
                    <div className="ypg-title">{content.title}</div>
                    <div className="ypg-channel-name">{content.cName}</div>
                    <div className="ypg-channel-view-posted">
                      <div className="ypg-channel-views">{content.cViews}</div>
                      <div className="ypg-cirle-gap"><i class="fa-solid fa-circle"></i></div>
                      <div className="ypg-channel-posted">{content.posted}</div>
                    </div>
                  </div>
                  <div className="ypg-more-details-box">
                    <div className="ypg-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ypg-content-horizontal-line"></div>

          <div className="ypg-category-title-layout">
            <div className="ypg-category-title">
              <div className="ypg-ct-logo"><img src={PlaylistLogo} alt="" /></div>
              <p className="ypg-ct-name">Playlists</p>
            </div>
          </div>

          <div className="ypg-content" >
            {ypgPlaylist.length && ypgPlaylist.map((content) => (
              <div className="ypg-content-layout">
                <div className="ypg-img-layout">
                  <div className="ypg-img"><img src={content.img} alt="" /></div>
                  <div className="ypg-time-status">{content.duration}</div>
                </div>
                <div className="ypg-details-layout">
                  <div className="ypg-details">
                    <div className="ypg-title">{content.title}</div>
                    <div className="ypg-channel-name">{content.cName}</div>
                  </div>
                  <div className="ypg-more-details-box">
                    <div className="ypg-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ypg-content-horizontal-line"></div>

          <div className="ypg-category-title-layout">
            <div className="ypg-category-title">
              <div className="ypg-ct-logo"><img src={YourClipsLogo} alt="" /></div>
              <p className="ypg-ct-name">Your clips</p>
            </div>
          </div>
          <p className="ypg-your-clip-description">Clip and share your favorite moments. Your list shows up right here.</p>
        </div>
      </div>
    </>
  )
}

export default YouPg;