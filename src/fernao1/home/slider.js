import React from 'react';
import './slede.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
 import I  from "../home/img/httpswww.canva.com.png";
  import I2  from "../home/img/httpswww.canva.com.gif";
   import I3  from "../home/img/machado_de_assis_1999_1_212331d43a0f1435a9f88adb26bb1782.webp";

const Example = () => {
    const images = [
        "I" ,
        "I2",
        "I3",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div className="each-slide-effectK11">
                <img src={I}alt="Texto alt" className="i"/>
                 
                </div>
            </div>
            <div className="each-slide-effect">
               <img src={I2}alt="Texto alt" className="i"/>
                   
            </div>
           
        </Slide>
    );
};

export default Example;

