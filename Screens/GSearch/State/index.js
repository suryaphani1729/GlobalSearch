import { combineReducers } from 'redux';
import SuggestionsReducer from './SuggestionsReducer';
import SearchReducer from './SearchReducer';

const appReducers = combineReducers({
    SuggestionsReducer,
    SearchReducer});

export default appReducers;