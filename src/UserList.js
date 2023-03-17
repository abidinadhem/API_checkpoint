import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsersList(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {usersList.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;