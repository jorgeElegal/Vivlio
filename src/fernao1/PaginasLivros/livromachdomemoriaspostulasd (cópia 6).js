import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../PaginaAutores/imgAutores/memórias póstumas de brás cubas.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="Exemplo de nome de livro"
var ResumoDaObra ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var Repertorio ="oi"
var NumeroDePagina ="190"
var AutorD="oi"
var Categoria ="oi"
var DisponibilizadoPor ="oi"

function Livro1() {

 






  return (

    

  
    <div className="Autor1">

    


     <LogoeFooter/>





     <div className="Autor-div-all">


        <div className="Autor-div-imagem"> <img src={imagebooks3}alt="Texto alt"/> 
        
     
        </div> 


       <div className="Autor-autor-quadro1"> 

       <div className="Autor-autor-quadro1-divDoH1"><h1 className="Autor-autor-quadro-h010">{NomeDoLivro}</h1> </div>
       <div className="div-buttom">  <Link to="/" > <button className="Autor-div-imagem-buttom">ler</button>
       </Link> </div>

     
       <div className="Autor-autor-quadro1-divDoH1">   <h3 className="Autor-autor-quadro-h0120"> {ResumoDaObra}</h3> </div>
       <div className="Autor-autor-quadro1-Divisoria"></div>

       <div className="Autor-autor-quadro-de-informaçoes"> 


<p className="texto-quadro-de-informaçoes"><h1 className="texto-quadro-de-informaçoesh111">Autor: </h1> {AutorD}</p>     
<p className="texto-quadro-de-informaçoes"><h1 className="texto-quadro-de-informaçoesh111">Gênero: </h1> {Categoria}</p> 
<p className="texto-quadro-de-informaçoes"><h1 className="texto-quadro-de-informaçoesh111">N° de páginas: </h1> {NumeroDePagina} </p>
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

