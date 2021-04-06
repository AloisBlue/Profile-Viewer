import { GET_ALL_USERS, USERS_LOADING, GETS_SINGLE_USER, UPDATE_USER } from "../types";
import users from "../../../api/users";
import { User } from "../../../models/User";
import { Details } from "../../../components/profiles/allProfiles"


const fetchAllUsers = (data: User[]) => ({
  type: GET_ALL_USERS,
  payload: data
});

export const usersLoading = () => ({
  type: USERS_LOADING
});

export const fetchSingleUser = (data: User) => ({
  type: GETS_SINGLE_USER,
  payload: data
});

export const patchUser = (data: {message: string}) => ({
  type: UPDATE_USER,
  payload: data
});

export const getUsers = () => async (dispatch: Function) => {
  dispatch(usersLoading());
  try {
    let resp = await users.getUsers();
    dispatch(fetchAllUsers(resp))
  } catch (error) {
    
  }
}

export const getSingleUser = (id: string) => async (dispatch: Function) => {
  try {
    let user = await users.getSingleUser(id)
    dispatch(fetchSingleUser(user));
  } catch (error) {
    
  }
}

export const updateUser = (user: Details, id: string, handleClose: Function, setChecked: Function, checked: number) => async (dispatch: Function) => {
  try {
    let updated = await users.updateUser(user, id);
    if (updated) {
      let resp = await users.getUsers();
      dispatch(fetchAllUsers(resp));
      handleClose();
      dispatch(patchUser({message: 'User updated!'}));
    }
    setChecked(checked)
  } catch (error) {
    
  }
}
