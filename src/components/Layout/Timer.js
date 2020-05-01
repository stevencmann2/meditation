import React from 'react';
import '../../assets/css/style.css';
import Button from '../Design/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectedTime } from '../../actions'

const Timer = () =>{
    

    const TimeSelected  = useSelector(state=> state.TimeSelected)
    const dispatch = useDispatch();

    return(
        <div className="time-select">
            
            <Button 
            title="2 minutes"
            time="120"
            onClick={()=> dispatch(selectedTime('2:00'))}
            />

            <Button 
            title="5  minutes"
            time="300"
            onClick={()=> dispatch(selectedTime('5:00'))}
            />

            <Button 
            title="10 minutes"
            time="600"
            onClick={()=> dispatch(selectedTime('10:00'))}
            />

        </div>
        )

}

export default Timer;