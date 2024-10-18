import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store';


const Navbar = () => {
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCartValue());
  })

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container space-between px-4 px-lg-5">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <div className="navbar-left">
            <Link to="/"><span class="G">G</span><span class="u">u</span><span class="i">i</span><span class="g">g</span><span class="l">l</span><span class="e">e</span></Link>
            <Link to="/Add-product">Add Article</Link>
          </div>

          <form className="d-flex">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <span className="cart-value">{`(${cart})`}</span>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
