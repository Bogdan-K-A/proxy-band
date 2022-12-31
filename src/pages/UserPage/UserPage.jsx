import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from '../../components/Container/Container'
import { UsersList } from '../../components/UsersList/UsersList'

import { fetchUsers } from '../../redux/operations'
import { getUsers } from '../../redux/selectors'

import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

export const UserPage = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <Container>
      <StyledTitle>Список авторов</StyledTitle>

      <UsersList users={users} />
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
