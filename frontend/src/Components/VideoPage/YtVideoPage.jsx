import React, { useState } from "react";
import "./YtVideoPage.css"
import SearchBar from "./../Header/SearchBar.jsx";
// import { useParams } from "react-router-dom";
import { YtDislikeButton, YtDownloadButton, YtLikeButton, YtMenuButton, YtShareButton, YtVerifiedTick, YtSort } from "../Logos/Logos.jsx";

const VideoPage = () => {
  // const { id } = useParams();

  // eslint-disable-next-line
  const [mainVideoContent, setMainVideoContent] = useState([
    {
      id: "001",
      vidImg: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
      vidcLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
      vidTitle: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
      vidDuration: "1:54",
      vidcName: "Sony Music South",
      vidSubscribers: "16.1M subscribers",
      vidLikes: "557K",
      vidViews: "5.9M views",
      vidPosted: "7 days ago",
      vidTag: "#2 on Trending for music",
      vidDescriptionLine1: "Song Title : Lokiverse 2.0",
      vidDescriptionLine2: "Album / Movie : Leo",
      vidDescriptionLine3: "Composed by Anirudh Ravichander",
      vidCommentsCount: "9,485"
    }
  ])

  // eslint-disable-next-line
  const [videoListContent, setVideoListContent] = useState([
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

  // eslint-disable-next-line
  const [commentSection, setCommentSection] = useState([
    {
      commentlogo: "https://yt3.googleusercontent.com/ajwzTVDv1XJDJLoPszQTDD-WA0Kpu_nMtAqXU_3PxMeDGkr12W_VR-8bEu3aFdBqDUFpTR4jIQ=s176-c-k-c0x00ffffff-no-rj",
      proName: "@factbyseb",
      commentPostedOn: "9 days ago",
      comments: "LEO Pure Goosebumps 🥵❤️",
      commentLikes: "10K",
      commentReplies: "201 replies"
    },
    {
      commentlogo: "https://yt3.googleusercontent.com/JORkVX4yqYVvX8su-XhcvGf19Rdhgdj6MwMKvUWi4EiOB98vAni0I8ct2NGm2_GtkpJrP9FF=s176-c-k-c0x00ffffff-no-rj",
      proName: "@dnyaneshwar2999",
      commentPostedOn: "8 days ago",
      comments: "0:59 That 'Sir, Just Sir' just before the Rolex bgm is giving me chills 🥶🧡",
      commentLikes: "2.1K",
      commentReplies: "20 replies"
    },
    {
      commentlogo: "https://yt3.googleusercontent.com/5M1UX7CZxLw7iTCAYcRy7wFvplQE682guhC7OfX0GrhhnZSpY81V0qW0imDMprjaaw4upQ4SAQ=s176-c-k-c0x00ffffff-no-rj",
      proName: "@actor.-.",
      commentPostedOn: "5 days ago",
      comments: "THANK YOU GUYS FOR YOUR WONDERFUL SUPPORT, KEEP ENJOYING! ❤🎉",
      commentLikes: "9",
      commentReplies: ""
    },
    {
      commentlogo: "https://yt3.googleusercontent.com/Z9Z0c1Y2gEAf-XyIqwDECZJtolelu7WsscY7GfHoEPpRWLGoeE_jup9XgkqvO7gwpN8xLvuSKw=s176-c-k-c0x00ffffff-no-rj",
      proName: "@jaygohel8562",
      commentPostedOn: "8 days ago",
      comments: "Hence proved, Music has no language that consists of feelings & emotions ♥️ Great work BGM King 'Anirudh Ravichander' 👑",
      commentLikes: "481",
      commentReplies: "8 replies"
    },
    {
      commentlogo: "https://yt3.googleusercontent.com/VqGkPKdp-JnA4XEoqphmsrJygoPfAib0c82Ky3NMbei1Pc72ygCJZDetEwTZYPCusTJFcIH77Q=s176-c-k-c0x00ffffff-no-rj",
      proName: "@NikkuEntertainment38",
      commentPostedOn: "9 days ago",
      comments: "It's not only a theme video it's a goosebump to all loki fans",
      commentLikes: "5K",
      commentReplies: "63 replies"
    },
    {
      commentlogo: "https://yt3.googleusercontent.com/T9K_I9PGytGKIya9FaM-1hH1LzUzNXAPPkp3BWoclwxCQyBpyTElcgdCAT2FhlgA1gs0LJkHzDs=s176-c-k-c0x00ffffff-no-rj",
      proName: "@arifaahmed7229",
      commentPostedOn: "8 days ago",
      comments: "Lokiverse 2.0 is Better than previous one 😍Anirudh's magic💥",
      commentLikes: "103",
      commentReplies: "3 replies"
    }
  ])

  // if (id) {
  //   return mainVideoContent;
  // }
  return (
    <>
      <SearchBar />

      <div className="video-page">

        <div className="main-video">
          <div className="main-video-layout">
            {mainVideoContent.length && mainVideoContent.map((video) => (
              <div className="main-video-content-layout">
                <div className="main-video-content">
                  <iframe className="mvc-videoplay" src="https://www.youtube.com/embed/deQcxldcOog" frameborder="0"></iframe>
                  {/* <div className="mvc-controller-layout">
                    <div className="mvc-controller">
                      <div className="mvc-timed-progress-bar"></div>
                      <div className="mvc-controller-container">
                        <div className="mvc-cc-left">
                          <div className="mvc-cc-play"><i class="fa-solid fa-play"></i></div>
                          <div className="mvc-cc-play-next"><i class="fa-solid fa-forward-step"></i></div>
                          <div className="mvc-cc-volume"><i class="fa-solid fa-volume-low"></i></div>
                          <p className="mvc-cc-duration">0:01 / {video.vidDuration}</p>
                        </div>
                        <div className="mvc-cc-right">
                          <div className="mvc-cc-auto-play"><i class="fa-solid fa-circle-play"></i></div>
                          <div className="mvc-cc-caption"><i class="fa-solid fa-closed-captioning"></i></div>
                          <div className="mvc-cc-settings"><i class="fa-solid fa-gear"></i></div>
                          <div className="mvc-cc-miniplay"><MiniPlay /></div>
                          <div className="mvc-cc-theater-mode"><TheaterMode /></div>
                          <div className="mvc-cc-full-screen"><FullScreen /></div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="mvc-details">
                  <p className="mvc-title">{video.vidTitle}</p>
                  <div className="mvc-channel-subscribe-like-share-download">
                    <div className="mvc-channel-subscribe">
                      <div className="mvc-channel-logo"><img src={video.vidcLogo} alt="" /></div>
                      <div className="mvc-channel-name-subscribers">
                        <p className="mvc-channel-name">{video.vidcName}</p>
                        <p className="mvc-channel-subscribers">{video.vidSubscribers}</p>
                      </div>
                      <div className="mvc-subscribe-button"><button>Subscribe</button></div>
                    </div>

                    <div className="mvc-like-share-download">
                      <div className="mvc-like">
                        <div className="like-button">
                          <div><YtLikeButton /></div>
                          <p>{video.vidLikes}</p>
                        </div>
                        <div className="mvc-vertical-line"></div>
                        <div className="dislike-button"><YtDislikeButton /></div>
                      </div>

                      <div className="mvc-share">
                        <div><YtShareButton /></div>
                        <p>Share</p>
                      </div>

                      <div className="mvc-download">
                        <div><YtDownloadButton /></div>
                        <p>Download</p>
                      </div>

                      <div className="mvc-menu"><YtMenuButton /></div>
                    </div>
                  </div>
                </div>

                <div className="mvc-description-layout">
                  <div className="mvc-description">
                    <div className="mvc-view-posted-tag">
                      <div className="mvc-views">{video.vidViews}</div>
                      <div className="mvc-posted-on">{video.vidPosted}</div>
                      <div className="mvc-tags">{video.vidTag}</div>
                    </div>
                    <p className="mvc-description-lines">{video.vidDescriptionLine1}</p>
                    <p className="mvc-description-lines">{video.vidDescriptionLine2}</p>
                    <p className="mvc-description-lines">{video.vidDescriptionLine3}<span className="mvc-description-lines-more">...more</span></p>
                  </div>
                </div>

                <div className="mvc-comments-section">

                  <div className="mvc-cs-count">
                    <p>{video.vidCommentsCount} Comments</p>
                    <div className="mvc-cs-sort">
                      <div className="mvc-cs-sort-logo"><YtSort /></div>
                      <p>Sort by</p>
                    </div>
                  </div>

                  <div className="mvc-cs-add-comments-layout">
                    <div className="mvc-cs-add-my-comments">
                      <div className="mvc-cs-ac-logo"><img src="https://yt3.ggpht.com/yti/ADpuP3NyJfxoWTO76lTFcjes8eD2QuQ1W2k5-t215y61=s48-c-k-c0x00ffffff-no-rj" alt="" /></div>
                      <div className="mvc-cs-add-my-comments-input"><input type="text" placeholder="Add a comment..."/></div>
                    </div>
                    {commentSection.length && commentSection.map((com) => (
                      <div className="mvc-cs-add-comments">

                        <div className="mvc-cs-ac-logo"><img src={com.commentlogo} alt="" /></div>

                        <div className="mvc-cs-ac-text">

                          <div className="mvc-cs-ac-name-posted">
                            <p className="mvc-cs-ac-name">{com.proName}</p>
                            <p className="mvc-cs-ac-posted">{com.commentPostedOn}</p>
                          </div>

                          <p className="mvc-cs-ac-comments">{com.comments}</p>

                          <div className="mvc-cs-ac-like-dislike">
                            <div className="mvc-cs-ac-like-logo"><YtLikeButton /></div>
                            <p className="mvc-cs-ac-like">{com.commentLikes}</p>
                            <div className="mvc-cs-ac-dislike-logo"><YtDislikeButton /></div>
                            <p className="mvc-cs-ac-reply">Reply</p>
                          </div>

                          <div className="mvc-cs-ac-replies">
                            <div className="mvc-cs-ac-sort-down"><i class="fa-solid fa-sort-down fa-sm"></i></div>
                            <p className="mvc-cs-ac-replies-text">{com.commentReplies}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="video-list">
          <div className="video-list-layout">
            {videoListContent.length && videoListContent.map((vlc) => (
              <div className="video-list-content-layout">
                <div className="vlc-img-lay">
                  <div className="vlc-img"><img src={vlc.vidImg} alt="" /></div>
                  <p className="vlc-duration">{vlc.vidDuration}</p>
                </div>
                <div className="vlc-details">
                  <p className="vlc-title">{vlc.vidTitle}</p>
                  <div className="vlc-name-verify">
                    <p className="vlc-name">{vlc.vidcName}</p>
                    <div className="vlc-verify"><YtVerifiedTick /></div>
                  </div>
                  <div className="vlc-view-posted-lay">
                    <p className="vlc-views">{vlc.vidViews}</p>
                    <div className="vlc-cirle-gap"><i class="fa-solid fa-circle"></i></div>
                    <p className="vlc-posted">{vlc.vidPosted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoPage;