import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export async function fetchUsers() {
  const response = await axios.get('/users')

  return response.data
}

export async function fetchUserId(id) {
  const response = await axios.get(`/users/${id}`)
  return response.data
}

export async function fetchUsersPosts(id) {
  const response = await axios.get(`/users/${id}/posts`)
  return response.data
}

export async function fetchUsersAlbums(id) {
  const response = await axios.get(`/users/${id}/albums`)

  return response.data
}
