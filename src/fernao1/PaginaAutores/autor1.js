import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import IMAGE from '../PaginaAutores/imgAutores/httpswww.canva.com.gif';

import imagebooks1 from '../home/img/1.png';
import imagebooks2 from '../home/img/2.png';
import imagebooks3 from '../home/img/3.png';
import imagebooks5 from '../home/img/5.png';
import imagebooks6 from '../home/img/6.png';
import imagebooks11 from '../home/img/11.png';
import imagebooks12 from '../home/img/12.png';
import imagebooks13 from '../home/img/13.png';
import imagebooks14 from '../home/img/14.png';
import imagebooks15 from '../home/img/15.png';
import imagebooks43 from '../home/img/43.png';

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


<Link to="/Livro10" className ="img-div-slider13">
<img src={imagebooks15}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">A Mão e Luva</h3>
<h4 className="div-texto-h4-slider2">Machado De Assis</h4> 
</Link>


<Link to="/Livro7" className ="img-div-slider13">
<img src={imagebooks12}alt="Texto alt" />
<h3 className="div-texto-h3-slider1">Helena</h3>
<h4 className="div-texto-h4-slider2">Machado De Assis</h4>
</Link>


<Link to="/Livro8" className ="img-div-slider13">
<img src={imagebooks13}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1">Dom Casmurro</h3>
<h4 className="div-texto-h4-slider2">Machado De Assis</h4>
</Link>

<Link to="/Livro1" className ="img-div-slider13">
<img src={imagebooks1}alt="Texto alt" />
<h3 className="div-texto-h3-slider1">Memórias Postumas de Brás Cubas</h3>
<h4 className="div-texto-h4-slider2">Machado de Assis</h4>
</Link>





</motion.div>


</motion.div>


         
          </div>
          </div>
       
    </div>



  );
}






export default Autor1;
