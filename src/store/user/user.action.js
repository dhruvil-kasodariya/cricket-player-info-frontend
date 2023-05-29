import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.type";

export const emailSignInStart = (useremail, password) =>
  createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { useremail, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error);

export const signUpStart = (useremail, password, username) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_START, {
    username,
    password,
    useremail,
  });

export const signUpSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, user);

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error);
