 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './screens/Home';
import Navbars from './componets/Navbars';
import Checkout from './componets/Checkout';

function App() {
  return (
    <div  >
      <Router>
        <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/login' element={<h2> Login page </h2>}  />
          <Route path='/checkout' element={<Checkout/> }  />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
