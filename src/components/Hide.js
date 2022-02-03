import React, {useState} from "react";
import video from "../data/video";

function Hide() {

    const[hide, setHide] = useState(true)

    function toggleHide(event){
            video.comments.remove();

    }


    return(
        <div className = "hide">
            {hide ? (
                <button onClick = {toggleHide} className="primary">Hide Comments</button>
            ) : (
                <button onClick = {toggleHide} className="primary"> Show Comments</button>
            )
            }           
        </div>
    )

}

export default Hide;