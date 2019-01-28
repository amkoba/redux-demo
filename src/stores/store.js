import {createStore, combineReducers} from 'redux';
import add from '../reducers/add';
import getUsers from '../reducers/users';

const reducers = combineReducers({add, users: getUsers})

const store = createStore(reducers)

export default store;