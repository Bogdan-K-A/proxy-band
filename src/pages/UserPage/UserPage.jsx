import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersList } from '../../components/UsersList/UsersList'
import { fetchUsers } from '../../redux/operations'
import { getUsers } from '../../redux/selectors'

export const UserPage = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h1>Список авторов</h1>
      <UsersList users={users} />
    </div>
  )
}
