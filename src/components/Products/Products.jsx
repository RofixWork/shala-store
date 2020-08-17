import React, {useContext} from 'react'
import {ProductContext} from '../../Global/ProductContext'
import {Link} from 'react-router-dom'
import './Products.scss'
const Products = () => {
    const {products, addToCart} = useContext(ProductContext)
    const data = useContext(ProductContext)
    console.log(data);
    return (
        <div className='products mt-4'>
            <div className="container ">
                <div className="row gy-3">
                    {products.map(product => {
                        return (
                            <div key={product._id} className="col-md-3 col-12 mx-auto bg-white py-2">
                                <Link to={`/products/${product._id}`} className='text-decoration-none'>
                                    <div className='pr-img'>
                                        <img src={require(`../../img/${product.src}.jpg`)}  alt="" className='img-fluid'/>
                                        <span className={product.state ? 'state bg-danger' : 'state bg-darkblue'}>{product.state ? 'Hot' : 'New'}</span>
                                    </div>
                                    <div className="pr-content text-center">
                                        <h3 className=' my-2'>{product.title}</h3>
                                        
                                        <div className="pr-price">
                                            <span className='new-price mr-2'>${product.newprice}.00</span>
                                            <span className='old-price'>${product.oldprice}.00</span>
                                        </div>
                                        <ul className='list-unstyled d-flex justify-content-center mb-0 my-2'>
                                            {product.star.map((s, index) => {
                                               return <li key={index}><i className={`${s}`}></i></li>
                                            })}
                                        </ul>
                                        
                                        
                                    </div>
                                </Link>
                                <div>
                                    <button className='btn text-white text-capitalize rounded-0 mt-2' onClick={() => addToCart(product._id) }>add to cart</button>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Products
