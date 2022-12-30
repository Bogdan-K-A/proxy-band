import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export async function fetchUsers() {
  const response = await axios.get('/users')

  return response.data
}

export async function fetchUsersPosts() {
  const response = await axios.get('/posts')

  return response.data
}

export async function fetchUsersAlbums() {
  const response = await axios.get('/albums')

  return response.data
}
