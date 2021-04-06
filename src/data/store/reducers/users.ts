import { GET_ALL_USERS, USERS_LOADING, GETS_SINGLE_USER } from "../types";
import { userReducerType } from "./reducerTypes";
import { userActionsTypes } from "../actions/actionTypes";


const initial: userReducerType = {
  allUsers: null,
  singleUser: null,
  loading: false
}

const users = (state = initial, action: userActionsTypes): userReducerType => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
        loading: false
      };
    case GETS_SINGLE_USER:
      return {
        ...state,
        singleUser: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default users;
