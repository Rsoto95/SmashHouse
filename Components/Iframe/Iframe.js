import React, {useState} from "react";
import './Iframe.css'
import VideoList from '../videoList/videoList';
import twitchLogo from './Twitch.png'
import youtubeLogo from './youtubeLogo.png'



function Youtube() {

        const [video, setVideo] = useState("https://www.youtube.com/embed/AAfxpJoMVow");

        const handleVideoChange = (newvideo) => { 
                setVideo(newvideo)
        }
    
        return(
            <div >
            <iframe 
                    className="iFrame"
                    src={video} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen= {true}>
             </iframe>

                <div className="stickyContainer">
             <div className="listTwitch" >
                       <a href="https://www.twitch.tv/legacysmashhn" target='_blank'><img src={twitchLogo} className="twitchLogo"/></a>
                    </div>
                    <img className="twitchLogo" />
                    <div className="listYoutube" >
                        <a href="https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg" target='_blank' ><img className="youtubeLogo" src={youtubeLogo} /></a>
                    </div>
            </div>


             <div className="VideoList">
             <VideoList handleVideoChange={handleVideoChange} />
             </div>
             </div>
        )
    
}


export default Youtube;