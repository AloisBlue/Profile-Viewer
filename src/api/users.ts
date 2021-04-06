import axios from "axios";
import { Details } from "../components/profiles/allProfiles";


const users = {
  getUsers: async () => {
    let res = await axios.get("/users");
    return res.data;
  },
  getSingleUser: async (id: string) => {
    let res = await axios.get(`/users/${id}`);
    return res.data;
  },
  updateUser: async (user: Details, id: string) => {
    delete user.id;
    let res = await axios.patch(`/users/${id}`, { user })
    return res.data;
  }
}

export default users;