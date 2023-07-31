import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/screens/Home'
import Footer from './components/Footer'
import SiblingPage from './components/screens/SiblingPage'
import { pages } from './data'
import QuoteForm from './components/QuoteForm'

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
              <SiblingPage
                data={page.data}
                title={page.title}
                banner={page.banner}
              />
            }
          />
        ))}
      </Routes>
      <QuoteForm />
      <Footer />
    </div>
  )
}

export default App
