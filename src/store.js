import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = null;
const store = createStore(
    combineReducers({root: rootReducer, form: formReducer})
);

export default store;



