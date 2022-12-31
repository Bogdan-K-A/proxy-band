import { Route, Routes } from 'react-router-dom'

//Component
import { Albums } from './components/Albums/Albums'
import { Posts } from './components/Posts/Posts'
import { UserCard } from './components/UserCard/UserCard'
import { UsersList } from './components/UsersList/UsersList'
import { UserPage } from './pages/UserPage/UserPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="users" element={<UsersList />} />
        <Route path=":userId" element={<UserCard />}>
          <Route path="albums" element={<Albums />} />
        </Route>
        <Route path=":userId/posts" element={<Posts />} />
      </Routes>
    </>
  )
}

export default App
