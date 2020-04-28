import React from 'react';
import '../../assets/css/style.css'

const VideoBackdrop = () => {

    return(
        <div className="vid-container">
            <video loop>
                <source 
                src={require('../../assets/video/rain.mp4')}
                type="video/mp4"
                />
            </video>
        </div>


    )
}

export default VideoBackdrop;