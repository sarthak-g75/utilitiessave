import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/screens/Home'
import Footer from './components/Footer'
import ComponentPage from './components/screens/ComponentPage'

function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className='flex flex-col'>
      <Header />
      <Navbar home={location.pathname === '/'} />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/electricity'
          element={<ComponentPage />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
