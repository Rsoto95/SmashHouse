import React from "react";
import './socialMediaIcons.css'
import facebookIcon from "./facebookIcon.png"
import twitterIcon from "./twitterIcon.png"
import youtubeIcon from "./youtubeIcon.png"
import twitchIcon from "./twitchIcon.png"


function SocialMediaIcons(){

    return(
        <div className="socialMediaIconsContainer">
            <div className='icons'><img className="facebookIcon2" src={facebookIcon}/></div>
            <div className='icons'><img className="twitterIcon2" src={twitterIcon}/></div>
            <div className='icons'><img className="youtubeIcon2" src={youtubeIcon}/></div>           
            <div className='icons'><img className="twitchIcon2" src={twitchIcon}/></div>           

        </div>
    )

}



export default SocialMediaIcons;