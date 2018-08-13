import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {exampleReducer} from './example';
import { userReducer } from './user';

export const reducer = combineReducers({
    user: userReducer,
    form: formReducer,
    example : exampleReducer
})