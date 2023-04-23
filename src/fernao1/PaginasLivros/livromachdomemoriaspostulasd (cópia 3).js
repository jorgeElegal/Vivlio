import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/5.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="Poema Irônicos Venenosos e Sarcásticos"
var ResumoDaObra ="Poemas Irônicos Venenosos e Sarcásticos é uma coleção póstuma de poemas de Álvares de Azevedo, um importante autor do romantismo brasileiro. Os poemas desta coleção expressam o humor mordaz e o senso de ironia do autor, muitas vezes retratando a sociedade brasileira do século XIX de forma crítica e satírica. Através de sua poesia, Azevedo questiona a moralidade e as convenções sociais da época, ao mesmo tempo em que celebra a liberdade individual e a paixão. A obra é uma importante contribuição para a poesia brasileira e uma reflexão sobre a natureza humana e a condição social."
var Repertorio ="Crítica social e política, utilizando recursos literários como a ironia, o sarcasmo e o humor negro; Reflexão sobre a condição humana, a hipocrisia e a moralidade; Abordagem de temas como a corrupção, a injustiça social e a luta de classes; Uso de figuras de linguagem, como metáforas e antíteses, para enfatizar a crítica e a sátira presente nos poemas."
var AutorD="Álvares de Azevedo"
var Categoria ="Romantismo."
var DisponibilizadoPor ="[ua] Universidde da Amazonia"

function Livro1() {

 






  return (

    

  
    <div className="Autor1">

    


     <LogoeFooter/>





     <div className="Autor-div-all">


        <div className="Autor-div-imagem"> <img src={imagebooks3}alt="Texto alt"/> 
        
     
        </div> 


       <div className="Autor-autor-quadro1"> 

       <div className="Autor-autor-quadro1-divDoH1"><h1 className="Autor-autor-quadro-h010">{NomeDoLivro}</h1> </div>
       <div className="div-buttom">  <Link to="/L8" > <button className="Autor-div-imagem-buttom">ler</button>
       </Link> </div>

     
       <div className="Autor-autor-quadro1-divDoH1">   <h3 className="Autor-autor-quadro-h0120"> {ResumoDaObra}</h3> </div>
       <div className="Autor-autor-quadro1-Divisoria"></div>

       <div className="Autor-autor-quadro-de-informaçoes"> 


<p className="texto-quadro-de-informaçoes"><h1 className="texto-quadro-de-informaçoesh111">Autor: </h1> {AutorD}</p>     
<p className="texto-quadro-de-informaçoes"><h1 className="texto-quadro-de-informaçoesh111">Categoria: </h1> {Categoria}</p> 
<p className="texto-quadro-de-informaçoes"><h1 className="texto-quadro-de-informaçoesh111">Disponibilizado por: </h1> {DisponibilizadoPor}</p> 
<p className="texto-quadro-de-informaçoes"><h1 className="texto-quadro-de-informaçoesh111">Repertório sociocultural: </h1> {Repertorio}</p>   
   </div>
   <div className="Autor-autor-quadro1-Divisoria"></div>
   <div className="div-buttom">  <Link to="/" > <button className="Autor-div-imagem-buttom">Comprar</button>
       </Link> </div>
          </div>
      
          </div>
      

    </div>



  );
}






export default Livro1;

