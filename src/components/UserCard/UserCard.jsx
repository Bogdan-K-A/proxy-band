import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import { clearingFields } from '../../redux/action'
import { Button, Stack } from '@mui/material'

//redux
import { fetchUserId } from '../../redux/operations'
import { getUsersId } from '../../redux/selectors'

//Component
import { Container } from '../Container/Container'

//Style
import styled from 'styled-components'

export const UserCard = () => {
  let { userId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(getUsersId)
  const { name, username, email, loading } = user

  useEffect(() => {
    dispatch(fetchUserId(userId))

    return () => {
      dispatch(clearingFields(user))
    }
  }, [userId])

  return (
    <StyledWrapper>
      <Container>
        <Button variant="contained">
          <Link to="/">Назад к списку</Link>
        </Button>

        <Flex>
          {loading ? (
            <Wrapper>
              <p>Name: {name}</p>
              <p>userName: {username}</p>
              <p>email: {email}</p>
            </Wrapper>
          ) : (
            <Wrapper>
              <p>Loading...</p>
            </Wrapper>
          )}
        </Flex>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          <Button variant="contained">
            <Link to={`/${userId}/posts`}>Посты</Link>
          </Button>
          <Button variant="contained">
            <Link to={`/${userId}/albums`}>Альбомы</Link>
          </Button>
        </Stack>

        <Outlet />
      </Container>
    </StyledWrapper>
  )
}

/* ---------------------------------- Style --------------------------------- */
const Wrapper = styled.div`
  background: #4adcc073;
  width: 270px;
  height: 100%;
  padding: 20px;
  margin: 20px 0;

  border-radius: 20px;

  p {
    margin-bottom: 10px;
  }
`

const StyledWrapper = styled.div`
  text-align: center;
  padding: 25px 0;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
