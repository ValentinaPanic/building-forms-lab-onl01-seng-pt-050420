export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case "ADD_BAND":
      return {
        todos: state.todos.concat(action.payload.text)
      }
          


     default:
      return state 
  }
  
};
