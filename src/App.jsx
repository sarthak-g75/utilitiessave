import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/screens/Home'

function App() {
  return (
    <div className='flex flex-col pb-10'>
      <Header />
      <Routes>
        <Route
          path='/'
          Component={Home}
        />
      </Routes>
    </div>
  )
}

export default App
