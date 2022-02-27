import {SET_ITEMS} from '../actions'

const initialState = {}

export default function itemsReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ITEMS:
        return action.items
    default:
        return state
    }
}