import { createStore } from "redux";

import reducer from "./reducers"; // rootreducer (a function that takes an old state, and gives you back new state )

const store = createStore(
  reducer,

  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
  /* 
  if I am in a browser and redux devtools exists, then we use that.
  call that function otherwise just give us some random bogus function.

  we do sagas, thunk or observable here as well.
  */
);

export default store;
