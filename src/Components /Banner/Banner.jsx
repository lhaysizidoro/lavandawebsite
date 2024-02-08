import React from "react";
import './Banner.css'
import bannerp from '../Assets/bannerp.png'

const Banner = () => {
    return(
        <div className="banner">
            <img src={bannerp} alt="" />
            <label id="texto">
            
            <button>Eu quero!</button>
            </label>
            
        </div>
    )
}

export default Banner