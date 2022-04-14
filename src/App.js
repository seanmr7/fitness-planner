import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Router>
      <div className='h-screen font-mono'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='landing-page' element={<LandingPage />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='sign-in' element={<SignIn />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
