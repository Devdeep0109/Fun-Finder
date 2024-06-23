import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Answer from './pages/Answer';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Answer/>}/>
      </Routes>
    </div>
        
  )
}

export default App
