import axios from "axios";

const users = {
    getUsers: () =>
    axios
      .get("/users")
      .then(res => res.data),
  getSingleUser: (id: string) =>
    axios
      .get(`/users/${id}`)
      .then(res => res.data),
  updateUser: (user: any, id: string) =>
    axios
      .patch(`/users/${id}`, { user })
      .then(res => res.data)
}

export default users;