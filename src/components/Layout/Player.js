import React from 'react';
import Audio from '../Design/Audio'
import '../../assets/css/style.css';


const Player = () =>{

    return(
        <div className="player-container">
            <Audio 
                source="rain.mp3"
            />
        </div>
        )

}

export default Player;