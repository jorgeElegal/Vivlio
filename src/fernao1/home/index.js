import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import Anuncio from "./leitura muda o mundo.png";
import Logo from "../home/img/cjm__3_-removebg-preview.png";
import {motion} from 'framer-motion'
import imagebooks1 from '../home/img/71ynUi8oFVL.jpg';
import imagebooks2 from '../home/img/71BGWapQw8L.jpg';
import imagebooks3 from '../home/img/memórias póstumas de brás cubas.png';
import S from './slider.js';
import AAutores from './autores.js';
import LogoeFooter from './Logo e Footer.js';
import Footer from './Footer.js';

const allbooks =[imagebooks1, imagebooks2, imagebooks3, ];


function App3() {


const carossel= useRef();
const [width, setWidth] = useState(0) 

useEffect(() => {
console.log(carossel.current?.scrollWidth, carossel.current?.offsetWidth)
setWidth(carossel.current?.scrollWidth - carossel.current?.offsetWidth)


}, [])

  function Clicou() {


  }





  return (

  
    <div className="App3">
  
 


     <LogoeFooter/>


<div className="Div-P-">
  <p className="PDa-Div-P-">O projeto</p>
  <p className="PDa-Div-P-2">Toda as obras</p>
  <p className="PDa-Div-P-2">Loja</p>
</div>

<div className="Autor-autor-quadro1-Divisoria-p2"></div>






 <div className="img-anuncio-bemvindo">

<S className="Sl"/>
<AAutores/>

 </div>

<div className="div-texto-slider">
<h2 className="div-texto-h2">Destaques</h2>
<h3 className="div-texto-h3">Escolhidos por nossa equipe</h3>
 </div>








<motion.div ref={carossel} className ="carossel" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>


<Link to="/Livro1" className ="img-div-slider13">
<img src={imagebooks1}alt="Texto alt" />
<h3 className="div-texto-h3-slider1">Memórias Postumas de Brás Cubas</h3>
<h4 className="div-texto-h4-slider2">Machado de Assis</h4>
</Link>


<Link to="/OPequenoPrincipe/ler" className ="img-div-slider13">
<img src={imagebooks2}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">A volta ao mundo em 80 dias</h3>
<h4 className="div-texto-h4-slider2">Júlio Verne</h4>
</Link>


<Link to="/MemoriasPostumas/ler" className ="img-div-slider13">
<img src={imagebooks3}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">A Divina Comédia</h3>
<h4 className="div-texto-h4-slider2">Dante Alighieri</h4>
</Link>





</motion.div>


</motion.div>




<div className="div-texto-slider-22222">
<h2 className="div-texto-h2-22222">Clássicos</h2>
<h3 className="div-texto-h3-22222">O melhor da literatura mundial!</h3>
 </div>


<motion.div ref={carossel} className ="carossel" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>


<Link to="/Livro1" className ="img-div-slider13">
<img src={imagebooks1}alt="Texto alt" />
<h3 className="div-texto-h3-slider1">Fernão Capelo Gaivota</h3>
<h4 className="div-texto-h4-slider2">Richard Bach</h4>
</Link>


<Link to="/L1" className ="img-div-slider13">
<img src={imagebooks2}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">O Pequeno Principe</h3>
<h4 className="div-texto-h4-slider2">Antoine de Saint-Exupéry</h4>
</Link>


<Link to="/MemoriasPostumas/ler" className ="img-div-slider13">
<img src={imagebooks3}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">Memórias Póstumas De Brás Cubas</h3>
<h4 className="div-texto-h4-slider2">Machado De Assis</h4>
</Link>





</motion.div>


</motion.div>




<div className="div-texto-slider-22222">
<h2 className="div-texto-h2-22222">Litertura braileira</h2>
<h3 className="div-texto-h3-22222">Do Realimo ao Romantismo</h3>
 </div>



<motion.div ref={carossel} className ="carossel" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>


<Link to="/Livro1" className ="img-div-slider13">
<img src={imagebooks1}alt="Texto alt" />
<h3 className="div-texto-h3-slider1">Fernão Capelo Gaivota</h3>
<h4 className="div-texto-h4-slider2">Richard Bach</h4>
</Link>


<Link to="/OPequenoPrincipe/ler" className ="img-div-slider13">
<img src={imagebooks2}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">O Pequeno Principe</h3>
<h4 className="div-texto-h4-slider2">Antoine de Saint-Exupéry</h4>
</Link>


<Link to="/MemoriasPostumas/ler" className ="img-div-slider13">
<img src={imagebooks3}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">Memórias Póstumas De Brás Cubas</h3>
<h4 className="div-texto-h4-slider2">Machado De Assis</h4>
</Link>





</motion.div>


</motion.div>


<div className="menu-aba1">
<div className="menu-aba-baixo">

 </div>
 </div>


 <Footer/>








 










    </div>



  );
}






export default App3;
