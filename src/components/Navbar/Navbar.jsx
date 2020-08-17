import React, {useContext} from 'react'
import './Navbar.scss'
import {ProductContext} from '../../Global/ProductContext'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const {cart} = useContext(ProductContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark shadow  fixed-top">
                <div className="container">
                    <NavLink to='/products' className="navbar-brand">
                        <span></span>
                        shala
                    </NavLink>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-decoration-none text-white" to="/cart">
                                <i className="fa fa-shopping-cart icon"></i>
                                <span className="badge bg-white">{cart.length}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
