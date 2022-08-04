import { combineReducers } from 'redux';
import { reducer as defaultReducer } from './reducer';

const reducer = combineReducers({
    default: defaultReducer,
})

export { reducer }