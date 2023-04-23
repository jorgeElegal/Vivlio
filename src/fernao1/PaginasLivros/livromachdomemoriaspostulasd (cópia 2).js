import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/3.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="O Alienista"
var ResumoDaObra ="O Alienista é uma novela escrita por Machado de Assis, publicada originalmente em 1882. A história se passa na cidade fictícia de Itaguaí, onde o médico Simão Bacamarte decide construir um hospício para tratar os loucos da região. Porém, sua busca por um método científico de diagnóstico e cura acaba levando-o a internar não só os doentes mentais, mas também pessoas sãs que não se encaixam nas normas sociais. Com uma linguagem irônica e satírica, a obra discute a questão da sanidade mental e das verdades absolutas, criticando a sociedade brasileira da época."
var Repertorio ="A sociedade brasileira do século XIX; A representação da mulher na literatura; A questão da paternidade; O estilo literário de Machado de Assis."
var AutorD="Machado de Assis"
var Categoria ="Realismo."
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
       <div className="div-buttom">  <Link to="/L6" > <button className="Autor-div-imagem-buttom">ler</button>
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

