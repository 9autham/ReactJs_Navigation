import React from "react";
import { useState, useEffect } from "react";
import Image from "./image";
function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((apidata) => setUsers(apidata.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="text-center">
      <p className="display-2 text-secondary">User Data</p>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.email}</td>
              <td>{userObj.first_name}</td>
              <td>{userObj.last_name}</td>
              {/* <td>{userObj.avatar}</td> */}
              <td>
                {/* <img scr={userObj.avatar} alt="XS3" /> */}
                <Image src={userObj.avatar} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
