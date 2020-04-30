import React from 'react';
import Button from '../Design/Button'
import '../../assets/css/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSound } from '../../actions'


const SoundPicker = () =>{

    const SoundSelected  = useSelector(state=> state.SoundSelected)
    const dispatch = useDispatch();

    
    return(
        <div className="sound-picker">
            <div>{SoundSelected}</div>
            <Button  
                onClick ={()=> dispatch(selectedSound('RAIN'))}
                sound={require('../../assets/sounds/rain.mp3')}
                video={require('../../assets/video/rain.mp4')}  
                title={<img src={require('../../assets/images/svg/rain.svg')} alt="rain"/> }
            />
            <Button 
                onClick ={()=> dispatch(selectedSound('BEACH'))}
                sound={require('../../assets/sounds/beach.mp3')}
                video={require('../../assets/video/beach.mp4')}  
                title={<img src={require('../../assets/images/svg/beach.svg')} alt="beach"/> }  
            />
                
        </div>
        )

}

export default SoundPicker;