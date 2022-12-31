import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Stack } from '@mui/material'

//redux
import { getPosts } from '../../redux/selectors'
import { fetchUsersPosts } from '../../redux/operations'

//Component
import { Container } from '../Container/Container'

//Style
import styled from 'styled-components'

export const Posts = () => {
  let { userId } = useParams()
  const dispatch = useDispatch()
  const posts = useSelector(getPosts)
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  useEffect(() => {
    dispatch(fetchUsersPosts(userId))
  }, [userId])

  return (
    <StyledWrapper>
      <Container>
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <Button variant="contained" onClick={goBack}>
            Закрыть
          </Button>
        </Stack>
        {posts && (
          <StyledList>
            {posts.map(({ id, title, body }) => (
              <li key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </StyledList>
        )}
      </Container>
    </StyledWrapper>
  )
}

/* ---------------------------------- Style --------------------------------- */
const StyledWrapper = styled.div`
  padding: 25px 0;
`

const StyledList = styled.ol`
  background: #4adcc073;
  height: 100%;
  padding: 40px;
  margin: 20px 0;

  border-radius: 20px;
  h3 {
    margin-bottom: 5px;
  }

  li {
    margin-bottom: 15px;
  }
`
