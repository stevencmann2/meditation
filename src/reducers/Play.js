//REDUCER, (initial state, action)
const playReducer = (state = false, action) =>{

    switch(action.type){
      case "PLAYING":
          return !state;
        default: 
          return state;

  }
}

export default playReducer;