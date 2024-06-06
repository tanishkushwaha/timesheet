import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Autocomplete from './components/Autocomplete'
import './App.css'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/test" element={} /> */}
      </Routes>
    </>
  )
}

export default App