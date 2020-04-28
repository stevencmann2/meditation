import React, { useRef } from 'react';
import Audio from '../Design/Audio'
import '../../assets/css/style.css';


const Player = () =>{

    const outlineRef = useRef(null);
   
    // const outlineLength = outline.getTotalLength()

    console.log(outlineRef)
    return(
        <div className="player-container">
            <Audio 
                source="rain.mp3"
            />
            <img src={require("../../assets/images/svg/play.svg")} alt="play" className="play" />
            <svg 
                className="track-outline"
                width={453}
                height={453} 
                viewBox="0 0 453 453" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
            
                <circle 
                    cx={226.5} 
                    cy={226.5} 
                    r={216.5}
                    stroke="white" 
                    strokeWidth={20}
                />
            </svg>
            <svg 
                className="moving-outline"
                width={453} 
                height={453}
                viewBox="0 0 453 453" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                
            >
                <circle 
                    ref={outlineRef}
                    cx={226.5} 
                    cy={226.5} 
                    r={216.5}
                    stroke="#018EBA" 
                    strokeWidth={20}
                    
                />
               
            </svg>
            <h3 className="time-display">0:00</h3>

        </div>
        )

}

export default Player;