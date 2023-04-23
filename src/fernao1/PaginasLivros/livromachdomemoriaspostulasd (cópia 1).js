import {useState, useEffect, useRef} from 'react'

import LogoeFooter from '../home/Logo e Footer.js';
import Footer from '../home/Footer.js';
import { Link } from 'react-router-dom';
import imagebooks3 from '../home/img/2.png';

import './Livro1.css';

const allbooks =[imagebooks3, ];
var NomeDoLivro ="A volta ao mundo em 80 dias"
var ResumoDaObra ="Volta ao Mundo em 80 Dias é um romance de aventura do escritor francês Júlio Verne, publicado em 1873. A história acompanha o excêntrico e rico inglês Phileas Fogg, que faz uma aposta de que é possível dar a volta ao mundo em 80 dias e embarca em uma viagem emocionante pelo globo terrestre, acompanhado por seu fiel empregado francês, Passepartout. Durante a jornada, eles enfrentam diversos obstáculos e aventuras, incluindo perseguições, naufrágios e levantes políticos, enquanto tentam cumprir o desafio a tempo. Com uma narrativa cheia de suspense e detalhes sobre os lugares visitados, Volta ao Mundo em 80 Dias é um clássico da literatura de aventura e uma das obras mais famosas de Júlio Verne."
var Repertorio ="A influência da Revolução Industrial na sociedade britânica; Representação do Oriente na literatura ocidental; A tensão entre tradição e modernidade; A questão da identidade nacional"
var AutorD="Júlio Verne"
var Categoria ="Romantismo."
var DisponibilizadoPor ="[ph] Phoenix-Library"

function Livro1() {

 






  return (

    

  
    <div className="Autor1">

    


     <LogoeFooter/>





     <div className="Autor-div-all">


        <div className="Autor-div-imagem"> <img src={imagebooks3}alt="Texto alt"/> 
        
     
        </div> 


       <div className="Autor-autor-quadro1"> 

       <div className="Autor-autor-quadro1-divDoH1"><h1 className="Autor-autor-quadro-h010">{NomeDoLivro}</h1> </div>
       <div className="div-buttom">  <Link to="/L9" > <button className="Autor-div-imagem-buttom">ler</button>
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

