import React from "react";
import './Footer.css'
import logo from '../../logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-links">
                <li>Sobre nós</li>
                <li>Dúvidas Frequentes</li>
                <img src={logo} alt="" />
                <span>Lavanda Cosméticos</span>
                <li>Ajuda</li>
                <li>Fale Conosco</li>
            </ul>

            {/*<div className="footer-social-icon">
            <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt=""/>
                </div>
            </div>*/}
            <div className="footer-copyright">
                <hr />
                <p>Copyright 2023 - All rights  reserved</p>
            </div>
            <div className="newsletter">

                <h1>Receba novidades e promoções. <br /> Inscreva-se na newsletter </h1>

                <div>

                    <input type="email" placeholder="Email" />
                    <button> Enviar</button>


                </div>

            </div>
        </div>
    )
}

export default Footer