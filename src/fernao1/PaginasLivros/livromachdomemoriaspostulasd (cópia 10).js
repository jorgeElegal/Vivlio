import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/43.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="Noite na Taverna"
var ResumoDaObra ="Noite na Taverna é uma coletânea de contos do escritor brasileiro Álvares de Azevedo, publicada em 1855. Os contos são narrados por um grupo de amigos que se reúne em uma taverna para contar histórias de amor, morte, loucura e sobrenatural. A obra é marcada por um tom melancólico e uma estética gótica e romântica, influenciada pela literatura europeia da época. Os contos retratam personagens que vivem à margem da sociedade e que se entregam a paixões intensas e autodestrutivas. Com uma linguagem poética e uma atmosfera sombria, Noite na Taverna é considerada uma das obras mais importantes da literatura brasileira do século XIX."
var Repertorio ="O movimento Romântico; A morte e a finitude; A condição feminina; A religiosidade e a superstição."

var AutorD="Álvares de Azevedo"
var Categoria ="Romantismo"
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
       <div className="div-buttom">  <Link to="/L11" > <button className="Autor-div-imagem-buttom">ler</button>
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

