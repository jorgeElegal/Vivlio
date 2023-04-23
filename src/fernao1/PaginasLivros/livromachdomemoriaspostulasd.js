import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/1.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="Memórias Postumas de Brás Cubas"
var ResumoDaObra ="Memórias Póstumas de Brás Cubas é um romance do escritor brasileiro Machado de Assis, publicado em 1881. A obra é narrada por Brás Cubas, um defunto-autor que conta suas memórias a partir de sua morte. Com um tom irônico e satírico, Brás Cubas narra sua vida, descrevendo suas ambições, conquistas, falhas e relacionamentos amorosos. O livro é uma sátira da sociedade brasileira da época e aborda temas como a corrupção, a hipocrisia e a vaidade humana. Com uma estrutura narrativa inovadora para a época, a obra é considerada uma das principais do Realismo brasileiro."
var Repertorio ="a falta de mobilidade social e as relações de poder na sociedade do seculo XIX; Reflexão sobre a vida e a morte, com ironia e o humor ácido; Caracterização dos personagens de forma irônica e satírica; Abordagem de temas como a hipocrisia, a corrupção e a desigualdade social."
var AutorD="Machado de Assis"
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
       <div className="div-buttom">  <Link to="/L0" > <button className="Autor-div-imagem-buttom">ler</button>
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

