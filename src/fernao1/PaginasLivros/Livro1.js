import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../PaginaAutores/imgAutores/memórias póstumas de brás cubas.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="oi"
var ResumoDaObra ="oi"
var Data ="oi"
var NumeroDePagina ="190"
var Indicaçao="oi"
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

     
       <div className="div-buttom">  <Link to="/" > <button className="Autor-div-imagem-buttom">ler</button>
       </Link> </div>

       <h1 className="Autor-autor-quadro-h010">{NomeDoLivro}</h1> 
       <h3 className="Autor-autor-quadro-h0120"> {ResumoDaObra}</h3> 
       <h5 className="Autor-autor-quadro-h0120"> {Data}</h5> 

       <div className="Autor-autor-quadro-de-informaçoes"> 
       
<p className="texto-quadro-de-informaçoes">NumeroDePagina: {NumeroDePagina} </p>
<p className="texto-quadro-de-informaçoes">Indicação: {Indicaçao}</p> 
<p className="texto-quadro-de-informaçoes">Categorias: {Categoria}</p> 
<p className="texto-quadro-de-informaçoes">Disponibilizado por: {DisponibilizadoPor}</p> 
      
   </div>

       
          </div>
        
          </div>
      

    </div>



  );
}






export default Livro1;
