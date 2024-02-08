import React from "react";
import './Offers.css'
import offer from '../Assets/offer.png'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <img src={offer}></img>
                <label id="offer">
                    <button>Ver mais</button>
                </label>
            </div>
        </div>
    )
}

export default Offers