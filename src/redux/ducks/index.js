import { combineReducers } from 'redux'
import buildingsState from './buildingsState'
import userState from './userState'

const appReducer= combineReducers({
    buildingsState,
    userState
})

export default appReducer


//WHITELIST WHAT TO PERSIST (INCLUDE THE REDUCER FORM COMBINED REDUCER )
export const whitelisted=[
    // "buildingsState"
]
