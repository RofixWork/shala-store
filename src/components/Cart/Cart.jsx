import React, {useContext, useEffect} from 'react'
import {ProductContext} from '../../Global/ProductContext'
import './Cart.scss'
const Cart = () =>  {
    const {cart, increment, decrement, Delete, total} = useContext(ProductContext)
    const data = useContext(ProductContext)
    useEffect(() => {
        data.getTotal()
    }, [])
    if(cart.length > 0) {
        return (
            <div className='cart'>
                <div className="container">                 
                            {cart.map(product => {
                               return <div key={product._id}  className="card shadow p-3 mb-1">
                                    <div>
                                        <i onClick={() => Delete(product._id)} className="fa fa-times"></i>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="det-img text-center">
                                                <img src={require(`../../img/${product.src}.jpg`)} width={"320px"} className='img-fluid' alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3 mt-lg-0 px-5 px-lg-0">
                                            <div className="det-content py-0 py-lg-3">
                                                <h2>{product.title}</h2>
                                                <ul className='d-flex list-unstyled mt-2'>
                                                    {product.star.map((s, index) => {
                                                        return(
    
                                                            <li key={index}> <i className={s} aria-hidden="true"></i> </li>
                                                        )
                                                    })}
                                                    <span>({product.review} Reviews)</span>
                                                </ul>
    
                                                <div className="det-desc mt-0 mb-0 mb-lg-4 mt-lg-3">
                                                    <h6 className='text-uppercase font-weight-bold text-muted'>Product Details</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aliquid laborum nisi non pariatur praesentium cum, minima incidunt corrupti. Accusamus, corporis? Saepe aliquam corrupti autem eaque non ducimus, ipsum voluptatum?</p>
                                                </div>
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item"><button type='button' className="page-link" onClick={() => increment(product._id)}> <i className="fa fa-minus text-dark"></i> </button></li>
                                                        <li className="page-item"><span className="page-link text-dark">{product.count}</span></li>
                                                        <li className="page-item"><button type='button' className="page-link" onClick={() => decrement(product._id)}> <i className="fa fa-plus text-dark"></i> </button></li>
                                                    </ul>
                                                </nav>
                                                <div className="det-price">
                                                    <span className="new-price">${product.newprice * product.count}.00</span>
                                                    <span className='mx-2 sep'>-</span>
                                                    <span className="old-price text-decoration-line-through font-italic"> ${product.oldprice * product.count}.00</span>
                                                </div>
                                                
    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <h2 className='float-right'>Total : ${total}.00</h2>
                                 
                        
                        
                </div>
            </div>
        )

    } else {
        return(
            <div className='mt-5 py-4 container'>
                <h2 className='font-weight-bold mt-3' style={{color:'#14213d'}}>Cart Empty (No Prouducts)</h2>

            </div>
        )
    }
}

export default Cart
