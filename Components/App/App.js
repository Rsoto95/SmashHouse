import "./App.css";
import Header from "../Header/header";
import Youtube from "../Iframe/Iframe";
import SocialMediaIcons from "../socialMediaIcons/socialMediaIcons";
import Footer from "../Footer/footer";

function App() {
  return (
    <div>
      <div className="App">
        <header className="Header">
          <Header />
        </header>
        <div className="youtube">
          <Youtube />
          <div className="socialMediaIcons">
            <div className="followUs">
              <h1>Siguenos en Social Media</h1>
            </div>
            <SocialMediaIcons />
          </div>
        </div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
