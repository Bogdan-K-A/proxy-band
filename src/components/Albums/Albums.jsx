import React from 'react'
import { Link } from 'react-router-dom'

export const Albums = () => {
  return (
    <div>
      <button>
        <Link to="/userCard">Закрыть</Link>
      </button>
      Albums
    </div>
  )
}
