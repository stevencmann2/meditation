import React from 'react';
import '../../assets/css/style.css';


const Button = props =>{

    return(
    <button 
      data-time={props.time} 
      data-sound={props.sound}
      data-video={props.video}
      >
      {props.title}
    </button>
    )

}
//data-sound={require('../../assets/sounds/'+ props.sound)}
// data-video={require(`../../assets/video/${props.video}`)}
export default Button;