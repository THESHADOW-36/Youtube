import React, { useState } from "react";
import "./History.css"
import SearchBar from "../Header/SearchBar";
import SideNavBar from "../SideNavBar/SideNavBar";
import ClearWatchHistory from "./../../Images/ClearWatchHistory.png";
import PauseWatchHistory from "./../../Images/PauseWatchHistory.png";
import ManageHistory from "./../../Images/ManageHistory.png";
import { SearchBarLogo, YtVerifiedTick } from "../Logos/Logos";

const HistoryPg = () => {
  // eslint-disable-next-line
  const [videoListContent, setVideoListContent] = useState([{
    id: "031",
    vidImg: "https://i.ytimg.com/vi/U3lyojCm6jA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn3OwnDpRZynAS6bMmUSg-A_9lyg",
    vidTitle: "Maruvaarthai - Video Song | Enai Noki Paayum Thota | Dhanush | Darbuka Siva | Gautham Menon",
    vidcName: "Ondraga Entertainment",
    vidViews: "29M views",
    vidPosted: "3 years ago",
    vidDuration: "5:58"
  },
  {
    id: "032",
    vidImg: "https://i.ytimg.com/vi/PiL5UTTTrxk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuLDNTwFUdOck6zXkIu73HGLr9fA",
    vidTitle: "Thalli Pogathey - Video Song | Achcham Yenbadhu Madamaiyada | A R Rahman | STR | Gautham",
    vidcName: "Ondraga Entertainment",
    vidViews: "71M views",
    vidPosted: "6 years ago",
    vidDuration: "5:04"
  },
  {
    id: "033",
    vidImg: "https://i.ytimg.com/vi/dQWQWfjpYSw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGgIDmLRcd-eoREG33wz-DOd0G5g",
    vidTitle: "😱 China 🇨🇳 Enters 🇵🇰 Pakistan! | Madan Gowri | Tamil | MG",
    vidcName: "Madan Gowri",
    vidViews: "415k views",
    vidPosted: "1 day ago",
    vidDuration: "16:36"
  },
  {
    id: "034",
    vidImg: "https://i.ytimg.com/vi/2lrbAHMACrM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBguq2_rMd0wfk8XFxy3TlVz80L8Q",
    vidTitle: "Joe - Official Trailer | Rio Raj | Hariharan Ram.S | Siddhu Kumar | Dr.D.Arulanandhu",
    vidcName: "Think Music India",
    vidViews: "1M views",
    vidPosted: "4 days ago",
    vidDuration: "2:02"
  },
  {
    id: "035",
    vidImg: "https://i.ytimg.com/vi/SBmSRK3feww/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6kyw9TNvwWY8AdFYsKYj89fCzaQ",
    vidTitle: "JavaScript Full Course (2023) - Beginner to Pro - Part 1",
    vidcName: "SuperSimpleDev",
    vidViews: "2M views",
    vidPosted: "7 months ago",
    vidDuration: "11:57:22"
  },
  {
    id: "007",
    vidImg: "https://i.ytimg.com/vi/WWr9086eWtY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLArmc5VgIYn7RyEb9_y2NGZc1UrZw",
    vidTitle: "LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi",
    vidcName: "Sony Music South",
    vidViews: "15M views",
    vidPosted: "10 days ago",
    vidDuration: "2:19"
  },
  {
    id: "010",
    vidImg: "https://i.ytimg.com/vi/PzBrCSiwYGM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqWiqzX-Y_UHZeS2PUls_rUzZrbA",
    vidTitle: "Neethaane En Ponvasantham - Vaanam Mella Video | Jiiva, Samantha",
    vidcName: "SonyMusicSouthVEVO",
    vidViews: "9.5M views",
    vidPosted: "8 years ago",
    vidDuration: "5:45"
  },
  {
    id: "011",
    vidImg: "https://i.ytimg.com/vi/vKWv_DuhOXg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBRRmPGbB0qGMhj9F4YI7rd5-4G3Q",
    vidTitle: "Kan Irandil Official Video Song | Uthama Puthiran | Dhanush | Genelia",
    vidcName: "Think Music India",
    vidViews: "17M views",
    vidPosted: "8 years ago",
    vidDuration: "4:00"
  },
  {
    id: "012",
    vidImg: "https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA4b9x1ZOFFQdRLOqh8X_5ba5BAWw",
    vidTitle: "Mudhal Nee Mudivum Nee - Title Track Video | Darbuka Siva | Sid Sriram | Thamarai",
    vidcName: "SonyMusicSouthVEVO",
    vidViews: "121M views",
    vidPosted: "1 year ago",
    vidDuration: "5:36"
  },
  {
    id: "008",
    vidImg: "https://i.ytimg.com/vi/A9D8mWjhYqQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWFumMgLuij76Y3ntnanx1jk3cEA",
    vidTitle: "Social Media Paavangal | Parithabangal",
    vidcName: "Parithabangal",
    vidViews: "602K views",
    vidPosted: "7 hours ago",
    vidDuration: "13:42"
  },
  {
    id: "009",
    vidImg: "https://i.ytimg.com/vi/-dECADPvHu8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBt84qjp0kxNB3ePjfaom5eKoSypg",
    vidTitle: "THE STRENGTH OF DUELISTS",
    vidcName: "VALORANT - Protatomonster",
    vidViews: "34K views",
    vidPosted: "8 hours ago",
    vidDuration: "21:01"
  },
  {
    id: "013",
    vidImg: "https://i.ytimg.com/vi/YFYiTS46x-8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxoLSBKyUp__VQdOrZPUEveIV1vg",
    vidTitle: "Vinnaithaandi Varuvaayaa - Hosanna Video | Rahman | STR, Trisha",
    vidcName: "SonyMusicSouthVEVO",
    vidViews: "56M views",
    vidPosted: "7 years ago",
    vidDuration: "5:37"
  },
  {
    id: "014",
    vidImg: "https://i.ytimg.com/vi/RR3I5CbE5I0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA6-Fi7XZfghK_SXY1iVRquhKrcRA",
    vidTitle: "Leo Post-release Lokesh Kanagaraj Interview with Sudhir Srinivasan | Leo | Vijay | Trisha | Part 1",
    vidcName: "Cinema Express",
    vidViews: "781K views",
    vidPosted: "4 days ago",
    vidDuration: "5:00"
  },
  {
    id: "015",
    vidImg: "https://i.ytimg.com/vi/9VpeTiz81gc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBHnGqP14r3OYihLri0TzxM1MYMhQ",
    vidTitle: "VIKRAM – Pathala Pathala Lyric | Kamal Haasan | Vijay Sethupathi | Lokesh Kanagaraj | Anirudh",
    vidcName: "Sony Music South",
    vidViews: "114M views",
    vidPosted: "1 year ago",
    vidDuration: "3:33"
  },
  {
    id: "016",
    vidImg: "https://i.ytimg.com/vi/Wq-S2FQAh_w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCofzLnqU1-vtDJ5_1NcCUuiJvLPQ",
    vidTitle: "Maryan - Kadal Raasa Naan Full Video",
    vidcName: "SonyMusicSouthVEVO",
    vidViews: "11M views",
    vidPosted: "8 years ago",
    vidDuration: "3:17"
  },
  {
    id: "017",
    vidImg: "https://i.ytimg.com/vi/q6zhos-TcNA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBeJAutoJIm3PpI-J96l92nqQaOPw",
    vidTitle: "URUTTU TECH (2023) - Full Movie (Tamil) Full HD 60fps | Uruttu Annan, PC Doc, Kelu Mavaney Kelu",
    vidcName: "A2D Channel",
    vidViews: "2M views",
    vidPosted: "4 months ago",
    vidDuration: "1:05:23"
  },
  {
    id: "018",
    vidImg: "https://i.ytimg.com/vi/bSmSzdldah0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQOcvBXlpWCqn0wWoLfjp2OwCQ-w",
    vidTitle: "Education Waste? - படிப்பு தேவையா? | BiggBoss Fight - No Job? No Talent? Why Education?",
    vidcName: "A2D Channel",
    vidViews: "672K views",
    vidPosted: "2 weeks ago",
    vidDuration: "17:00"
  },
  {
    id: "019",
    vidImg: "https://i.ytimg.com/vi/93iK4wNij8E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDUEZzbqtk_APwNw8OLR4ifB43nwg",
    vidTitle: "Vaaranam Aayiram - Mundhinam Video | Harris Jayaraj | Suriya",
    vidcName: "SonyMusicSouthVEVO",
    vidViews: "63M views",
    vidPosted: "8 years ago",
    vidDuration: "5:10"
  },
  {
    id: "020",
    vidImg: "https://i.ytimg.com/vi/udAlOSn4yFo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC4GrBISRKxDBjXdlDZk3QOhI-TZw",
    vidTitle: "Dhruva Natchathiram - Official Trailer | Chiyaan Vikram, Harris Jayaraj, Gautham Vasudev Menon",
    vidcName: "Sony Music South",
    vidViews: "13M",
    vidPosted: "11 days ago",
    vidDuration: "2:36"
  },
  {
    id: "012",
    vidImg: "https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA4b9x1ZOFFQdRLOqh8X_5ba5BAWw",
    vidTitle: "Mudhal Nee Mudivum Nee - Title Track Video | Darbuka Siva | Sid Sriram | Thamarai",
    vidcName: "SonyMusicSouthVEVO",
    vidViews: "121M views",
    vidPosted: "1 year ago",
    vidDuration: "5:36"
  },
  {
    id: "008",
    vidImg: "https://i.ytimg.com/vi/A9D8mWjhYqQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWFumMgLuij76Y3ntnanx1jk3cEA",
    vidTitle: "Social Media Paavangal | Parithabangal",
    vidcName: "Parithabangal",
    vidViews: "602K views",
    vidPosted: "7 hours ago",
    vidDuration: "13:42"
  },
  {
    id: "013",
    vidImg: "https://i.ytimg.com/vi/YFYiTS46x-8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxoLSBKyUp__VQdOrZPUEveIV1vg",
    vidTitle: "Vinnaithaandi Varuvaayaa - Hosanna Video | Rahman | STR, Trisha",
    vidcName: "SonyMusicSouthVEVO",
    vidViews: "56M views",
    vidPosted: "7 years ago",
    vidDuration: "5:37"
  },
  {
    id: "015",
    vidImg: "https://i.ytimg.com/vi/9VpeTiz81gc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBHnGqP14r3OYihLri0TzxM1MYMhQ",
    vidTitle: "VIKRAM – Pathala Pathala Lyric | Kamal Haasan | Vijay Sethupathi | Lokesh Kanagaraj | Anirudh",
    vidcName: "Sony Music South",
    vidViews: "114M views",
    vidPosted: "1 year ago",
    vidDuration: "3:33"
  }
  ])
  return (
    <>
      <SearchBar />
      <div className="homepage">
        <SideNavBar />
        <div className="historypg-container">
          <p className="hpg-header-text">Watch history</p>

          <div className="hpg-content-layout">
            <div className="hpg-content">
              <p className="hpg-content-today-text">Today</p>

              <div className="hpg-video-list">
                <div className="hpg-video-list-layout">
                  {videoListContent.length && videoListContent.map((vlc) => (
                    <div className="hpg-video-list-content-layout">
                      <div className="hpg-vlc-img-lay">
                        <div className="hpg-vlc-img"><img src={vlc.vidImg} alt="" /></div>
                        <p className="hpg-vlc-duration">{vlc.vidDuration}</p>
                      </div>
                      <div className="hpg-vlc-details">
                        <p className="hpg-vlc-title">{vlc.vidTitle}</p>
                        <div className="hpg-vlc-name-verify">
                          <p className="hpg-vlc-name">{vlc.vidcName}</p>
                          <div className="hpg-vlc-verify"><YtVerifiedTick /></div>
                        </div>
                        <div className="hpg-vlc-view-posted-lay">
                          <p className="hpg-vlc-views">{vlc.vidViews}</p>
                          <div className="hpg-vlc-cirle-gap"><i class="fa-solid fa-circle"></i></div>
                          <p className="hpg-vlc-posted">{vlc.vidPosted}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className="hpg-options-layout">
              <div className="hpg-options">
                <div className="hpg-opt-search">
                  <div><SearchBarLogo /></div>
                  <div className="hpg-opt-search-bar"><input type="text" placeholder="Search watch history" /></div>
                </div>

                <div className="hpg-opt-categories">
                  <div className="hpg-opt-icons"><img src={ClearWatchHistory} alt="" /></div>
                  <p className="hpg-opt-text">Clear all watch history</p>
                </div>

                <div className="hpg-opt-categories">
                  <div className="hpg-opt-icons"><img src={PauseWatchHistory} alt="" /></div>
                  <p className="hpg-opt-text">Pause watch history</p>
                </div>

                <div className="hpg-opt-categories">
                  <div className="hpg-opt-icons"><img src={ManageHistory} alt="" /></div>
                  <p className="hpg-opt-text">Manage all history</p>
                </div>
                <div className="hpg-opt-sub-categories">
                  <p>Comments</p>
                  <p>Community posts</p>
                  <p>Live chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryPg;