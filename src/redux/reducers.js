import { createReducer } from '@reduxjs/toolkit'
import {
  fetchUsers,
  fetchUsersPosts,
  fetchUsersAlbums,
  fetchUserId,
} from './operations'

//Обработка запроса списка юзеров
export const users = createReducer([], {
  [fetchUsers.fulfilled]: (_, { payload }) => payload,
})

//Обработка запроса юзера по ID
export const user = createReducer(
  {},
  {
    [fetchUserId.fulfilled]: (_, { payload }) => payload,
  },
)

//Обработка запроса на пост юзера по ID
export const posts = createReducer([], {
  [fetchUsersPosts.fulfilled]: (_, { payload }) => payload,
})

//Обработка запроса на альбом юзера по ID
export const albums = createReducer([], {
  [fetchUsersAlbums.fulfilled]: (_, { payload }) => payload,
})
