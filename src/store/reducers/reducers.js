import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "../actions/actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      const addedFavState = { ...state, favs: [...state.favs, action.payload] };
      writeFavsToLocalStorage(addedFavState);
      return addedFavState;

    case FAV_REMOVE:
      const removedFavState = {
        ...state,
        favs: state.favs.filter((joke) => joke.id !== action.payload),
      };
      writeFavsToLocalStorage(removedFavState);
      return removedFavState;

    case FETCH_SUCCESS:
      return { ...state, current: action.payload, error: "", loading: false };

    case FETCH_LOADING:
      return { ...state, current: null, error: "", loading: true };

    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };

    case GET_FAVS_FROM_LS:
      /*return { ...state, favs: readFavsFromLocalStorage() == null ? [] : readFavsFromLocalStorage};*/
      return { ...state, favs: readFavsFromLocalStorage() ?? [] };

    default:
      return state;
  }
}
