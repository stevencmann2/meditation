import React from 'react';
import '../../assets/css/style.css';
import Button from '../Design/Button';


const Timer = () =>{

    return(
        <div className="time-select">
            <Button 
            title="2 minutes"
            time="120"
            />
            <Button 
            title="5  minutes"
            time="300"
            />
            <Button 
            title="10 minutes"
            time="600"
            />
        </div>
        )

}

export default Timer;