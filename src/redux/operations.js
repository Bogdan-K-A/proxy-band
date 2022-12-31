import { createAsyncThunk } from '@reduxjs/toolkit'
import * as usersAPI from '../services/users-api'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await usersAPI.fetchUsers()
  return users
})

export const fetchUserId = createAsyncThunk('users/fetchUserId', async (id) => {
  const user = await usersAPI.fetchUserId(id)
  return user
})

export const fetchUsersPosts = createAsyncThunk(
  'users/fetchPosts',
  async (id) => {
    const posts = await usersAPI.fetchUsersPosts(id)
    return posts
  },
)

export const fetchUsersAlbums = createAsyncThunk(
  'users/fetchAlbums',
  async (id) => {
    const albums = await usersAPI.fetchUsersAlbums(id)
    return albums
  },
)
