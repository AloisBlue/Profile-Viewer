import { GET_ALL_USERS, GETS_SINGLE_USER, UPDATE_USER, USERS_LOADING } from "../types";
import { User } from "../../../models/User";

interface getUsers {
  type: typeof GET_ALL_USERS;
  payload: User[];
}

interface getSingleUser {
  type: typeof GETS_SINGLE_USER;
  payload: User;
}

interface updateUser {
  type: typeof UPDATE_USER;
  payload: User;
}

interface loading {
  type: typeof USERS_LOADING;
  payload: boolean
}

export type userActionsTypes = getUsers | getSingleUser | updateUser | loading;
