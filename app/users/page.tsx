"use client"

import { useState, useEffect } from "react";
import { searchUsers } from "../actions/user-actions";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

 useEffect(() => {
 searchUsers("John").then(data=> setUsers(data));
 }, []);

  return(<><div>Users</div>
    {users.map((user) => (
      <div key={user.id}>{user.name}</div>
    ))}
 </> );

}