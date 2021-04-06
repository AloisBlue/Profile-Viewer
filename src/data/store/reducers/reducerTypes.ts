import { User } from "../../../models/User";

export type userReducerType = {
    allUsers: User[] | null,
    singleUser: User | null,
    loading: boolean
  };
  