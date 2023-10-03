import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { myReducer } from "./reducers/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const myStore = createStore(
  myReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
