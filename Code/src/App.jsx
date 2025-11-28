import Navbar from './Navbar';
import Home from './Home';
import Tasks from './Tasks';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </>
  )
}

export default App
