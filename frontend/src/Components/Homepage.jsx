import React, { useState } from "react";
import "./Homepage.css"
import SearchBar from "./Header/SearchBar";
import ytShorts from "./../Images/YTShorts.png"
import { useNavigate } from "react-router-dom";
import SideNavBar from "./SideNavBar/SideNavBar";
// 
const Homepage = () => {
   const router = useNavigate();

   // eslint-disable-next-line
   const [vidContent, setVidContent] = useState([
      {
         id: "001",
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views",
         posted: "22 hours ago",
         duration: "1:54"
      },
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
         id: "005",
         img: "https://i.ytimg.com/vi/jN8fMxQ9Hl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1wFw-DqrTBkOctellXB2Pd-2i2A",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKb37OsytVjF5AIAMDVDCajXNVGXUhoN09AwILML=s68-c-k-c0x00ffffff-no-rj",
         title: "SMARTEST MOMENTS IN VALORANT #124",
         cName: "VALORANT - Protatomonster",
         cViews: "704K views",
         posted: "2 months ago",
         duration: "18:28"
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
      }
   ])

   // eslint-disable-next-line
   const [shortsClip, setShortsClip] = useState([
      {
         id: "101",
         img: "https://i.ytimg.com/vi/xj02uqpz-nE/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBhh918jlcgZWS75F11pJXgdRMSzQ",
         title: "Fastest fully automatic Ar15 #223 #rifle #ar15 #gun #viral #shooting #shorts #fullauto",
         cViews: "2.5M views",
      },
      {
         id: "102",
         img: "https://i.ytimg.com/vi/tVxyas2zoQA/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAJUkil64xD8prDbALzcu9CriJFjw",
         title: "Rolex making video | Suriya | Vikram | Kanguva #suriya #rolex #kanguva #vikram #shorts",
         cViews: "11M views",
      },
      {
         id: "103",
         img: "https://i.ytimg.com/vi/3hVL5Soihl8/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBUw-N6wbzbvOgKWPuQytrUZMxLkA",
         title: "Revolver Speed Loader ASMR",
         cViews: "10M views",
      },
      {
         id: "104",
         img: "https://i.ytimg.com/vi/RzlbKKx84wM/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDibPjprpFETE07wfSPz7jH3kDvqQ",
         title: "Hyenas have a Special Ability #hyena",
         cViews: "2.5M views",
      },
      {
         id: "105",
         img: "https://i.ytimg.com/vi/bFsRXDKBjZQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDSCB15HR-Js9D-V6uYozTEA6X46A",
         title: "The 1 Tactic EVERY Reyna Player NEEDS to KNOW! - Valorant #shorts",
         cViews: "319K views",
      },
   ])

   const CloseButtom = (props) => (
      <svg
         fill="white"
         width="18px"
         height="18px"
         viewBox="0 0 16.001 16.001"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <g id="X-16px" transform="translate(0 0)">
            <path
               id="Path_9"
               data-name="Path 9"
               d="M33.707,8,40.854.854a.5.5,0,0,0-.708-.708L33,7.293,25.854.146a.5.5,0,0,0-.708.708L32.293,8l-7.147,7.146a.5.5,0,0,0,.708.708L33,8.707l7.146,7.147a.5.5,0,0,0,.708-.708Z"
               transform="translate(-25 0)"
            />
         </g>
      </svg>
   );

   return (
      <>
         <SearchBar />
         <div className="homepage">
            <SideNavBar />

            <div className="main-content">
               <div className="tab-list-layout">
                  <div className="tab-list">
                     <p className="tab-name-0">All</p>
                     <p className="tab-name">Gaming</p>
                     <p className="tab-name">Mixes</p>
                     <p className="tab-name">Music</p>
                     <p className="tab-name">Live</p>
                     <p className="tab-name">Valorant</p>
                     <p className="tab-name">CSS</p>
                     <p className="tab-name">Trailers</p>
                     <p className="tab-name">Gadgets</p>
                     <p className="tab-name">Recently uploaded</p>
                     <p className="tab-name">Watched</p>
                     <p className="tab-name">Video game </p>
                  </div>
                  <div className="tl-right-arrow"><i class="fa-solid fa-chevron-right"></i></div>
               </div>


               <div className="video-content" >
                  {vidContent.length && vidContent.map((content) => (
                     <div className="video-content-layout" onClick={() => router(`/video-page/${content.id}`)}>
                        <div className="vc-img-layout">
                           <div className="vc-img"><img src={content.img} alt="" /></div>
                           <div className="time-status">{content.duration}</div>
                        </div>
                        <div className="vc-details-layout">

                           <div className="vc-channel-logo"><img src={content.cLogo} alt="" /></div>
                           <div className="vc-details">
                              <div className="vc-title">{content.title}</div>
                              <div className="vc-channel-name">{content.cName}</div>
                              <div className="vc-channel-view-posted">
                                 <div className="vc-channel-views">{content.cViews}</div>
                                 <div className="vc-cirle-gap"><i class="fa-solid fa-circle"></i></div>
                                 <div className="vc-channel-posted">{content.posted}</div>
                              </div>
                           </div>
                           <div className="vc-more-details-box">
                              <div className="vc-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="shorts-content-bg">
                  <div className="shorts-header">
                     <div className="shorts-header-text-layout">
                        <div className="yt-shorts-logo"><img src={ytShorts} alt="" /></div>
                        <p className="shorts-header-text">Shorts</p>
                     </div>
                     <div className="shorts-close-button"><CloseButtom /></div>
                  </div>

                  <div className="shorts-content-layout">
                     {shortsClip.length && shortsClip.map((shorts) => (
                        <div className="shorts-content">

                           <div className="shorts-img"><img src={shorts.img} alt="" /></div>

                           <div className="shorts-details-layout">
                              <div className="shorts-details">
                                 <div className="shorts-title">{shorts.title}</div>
                                 <div className="shorts-channel-views">{shorts.cViews}</div>
                              </div>
                              <div className="shorts-more-details-box">
                                 <div className="shorts-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                              </div>
                           </div>
                        </div>
                     ))
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Homepage;