
import './App.css';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from '../src/fernao1/home';
import FernãoC from '../src/fernao1/livro1FERNÃO';
import Mpostunas from '../src/fernao1/livroMemoriaPostulasDeJrasCubas';
import L1 from '../src/fernao1/a divina comedia';
import L2 from '../src/fernao1/a mão e luva';
import L3 from '../src/fernao1/esaú e jacó';
import L4 from '../src/fernao1/helena';
import L5 from '../src/fernao1/noite na taverna';
import L6 from '../src/fernao1/o alienista';
import L7 from '../src/fernao1/os sertões';
import L8 from '../src/fernao1/poema ironicos venenosos e atiricos';
import L9 from '../src/fernao1/volta ao mundo em 80 dias';
import O from '../src/fernao1/o-pequeno-principe';
import Autores1 from '../src/fernao1/PaginaAutores/autor1.js';
import Livro1 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd.js';
import Livro2 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 1).js';
import Livro3 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 2).js';
import Livro4 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 3).js';
import Livro5 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 4).js';
import Livro6 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 5).js';
import Livro7 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 6).js';
import Livro8 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 7).js';
import Livro9 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 8).js';
import Livro10 from '../src/fernao1/PaginasLivros/livromachdomemoriaspostulasd (cópia 9).js';


function App() {
  return (


<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>} />
<Route path="/FernaoCapeloGaivota/ler" element={<FernãoC/>} />
<Route path="/MemoriasPostumas/ler" element={<Mpostunas/>} />
<Route path="/OPequenoPrincipe/ler" element={<O/>} />
<Route path="/MachadodeAssis" element={<Autores1/>} />
<Route path="/L1" element={<L1/>} />
<Route path="/L2" element={<L2/>} />
<Route path="/L3" element={<L3/>} />
<Route path="/L4" element={<L4/>} />
<Route path="/L5" element={<L5/>} />
<Route path="/L6" element={<L6/>} />
<Route path="/L7" element={<L7/>} />
<Route path="/L8" element={<L8/>} />
<Route path="/L9" element={<L9/>} />
<Route path="/Livro1" element={<Livro1/>} />
<Route path="/Livro2" element={<Livro2/>} />
<Route path="/Livro3" element={<Livro3/>} />
<Route path="/Livro4" element={<Livro4/>} />
<Route path="/Livro5" element={<Livro5/>} />
<Route path="/Livro6" element={<Livro6/>} />
<Route path="/Livro7" element={<Livro7/>} />
<Route path="/Livro8" element={<Livro8/>} />
<Route path="/Livro9" element={<Livro9/>} />
<Route path="/Livro10" element={<Livro10/>} />
</Routes>

</BrowserRouter>









  );
}

export default App;
