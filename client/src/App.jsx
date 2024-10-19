import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Programs from './pages/Programs';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/programs' element={<Programs/>} />
        {/* <Route path='/search' element={<Search />} /> */}

      </Routes>
    </BrowserRouter>
  )
}
