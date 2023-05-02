import { ADD_DAYS, SUBSTRACT_DAYS, TFilterActions } from "../actions/table-contents"

const initialState = {
    days: 1,
}

export const filterReducer = (state = initialState, action: TFilterActions) => {
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
        default: {
            return state
        }
    }
}