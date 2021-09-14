import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
  const Carrusel = () => (
        <Carousel autoPlay>
          <div  >
            <img src="https://picsum.photos/800/300/?random" alt="1" />
            <p className="legend">WEBS EMPRESARIALES</p>
          </div>
          <div>
            <img src="https://picsum.photos/800/301/?random" alt="1" />
            <p className="legend">WEBS PRESONALES</p>
          </div>
          <div>
            <img src="https://picsum.photos/800/302/?random" alt="1" />
            <h4 className="legend" style={{color:'#28a7b9', marginBottom:'100px', fontSize:'50px'}}>APPS COMPLEJAS</h4>
          </div>
        </Carousel>
);
export default Carrusel;