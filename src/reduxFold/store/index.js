import { combineReducers, createStore } from "redux";
import { serviceBanknotesReducer } from "../reducers/serviceBanknotesReducer/serviceBanknotesReducer";

const reducer = combineReducers({
    serviceBanknotes: serviceBanknotesReducer,
})

const store = createStore(reducer);

export default store;