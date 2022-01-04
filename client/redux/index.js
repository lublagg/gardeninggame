import { combineReducers } from "redux";
import seedsReducer from "./seeds";
import gardenerReducer from "./gardener";
import singleSeedReducer from "./singleSeed";

const appReducer = combineReducers({
  seeds: seedsReducer,
  gardener: gardenerReducer,
  seed: singleSeedReducer,
});

export default appReducer;
