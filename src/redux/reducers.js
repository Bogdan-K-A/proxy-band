import { createReducer } from '@reduxjs/toolkit'
import {
  fetchUsers,
  fetchUsersPosts,
  fetchUsersAlbums,
  fetchUserId,
} from './operations'

export const users = createReducer([], {
  [fetchUsers.fulfilled]: (_, { payload }) => payload,
})

export const user = createReducer(
  {},
  {
    [fetchUserId.fulfilled]: (_, { payload }) => payload,
  },
)

export const posts = createReducer([], {
  [fetchUsersPosts.fulfilled]: (_, { payload }) => payload,
})

export const albums = createReducer([], {
  [fetchUsersAlbums.fulfilled]: (_, { payload }) => payload,
})
