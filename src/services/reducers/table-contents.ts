import { ADD_DAYS, SET_DATA, SET_TYPES, SUBSTRACT_DAYS, TFilterActions } from "../actions/table-contents"
import { TTableState } from "../types/reducer-state"

const initialState: TTableState = {
    days: 1,
    data: null,
    in_out: ""
}

export const filterReducer = (state = initialState, action: TFilterActions): TTableState => {
    switch(action.type) {
        case ADD_DAYS: {
            return {
                ...state,
                days: state.days + 1
            }
        }
        case SUBSTRACT_DAYS: {
            return {
                ...state,
                days: state.days - 1
            }
        }
        case SET_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case SET_TYPES: {
            return {
                ...state,
                in_out: action.filter
            }
        }
        default: {
            return state
        }
    }
}