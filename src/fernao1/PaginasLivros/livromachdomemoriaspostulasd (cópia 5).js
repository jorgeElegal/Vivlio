import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/11.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="Os Sertões"
var ResumoDaObra ="Os Sertões é uma obra do escritor brasileiro Euclides da Cunha, publicada em 1902. Trata-se de uma narrativa histórica, sociológica e filosófica sobre a Guerra de Canudos, conflito ocorrido no interior da Bahia entre 1896 e 1897, que culminou na destruição do arraial de Canudos e na morte de milhares de pessoas. A obra é dividida em três partes: A Terra, que apresenta uma descrição geográfica e histórica do sertão baiano; O Homem, que aborda a formação da cultura sertaneja e os motivos que levaram à formação do arraial de Canudos; e A Luta, que descreve os acontecimentos da guerra em si. A obra é considerada uma das mais importantes da literatura brasileira e influenciou diversos escritores, artistas e pensadores."
var Repertorio ="A Guerra de Canudos; A questão da identidade nacional; A descrição do sertão brasileiro; O estilo literário de Euclides da Cunha."
var AutorD="Euclides Da Cunha"
var Categoria ="Naturalismo; Modernismo."
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
       <div className="div-buttom">  <Link to="/L7" > <button className="Autor-div-imagem-buttom">ler</button>
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

