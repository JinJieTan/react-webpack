import { combineReducers } from 'redux'
import { slides, IndexActivityModules, KingKongModules, CategoryModules } from './actions-types'
function slide(prevState, action) {
    switch (action.type) {
        case slides:
            return action.data
        default:
            return prevState || []
    }
}
function IndexActivityModule(prevState, action) {
    switch (action.type) {
        case IndexActivityModules:
            return action.data
        default:
            return prevState || []
    }
}
function KingKong(prevState, action) {
    switch (action.type) {
        case KingKongModules:
            return action.data
            break;
        default:
            return prevState || []
    }
}
function CategoryModule(prevState, action) {
    switch (action.type) {
        case CategoryModules:
            return action.data
            break;
        default:
            return prevState || []
    }
}
export default combineReducers({
    slide,
    IndexActivityModule,
    KingKong,
    CategoryModule
})