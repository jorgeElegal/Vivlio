import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import './autor.css';
import {motion} from 'framer-motion'
import imagebooks1 from '../home/img/julio-verne-conheca-o-intrigante-escritor-frances-pai-da-ficcao-cientifica-4.jpg';
import imagebooks2 from '../home/img/unnamed.webp';
import imagebooks3 from '../home/img/machado.png';



const allbooks =[imagebooks1, imagebooks2, imagebooks3, ];


function App4() {


const carossel= useRef();
const [width, setWidth] = useState(0) 

useEffect(() => {
console.log(carossel.current?.scrollWidth, carossel.current?.offsetWidth)
setWidth(carossel.current?.scrollWidth - carossel.current?.offsetWidth)


}, [])

  function Clicou() {


  }





  return (

  
    <div className="App4">
  


<div className="div-texto-slider-autor">
<h2 className="div-texto-h2-autor">Autores</h2>
<h3 className="div-texto-h3-autor">Apenas os melhores!</h3>
 </div>








<motion.div ref={carossel} className ="carossel-autor" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner-autor"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>





<Link to="/MachadodeAssis" className ="img-div-slider13-autor">
<img src={imagebooks3}alt="Texto alt"/>

<div className ="divDoH3DoAutor"><h3 className="div-texto-h3-slider1-autor">Machado De Assis</h3></div>
</Link>





</motion.div>


</motion.div>



   <div className="divisoria-autor" >   </div>

    </div>



  );
}






export default App4;

