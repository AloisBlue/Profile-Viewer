import { GET_ALL_USERS, USERS_LOADING, GETS_SINGLE_USER, UPDATE_USER } from "../types";
import users from "../../../api/users";

interface History {
    push: Function
}

const fetchAllUsers = (data: any) => ({
  type: GET_ALL_USERS,
  payload: data
});

export const usersLoading = () => ({
  type: USERS_LOADING
});

export const fetchSingleUser = (data: any) => ({
  type: GETS_SINGLE_USER,
  payload: data
});

export const patchUser = (data: any) => ({
  type: UPDATE_USER,
  payload: data
});

export const getUsers = () => (dispatch: Function) => {
  dispatch(usersLoading());
  users
    .getUsers()
    .then(users => {
      dispatch(fetchAllUsers(users));
    })
}

export const getSingleUser = (id: string) => (dispatch: Function) => {
  dispatch(usersLoading());
  users
    .getSingleUser(id)
    .then(user => {
      dispatch(fetchSingleUser(user));
    })
}

export const updateUser = (user: any, id: string, history: History) => (dispatch: Function) => {
  users
    .updateUser(user, id)
    .then(updates => {
      dispatch(patchUser(updates));
      history.push("/view-users");
    })
}
