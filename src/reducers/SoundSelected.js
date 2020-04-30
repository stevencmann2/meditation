//REDUCER, (initial state, action)
const selectedSoundReducer = (state = null, action) =>{

    switch(action.type){
      case "SELECTED_SOUND":
          return action.payload;
        default: 
          return state;

  }
}

export default selectedSoundReducer;