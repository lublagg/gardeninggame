import axios from "axios";

// action type
const SET_SEEDS = "SET_SEEDS";
const 

// action creator
export const setSeeds = (seeds) => {
  return {
    type: SET_SEEDS,
    seeds,
  };
};

// thunk
export const fetchSeeds = () => {
  return async (dispatch) => {
    try {
      const { data: seeds } = await axios.get("/api/seeds");
      dispatch(setSeeds(seeds));
    } catch (err) {
      console.log(err);
    }
  };
};

// reducer
export default function seedsReducer(state = [], action) {
  switch (action.type) {
    case SET_SEEDS:
      return action.seeds;
    default:
      return state;
  }
}
