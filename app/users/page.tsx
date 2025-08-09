"use client"

import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`/api/users?name=${"John"}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  return(<><div>Users</div>
    {users.map((user) => (
      <div key={user.id}>{user.name}</div>
    ))}
 </> );

}