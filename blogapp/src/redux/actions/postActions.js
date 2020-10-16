import * as constants from "../constants";

export function fetchPostsAction() {
  return {
    type: constants.FETCH_POSTS,
  };
}

export function fetchPostsActionDone(posts) {
  return {
    type: constants.FETCH_POSTS_DONE,
    payload: posts,
  };
}

export function addPostAction(post) {
  return {
    type: constants.ADD_POST,
    payload: post,
  };
}

export function editPostAction(post, id) {
  return {
    type: constants.EDIT_POST,
    payload: { post, id },
  };
}

export function deletePostAction(id) {
  return {
    type: constants.DELETE_POST,
    payload: id,
  };
}

export function toggleAddModalAction(toggle) {
  return {
    type: constants.TOGGLE_ADD_MODAL,
    payload: toggle,
  };
}

export function toggleEditModalAction(toggle) {
  return {
    type: constants.TOGGLE_EDIT_MODAL,
    payload: toggle,
  };
}

export function tryEditAction(toggle, id, title, body) {
  return {
    type: constants.TRY_EDIT,
    payload: { toggle, id, title, body },
  };
}

export function fetchSearchAction(search) {
  return {
    type: constants.FETCH_SEARCH,
    payload: search,
  };
}

export function toggleAlertAction(show) {
  return {
    type: constants.TOGGLE_ALERT,
    payload: show,
  };
}
