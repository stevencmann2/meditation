import React from 'react';
import Button from '../Design/Button'
import '../../assets/css/style.css';


const SoundPicker = () =>{

    return(
        <div className="sound-picker">
            <Button  
                sound={require('../../assets/sounds/rain.mp3')}
                video={require('../../assets/video/rain.mp4')}  
                title={<img src={require('../../assets/images/svg/rain.svg')} alt="rain"/> }
            />
            <Button 
                sound={require('../../assets/sounds/beach.mp3')}
                video={require('../../assets/video/beach.mp4')}  
                title={<img src={require('../../assets/images/svg/beach.svg')} alt="beach"/> }  
            />
                
        </div>
        )

}

export default SoundPicker;