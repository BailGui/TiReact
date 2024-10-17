import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store';


const Navbar = () => {
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCartValue());
  }, [])

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">GuiShop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <div className="navbar-left">
            <Link to="/">Candy Shop</Link>
            <Link to="/Add-product">Add Sugar</Link>
          </div>

          <form class="d-flex">

            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <span className="cart-value">{`(${cart})`}</span>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
