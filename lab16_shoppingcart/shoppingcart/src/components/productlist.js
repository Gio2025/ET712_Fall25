import React from "react";
import '../App.css';
import apple from '../images/apple.png';
import grapes from '../images/grapes.png';
import orange from '../images/orange.png';

const products = [
    {id: 1, name: "Apple", price: 1.00, was: 2.50, image: apple},
    {id: 2, name: "Grapes", price: 1.50, was: 2.80, image: grapes},
    {id: 3, name: "Orange", price: 3.00, was: 5.00, image: orange}
]

const ProductList  = ({addToCart})=>{
    return(
        <>
            <h2 className="producttitle">Products</h2>
            <section className="cardcontainer">
                {
                    products.map(
                        (product)=>(
                            <div key={product.id} className="card">
                                <img src={product.image}/>
                                <p className="productname">
                                    {product.name}
                                    <s>{product.was}/lb</s>
                                    <span>${product.price}</span>/lb
                                </p>

                                <button className="btn_addcart" onClick={()=> addToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        )
                    )
                }
            </section>
        </>
    )
}

export default ProductList