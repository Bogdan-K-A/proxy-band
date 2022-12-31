import { Route, Routes } from 'react-router-dom'
import { Albums } from './components/Albums/Albums'
import { Posts } from './components/Posts/Posts'
import { UserCard } from './components/UserCard/UserCard'
import { UsersList } from './components/UsersList/UsersList'
import { UserPage } from './pages/UserPage/UserPage'
// import { Modal } from './components/Modal/Modal'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="users" element={<UsersList />} />
        <Route path=":userId" element={<UserCard />} />
        <Route path="userCard/:postsId" element={<Posts />} />
        <Route path="albums" element={<Albums />} />
      </Routes>
    </>
  )
}

export default App
