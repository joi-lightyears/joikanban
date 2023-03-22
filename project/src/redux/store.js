import { configureStore} from "@reduxjs/toolkit"
import rootReducer from './reducer';
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools();
export const store = configureStore({
    reducer: rootReducer, 

}, composedEnhancer);