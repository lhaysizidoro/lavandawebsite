import './Navbar.css'
import logo from '../../logo.png'
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import cart_icon from "../Assets/cart_icon.png";
import login from "../Assets/login.png";


const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-top">
                <span>Frete Grátis em compras acima de R$99,00! </span>
            </div>
            <div className="nav-logo-cart">
                <div className="nav-logo">
                    <p> Lavanda</p>
                    <img src={logo} alt="" />
                    <p>Cosméticos</p>
                </div>

                <input type='text' placeholder='Pesquise'></input>

                <div className="nav-login-cart">
                    <Link to='/login'><img src={login} alt="" /></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>

            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link to='/'>Home  </Link>{menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("faciais") }}><Link to='/faciais'>Cuidados Faciais</Link>
                    {menu === "faciais" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("corporais") }}><Link to='/corporais'>Cuidados Corporais</Link> {menu === "corporais" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("sabonetes") }}><Link to='/sabonetes'>Sabonetes</Link> {menu === "sabonetes" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("kits") }}><Link to='kits'>Kits</Link>
                    {menu === "kits" ? <hr /> : <></>} </li>
            </ul>
        </div>
    )
}

export default Navbar