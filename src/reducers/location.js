export default function location(state = "Seattle, WA", action) {
  if (action.type === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}

/* 
action is an object that I get, from whatever is dispatching the action to redux.
*/