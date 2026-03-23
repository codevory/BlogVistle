import './index.css'
import Home from './pages/Home'
import CreatePost from '../src/components/PostComponents/CreatePost.jsx'
import { Outlet, Route, Routes } from "react-router-dom"
import PagenotFound from './pages/PagenotFound'
import Navbar from '../src/components/BodyComponents/Navbar.jsx'
import Singleblog from '../src/components/PostComponents/SingleBlogView.jsx'
import EditPost from '../src/components/PostComponents/Editpost.jsx'
import Trending from './components/BodyComponents/Trending.jsx'

function App() {

  return <div className='w-full min-h-screen overflow-hidden '>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/edit/article/:slug' element={<EditPost />} />
      <Route path='/article/:slug' element={<Singleblog />} />
      <Route path='/post' element={<CreatePost />} />
      <Route path='*' element={<PagenotFound />} />
      <Route path='/trending' element={<Trending />} />
    </Routes>
    <Outlet />
  </div>

}

export default App
