import React from 'react';
import './LogoeFooter.css';
import { Link } from 'react-router-dom';
import Logo from "../PaginaAutores/imgAutores/cjm__3_-removebg-preview.png";

const LogoeFooter = () => {
 

    return ( 
        <div className="LogoeFooter">
        <div className="aba-cima-icon-Vivlio">

        < Link to="/"> <img src={Logo} alt="1" className='logo'/>  </Link>
     </div>


</div>

    );
};

export default LogoeFooter;

