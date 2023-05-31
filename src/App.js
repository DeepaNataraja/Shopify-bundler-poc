import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Createbundle from './Components/Createbundle';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/createbundle' element={<Createbundle />} />
        </Routes>
      </Router>
    </div>


  );
}


export default App;
