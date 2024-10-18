import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(actions.getCartProducts());
  }, []);

  const handleDeleteCartProduct = (id) => {
    dispatch(actions.deleteProductFromCart(id));
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center m-5"><span class="G">G</span><span class="u">u</span><span class="i">i</span><span class="g">g</span><span class="l">l</span><span class="e">e</span>Cart</h1>
        <div className="product-list container">

          <ul>
            {cartProducts && cartProducts.map((product) => (
              <li key={product.id} className="product">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  {/* title */}
                  <Link to={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                  </Link>

                  {/* category */}
                  <p className="price">{product.category}</p>

                  {/* description */}
                  <p>{product.description}</p>

                  {/* price */}
                  <p className="price">Rs{product.price}</p>

                  {/* rating */}
                  <p className="price">rating: {product.rating.rate}</p>

                  {/* <div style={{display: "flex"}}>
                <button onClick={() => handleIncreaseQuantity(product)} style={{border: "none"}}>
                    <i class="fa-regular fa-square-plus"></i>
                </button>
                <p>{product.quantity}</p>
                <button onClick={() => handleDescreaseQuantity(product)} style={{border: "none"}}>
                    <i class="fa-regular fa-square-minus"></i>
                </button>
            </div> */}

                  <button onClick={() => handleDeleteCartProduct(product.id)}>
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Cart;