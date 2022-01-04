import axios from "axios";

// action type
const SET_SEEDS = "SET_SEEDS";
const UPDATE_SEED = "UPDATE_SEED";

// action creator
export const setSeeds = (seeds) => {
  return {
    type: SET_SEEDS,
    seeds,
  };
};

export const _updateSeed = (seed) => {
  return {
    type: UPDATE_SEED,
    seed,
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

export const updateSeed = (seed) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/seeds/${seed.id}`, seed);
      dispatch(_updateSeed(updated));
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
    case UPDATE_SEED:
      return state.map((seed) =>
        seed.id === action.seed.id ? action.seed : seed
      );
    default:
      return state;
  }
}
