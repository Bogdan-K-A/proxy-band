import { configureStore } from '@reduxjs/toolkit'
import { users, posts, albums, user } from '../redux/reducers'
// console.log(usersReducer)

export const store = configureStore({
  reducer: {
    users,
    posts,
    albums,
    user,
  },
})
