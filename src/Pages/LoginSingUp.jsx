import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Cadastrar</h1>

                <div className="loginsignup-fields">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                </div>
                <button>Continuar</button>
                <p className="loginsignup-login"> Já possui uma conta? <span> Entrar</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Eu concordo com os termos de uso e politicas de privacidade.</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup