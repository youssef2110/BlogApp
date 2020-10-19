import * as constants from "../constants";

export function tryLoginAction(bool) {
  return {
    type: constants.TRY_LOGIN,
    payload : bool,

  };
}

export function emailChangeAction(email) {
  return {
    type: constants.EMAIL_CHANGE,
    payload: email,

  };
}

export function passwordChangeAction(password) {
  return {
    type: constants.PASSWORD_CHANGE,
    payload: password,

  };
}