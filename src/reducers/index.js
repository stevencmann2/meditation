import selectedTimeReducer from './TimeSelected';
import selectedSoundReducer from './SoundSelected';
import playReducer from './Play'
import { combineReducers } from 'redux';



const rootReducer = combineReducers({

    TimeSelected : selectedTimeReducer,
    SoundSelected : selectedSoundReducer,
    isPlaying: playReducer
})

export default rootReducer;