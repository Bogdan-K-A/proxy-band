import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export async function fetchUsers() {
  const response = await axios.get('/users')

  return response.data
}
//не приходит id
export async function fetchUserId(id) {
  const response = await axios.get(`/users/${id}`)
  console.log('fetchUserId:', id)

  return response.data
}

export async function fetchUsersPosts(id) {
  const response = await axios.get(`/users/posts?userId=${id}`)
  console.log('fetchUsersPosts:', id)
  return response.data
}

export async function fetchUsersAlbums(id) {
  const response = await axios.get(`/users/${id}/albums`)

  return response.data
}
