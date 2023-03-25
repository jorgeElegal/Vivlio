import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import IMAGE from '../PaginaAutores/imgAutores/httpswww.canva.com.gif';

import imagebooks3 from '../PaginaAutores/imgAutores/memórias póstumas de brás cubas.png';

import './autor1.css';

const allbooks =[imagebooks3, ];


function Autor1() {

    const carossel= useRef();
    const [width, setWidth] = useState(0) 
    
    useEffect(() => {
    console.log(carossel.current?.scrollWidth, carossel.current?.offsetWidth)
    setWidth(carossel.current?.scrollWidth - carossel.current?.offsetWidth)
    
    
    }, [])






  return (

    

  
    <div className="Autor1">




     <LogoeFooter/>



     <div className="Autor-div-all">


        <div className="Autor-div-image"> <img src={IMAGE}alt="Texto alt"/> </div> 


       <div className="Autor-autor-quadro"> 

       <h1 className="Autor-autor-quadro-h1">Machado de Assis</h1> 
       <h1 className="Autor-autor-quadro-h12"> Principais obras:</h1> 


             <motion.div ref={carossel} className ="carossel-pagina-autor" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner-pagina-autor"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>


<Link to="/MachadodeAssis" className ="img-div-slider13-pagina-autor">
<img src={imagebooks3}alt="Texto alt" />
<h3 className="div-texto-h3-slider1-pagina-autor">Dom Casmurro</h3>
<h4 className="div-texto-h4-slider2-pagina-autor">Machado De Assis</h4>
</Link>


<Link to="/MachadodeAssis" className ="img-div-slider13-pagina-autor">
<img src={imagebooks3}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1-pagina-autor">O Lienista</h3>
<h4 className="div-texto-h4-slider2-pagina-autor">Machado De Assis</h4>
</Link>


<Link to="/MemoriasPostumas/ler" className ="img-div-slider13-pagina-autor">
<img src={imagebooks3}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1-pagina-autor">Memórias Póstumas De Brás Cubas</h3>
<h4 className="div-texto-h4-slider2-pagina-autor">Machado De Assis</h4>
</Link>





</motion.div>


</motion.div>

           
          <Footer/>     
         
          </div>
          </div>
       
    </div>



  );
}






export default Autor1;
