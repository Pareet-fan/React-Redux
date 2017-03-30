'use strict'

import { combineReducers } from 'redux'

import {count} from './count'
import {staticData} from './staticData'
import {movie} from './movie'

export const rootReducer = combineReducers({
    count,
    staticData,
    movie 
});



