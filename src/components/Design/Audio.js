import React from 'react';
import '../../assets/css/style.css';

const Audio = props => {

    return(
        <audio className="song" src={require(`../../assets/sounds/${props.source}`)} />
    )
}

export default Audio;