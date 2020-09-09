import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";

export default combineReducers({
  location, // we can also write as location: location
  theme
});
