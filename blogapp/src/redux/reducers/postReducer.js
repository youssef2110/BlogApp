import * as constants from '../constants';

export const initialState = {
    posts: [],
    Addmodal: false,
    Editmodal: false,
    postEdited : {show : false, type:'', color: ""},
    toast:{},
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCH_POSTS_DONE:
            return { 
                ...state, 
                posts : action.payload
            };
        case constants.ADD_POST:
            return { 
                ...state, 
                posts : [{ id : action.payload.id , title : action.payload.title , body : action.payload.body},...state.posts],
                toast : {show : true, type : "added", color: "green"},
                Addmodal : false,

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
            return { 
                ...state,
                posts : postedited,
                toast : {show : true, type : "edited", color: "yellow"},
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
                posts : state.posts.filter((post) => post.id !== action.payload ),
                toast : {show : true, type : "deleted", color: "red"},
            };
        case constants.TOGGLE_ALERT:
            return {
                ...state,
                toast : {show : action.payload, type : "", color: ""},
            };
        default:
            return state;
    }
}