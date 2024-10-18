import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, updateProduct, actions } from '../store';
import { Link } from 'react-router-dom';

const Home = () => {
  // initilizing all variables and reducer functions
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const sort = useSelector((state) => state.sort);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editProductValue, setEditProductValue] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // changes the edit states to show edit inputs
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setEditProductValue(product);
  };

  // dispatches a updtae function to do changes in the database
  const handleUpdateProduct = (id) => {
    //console.log(editProductValue);
    dispatch(updateProduct(id, editProductValue));
    setEditingProduct(null);
    setEditProductValue(null);
  };

  // set the edit state to remove the edit fields
  const handleCancleProduct = (product) => {
    setEditingProduct(null);
    setEditProductValue(null)
  };

  // dispatche tha ction to delte product from db
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  // sorts the products by price
  const handleSortButton = () => {
    dispatch(actions.sortProducts('price'));
  }

  // removes the sort by price
  const handleRemoveSort = () => {
    dispatch(actions.removeSort('price'));
  }

  // add the product to the cart
  const handleAddToCart = (product) => {
    // handle adding to cart logic
    dispatch(actions.addToCart(product));
  };

  return (

    <section className='container mt-5'>


      <div className="hero container ">
        <div className="row d-flex align-items-center mt-5 pt-5">
          <div
            className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1"
            data-aos="fade-right"
          >
            <h1 className='text-center'>
              <span className="G">G</span><span class="u">u</span><span className="i">i</span><span className="g">g</span><span className="l">l</span><span className="e">e</span>Shop<br />
            </h1>
            <h4 className='text-center'>Welcome to your gaming paradise!</h4>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
          >
            <img src="img/Guy-playing-with-a-gamepad.png" className="img-fluid mb-5" alt="" />
          </div>
        </div>
      </div>



      <div className='product-sort justify-content-center'>
        <button type="button" class="btn btn-secondary btn-lg btn-block m-5" onClick={handleSortButton}>Sort</button>
        {sort.length > 0 && sort.map((i, index) => <span key={index} className='sort-tag'>{i} <span className='sort-tag-cross' onClick={handleRemoveSort}>x</span></span>)}
      </div>

      <ul className='row d-flex align-items-stretch mb-5 '>
        {products.map((product) => (
          <li key={product.id} className="product col-lg-4 box featured p-1">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              {/* title */}
              {editingProduct === product ? (
                <input
                  type="text"
                  className="form-input"
                  value={editProductValue.title}
                  onChange={(e) => {
                    const newProduct = { ...editProductValue };
                    newProduct.title = e.target.value;
                    //handleUpdateProduct(product.id, newProduct);
                    setEditProductValue(newProduct);
                  }}
                />
              ) : (
                <Link to={`/product/${product.id}`}>
                  <h6 className='text-uppercase text-center  p-2'>{product.title}</h6>
                </Link>
              )}

              {/* category */}
              {editingProduct === product ? (
                <input
                  type="text"
                  className="form-input"
                  value={editProductValue.category}
                  onChange={(e) => {
                    const newProduct = { ...editProductValue };
                    newProduct.category = e.target.value;
                    //handleUpdateProduct(product.id, newProduct);
                    setEditProductValue(newProduct);
                  }}
                />
              ) : (
                <p className="price">{product.category}</p>
              )}

              {/* description */}
              {editingProduct === product ? (
                <textarea
                  className="form-input"
                  value={editProductValue.description}
                  onChange={(e) => {
                    const newProduct = { ...editProductValue };
                    newProduct.description = e.target.value;
                    //handleUpdateProduct(product.id, newProduct);
                    setEditProductValue(newProduct);
                  }}
                ></textarea>
              ) : (
                <p>{product.description}</p>
              )}

              {/* price */}
              {editingProduct === product ? (
                <input
                  type="text"
                  value={editProductValue.price}
                  onChange={(e) => {
                    const newProduct = { ...editProductValue };
                    newProduct.price = e.target.value;
                    //handleUpdateProduct(product.id, newProduct);
                    setEditProductValue(newProduct);
                  }}
                />
              ) : (
                <p className="price">${product.price}</p>
              )}

              {/* rating */}
              {editingProduct === product ? (
                <input
                  type="text"
                  value={editProductValue.rating.rate}
                  onChange={(e) => {
                    const newProduct = { ...editProductValue };
                    console.log(newProduct);
                    newProduct.rating = {
                      ...newProduct.rating,
                      rate: e.target.value
                    };
                    setEditProductValue(newProduct);
                    //handleUpdateProduct(product.id, newProduct);
                  }}
                />
              ) : (
                <p className="price">rating: {product.rating.rate}</p>
              )}

              {editingProduct === product ? (<>
                <button onClick={() => handleCancleProduct()}>
                  cancel
                </button>

                <button onClick={(e) => handleUpdateProduct(product.id)}>
                  update
                </button>
              </>
              ) : (
                <>
                  <button type="button" class="btn btn-outline-success" onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                  <button type="button" class="btn btn-outline-success" onClick={() => handleEditProduct(product)}>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>

                  <button type="button" class="btn btn-outline-success" onClick={() => handleDeleteProduct(product.id)}>
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section >

  )
}

export default Home;