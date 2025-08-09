"use server"
export async function searchUsers(name: string) {

const DB= [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Jim"},
]

return DB.filter((user)=> user.name.includes(name))
}