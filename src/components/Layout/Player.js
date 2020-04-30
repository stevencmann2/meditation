import React, { useRef, useState } from 'react';
import ReactHowler from 'react-howler'
import '../../assets/css/style.css';


const Player = () =>{

    const playerRef = useRef();
    // plays or pauses music
    const [isPlaying, setIsPlaying] = useState(false)
    // cha ges icon from play to pause
    const [playIcon, setPlayIcon] = useState('/play.svg')
    // source of audio file being played 
    const [audioFile, setaudioFile] = useState("rain.mp3")
    //displays time based on button click
    const [timeDisplay, setTimeDisplay] = useState('0:00')

    // clickhandler for play button
    const playHandler = e =>{
        e.preventDefault()
        setIsPlaying(!isPlaying)
        logoHandler()
        console.log(playerRef.current._howler._duration)
        
    }
    // logic for changing play button to pause button
    const logoHandler =() =>{
        if (isPlaying){
            setPlayIcon('/play.svg')
            
            }else{
            setPlayIcon('/pause.svg')
        }
    }

    // console.log(playerRef.current)
   

    return(
        <React.Fragment>
        <div className="player-container">
            <img 
                className="play"
                src={require(`../../assets/images/svg${playIcon}`)} 
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
            <h3 className="time-display">{timeDisplay}</h3> 
        </div>
        <ReactHowler
                src={require(`../../assets/sounds/${audioFile}`)}
                playing={isPlaying}
                ref={playerRef}
            />

            
        </React.Fragment>
        )

}

       // <audio 
            //     className="song" 
            //     src={require(`../../assets/sounds/rain.mp3`)} 
            //     />

export default Player;