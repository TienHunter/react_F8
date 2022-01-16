import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'


function App() {
  return (
    <div style={{ padding: 20 }}>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/news'}>News</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App