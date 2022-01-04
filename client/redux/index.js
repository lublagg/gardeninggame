import { combineReducers } from "redux";
import seedsReducer from "./seeds";
import gardenerReducer from "./gardener";

const appReducer = combineReducers({
  seeds: seedsReducer,
  gardener: gardenerReducer,
});

export default appReducer;
