import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'

//redux
import { getAlbums } from '../../redux/selectors'
import { fetchUsersAlbums } from '../../redux/operations'

//Component
import { Modal } from '../Modal/Modal'

//Style
import styled from 'styled-components'

export const Albums = () => {
  let { userId } = useParams()
  const dispatch = useDispatch()
  const albums = useSelector(getAlbums)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  //возвращает страницу на одну назад
  const goBack = () => navigate(-1)

  useEffect(() => {
    dispatch(fetchUsersAlbums(userId))
    setLoading(true)
    return () => {
      dispatch(fetchUsersAlbums())
    }
  }, [userId])

  return (
    <Modal>
      <Button variant="contained" onClick={goBack}>
        Закрыть
      </Button>

      {loading ? (
        <StyledList>
          {albums.map(({ id, title }) => (
            <li key={id}>
              <p>{title}</p>
            </li>
          ))}
        </StyledList>
      ) : (
        <StyledList>
          <p>Loading...</p>
        </StyledList>
      )}
    </Modal>
  )
}

/* --------------------------------- Styled --------------------------------- */

const StyledList = styled.ol`
  text-align: start;

  li {
    margin-bottom: 10px;
  }
`
