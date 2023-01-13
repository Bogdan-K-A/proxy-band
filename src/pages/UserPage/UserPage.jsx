import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from '../../components/Container/Container'
import { UsersList } from '../../components/UsersList/UsersList'

import { fetchUsers } from '../../redux/operations'
import { getUsers } from '../../redux/selectors'

import styled from 'styled-components'

export const UserPage = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)
  const [loading, setLoading] = useState(false)

  // console.log(users)

  useEffect(() => {
    dispatch(fetchUsers())
    setLoading(true)
  }, [dispatch])

  return (
    <Container>
      <StyledTitle>Список авторов</StyledTitle>
      {/* {loading ? <UsersList users={users} /> : <p>Loading...</p>} */}

      <UsersList users={users} loading={loading} />
    </Container>
  )
}

/* ---------------------------------- Style --------------------------------- */
const StyledTitle = styled.h1`
  text-align: center;
  padding: 25px 0;

  ::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #000;
  }
`
