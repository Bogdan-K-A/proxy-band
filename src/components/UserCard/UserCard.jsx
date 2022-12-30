import React from 'react'
import { Link } from 'react-router-dom'

export const UserCard = () => {
  return (
    <>
      <button>
        <Link to="/">Назад к списку</Link>
      </button>
      UserCard
      <button>
        <Link to="/posts">Посты</Link>
      </button>
      <button>
        <Link to="/albums">Альбомы</Link>
      </button>
    </>
  )
}
