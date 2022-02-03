import React, {useState} from "react";
import video from "../data/video";

function Thumbs() {
    console.log(video);

const [thumbsUp, setThumbsUp] = useState(0);
const [thumbsDown, setThumbsDown] = useState(0);

  function handleThumbsUp(event) {
    setThumbsUp(thumbsUp => thumbsUp + 1)
  }

  function handleThumbsDown(event) {
    setThumbsDown(thumbsDown => thumbsDown + 1)
  }

  return (
    <div className= "thumbs">
        <button onClick= {handleThumbsUp} className="thumbsup">{video.upvotes + thumbsUp} </button>
        <button onClick= {handleThumbsDown} className="thumbsdown">{video.downvotes + thumbsDown} </button>
    </div>
  
  )

}

  export default Thumbs;