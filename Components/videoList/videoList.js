import React, { useEffect, useState } from "react";
import "./videoList.css";
import youtubeLogo from "./smallLogo.png";
import data from "../YoutubeApi/youtube.json";

function VideoList(props) {
  const [videoState, setVideoState] = useState([]);
  const [nameState, setNameState] = useState([]);

  const fetchData = async () => {
    let videoArr = [];
    let nameArr = [];

    for (let i = 0; i < 8; i++) {
      videoArr.push(data[0].items[i].id.videoId);
      nameArr.push(data[0].items[i].snippet.title);
    }

    setVideoState(videoArr);
    setNameState(nameArr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid-container">
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[0]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[0]}<img className="ytIcon" src={youtubeLogo}></img>
        </div>
      </div>
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[1]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[1]} <img className="ytIcon" src={youtubeLogo}></img>
        </div>
      </div>
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[2]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[2]}<img className="ytIcon" src={youtubeLogo}></img>
        </div>
      </div>
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[3]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[3]}<img className="ytIcon" src={youtubeLogo}></img>
        </div>
      </div>
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[4]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[4]}<img className="ytIcon" src={youtubeLogo}></img>
        </div>
      </div>
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[5]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[5]}<img className="ytIcon" src={youtubeLogo}></img>
        </div>
      </div>
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[6]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[6]}<img className="ytIcon" src={youtubeLogo}></img>

        </div>
      </div>
      <div className="playerMatchContainer">
        <div
          className="playerMatch"
          link={`https://www.youtube.com/embed/${videoState[7]}`}
          onClick={(e) =>
            props.handleVideoChange(e.target.getAttribute("link"))
          }
        >
          {nameState[7]}<img className="ytIcon" src={youtubeLogo}></img>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
