import React, { useState, useEffect } from "react";
import Axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <ul>
            <li>{user.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Users;
