import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import Home from './components/pages/Home';
import AddProduct from './components/pages/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Routes>
    </Router>
  )
}

export default App
