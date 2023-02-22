import react from 'react'
import {motion} from 'framer-motion'
import {useState, useEffect, useRef} from 'react'
import './index2.css';
import p1 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-0.png';
import p2 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-1.png';
import p3 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-2.png';
import p4 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-3.png';
import p5 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-4.png';
import p6 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-5.png';
import p7 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-6.png';
import p8 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-7.png';
import p9 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-8.png';
import p10 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-9.png';
import p11 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-10.png';
import p12 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-11.png';
import p13 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-12.png';
import p14 from './Fernão Capelo Gaivota by Richard Bach (pdf.io) (1)/Fernão Capelo Gaivota by Richard Bach-13.png';

const allbooks =[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14 ];


function App2() {
const carossel= useRef();
const [width, setWidth] = useState(0) 

useEffect(() => {
console.log(carossel.current?.scrollWidth, carossel.current?.offsetWidth)
setWidth(carossel.current?.scrollWidth - carossel.current?.offsetWidth)


}, [])

  return (
  
  
    <div className="App-2">
<motion.div ref={carossel} className ="carossel" whileTap={{cursor: "grabbing"}}>

<motion.div className ="inner"
 drag="x"
 dragConstraints ={{ right: 0, left: -width}}>
{allbooks.map(image=>(

<motion.div className='item' key ={image}>
<img src={image} alt="Texto alt"/>
</motion.div>

))
}

</motion.div>


</motion.div>

    </div>
    
    
  );
}

export default App2;
