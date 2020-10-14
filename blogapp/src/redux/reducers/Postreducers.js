import * as constants from '../constants';

export const initialState = {
    posts: [],
    Addmodal: false,
    Editmodal: false,
    postEdited : {}
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCH_POSTS_DONE:
            return { 
                ...state, 
                posts : action.payload
            };
        case constants.ADD_POST:
            console.log(action.payload)
            return { 
                ...state, 
                posts : [...state.posts,  { id : action.payload.id , title : action.payload.title , body : action.payload.body}],
                Addmodal : false
            };
        case constants.TOGGLE_ADD_MODAL:
            return { 
                ...state, 
                Addmodal : action.payload
            };
        case constants.EDIT_POST:
            var objIndex = state.posts.findIndex((obj => obj.id === action.payload.id));
            var postedited = [...state.posts];
            postedited[objIndex] = action.payload.post
            console.log(postedited)
            return { 
                ...state,
                posts : postedited,
                Editmodal : false
            };
        case constants.TOGGLE_EDIT_MODAL:
            return { 
                ...state, 
                Editmodal : action.payload
            };
        case constants.TRY_EDIT:
            return { 
                ...state, 
                Editmodal : action.payload.toggle,
                postEdited : { id : action.payload.id , title : action.payload.title , body : action.payload.body}
            };
        case constants.DELETE_POST:
            return { 
                ...state,
                posts : state.posts.filter((post) => post.id !== action.payload ) };
        default:
            return state;
    }
}