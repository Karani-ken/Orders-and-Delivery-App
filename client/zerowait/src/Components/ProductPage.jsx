import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Products from '../Assets/products.json'
import ArrowIcon from '../Assets/Images/arrow.png'
function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const productId = parseInt(id, 10);
    const allProducts = Products.products.flatMap(category => category.products);
    const product = allProducts.find(product => product.id === productId)

    if (!product) {
        return <div><p>Product not found!!!</p></div>
    }
    return (
        <div className="p-2" style={{height:'100vh'}}>
            <img src={ArrowIcon} alt="" style={{ height: '20px' }} onClick={() => navigate('/')} />
            <img src={product.image} alt="" style={{ width: '100%', height: "200px", borderRadius: '10px' }} className="mb-4" />
            <div>
                <h4>{product.name}</h4>
                <p>Vendor: {product.producer}</p>
                <div>
                    <p className="fw-sm">rating: {product.rating}</p>
                    <p className="fw-sm">estimated delivery: 26 mins</p>
                </div>
            </div>
            <p>{product.description}</p>
            <div className="d-flex justify-content-around align-items-center p-3">
                <h3 className="fw-bolder">Quantity</h3>
                <div className="d-flex align-items-center justify-content-around">
                    <button className="btn-2 p-2 w-50">-</button>
                        <h1>0</h1>
                    <button className="btn-2 p-2 w-50">+</button>
                </div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
                <h4 className="btn-2 text-center px-5 ">{product.price}/=</h4>
                <button className="btn-2" style={{background:'rgba(0,0,0,0.65)'}}
                onClick={()=> navigate('/checkout-page')}>Order now</button>
            </div>
        </div>
    )
}

export default ProductPage