import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerHome from './Components/CustomerHome';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/customerhome' element={<CustomerHome/>} />
        </Routes>
      </BrowserRouter>
    </>
  );      
}

export default App;
