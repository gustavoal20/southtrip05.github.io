import React from "react";
import './aventura2.css'
import {  Card } from "react-bootstrap"
import barco from "./Imagenes/barco.jpg"
import { FcFlashOn } from "react-icons/fc";
import fondo2 from './Imagenes/caminata.jpg'
import chata from './Imagenes/chata2.jpg'
import ski from './Imagenes/ski.jpg'
//import turismo from './Imagenes/turismo.png'

const Excursion2 = () => {
    return(
        
<div className="laguna2" id='actividades'>
        
                
                <Card className="CARDAVEN_MINI">
                    <Card.Img className="imgaven" variant="top" src={ski}/>
                    <Card.Body className="body">
                    <div className="titulomini">
                    <a href="/MiniSki"><p>MINI SKI WEEK</p></a>
                    </div>    
                    <div className="fromaven">
                    <p> <FcFlashOn/>from  ARS$ consultanos</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card> 

            <div className="chatas" >
                <Card className="CARDAVEN_LAGOS">
                    <Card.Img className="imgalagos" variant="top" src={chata}/>
                    <Card.Body className="body">
                    <div className="titulolagos">
                        <a href="/Lagos4x4"><p>LAGOS 4x4</p></a>
                    </div>    
                    <div className="fromaven">
                        <p> <FcFlashOn/>from  USD$114</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card>  
            </div>


          
                <Card className="CARDAVEN_NAVE">
                    <Card.Img className="imgaven" variant="top" src={barco}/>
                    <Card.Body className="body">
                    <div className="titulonave">
                        <a href="/CanalBeagle"><p>NAVEGACION CANAL DE BEAGLE</p></a>
                    </div>    
                    <div className="fromaven">
                        <p> <FcFlashOn/>from  USD$60</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card>  
           

       <div className="imagenfondo2"  style={{backgroundImage: `url(${fondo2})` }}> </div>

       </div>
             

    
    )
};

export default Excursion2;