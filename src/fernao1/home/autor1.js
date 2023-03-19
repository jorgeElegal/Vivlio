import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

import IMAGE from '../home/img/httpswww.canva.com.gif';
import imagebooks1 from '../home/img/71ynUi8oFVL.jpg';
import imagebooks2 from '../home/img/71BGWapQw8L.jpg';
import imagebooks3 from '../home/img/memórias póstumas de brás cubas.png';
import Logo from "../home/img/cjm__3_-removebg-preview.png";
import './autor1.css';

const allbooks =[imagebooks1, imagebooks2, imagebooks3, ];


function Autor1() {

    const carossel= useRef();
    const [width, setWidth] = useState(0) 
    
    useEffect(() => {
    console.log(carossel.current?.scrollWidth, carossel.current?.offsetWidth)
    setWidth(carossel.current?.scrollWidth - carossel.current?.offsetWidth)
    
    
    }, [])






  return (

    

  
    <div className="Autor1">

     <div className="aba-cima">


<div className="aba-cima-icon-docboks">

<img src={Logo} alt="1" className='logo'/>
</div>

<div className="aba-cima-icon-user">

</div>

</div>

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
<h3 className="div-texto-h3-slider1-pagina-autor">O lienista</h3>
<h4 className="div-texto-h4-slider2-pagina-autor">Machado De Assis</h4>
</Link>


<Link to="/MemoriasPostumas/ler" className ="img-div-slider13-pagina-autor">
<img src={imagebooks3}alt="Texto alt"/>
<h3 className="div-texto-h3-slider1-pagina-autor">Memórias Póstumas De Brás Cubas</h3>
<h4 className="div-texto-h4-slider2-pagina-autor">Machado De Assis</h4>
</Link>





</motion.div>


</motion.div>

<div className="footer">
          <h3 className="div-texto-h3-2">@2023 CJMstartup. Todos os direitos reservados a CJMstartup.</h3>
           </div>
                
          </div>
          </div>
       

    </div>



  );
}






export default Autor1;
