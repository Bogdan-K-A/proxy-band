import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/selectors'
import { Link, useParams } from 'react-router-dom'
import { fetchUsersPosts } from '../../redux/operations'

export const Posts = () => {
  let { postsId } = useParams()
  const dispatch = useDispatch()
  const posts = useSelector(getPosts)
  console.log('posts:', posts)
  console.log('posts-postsId:', postsId)

  useEffect(() => {
    dispatch(fetchUsersPosts(postsId))
  }, [postsId])

  return (
    <div>
      <button>
        <Link to="/userCard">Закрыть</Link>
      </button>
      {posts && (
        <ul>
          {posts.map(({ id, title, body }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
