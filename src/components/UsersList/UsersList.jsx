import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as usersAPI from '../../services/users-api'

export const UsersList = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    usersAPI.fetchUsers().then(setUsers)
  }, [])

  return (
    <>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
