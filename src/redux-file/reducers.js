import { combineReducers } from 'redux'
import { slides, IndexActivityModules,KingKongModules } from './actions-types'
function slide(prevState, action) {
    switch (action.type) {
        case slides:
            return action.data 
            break;
        default:
            return prevState||[]
    }
}
function IndexActivityModule(prevState, action) {
    switch (action.type) {
        case IndexActivityModules:
            return action.data
            break;
        default:
            return prevState||[]
    }
}
function KingKong(prevState, action) {
    switch (action.type) {
        case KingKongModules:
            return action.data
            break;
        default:
            return prevState||[]
    }
}
export default combineReducers({
    slide,
    IndexActivityModule,
    KingKong
})