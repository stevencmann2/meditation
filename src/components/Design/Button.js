import React from 'react';
import '../../assets/css/style.css';


const Button = props =>{

    return(
    <button data-time={props.time}>
      {props.title}
    </button>
    )

}


export default Button;