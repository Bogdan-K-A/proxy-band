import React from 'react'
import { Link } from 'react-router-dom'

export const Posts = () => {
  return (
    <div>
      <button>
        <Link to="/userCard">Закрыть</Link>
      </button>
      Posts
    </div>
  )
}
