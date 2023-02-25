import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import Anuncio from "./leitura muda o mundo.png";

import {motion} from 'framer-motion'
import imagebooks1 from '../home/img/71ynUi8oFVL.jpg';
import imagebooks2 from '../home/img/71BGWapQw8L.jpg';
import imagebooks3 from '../home/img/memórias póstumas de brás cubas.png';




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
  
 
     <div className="aba-cima">


     <div className="aba-cima-icon-docboks">
 <h1 className="aba-cima-icon-docboks-h1">DocBoks</h1>
 </div>

 <div className="aba-cima-icon-user">
 
 </div>

 </div>

 <div className="img-anuncio-bemvindo">

 <img src={Anuncio} alt="1" className='img1'/>

 </div>

<div className="div-texto-slider">
<h2 className="div-texto-h2">Destaques</h2>
<h3 className="div-texto-h3">Escolhidos por nossa equipe</h3>
 </div>








<motion.div ref={carossel} className ="carossel" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>


<Link to="/FernaoCapeloGaivota/ler" className ="img-div-slider13">
<img src={imagebooks1}alt="Texto alt" />
</Link>


<Link to="/OPequenoPrincipe/ler" className ="img-div-slider13">
<img src={imagebooks2}alt="Texto alt"/>
</Link>


<Link to="/MemoriasPostumas/ler" className ="img-div-slider13">
<img src={imagebooks3}alt="Texto alt"/>
</Link>





</motion.div>


</motion.div>

<div className="div-texto-slider">
<h2 className="div-texto-h2"> continue lendo!</h2>
<h3 className="div-texto-h3">continue lendo suas obras preferidas</h3>
 </div>

<motion.div ref={carossel} className ="carossel" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>


<Link to="/FernaoCapeloGaivota/ler" className ="img-div-slider13">
<img src={imagebooks1}alt="Texto alt" />
</Link>


<Link to="/OPequenoPrincipe/ler" className ="img-div-slider13">
<img src={imagebooks2}alt="Texto alt"/>
</Link>


<Link to="/FernaoCapeloGaivota/ler" className ="img-div-slider13">
<img src={imagebooks3}alt="Texto alt"/>
</Link>




</motion.div>


</motion.div>



<div className="menu-aba1">
<div className="menu-aba-baixo">

 </div>
 </div>


<div className="footer">
<h3 className="div-texto-h3-2">@2023 CJMstartup. Todos os direitos reservados a CJMstartup.</h3>
 </div>








 










    </div>



  );
}






export default App3;
