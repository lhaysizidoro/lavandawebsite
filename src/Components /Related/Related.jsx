import React from "react";
import './Related.css'
import data_product from "../Assets/data_product";
import Item from "../Item/Item";

const RelatedProducts = () => {
    return (
        <div className="relatedproducts">
            <h1> Produtos Relacionados</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />

                })}
            </div>
        </div>
    )
}

export default RelatedProducts