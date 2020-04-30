//REDUCER, (initial state, action)
const selectedTimeReducer = (state = '00:00', action) =>{

    switch(action.type){
      case "SELECTED_TIME":
          return action.payload;
    default:
        return state
  }
}

export default selectedTimeReducer;
