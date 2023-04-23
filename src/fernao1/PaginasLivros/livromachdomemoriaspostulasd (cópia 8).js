import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';


import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/14.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="Esaú e Jacó"
var ResumoDaObra ="Essaú e Jacó é um romance do escritor brasileiro Machado de Assis, publicado em 1904. A história se passa no Rio de Janeiro do século XIX e acompanha a trajetória dos gêmeos Pedro e Paulo, filhos de uma família de classe média, desde a infância até a vida adulta. O livro aborda temas como a política, a religião, a família e a sociedade, além de explorar a dualidade dos personagens principais, representando as figuras bíblicas de Esaú e Jacó. O romance é considerado uma das obras-primas de Machado de Assis e da literatura brasileira."
var Repertorio =" A sociedade brasileira do século XIX; A crítica à monarquia brasileira; A questão da identidade nacional; O estilo literário de Machado de Assis."
var AutorD="Machado De Assis"
var Categoria ="Realismo; Naturalismo"
var DisponibilizadoPor ="[bn] Fundação Biblioteca Nacional"

function Livro1() {

 






  return (

    

  
    <div className="Autor1">

    


     <LogoeFooter/>





     <div className="Autor-div-all">


        <div className="Autor-div-imagem"> <img src={imagebooks3}alt="Texto alt"/> 
        
     
        </div> 


       <div className="Autor-autor-quadro1"> 

       <div className="Autor-autor-quadro1-divDoH1"><h1 className="Autor-autor-quadro-h010">{NomeDoLivro}</h1> </div>
       <div className="div-buttom">  <Link to="/L3" > <button className="Autor-div-imagem-buttom">ler</button>
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

