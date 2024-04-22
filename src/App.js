
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>

      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>

          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/landing' element={<Landing></Landing>}></Route>


        </Routes>

      </BrowserRouter>



    </>
  );
}

export default App;
