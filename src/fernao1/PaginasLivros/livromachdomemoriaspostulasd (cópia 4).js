import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/6.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="A Divina Comédia"
var ResumoDaObra ="A Divina Comédia é uma obra épica do escritor italiano Dante Alighieri, escrita no início do século XIV. A obra é dividida em três partes: Inferno, Purgatório e Paraíso, e narra a jornada de Dante através dos nove círculos do Inferno, os sete degraus do Purgatório e as esferas do Paraíso, guiado pelo poeta romano Virgílio e pela amada Beatriz. Durante a jornada, Dante encontra diversas figuras históricas e mitológicas, que são punidas ou recompensadas de acordo com suas ações em vida, e reflete sobre temas como pecado, redenção, amor e a natureza divina. Com uma linguagem poética e simbólica, A Divina Comédia é considerada uma das obras mais importantes da literatura mundial e um dos maiores tesouros da cultura italiana."

var Repertorio =" A cultura medieval; A representação do inferno, purgatório e paraíso; A influência da obra na cultura ocidental; O estilo literário de Dante Alighieri. "

var AutorD="Dante Alighieri"
var Categoria ="Renascimento italiano; Classicismo."
var DisponibilizadoPor ="[eb] EbooksBrasil"

function Livro1() {

 






  return (

    

  
    <div className="Autor1">

    


     <LogoeFooter/>





     <div className="Autor-div-all">


        <div className="Autor-div-imagem"> <img src={imagebooks3}alt="Texto alt"/> 
        
     
        </div> 


       <div className="Autor-autor-quadro1"> 

       <div className="Autor-autor-quadro1-divDoH1"><h1 className="Autor-autor-quadro-h010">{NomeDoLivro}</h1> </div>
       <div className="div-buttom">  <Link to="/L1" > <button className="Autor-div-imagem-buttom">ler</button>
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

