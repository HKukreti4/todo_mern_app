import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// const store=createStore(reducer,middleware) syntax
// now we have to sync redux devtool extension with our app
// instead of directly passing middleware ue pass devtool and then in devtool we pass this middleware
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
