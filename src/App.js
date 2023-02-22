import {useState, useEffect, useRef} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import App2 from '../src/fernao1/livro1FERNÃO';
import Home from '../src/fernao1/home';



function App() {










  return (

  
    <div className="App">
  
 
          <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/oi" element={<App2/>}/>
   </Routes>
  </BrowserRouter>






 










    </div>



  );
}

export default App;
