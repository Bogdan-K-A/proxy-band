import { createAsyncThunk } from '@reduxjs/toolkit'
import * as usersAPI from '../services/users-api'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const users = await usersAPI.fetchUsers()
    return users
  } catch (error) {
    console.log(error)
  }
})

export const fetchUserId = createAsyncThunk('users/fetchUserId', async (id) => {
  try {
    const user = await usersAPI.fetchUserId(id)
    return user
  } catch (error) {
    console.log(error)
  }
})

export const fetchUsersPosts = createAsyncThunk(
  'users/fetchPosts',
  async (id) => {
    try {
      const posts = await usersAPI.fetchUsersPosts(id)
      return posts
    } catch (error) {
      console.log(error)
    }
  },
)

export const fetchUsersAlbums = createAsyncThunk(
  'users/fetchAlbums',
  async (id) => {
    try {
      const albums = await usersAPI.fetchUsersAlbums(id)
      return albums
    } catch (error) {
      console.log(error)
    }
  },
)
