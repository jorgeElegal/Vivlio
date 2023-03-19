
import './App.css';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from '../src/fernao1/home';
import FernãoC from '../src/fernao1/livro1FERNÃO';
import Mpostunas from '../src/fernao1/livroMemoriaPostulasDeJrasCubas';
import O from '../src/fernao1/o-pequeno-principe';
import Autores1 from '../src/fernao1/home/autor1.js';
function App() {
  return (


<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>} />
<Route path="/FernaoCapeloGaivota/ler" element={<FernãoC/>} />
<Route path="/MemoriasPostumas/ler" element={<Mpostunas/>} />
<Route path="/OPequenoPrincipe/ler" element={<O/>} />
<Route path="/MachadodeAssis" element={<Autores1/>} />
</Routes>

</BrowserRouter>









  );
}

export default App;
