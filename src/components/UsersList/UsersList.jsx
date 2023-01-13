import React from 'react'
import { Link } from 'react-router-dom'

//Component
import { Container } from '../Container/Container'

//Style
import styled from 'styled-components'

export const UsersList = ({ users, loading }) => {
  return (
    <Container>
      {users && (
        <StyledListWrapper>
          {loading ? (
            <StyledList>
              {users.map((user) => (
                <li key={user.id}>
                  <Link to={`${user.id}`}>{user.name}</Link>
                </li>
              ))}
            </StyledList>
          ) : (
            <StyledList>
              <p>Loading...</p>
            </StyledList>
          )}
        </StyledListWrapper>
      )}
    </Container>
  )
}

/* ---------------------------------- Style --------------------------------- */

const StyledList = styled.ol`
  background: #4adcc073;
  width: 180px;
  height: 100%;
  padding: 20px 40px;

  border-radius: 20px;

  li {
    margin-bottom: 10px;
  }

  li:hover {
    font-weight: 500;
  }
`

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
