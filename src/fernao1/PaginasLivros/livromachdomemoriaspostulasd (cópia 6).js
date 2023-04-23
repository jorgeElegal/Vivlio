import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/12.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="Helena"
var ResumoDaObra ="Helena é um romance escrito por Machado de Assis e publicado em 1876. A história gira em torno de uma jovem órfã chamada Helena, que é criada por uma tia rica e distante. Helena cresce isolada e solitária, mas sua vida muda quando conhece Estácio, um jovem estudante que se apaixona por ela. Porém, a relação entre os dois enfrenta diversos obstáculos, incluindo o passado misterioso de Helena e a desaprovação da tia dela em relação ao romance. Com sua prosa elegante e perspicaz, Machado de Assis explora temas como amor, classe social e hipocrisia."
var Repertorio ="A sociedade brasileira do século XIX; O papel da mulher na sociedade patriarcal; A crítica ao positivismo; O estilo literário de Machado de Assis."
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
       <div className="div-buttom">  <Link to="/L4" > <button className="Autor-div-imagem-buttom">ler</button>
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

