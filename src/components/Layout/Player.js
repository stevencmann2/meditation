import React, { useRef, useState } from 'react';
import ReactHowler from 'react-howler'
import '../../assets/css/style.css';


const Player = () =>{

    const [isPlaying, setIsPlaying] = useState(false)
    const [audioFile, setaudioFile] = useState("rain.mp3")

    const playHandler = e =>{
        e.preventDefault()
        console.log("clicked the play button")
        setIsPlaying(!isPlaying)
        
    }
    
    
    return(
        <React.Fragment>
        <div className="player-container">
            <img 
                className="play"
                src={require("../../assets/images/svg/play.svg")} 
                alt="play"
                onClick={playHandler}  />
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
                    cx={226.5} 
                    cy={226.5} 
                    r={216.5}
                    stroke="#018EBA" 
                    strokeWidth={20}
                    
                />
               
            </svg>
            <h3 className="time-display">0:00</h3> 
        </div>
        <ReactHowler
                src={require(`../../assets/sounds/${audioFile}`)}
                playing={isPlaying}
            />
        </React.Fragment>
        )

}

       // <audio 
            //     className="song" 
            //     src={require(`../../assets/sounds/rain.mp3`)} 
            //     />

export default Player;