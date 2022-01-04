import axios from "axios";

// action type
const SET_GARDENER = "SET_GARDENER";
const UPDATE_GARDENER = "UPDATE_GARDENER";

// action creator
export const setGardener = (gardener) => {
  return {
    type: SET_GARDENER,
    gardener,
  };
};

export const _updateGardener = (gardener) => {
  return {
    type: UPDATE_GARDENER,
    gardener,
  };
};

// thunk
export const fetchGardener = () => {
  return async (dispatch) => {
    try {
      const { data: gardener } = await axios.get("/api/gardener");
      dispatch(setGardener(gardener));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateGardener = (gardener) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put("/api/gardener", gardener);
      dispatch(_updateGardener(updated));
    } catch (err) {
      console.log(err);
    }
  };
};

// reducer
export default function gardenerReducer(state = {}, action) {
  switch (action.type) {
    case SET_GARDENER:
      return action.gardener;
    case UPDATE_GARDENER:
      return action.gardener;
    default:
      return state;
  }
}
