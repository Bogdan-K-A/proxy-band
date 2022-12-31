import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useLocation } from 'react-router-dom'
import { fetchUserId } from '../../redux/operations'
import { getUsersId } from '../../redux/selectors'

export const UserCard = () => {
  let { userId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(getUsersId)
  const { name, username, email } = user
  let location = useLocation()
  // console.log('UserCard:', user)
  // console.log('UserCard-userId:', userId)

  useEffect(() => {
    dispatch(fetchUserId(userId))
  }, [userId])

  return (
    <>
      <button>
        <Link to="/">Назад к списку</Link>
      </button>
      UserCard {userId}
      <div>
        <p>Name: {name}</p>
        <p>userName: {username}</p>
        <p>email: {email}</p>
      </div>
      <div>
        <button>
          <Link to={`/${userId}/posts`}>Посты</Link>
        </button>
        <button>
          <Link to="/albums">Альбомы</Link>
        </button>
      </div>
    </>
  )
}
