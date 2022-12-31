import { Outlet, Route, Routes } from 'react-router-dom'

//Component
import { Albums } from './components/Albums/Albums'
import { Posts } from './components/Posts/Posts'
import { UserCard } from './components/UserCard/UserCard'
import { NotFoundPage } from './pages/UserPage/NotFoundPage'
import { UserPage } from './pages/UserPage/UserPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<UserPage />} />

          <Route path=":userId" element={<UserCard />}>
            <Route path="albums" element={<Albums />} />
          </Route>

          <Route path=":userId/posts" element={<Posts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
