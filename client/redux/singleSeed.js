import axios from "axios";

//action type
const SET_SEED = "SET_SEED";

//action creator
export const setSeed = (seed) => {
  return {
    type: SET_SEED,
    seed,
  };
};

//thunk
export const fetchSeed = (seedId) => {
  return async (dispatch) => {
    try {
      const { data: seed } = await axios.get(`/api/seeds/${seedId}`);
      dispatch(setSeed(seed));
    } catch (err) {
      console.log(err);
    }
  };
};

//reducer
export default function singleSeedReducer(state = {}, action) {
  switch (action.type) {
    case SET_SEED:
      return action.seed;
    default:
      return state;
  }
}
