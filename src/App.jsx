import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/screens/Home'
import Footer from './components/Footer'
import Electricity from './components/screens/Electricity'
import { pages } from './data'

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
        {pages.map((page) => (
          <Route
            path={page.route}
            element={
              <Electricity
                data={page.data}
                title={page.title}
                banner={page.banner}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
