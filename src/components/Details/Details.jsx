import React, {useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import {ProductContext} from '../../Global/ProductContext';
import './Details.scss'
const Details = () => {
    const {id} = useParams()
    const {products, addToCart} = useContext(ProductContext)

    const data = products.filter(pr => pr._id === parseInt(id));

    console.log(data);

    const history = useHistory();
    console.log(history);
    const goBackHandler = () => history.goBack();
    return (
        <div className='details d-flex  justify-content-center align-items-center'>
            <div className="container">
                {data.map(product => {
                    return (

                        <div key={product._id} className="card shadow p-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="det-img text-center">
                                        <img src={require(`../../img/${product.src}.jpg`)} width={"400px"} className='img-fluid' alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3 mt-lg-0">
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
                                        <div className="det-price">
                                            <span className="new-price">${product.newprice}.00</span>
                                            <span className='mx-2 sep'>-</span>
                                            <span className="old-price text-decoration-line-through font-italic"> ${product.oldprice}.00</span>
                                        </div>
                                        <div className="det-btn mt-3 mt-lg-5">
                                            <button className="btn btn-outline-dark rounded-0 mr-3 px-3" onClick={goBackHandler}> <i className="fa fa-long-arrow-left mr-2"></i>Go To Back</button>
                                            <button className="btn btn-cart rounded-0 px-4" onClick={() => addToCart(product._id)}><i className="fa fa-shopping-bag mr-1" ></i> Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Details
