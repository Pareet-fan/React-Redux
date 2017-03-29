'use strict'

import { combineReducers } from 'redux'

import count from './count'
import staticData from './staticData'

const rootReducer = combineReducers({
    count,
    staticData 
});

export default rootReducer


