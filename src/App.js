
import './App.css';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from '../src/fernao1/home';
import FernãoC from '../src/fernao1/livro1FERNÃO';

function App() {
  return (


<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>} />
<Route path="/FernaoCapeloGaivota/ler" element={<FernãoC/>} />
</Routes>

</BrowserRouter>









  );
}

export default App;
