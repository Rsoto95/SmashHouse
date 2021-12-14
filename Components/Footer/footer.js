import react from "react";
import "./footer.css"
import legacyLogoFooter from "./legacyLogoFooter.png"

function Footer(){
    return(
        <div className="mainFooter">
        <div className="column1">
    
            <h3 className="textH3">
            <img className='legacyLogoFooter' src={legacyLogoFooter}/>
            <div className="legacyWords">Legacy Smash Team</div>
            </h3>

            <div className="paragraph1">This is a long paragraph repeatedThis is a long paragraph repeatedThis is a long paragraph repeatedThis is a long paragraph repeatedThis is a long paragraph repeated</div>
        </div>
        <div className="column2">
            <h3 className="textH32">Contact Us</h3>
            <div>legacysmashsps@gmail.com</div>
            <div>Call us at +504 9803-8644</div>
        </div>
        <div className="column3">
            <h3>Quieres ser Legacy?</h3>
            <div>Cualquiera puede ser legacy, Solo tienes que demostrar que te lo mereces.</div>
            <div>Crees que puedes ser Legacy?</div>
            <button>Haz Prueba</button>
        

        </div>
        </div>
        )
}

export default Footer;