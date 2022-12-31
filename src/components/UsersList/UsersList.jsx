import React from 'react'

import { Link } from 'react-router-dom'

export const UsersList = ({ users }) => {
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
