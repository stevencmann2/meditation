import selectedTimeReducer from './TimeSelected';
import selectedSoundReducer from './SoundSelected';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({

    TimeSelected : selectedTimeReducer,
    SoundSelected : selectedSoundReducer
})

export default rootReducer;