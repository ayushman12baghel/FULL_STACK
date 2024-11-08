import { useState } from "react";

export default function LikeButton(){

    let [isLiked,setIsLiked]=useState(false);

    let toggleLike=()=>{
        setIsLiked(!isLiked)
    }
    let styles={color:"red"};
    return(
        <div>
            <h1 onClick={toggleLike}>
                {isLiked?<i className="fa-solid fa-heart" style={styles}></i>:<i className="fa-regular fa-heart"></i>}
                
            </h1>
            
        </div>
    )
}