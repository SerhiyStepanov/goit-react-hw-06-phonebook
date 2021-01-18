import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "./reducer";
// import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

// const rootReducer = combineReducers({
//   contacts: {
//     items: [],
//     filter: "",
//   },
// });

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV === "development",
// });

export default store;
