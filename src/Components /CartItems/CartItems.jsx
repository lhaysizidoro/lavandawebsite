import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'
import all_product from "../Assets/all_product";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className="cartitems">

            <div className="cartitems-format-main">
                <p>Produtos</p>
                <p> </p>
                <p>Preco</p>
                <p>Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id]) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="cartitems-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>{e.price * cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Frete</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Confirmar</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Se voce tiver um cupom de desconto use aqui</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="cupom" />
                        <button>Confirmar</button>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default CartItems