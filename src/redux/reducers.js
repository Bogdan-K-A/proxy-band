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

const userState = {
  name: '',
  username: '',
  email: '',
}
export const user = createReducer(userState, {
  [fetchUserId.fulfilled]: (state, { payload }) => {
    state.username = payload.username
    state.email = payload.email
    state.name = payload.name
  },
})

//Обработка запроса на пост юзера по ID
export const posts = createReducer([], {
  [fetchUsersPosts.fulfilled]: (_, { payload }) => payload,
})

//Обработка запроса на альбом юзера по ID
export const albums = createReducer([], {
  [fetchUsersAlbums.fulfilled]: (_, { payload }) => payload,
})
