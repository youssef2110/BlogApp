import * as constants from '../constants';

export const initialState = {
    search: "",
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCH_SEARCH:
            return { 
                search : action.payload
            };
        default:
            return state;
    }
}