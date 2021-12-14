import React from "react";
import './header.css'
import wallPaper from './wallpaper.jpg'
import legacyLogo from './legacyLogo.png'
import facebookLogo from './Facebook_icon_2013.png'
import youtubeLogo from './youtubeLogoBlack.png'
import twitchIcon from './twitchIcon.png'
import twitterIcon from './twitterIcon.png'
import discordIcon from './discordIcon.png'

function Header(){

  





    
        return(
            <div className='headerAll'>
                <div className='navigationBar'>
                <a href='https://www.facebook.com/LegacySmashHN/' target="_blank"><img className='facebookIcon' src={facebookLogo}/></a>
                <a href='https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg' target="_blank"><img className='youtubeIcon' src={youtubeLogo}/></a>
                <a href='https://www.twitch.tv/legacysmashhn' target="_blank"><img className='twitchIcon' src={twitchIcon}/></a>
                <a href='https://twitter.com/LegacySmashHN' target="_blank"><img className='twitterIcon' src={twitterIcon}/></a>
                <a href='https://discord.gg/yXqyPW9qxc' target="_blank"><img className='discordIcon' src={discordIcon}/></a>


                </div>
                <img className='wallpaper' src={wallPaper} alt='Smash Wallpaper'/>
                <img className='legacyLogo' src={legacyLogo}/>
                <button className='homeButton'>Home</button>
                <button className='aboutUsButton'>About us</button>
                <button className='videosButton'>Videos</button> 
                <button className='contactUsButton'>Contact us</button>
            </div>
        )
    

}


export default Header;