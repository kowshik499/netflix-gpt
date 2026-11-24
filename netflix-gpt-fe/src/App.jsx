import { BrowserRouter, Route, Routes } from 'react-router'
import Browse from './components/Browse'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
